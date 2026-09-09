"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import LocaleSwitcher from "@/components/i18n/LocaleSwitcher";
import type { Locale } from "@/i18n/config";
import { getPath, isAvailable, type RouteKey } from "@/i18n/routes";
import { cn } from "@/lib/cn";
import enMessages from "../../../messages/en.json";
import deMessages from "../../../messages/de.json";

import {
  CncMachineIcon,
  InjectionMoldingIcon,
  CobotIcon,
  ManipulationIcon,
  MaterialFlowIcon,
  CustomSystemIcon,
  ServiceSupportIcon,
  StandardCellIcon,
} from "@/components/icons/FlexidoProcessIcons";

const navIcons = {
  cnc: CncMachineIcon,
  imm: InjectionMoldingIcon,
  cobot: CobotIcon,
  manipulation: ManipulationIcon,
  materialFlow: MaterialFlowIcon,
  customSystem: CustomSystemIcon,
  service: ServiceSupportIcon,
  standardCell: StandardCellIcon,
} as const;

const dropdownPanelClass =
  "rounded-[var(--radius-structural)] border border-neutral-200 bg-white p-2 shadow-[0_12px_40px_rgba(15,23,42,0.12)]";
const dropdownRowRadiusClass = "rounded-lg";
const dropdownFlyoutPanelClass =
  "rounded-[var(--radius-structural)] border border-neutral-200 bg-white p-2 shadow-[0_12px_34px_rgba(15,23,42,0.12)]";

type NavIconName = keyof typeof navIcons;

type DropdownItem = {
  label: string;
  desc?: string;
  href: string;
  featured?: boolean;
  icon?: NavIconName;
  children?: {
    label: string;
    href: string;
  }[];
};

type HeaderProps = {
  sticky?: boolean;
  /** Defaults to "sl" — every existing `(default)` page renders unchanged. */
  locale?: Locale;
  /** Current page's route key, used only to resolve the language switcher's target. */
  routeKey?: RouteKey;
  parentKey?: RouteKey;
};

type NavSection = "solutions" | "catalog" | "process" | "references" | "company";

const SOLUTION_ROUTE_KEYS: RouteKey[] = [
  "solutions",
  "solutionProductionAutomation",
  "solutionCnc",
  "solutionInjectionMolding",
  "solutionCobots",
  "solutionManipulation",
  "solutionLogistics",
  "solutionCustomSystems",
  "service",
  "servicePricing",
];

const CATALOG_ROUTE_KEYS: RouteKey[] = [
  "standardCells",
  "standardCellsCnc",
  "standardCellsImm",
  "standardCellsFlex2550",
  "standardCellsTmx",
  "standardCellsMiddleware",
];

const REFERENCE_ROUTE_KEYS: RouteKey[] = [
  "references",
  "referenceOvermolding",
  "referenceConveyor",
  "referenceCarton",
];

const COMPANY_ROUTE_KEYS: RouteKey[] = [
  "aboutUs",
  "video",
  "news",
  "newsFakuma2024",
  "newsPolydigit",
  "newsFakuma2023",
  "newsConveyor",
  "newsFlex7Imm",
  "newsOvermolding",
  "newsCarton",
  "newsDigitalTransformation",
  "newsKraussMaffei",
  "newsCelje2019",
  "newsFlex220Pro",
  "newsScanMe",
  "newsAutomatica",
  "careers",
  "fundingProjects",
  "fundingProjectSalesDigitalization",
  "fundingProjectPolyDigit",
  "fundingProjectFlexidoDigital",
  "fundingProjectSmartim",
  "fundingProjectSafeguard",
];

function normalizePath(path: string): string {
  if (!path) return "/";
  const trimmed = path.replace(/\/$/, "");
  return trimmed || "/";
}

function pathMatches(pathname: string, routePath: string): boolean {
  const current = normalizePath(pathname);
  const target = normalizePath(routePath);
  return current === target || current.startsWith(`${target}/`);
}

function routeKeyBelongsToSection(key: RouteKey, section: NavSection): boolean {
  switch (section) {
    case "solutions":
      return SOLUTION_ROUTE_KEYS.includes(key);
    case "catalog":
      return CATALOG_ROUTE_KEYS.includes(key);
    case "process":
      return key === "process";
    case "references":
      return REFERENCE_ROUTE_KEYS.includes(key);
    case "company":
      return COMPANY_ROUTE_KEYS.includes(key);
    default:
      return false;
  }
}

function resolveNavSection(
  pathname: string,
  locale: Locale,
  routeKey?: RouteKey,
  parentKey?: RouteKey,
): NavSection | null {
  const keysToCheck: RouteKey[] = [];
  if (routeKey && routeKey !== "home" && routeKey !== "contact") {
    keysToCheck.push(routeKey);
  }
  if (parentKey) {
    keysToCheck.push(parentKey);
  }

  const sections: NavSection[] = ["solutions", "catalog", "process", "references", "company"];
  for (const section of sections) {
    for (const key of keysToCheck) {
      if (routeKeyBelongsToSection(key, section)) {
        return section;
      }
    }
  }

  for (const section of sections) {
    const sectionKeys: RouteKey[] =
      section === "solutions"
        ? SOLUTION_ROUTE_KEYS
        : section === "catalog"
          ? CATALOG_ROUTE_KEYS
          : section === "process"
            ? ["process"]
            : section === "references"
              ? REFERENCE_ROUTE_KEYS
              : COMPANY_ROUTE_KEYS;

    for (const key of sectionKeys) {
      const routePath = getPath(key, locale);
      if (routePath && pathMatches(pathname, routePath)) {
        return section;
      }
    }
  }

  return null;
}

const navTriggerClass =
  "focus-ring inline-flex h-10 items-center gap-1.5 rounded-full px-1.5 text-[14px] font-normal text-neutral-600 transition hover:text-neutral-950";
const navTriggerActiveClass = "font-semibold text-neutral-950";
const navLinkClass =
  "focus-ring inline-flex h-10 items-center rounded-full px-1.5 text-[14px] font-normal text-neutral-600 transition hover:text-neutral-950";
const navLinkActiveClass = "font-semibold text-neutral-950";
const mobileTopLinkClass =
  "block border-b border-neutral-200 pb-4 text-[19px] font-normal tracking-[-0.03em] text-neutral-950";
const mobileTopLinkActiveClass = "font-semibold";

const solutionsNavMessages = { en: enMessages.solutionsNav, de: deMessages.solutionsNav };
const standardCellsNavMessages = { en: enMessages.standardCellsNav, de: deMessages.standardCellsNav };

const solutionIconByKey: Partial<Record<RouteKey, NavIconName>> = {
  solutionProductionAutomation: "customSystem",
  solutionCnc: "cnc",
  solutionInjectionMolding: "imm",
  solutionCobots: "cobot",
  solutionManipulation: "manipulation",
  solutionLogistics: "materialFlow",
  solutionCustomSystems: "customSystem",
  service: "service",
  servicePricing: "service",
};

/** Desktop Rešitve dropdown — process categories first, then broader entries. */
const SOLUTION_PRIMARY_KEYS: RouteKey[] = [
  "solutionCnc",
  "solutionInjectionMolding",
  "solutionCobots",
  "solutionManipulation",
  "solutionLogistics",
  "solutionProductionAutomation",
  "solutionCustomSystems",
];

const SOLUTION_SUPPORT_KEYS: RouteKey[] = ["service", "servicePricing"];

const SOLUTION_PRIMARY_ICON_KEYS = new Set<RouteKey>([
  "solutionCnc",
  "solutionInjectionMolding",
  "solutionCobots",
  "solutionManipulation",
  "solutionLogistics",
]);

const systemIconByKey: Partial<Record<RouteKey, NavIconName>> = {
  standardCells: "standardCell",
  standardCellsCnc: "cnc",
  standardCellsImm: "imm",
  standardCellsFlex2550: "customSystem",
  standardCellsTmx: "cobot",
  standardCellsMiddleware: "materialFlow",
};

function getSolutionDesktopGroups(locale: Locale): {
  primary: DropdownItem[];
  support: DropdownItem[];
} {
  if (locale === "sl") {
  const slByKey: Record<string, Omit<DropdownItem, "desc"> & { desc?: string }> = {
      solutionCnc: {
        label: "CNC stroji",
        href: "/resitve/avtomatizacija-cnc-strojev",
        icon: "cnc",
      },
      solutionInjectionMolding: {
        label: "Brizganje plastike",
        href: "/resitve/brizganje-plastike",
        icon: "imm",
      },
      solutionCobots: {
        label: "Kolaborativni roboti",
        href: "/resitve/kolaborativni-roboti",
        icon: "cobot",
      },
      solutionManipulation: {
        label: "Manipulacija materiala",
        href: "/resitve/manipulacija",
        icon: "manipulation",
      },
      solutionLogistics: {
        label: "Interna logistika",
        href: "/resitve/logistika",
        icon: "materialFlow",
      },
      solutionProductionAutomation: {
        label: "Avtomatizacija proizvodnje",
        desc: "Sistemski pristop",
        href: "/resitve/avtomatizacija-proizvodnje",
      },
      solutionCustomSystems: {
        label: "Namenski sistemi",
        href: "/resitve/namenski-sistemi",
      },
      service: {
        label: "Servis in podpora",
        href: "/servis",
      },
      servicePricing: {
        label: "Cenik servisa",
        href: "/cenik",
      },
    };

    return {
      primary: SOLUTION_PRIMARY_KEYS.map((key) => slByKey[key]).filter(Boolean),
      support: SOLUTION_SUPPORT_KEYS.map((key) => slByKey[key]).filter(Boolean),
    };
  }

  const messages = solutionsNavMessages[locale];

  const primary = SOLUTION_PRIMARY_KEYS
    .filter((key) => isAvailable(key, locale))
    .map((key) => {
      const item = messages.items[key as keyof typeof messages.items];
      return {
        label: item.label,
        desc: key === "solutionProductionAutomation" ? item.desc : undefined,
        href: getPath(key, locale) ?? "#",
        icon: SOLUTION_PRIMARY_ICON_KEYS.has(key)
          ? solutionIconByKey[key]
          : undefined,
      };
    });

  const support = SOLUTION_SUPPORT_KEYS
    .filter((key) => isAvailable(key, locale))
    .map((key) => {
      const item = messages.items[key as keyof typeof messages.items];
      return {
        label: item.label,
        href: getPath(key, locale) ?? "#",
      };
    });

  return { primary, support };
}

function getCatalogItems(locale: Locale): DropdownItem[] {
  const productKeys = [
    "standardCellsCnc",
    "standardCellsImm",
    "standardCellsFlex2550",
    "standardCellsTmx",
    "standardCellsMiddleware",
  ] as const;

  type CatalogProductKey = typeof productKeys[number];

  if (locale === "sl") {
    const hubHref = getPath("standardCells", "sl") ?? "#";
    const hub: DropdownItem = {
      label: "Standardne celice",
      desc: "CNC, IMM, FLEX 25/50, TMX in Middleware",
      href: hubHref,
      featured: true,
      icon: "standardCell",
    };

    const slProductLabels: Record<CatalogProductKey, { label: string; desc: string }> = {
      standardCellsCnc: {
        label: "FLEX 7 CNC",
        desc: "Standardna celica za CNC stroje",
      },
      standardCellsImm: {
        label: "FLEX 7 IMM",
        desc: "Standardna celica za brizgalne stroje",
      },
      standardCellsFlex2550: {
        label: "FLEX 25 / 50",
        desc: "Visoko prilagodljiva celica",
      },
      standardCellsTmx: {
        label: "TMX",
        desc: "Kolaborativna platforma",
      },
      standardCellsMiddleware: {
        label: "Middleware",
        desc: "Povezovalni sloj",
      },
    };

    const products = productKeys
      .filter((key) => isAvailable(key, locale))
      .map((key) => ({
        label: slProductLabels[key].label,
        desc: slProductLabels[key].desc,
        href: getPath(key, locale) ?? "#",
        icon: systemIconByKey[key],
      }));

    return [hub, ...products];
  }

  const messages = standardCellsNavMessages[locale];
  const hubHref = getPath("standardCells", locale) ?? "#";
  const hub: DropdownItem = {
    label: messages.hubLabel,
    desc: messages.hubDesc,
    href: hubHref,
    featured: true,
    icon: "standardCell",
  };

  const products = productKeys
    .filter((key) => isAvailable(key, locale))
    .map((key) => {
      const item = messages.items[key as keyof typeof messages.items];
      return {
        label: item.label,
        desc: item.desc,
        href: getPath(key, locale) ?? "#",
        icon: systemIconByKey[key],
      };
    });

  return [hub, ...products];
}

function getLocalizedMainNavItems(locale: Exclude<Locale, "sl">) {
  const messages = locale === "en" ? enMessages : deMessages;
  const keys: { key: RouteKey; label: string }[] = [
    { key: "process", label: messages.nav.process },
    { key: "references", label: messages.nav.references },
  ];

  return keys
    .filter((item) => isAvailable(item.key, locale))
    .map((item) => ({
      label: item.label,
      href: getPath(item.key, locale) ?? "#",
    }));
}

function getCompanyItems(locale: Locale): DropdownItem[] {
  if (locale === "sl") {
    const slCompanyEntries: Array<{ key: RouteKey; label: string; desc: string }> = [
      { key: "aboutUs", label: "O nas", desc: "Ekipa, pristop in način dela" },
      { key: "video", label: "Video", desc: "Flexido v gibanju" },
      { key: "news", label: "Novice", desc: "Novosti in objave" },
      { key: "careers", label: "Zaposlitev", desc: "Priložnosti za sodelovanje" },
      {
        key: "fundingProjects",
        label: "Razvojni projekti",
        desc: "EU projekti in razvoj",
      },
    ];

    const fundingProjectChildren: { key: RouteKey; label: string }[] = [
      { key: "fundingProjects", label: "Pregled razvojnih projektov" },
      { key: "fundingProjectSalesDigitalization", label: "Digitalizacija prodajnih poti" },
      { key: "fundingProjectPolyDigit", label: "Poly Digit" },
      { key: "fundingProjectFlexidoDigital", label: "Digitalna transformacija" },
      { key: "fundingProjectSmartim", label: "SmartIM" },
      { key: "fundingProjectSafeguard", label: "SAFEGUARD" },
    ];

    return slCompanyEntries
      .filter((entry) => isAvailable(entry.key, locale))
      .map((entry) => ({
        label: entry.label,
        desc: entry.desc,
        href: getPath(entry.key, locale) ?? "#",
        children:
          entry.key === "fundingProjects"
            ? fundingProjectChildren
                .filter((child) => isAvailable(child.key, locale))
                .map((child) => ({
                  label: child.label,
                  href: getPath(child.key, locale) ?? "#",
                }))
            : undefined,
      }));
  }

  return getLocalizedCompanyItems(locale);
}

function getLocalizedCompanyItems(locale: Exclude<Locale, "sl">): DropdownItem[] {
  const messages = locale === "en" ? enMessages.companyNav : deMessages.companyNav;
  const keys: RouteKey[] = ["aboutUs", "video", "news"];

  return keys
    .filter((key) => isAvailable(key, locale))
    .map((key) => {
      const item = messages.items[key as keyof typeof messages.items];
      return {
        label: item.label,
        desc: item.desc,
        href: getPath(key, locale) ?? "#",
      };
    });
}

const mainNavItems = [
  { label: "Proces", href: "/proces" },
  { label: "Reference", href: "/reference" },
];

function SolutionDropdownRow({ item }: { item: DropdownItem }) {
  const Icon = item.icon ? navIcons[item.icon] : null;

  return (
    <Link
      href={item.href}
      className={cn("block px-3 py-2 transition hover:bg-neutral-50", dropdownRowRadiusClass)}
    >
      <div className="flex min-w-0 items-center gap-3">
        {Icon ? (
          <span className="flex h-9 w-9 shrink-0 items-center justify-center text-[#1693e6]">
            <Icon className="h-7 w-7" />
          </span>
        ) : null}

        <div className="min-w-0">
          <p className="text-[14px] font-normal leading-[1.2] text-neutral-800">{item.label}</p>

          {item.desc ? (
            <p className="mt-1 text-[12px] leading-[1.35] text-neutral-500">{item.desc}</p>
          ) : null}
        </div>
      </div>
    </Link>
  );
}

function SolutionsDesktopDropdown({
  href,
  label,
  primaryEyebrow,
  supportEyebrow,
  primaryItems,
  supportItems,
  isActive = false,
}: {
  href?: string;
  label: string;
  primaryEyebrow: string;
  supportEyebrow: string;
  primaryItems: DropdownItem[];
  supportItems: DropdownItem[];
  isActive?: boolean;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {href ? (
        <Link
          href={href}
          className={cn(navTriggerClass, isActive && navTriggerActiveClass)}
          aria-current={isActive ? "page" : undefined}
        >
          <span>{label}</span>

          <svg
            viewBox="0 0 20 20"
            aria-hidden="true"
            className={`h-4 w-4 translate-y-[1px] text-neutral-400 transition duration-200 ${
              isOpen ? "rotate-180 text-neutral-600" : ""
            }`}
          >
            <path
              d="M5.5 7.5 10 12l4.5-4.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      ) : (
        <button
          type="button"
          className={cn(navTriggerClass, isActive && navTriggerActiveClass)}
          aria-expanded={isOpen}
          aria-current={isActive ? "page" : undefined}
        >
          <span>{label}</span>

          <svg
            viewBox="0 0 20 20"
            aria-hidden="true"
            className={`h-4 w-4 translate-y-[1px] text-neutral-400 transition duration-200 ${
              isOpen ? "rotate-180 text-neutral-600" : ""
            }`}
          >
            <path
              d="M5.5 7.5 10 12l4.5-4.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      )}

      {isOpen ? (
        <div className="absolute left-0 top-full z-50 w-[330px] pt-3">
          <div className={dropdownPanelClass}>
            <div className="border-b border-neutral-100 px-3 pb-2 pt-2">
              <p className="text-[10px] uppercase tracking-[0.18em] text-neutral-400">
                {primaryEyebrow}
              </p>
            </div>

            <div className="mt-2 flex flex-col gap-1">
              {primaryItems.map((item) => (
                <SolutionDropdownRow key={item.href} item={item} />
              ))}
            </div>

            {supportItems.length > 0 ? (
              <div className="mt-2 border-t border-neutral-100 pt-2">
                <div className="px-3 pb-2 pt-1">
                  <p className="text-[10px] uppercase tracking-[0.18em] text-neutral-400">
                    {supportEyebrow}
                  </p>
                </div>

                <div className="flex flex-col gap-1">
                  {supportItems.map((item) => (
                    <SolutionDropdownRow key={item.href} item={item} />
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        </div>
      ) : null}
    </div>
  );
}

function DesktopDropdown({
  href,
  label,
  eyebrow,
  items,
  featuredLabel,
  isActive = false,
}: {
  href?: string;
  label: string;
  eyebrow: string;
  items: DropdownItem[];
  featuredLabel: string;
  isActive?: boolean;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
    {href ? (
  <Link
    href={href}
    className={cn(navTriggerClass, isActive && navTriggerActiveClass)}
    aria-current={isActive ? "page" : undefined}
  >
    <span>{label}</span>

    <svg
      viewBox="0 0 20 20"
      aria-hidden="true"
      className={`h-4 w-4 translate-y-[1px] text-neutral-400 transition duration-200 ${
        isOpen ? "rotate-180 text-neutral-600" : ""
      }`}
    >
      <path
        d="M5.5 7.5 10 12l4.5-4.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </Link>
) : (
  <button
    type="button"
    className={cn(navTriggerClass, isActive && navTriggerActiveClass)}
    aria-expanded={isOpen}
    aria-current={isActive ? "page" : undefined}
  >
    <span>{label}</span>

    <svg
      viewBox="0 0 20 20"
      aria-hidden="true"
      className={`h-4 w-4 translate-y-[1px] text-neutral-400 transition duration-200 ${
        isOpen ? "rotate-180 text-neutral-600" : ""
      }`}
    >
      <path
        d="M5.5 7.5 10 12l4.5-4.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </button>
)}

      {isOpen ? (
        <div className="absolute left-0 top-full z-50 w-[330px] pt-3">
          <div className={dropdownPanelClass}>
            <div className="border-b border-neutral-100 px-3 pb-2 pt-2">
              <p className="text-[10px] uppercase tracking-[0.18em] text-neutral-400">
                {eyebrow}
              </p>
            </div>

            <div className="mt-2 flex flex-col gap-1">
              {items.map((item) => {
                const hasChildren = item.children && item.children.length > 0;
                const Icon = item.icon ? navIcons[item.icon] : null;

                return (
                  <div key={item.href} className="group/item relative">
                    <Link
                      href={item.href}
                      className={cn(
                        "block px-3 py-2 transition",
                        dropdownRowRadiusClass,
                        item.featured
                          ? "bg-neutral-950 text-white hover:bg-neutral-900"
                          : "hover:bg-neutral-50"
                      )}
                    >
                      {item.featured && (
                        <span className="mb-1.5 block text-[10px] uppercase tracking-[0.16em] text-white/45">
                          {featuredLabel}
                        </span>
                      )}
<div className="flex items-center justify-between gap-4">
  <div className="flex min-w-0 items-center gap-3">
    {Icon && (
      <span
        className={`flex h-9 w-9 shrink-0 items-center justify-center ${
          item.featured ? "text-white/85" : "text-[#1693e6]"
        }`}
      >
        <Icon className="h-7 w-7" />
      </span>
    )}

    <div className="min-w-0">
      <p
        className={`text-[14px] font-normal leading-[1.2] ${
          item.featured ? "text-white" : "text-neutral-800"
        }`}
      >
        {item.label}
      </p>

                      {item.desc ? (
                        <p
                          className={`mt-1 text-[12px] leading-[1.35] ${
                            item.featured ? "text-white/60" : "text-neutral-500"
                          }`}
                        >
                          {item.desc}
                        </p>
                      ) : null}
    </div>
  </div>

  <span
    className={`shrink-0 text-[13px] transition group-hover/item:translate-x-0.5 ${
      item.featured
        ? "text-white/45 group-hover/item:text-white"
        : "text-neutral-300 group-hover/item:text-neutral-700"
    }`}
  >
    →
  </span>
</div>
                    </Link>

                    {hasChildren ? (
                      <div className="invisible absolute left-full top-0 z-50 w-[198px] pl-2 opacity-0 transition-opacity duration-150 group-hover/item:visible group-hover/item:opacity-100">
                        <div className={dropdownFlyoutPanelClass}>
                          {item.children?.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className={cn(
                                "flex items-center justify-between px-3 py-2.5 text-[14px] font-normal text-neutral-700 transition hover:bg-neutral-50 hover:text-neutral-950",
                                dropdownRowRadiusClass
                              )}
                            >
                              <span>{child.label}</span>
                              <span className="text-neutral-300">→</span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : null}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

function MobileSolutionRow({
  item,
  featuredLabel,
  onClose,
}: {
  item: DropdownItem;
  featuredLabel: string;
  onClose: () => void;
}) {
  const Icon = item.icon ? navIcons[item.icon] : null;

  return (
    <div key={item.href}>
      <Link
        href={item.href}
        onClick={onClose}
        className={`block rounded-[14px] px-3 py-3 transition ${
          item.featured ? "bg-neutral-950 text-white" : "hover:bg-white"
        }`}
      >
        {item.featured && (
          <span className="mb-1.5 block text-[10px] uppercase tracking-[0.16em] text-white/45">
            {featuredLabel}
          </span>
        )}

        <div className="flex items-start gap-3">
          {Icon && (
            <span
              className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center ${
                item.featured ? "text-white/80" : "text-[#1693e6]"
              }`}
            >
              <Icon className="h-7 w-7" />
            </span>
          )}

          <div>
            <p
              className={`text-[15px] font-normal leading-5 ${
                item.featured ? "text-white" : "text-neutral-900"
              }`}
            >
              {item.label}
            </p>

            {item.desc ? (
              <p
                className={`mt-1 text-[12px] leading-5 ${
                  item.featured ? "text-white/60" : "text-neutral-500"
                }`}
              >
                {item.desc}
              </p>
            ) : null}
          </div>
        </div>
      </Link>

      {item.children ? (
        <div className="ml-3 mt-1 flex flex-col gap-1 border-l border-neutral-200 pl-3">
          {item.children.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              onClick={onClose}
              className="rounded-[12px] px-3 py-2 text-[14px] font-normal text-neutral-700 transition hover:bg-white hover:text-neutral-950"
            >
              {child.label}
            </Link>
          ))}
        </div>
      ) : null}
    </div>
  );
}

function MobileLinkGroup({
  href,
  title,
  eyebrow,
  items,
  featuredLabel,
  onClose,
  isActive = false,
  supportEyebrow,
  supportItems,
  flatGroupContainer = false,
}: {
  href?: string;
  title: string;
  eyebrow: string;
  items: DropdownItem[];
  featuredLabel: string;
  onClose: () => void;
  isActive?: boolean;
  /** Optional quieter second group (e.g. Servis/Cenik), rendered below a divider. */
  supportEyebrow?: string;
  supportItems?: DropdownItem[];
  /** Flat list chrome for Rešitve — avoids nested-card feel on mobile. */
  flatGroupContainer?: boolean;
}) {
  return (
    <div>
    {href ? (
  <Link
    href={href}
    onClick={onClose}
    className={cn(mobileTopLinkClass, isActive && mobileTopLinkActiveClass)}
    aria-current={isActive ? "page" : undefined}
  >
    {title}
  </Link>
) : (
  <div
    className={cn(mobileTopLinkClass, isActive && mobileTopLinkActiveClass)}
    aria-current={isActive ? "page" : undefined}
  >
    {title}
  </div>
)}

      <div
        className={cn(
          "mt-4",
          flatGroupContainer ? "pt-2" : "rounded-[22px] bg-neutral-50 p-2"
        )}
      >
        <p className="px-3 pb-2 pt-2 text-[10px] uppercase tracking-[0.18em] text-neutral-400">
          {eyebrow}
        </p>

        <div className="flex flex-col gap-1">
          {items.map((item) => (
            <MobileSolutionRow
              key={item.href}
              item={item}
              featuredLabel={featuredLabel}
              onClose={onClose}
            />
          ))}
        </div>

        {supportItems && supportItems.length > 0 ? (
          <div className="mt-2 border-t border-neutral-200 pt-2">
            <p className="px-3 pb-2 pt-1 text-[10px] uppercase tracking-[0.18em] text-neutral-400">
              {supportEyebrow}
            </p>

            <div className="flex flex-col gap-1">
              {supportItems.map((item) => (
                <MobileSolutionRow
                  key={item.href}
                  item={item}
                  featuredLabel={featuredLabel}
                  onClose={onClose}
                />
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

const chromeLabels = {
  sl: {
    trigger: "Rešitve",
    eyebrow: "Področja",
    supportEyebrow: "Servis",
    featured: "Sistemi",
    mobileEyebrow: "Področja avtomatizacije",
    mobileFeatured: "Začni tukaj",
    kontakt: "Kontakt",
    openMenu: "Odpri meni",
    closeMenu: "Zapri meni",
    catalogTrigger: "E-katalog",
    catalogEyebrow: "Sistemi",
    catalogFeatured: "Sistemi",
    companyTrigger: "Podjetje",
    companyEyebrow: "Podjetje",
    companyFeatured: "Podjetje",
  },
  en: {
    trigger: enMessages.solutionsNav.triggerLabel,
    eyebrow: enMessages.solutionsNav.eyebrow,
    supportEyebrow: enMessages.solutionsNav.supportEyebrow,
    featured: enMessages.solutionsNav.featuredLabel,
    mobileEyebrow: enMessages.solutionsNav.eyebrow,
    mobileFeatured: enMessages.solutionsNav.featuredLabel,
    kontakt: enMessages.nav.contact,
    openMenu: "Open menu",
    closeMenu: "Close menu",
    catalogTrigger: enMessages.standardCellsNav.triggerLabel,
    catalogEyebrow: enMessages.standardCellsNav.eyebrow,
    catalogFeatured: enMessages.standardCellsNav.featuredLabel,
    companyTrigger: enMessages.companyNav.triggerLabel,
    companyEyebrow: enMessages.companyNav.eyebrow,
    companyFeatured: enMessages.companyNav.featuredLabel,
  },
  de: {
    trigger: deMessages.solutionsNav.triggerLabel,
    eyebrow: deMessages.solutionsNav.eyebrow,
    supportEyebrow: deMessages.solutionsNav.supportEyebrow,
    featured: deMessages.solutionsNav.featuredLabel,
    mobileEyebrow: deMessages.solutionsNav.eyebrow,
    mobileFeatured: deMessages.solutionsNav.featuredLabel,
    kontakt: deMessages.nav.contact,
    openMenu: "Menü öffnen",
    closeMenu: "Menü schließen",
    catalogTrigger: deMessages.standardCellsNav.triggerLabel,
    catalogEyebrow: deMessages.standardCellsNav.eyebrow,
    catalogFeatured: deMessages.standardCellsNav.featuredLabel,
    companyTrigger: deMessages.companyNav.triggerLabel,
    companyEyebrow: deMessages.companyNav.eyebrow,
    companyFeatured: deMessages.companyNav.featuredLabel,
  },
} as const;

function isProcessHref(href: string): boolean {
  return href.includes("/proces") || href.includes("/process") || href.includes("/prozess");
}

function isReferencesHref(href: string): boolean {
  return (
    href.includes("/reference") ||
    href.includes("/references") ||
    href.includes("/referenzen")
  );
}

export default function Header({ sticky = true, locale = "sl", routeKey = "home", parentKey }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const labels = chromeLabels[locale];
  const solutionDesktopGroups = getSolutionDesktopGroups(locale);
  const catalogItems = getCatalogItems(locale);
  const solutionsHubHref = getPath("solutions", locale) ?? "/";
  const catalogTriggerHref = getPath("standardCells", locale);
  const visibleMainNavItems = locale === "sl" ? mainNavItems : getLocalizedMainNavItems(locale);
  const visibleCompanyItems = getCompanyItems(locale);
  const contactHref = getPath("contact", locale);
  const activeSection = resolveNavSection(pathname, locale, routeKey, parentKey);

  return (
    <header
      className={`${
        sticky ? "sticky top-0" : "relative"
      } z-50 border-b border-neutral-200 bg-white/95 backdrop-blur`}
    >
      <Container className="flex h-16 items-center justify-between">
        <div className="flex items-center gap-10 lg:gap-12">
        <Link
          href={getPath("home", locale) ?? "/"}
          className="flex shrink-0 items-center"
          onClick={() => setOpen(false)}
        >
          <img
            src="/logo/flexido-header.svg"
            alt="Flexido"
            width={112}
            height={32}
            className="h-8 w-auto sm:h-9"
          />
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          <SolutionsDesktopDropdown
            href={solutionsHubHref}
            label={labels.trigger}
            primaryEyebrow={labels.eyebrow}
            supportEyebrow={labels.supportEyebrow}
            primaryItems={solutionDesktopGroups.primary}
            supportItems={solutionDesktopGroups.support}
            isActive={activeSection === "solutions"}
          />

          {catalogItems.length > 0 && catalogTriggerHref ? (
            <DesktopDropdown
              href={catalogTriggerHref}
              label={labels.catalogTrigger}
              eyebrow={labels.catalogEyebrow}
              items={catalogItems}
              featuredLabel={labels.catalogFeatured}
              isActive={activeSection === "catalog"}
            />
          ) : null}

          {visibleMainNavItems.map((item) => {
            const isActive =
              (isProcessHref(item.href) && activeSection === "process") ||
              (isReferencesHref(item.href) && activeSection === "references");

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(navLinkClass, isActive && navLinkActiveClass)}
                aria-current={isActive ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}

        {visibleCompanyItems.length > 0 ? (
          <DesktopDropdown
            label={labels.companyTrigger}
            eyebrow={labels.companyEyebrow}
            items={visibleCompanyItems}
            featuredLabel={labels.companyFeatured}
            isActive={activeSection === "company"}
          />
        ) : null}
        </nav>
        </div>

        <div className="hidden items-center gap-4 md:flex">
          <LocaleSwitcher currentLocale={locale} routeKey={routeKey} parentKey={parentKey} />
          {contactHref ? <Button href={contactHref}>{labels.kontakt}</Button> : null}
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="focus-ring flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-900 transition hover:border-neutral-300 md:hidden"
          aria-label={open ? labels.closeMenu : labels.openMenu}
          aria-expanded={open}
        >
          <span className="relative block h-3.5 w-5">
            <span
              className={`absolute left-0 top-0 h-[2px] w-5 rounded-full bg-current transition ${
                open ? "translate-y-[6px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[6px] h-[2px] w-5 rounded-full bg-current transition ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[12px] h-[2px] w-5 rounded-full bg-current transition ${
                open ? "-translate-y-[6px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </Container>

      {open && (
        <div className="fixed inset-x-0 top-16 z-40 max-h-[calc(100vh-4rem)] overflow-y-auto border-b border-black/5 bg-white shadow-[0_24px_80px_rgba(15,23,42,0.08)] md:hidden">
          <Container className="py-6">
            <nav className="flex flex-col gap-7">
              <MobileLinkGroup
                href={solutionsHubHref}
                title={labels.trigger}
                eyebrow={labels.eyebrow}
                items={solutionDesktopGroups.primary}
                supportEyebrow={labels.supportEyebrow}
                supportItems={solutionDesktopGroups.support}
                featuredLabel={labels.mobileFeatured}
                onClose={() => setOpen(false)}
                isActive={activeSection === "solutions"}
                flatGroupContainer
              />

              {catalogItems.length > 0 && catalogTriggerHref ? (
                <MobileLinkGroup
                  href={catalogTriggerHref}
                  title={labels.catalogTrigger}
                  eyebrow={labels.catalogEyebrow}
                  items={catalogItems}
                  featuredLabel={labels.catalogFeatured}
                  onClose={() => setOpen(false)}
                  isActive={activeSection === "catalog"}
                />
              ) : null}

              {visibleMainNavItems.map((item) => {
                const isActive =
                  (isProcessHref(item.href) && activeSection === "process") ||
                  (isReferencesHref(item.href) && activeSection === "references");

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={cn(mobileTopLinkClass, isActive && mobileTopLinkActiveClass)}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                );
              })}

            {visibleCompanyItems.length > 0 ? (
              <MobileLinkGroup
                title={labels.companyTrigger}
                eyebrow={labels.companyEyebrow}
                items={visibleCompanyItems}
                featuredLabel={labels.companyFeatured}
                onClose={() => setOpen(false)}
                isActive={activeSection === "company"}
              />
            ) : null}
            </nav>

            <div className="flex flex-col gap-4 pt-7">
              <LocaleSwitcher currentLocale={locale} routeKey={routeKey} parentKey={parentKey} />
              {contactHref ? (
                <Button href={contactHref} className="w-full justify-center">
                  {labels.kontakt}
                </Button>
              ) : null}
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
