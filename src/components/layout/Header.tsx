"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
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
  CustomSystemIcon,
  ServiceSupportIcon,
  StandardCellIcon,
} from "@/components/icons/FlexidoProcessIcons";
import {
  CobotIconNav as CobotIcon,
  ManipulationIconNav as ManipulationIcon,
  MaterialFlowIconNav as MaterialFlowIcon,
} from "@/components/icons/FlexidoNavIcons";

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

/**
 * Top-level panel only. No top border/radius: the header's own bottom
 * hairline is the shared seam the panel hangs from, not a second edge
 * drawn 1px below it. The child flyout keeps its own full border/radius —
 * it floats beside a row, not against the header.
 */
const dropdownPanelClass =
  "rounded-b-[var(--radius-structural)] border-x border-b border-neutral-200 bg-white p-2 shadow-sm";
const dropdownRowRadiusClass = "rounded-lg";
const dropdownFlyoutPanelClass =
  "rounded-[var(--radius-structural)] border border-neutral-200 bg-white p-2 shadow-sm";

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

/**
 * Which top-level dropdown is open. Lifted to `Header` so only one panel can be
 * open at a time and so a trigger can hand focus back to itself on Escape.
 */
type DropdownController = {
  openKey: string | null;
  open: (key: string) => void;
  close: (key: string) => void;
};

function useDropdownController(): DropdownController {
  const [openKey, setOpenKey] = useState<string | null>(null);

  const open = useCallback((key: string) => setOpenKey(key), []);
  const close = useCallback(
    (key: string) => setOpenKey((current) => (current === key ? null : current)),
    [],
  );
  return { openKey, open, close };
}

/**
 * Mouse, focus and keyboard wiring shared by every desktop dropdown.
 *
 * The panel holds plain links in native tab order rather than `role="menu"`
 * items, so this is a disclosure, not a menu: Tab walks the links, Escape
 * closes and returns focus to the trigger, and leaving the wrapper with either
 * pointer or focus closes it. `mouseleave` deliberately does not close while
 * focus is still inside, so a keyboard user does not lose the panel when the
 * pointer happens to drift across it.
 */
function useDropdownBehavior(key: string, controller: DropdownController) {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const triggerRef = useRef<HTMLAnchorElement | HTMLButtonElement | null>(null);
  const isOpen = controller.openKey === key;

  const holdsFocus = () =>
    Boolean(wrapperRef.current && wrapperRef.current.contains(document.activeElement));

  const wrapperProps = {
    ref: wrapperRef,
    onMouseEnter: () => controller.open(key),
    onMouseLeave: () => {
      if (!holdsFocus()) controller.close(key);
    },
    onFocus: () => controller.open(key),
    onBlur: (event: React.FocusEvent<HTMLDivElement>) => {
      const next = event.relatedTarget as Node | null;
      if (!next || !wrapperRef.current?.contains(next)) controller.close(key);
    },
    onKeyDown: (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.key !== "Escape" || !isOpen) return;
      event.stopPropagation();
      controller.close(key);
      triggerRef.current?.focus();
    },
  };

  return { isOpen, wrapperProps, triggerRef };
}

/**
 * Three independently readable trigger states.
 *
 * Surface carries *interaction* (hover, and open — open is an intensified
 * hover, so it reuses the same surface). The rule under the label carries
 * *location*. Colour supports both but decides neither, so hovering a sibling
 * can no longer be mistaken for the current section.
 *
 * Font weight is constant at 400 in every state: the old 400→600 swap widened
 * the active trigger by ~3px and shifted every item beside it between pages.
 */
const navTriggerClass =
  "group focus-ring relative inline-flex h-10 items-center gap-1.5 rounded-full px-3 text-[14px] font-normal transition-colors";
const navTriggerIdleClass = "text-neutral-600 hover:text-neutral-800";
const navTriggerActiveClass = "text-neutral-950";
const navLinkClass =
  "group focus-ring relative inline-flex h-10 items-center rounded-full px-3 text-[14px] font-normal transition-colors";
const navLinkIdleClass = "text-neutral-600 hover:text-neutral-800";
const navLinkActiveClass = "text-neutral-950";

/**
 * Current-section rule. Absolute, so switching it on never moves anything.
 *
 * Neutral, not brand. There is exactly one blue accent in the sticky stack and
 * it belongs to the WikiNav rail below, which marks live reading position on a
 * long page — the thing that actually changes as you scroll. This marks the
 * site section, which the reader already knows, so it reinforces the
 * `text-neutral-950` label rather than competing with it. Two identical 2px
 * brand rules stacked 65px apart was what made the two bars read as equals.
 *
 * `neutral-500` deliberately, not `neutral-400`: hover is `neutral-300`, and a
 * single step above it would read as a hover stuck on.
 */
function NavCurrentMarker() {
  return (
    <span
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-3 bottom-1 h-[2px] rounded-full bg-neutral-500"
    />
  );
}

/**
 * Hover-only counterpart to `NavCurrentMarker` — same geometry, quieter still,
 * invisible until hovered or focused. Only rendered on non-current items, so
 * it never stacks with the current rule.
 */
function NavHoverMarker() {
  return (
    <span
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-3 bottom-1 h-[2px] rounded-full bg-neutral-300 opacity-0 transition-opacity duration-150 group-hover:opacity-100 group-focus-visible:opacity-100"
    />
  );
}
/* Same rule as desktop: location is a marker, never a weight swap. */
const mobileTopLinkClass =
  "focus-ring flex min-h-[52px] flex-1 items-center px-3 text-[19px] font-normal tracking-[-0.03em] text-neutral-800 transition-colors hover:bg-neutral-100 active:bg-neutral-200";
const mobileTopLinkActiveClass = "text-neutral-950";

const solutionsNavMessages = { en: enMessages.solutionsNav, de: deMessages.solutionsNav };
const standardCellsNavMessages = { en: enMessages.standardCellsNav, de: deMessages.standardCellsNav };

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
      },
      solutionInjectionMolding: {
        label: "Brizganje plastike",
        href: "/resitve/brizganje-plastike",
      },
      solutionCobots: {
        label: "Kolaborativni roboti",
        href: "/resitve/kolaborativni-roboti",
      },
      solutionManipulation: {
        label: "Manipulacija materiala",
        href: "/resitve/manipulacija",
      },
      solutionLogistics: {
        label: "Interna logistika",
        href: "/resitve/logistika",
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
    { key: "references", label: messages.nav.references },
    { key: "process", label: messages.nav.process },
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
  { label: "Reference", href: "/reference" },
  { label: "Proces", href: "/proces" },
];

/**
 * The single row grammar for every panel — Rešitve, E-katalog and Podjetje.
 *
 * Fixed anatomy: optional icon, label, optional description, optional trailing
 * submenu chevron. Whole row is the click target, so there is no per-row `→`;
 * the only trailing glyph left is the chevron on a row that genuinely opens a
 * submenu. Current destination is a 2px leading rule — absolute, like the
 * trigger marker, so marking it moves nothing.
 *
 * Icons are all-or-none per panel, decided by the data each panel passes.
 */
function DropdownRow({
  item,
  featuredLabel,
  pathname,
  hasChildren = false,
}: {
  item: DropdownItem;
  featuredLabel?: string;
  pathname: string;
  hasChildren?: boolean;
}) {
  const Icon = item.icon ? navIcons[item.icon] : null;
  const isCurrent = isSamePath(item.href, pathname);

  return (
    <Link
      href={item.href}
      aria-current={isCurrent ? "page" : undefined}
      className={cn(
        "focus-ring relative block px-3 transition-colors hover:bg-neutral-100",
        dropdownRowRadiusClass,
        item.featured ? "border-b border-neutral-100 pb-3 pt-2" : "py-2",
      )}
    >
      {isCurrent ? (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-2 left-0 w-[2px] rounded-full bg-[var(--color-brand)]"
        />
      ) : null}

      <div className="flex items-center justify-between gap-3">
        <div className="flex min-w-0 items-center gap-3">
          {Icon ? (
            <span className="flex h-9 w-9 shrink-0 items-center justify-center text-[var(--color-brand)]">
              <Icon className="h-7 w-7" />
            </span>
          ) : null}

          <div className="min-w-0">
            <p
              className={cn(
                "text-[14px] font-normal leading-[1.2]",
                isCurrent ? "text-neutral-950" : "text-neutral-600",
              )}
            >
              {item.label}
            </p>

            {item.desc ? (
              <p className="mt-1 text-[12px] leading-[1.35] text-neutral-500">{item.desc}</p>
            ) : null}
          </div>
        </div>

        {hasChildren ? (
          /* Points the way the submenu actually opens — see the flyout note in
             DesktopDropdown. */
          <svg viewBox="0 0 20 20" aria-hidden="true" className="h-4 w-4 shrink-0 text-neutral-400">
            <path
              d="M12.5 5.5 8 10l4.5 4.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : null}
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
  ariaCurrent,
  controller,
  pathname,
}: {
  href?: string;
  label: string;
  primaryEyebrow: string;
  supportEyebrow: string;
  primaryItems: DropdownItem[];
  supportItems: DropdownItem[];
  isActive?: boolean;
  ariaCurrent?: "page" | "true";
  controller: DropdownController;
  pathname: string;
}) {
  const panelId = useId();
  const { isOpen, wrapperProps, triggerRef } = useDropdownBehavior("solutions", controller);

  return (
    <div className="relative" {...wrapperProps}>
      {href ? (
        <Link
          ref={triggerRef as React.Ref<HTMLAnchorElement>}
          href={href}
          className={cn(
            navTriggerClass,
            isActive ? navTriggerActiveClass : navTriggerIdleClass,
          )}
          aria-current={ariaCurrent}
          aria-expanded={isOpen}
          aria-controls={panelId}
        >
          <span>{label}</span>
          {isActive ? <NavCurrentMarker /> : <NavHoverMarker />}

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
          ref={triggerRef as React.Ref<HTMLButtonElement>}
          type="button"
          className={cn(
            navTriggerClass,
            isActive ? navTriggerActiveClass : navTriggerIdleClass,
          )}
          aria-expanded={isOpen}
          aria-controls={panelId}
          aria-current={ariaCurrent}
          onClick={() => (isOpen ? controller.close("solutions") : controller.open("solutions"))}
        >
          <span>{label}</span>
          {isActive ? <NavCurrentMarker /> : <NavHoverMarker />}

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
        <div id={panelId} className="absolute left-1/2 top-full z-50 w-[330px] -translate-x-1/2 pt-3">
          <div className={dropdownPanelClass}>
            <div className="border-b border-neutral-100 px-3 pb-2 pt-2">
              <p className="text-[10px] uppercase tracking-[0.18em] text-neutral-400">
                {primaryEyebrow}
              </p>
            </div>

            <div className="mt-2 flex flex-col gap-1">
              {primaryItems.map((item) => (
                <DropdownRow key={item.href} item={item} pathname={pathname} />
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
                    <DropdownRow key={item.href} item={item} pathname={pathname} />
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
  ariaCurrent,
  dropdownKey,
  controller,
  pathname,
}: {
  href?: string;
  label: string;
  eyebrow: string;
  items: DropdownItem[];
  featuredLabel: string;
  isActive?: boolean;
  ariaCurrent?: "page" | "true";
  dropdownKey: string;
  controller: DropdownController;
  pathname: string;
}) {
  const panelId = useId();
  const { isOpen, wrapperProps, triggerRef } = useDropdownBehavior(dropdownKey, controller);

  return (
    <div className="relative" {...wrapperProps}>
    {href ? (
  <Link
    ref={triggerRef as React.Ref<HTMLAnchorElement>}
    href={href}
    className={cn(
      navTriggerClass,
      isActive ? navTriggerActiveClass : navTriggerIdleClass,
    )}
    aria-current={ariaCurrent}
    aria-expanded={isOpen}
    aria-controls={panelId}
  >
    <span>{label}</span>
    {isActive ? <NavCurrentMarker /> : <NavHoverMarker />}

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
    ref={triggerRef as React.Ref<HTMLButtonElement>}
    type="button"
    className={cn(
      navTriggerClass,
      isActive ? navTriggerActiveClass : navTriggerIdleClass,
    )}
    aria-expanded={isOpen}
    aria-controls={panelId}
    aria-current={ariaCurrent}
    onClick={() => (isOpen ? controller.close(dropdownKey) : controller.open(dropdownKey))}
  >
    <span>{label}</span>
    {isActive ? <NavCurrentMarker /> : <NavHoverMarker />}

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
        <div id={panelId} className="absolute left-1/2 top-full z-50 w-[330px] -translate-x-1/2 pt-3">
          <div className={dropdownPanelClass}>
            <div className="border-b border-neutral-100 px-3 pb-2 pt-2">
              <p className="text-[10px] uppercase tracking-[0.18em] text-neutral-400">
                {eyebrow}
              </p>
            </div>

            <div className="mt-2 flex flex-col gap-1">
              {items.map((item) => {
                const hasChildren = Boolean(item.children?.length);

                return (
                  <div key={item.href} className="group/item relative">
                    <DropdownRow
                      item={item}
                      featuredLabel={featuredLabel}
                      pathname={pathname}
                      hasChildren={hasChildren}
                    />

                    {/* Child flyout.
                        Opens to the LEFT. The only dropdown that carries
                        children is Podjetje, which is the terminal nav item, so
                        with the nav axis-centred its panel sits near the right
                        edge: a right-opening flyout ran past the viewport
                        between 1280 and ~1359 and produced a real horizontal
                        page scroll. The left side of that panel is always free,
                        so the direction is deterministic rather than measured.
                        If a dropdown in the left half of the nav ever gains
                        children, revisit this.
                        Width matches the parent panel so child labels stop
                        wrapping into uneven 41/62px rows.
                        `group-focus-within` keeps it open while Tab walks it. */}
                    {hasChildren ? (
                      <div className="invisible absolute right-full top-0 z-50 w-[330px] pr-2 opacity-0 transition-opacity duration-150 group-hover/item:visible group-hover/item:opacity-100 group-focus-within/item:visible group-focus-within/item:opacity-100">
                        <div className={dropdownFlyoutPanelClass}>
                          {item.children?.map((child) => (
                            <DropdownRow
                              key={child.href}
                              item={{ label: child.label, href: child.href }}
                              pathname={pathname}
                            />
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

/** Chevron shared by both mobile accordion levels. Rotation is a secondary cue. */
function MobileChevron({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 20 20"
      aria-hidden="true"
      className={cn(
        "h-4 w-4 shrink-0 text-neutral-400 transition-transform duration-200",
        open && "rotate-180 text-neutral-600",
      )}
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
  );
}

/**
 * Mobile destination row — the phone-sized sibling of `DropdownRow`.
 *
 * Same grammar: optional icon, label, optional description, current marked by
 * a 2px leading rule rather than a weight change. Rows are 44px minimum so
 * every target is thumb-sized.
 */
function MobileRow({
  item,
  featuredLabel,
  pathname,
  onClose,
  indented = false,
}: {
  item: DropdownItem;
  featuredLabel?: string;
  pathname: string;
  onClose: () => void;
  indented?: boolean;
}) {
  const Icon = item.icon ? navIcons[item.icon] : null;
  const isCurrent = isSamePath(item.href, pathname);

  return (
    <Link
      href={item.href}
      onClick={onClose}
      aria-current={isCurrent ? "page" : undefined}
      className={cn(
        "focus-ring relative flex min-h-[44px] items-center px-3 transition-colors hover:bg-neutral-100 active:bg-neutral-200",
        dropdownRowRadiusClass,
        indented && "pl-6",
        item.featured ? "border-b border-neutral-100 pb-3 pt-2" : "py-2",
      )}
    >
      {isCurrent ? (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-2 left-0 w-[2px] rounded-full bg-[var(--color-brand)]"
        />
      ) : null}

      <span className="flex min-w-0 items-center gap-3">
        {Icon ? (
          <span className="flex h-8 w-8 shrink-0 items-center justify-center text-[var(--color-brand)]">
            <Icon className="h-6 w-6" />
          </span>
        ) : null}

        <span className="min-w-0">
          <span
            className={cn(
              "block text-[15px] font-normal leading-5",
              isCurrent ? "text-neutral-950" : "text-neutral-600",
            )}
          >
            {item.label}
          </span>

          {item.desc ? (
            <span className="mt-0.5 block text-[12px] leading-[1.35] text-neutral-500">
              {item.desc}
            </span>
          ) : null}
        </span>
      </span>
    </Link>
  );
}

/**
 * Second-level accordion, used only by Podjetje → Razvojni projekti.
 * Auto-opens when the visitor is already on one of its children, so a deep
 * route still reveals itself without any tapping.
 */
function MobileSubGroup({
  item,
  pathname,
  onClose,
}: {
  item: DropdownItem;
  pathname: string;
  onClose: () => void;
}) {
  const panelId = useId();
  const holdsCurrent = Boolean(item.children?.some((child) => isSamePath(child.href, pathname)));
  const [open, setOpen] = useState(holdsCurrent);
  const isCurrent = isSamePath(item.href, pathname);

  return (
    <div>
      <div className="relative flex items-center">
        {isCurrent || holdsCurrent ? (
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-2 left-0 w-[2px] rounded-full bg-[var(--color-brand)]"
          />
        ) : null}

        <Link
          href={item.href}
          onClick={onClose}
          aria-current={isCurrent ? "page" : undefined}
          className={cn(
            "focus-ring flex min-h-[44px] flex-1 items-center px-3 py-2 text-[15px] font-normal leading-5 transition-colors hover:bg-neutral-100 active:bg-neutral-200",
            dropdownRowRadiusClass,
            isCurrent || holdsCurrent ? "text-neutral-950" : "text-neutral-600",
          )}
        >
          {item.label}
        </Link>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls={panelId}
          aria-label={item.label}
          className="focus-ring flex h-11 w-11 shrink-0 items-center justify-center rounded-lg transition-colors hover:bg-neutral-100 active:bg-neutral-200"
        >
          <MobileChevron open={open} />
        </button>
      </div>

      {open ? (
        <div id={panelId} className="ml-3 flex flex-col border-l border-neutral-200 pl-2">
          {item.children?.map((child) => (
            <MobileRow
              key={child.href}
              item={{ label: child.label, href: child.href }}
              pathname={pathname}
              onClose={onClose}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}

/**
 * Top-level mobile section.
 *
 * The title stays a link when the section has a hub route, so no destination
 * disappears from the menu; the chevron beside it is the accordion's button.
 * Sections without a hub (Podjetje) make the whole row the button. Which
 * section is open is owned by `Header` so only one can be expanded at a time.
 */
function MobileSection({
  sectionKey,
  href,
  title,
  eyebrow,
  items,
  supportEyebrow,
  supportItems,
  isActive,
  ariaCurrent,
  pathname,
  openKey,
  setOpenKey,
  onClose,
}: {
  sectionKey: NavSection;
  href?: string;
  title: string;
  eyebrow: string;
  items: DropdownItem[];
  supportEyebrow?: string;
  supportItems?: DropdownItem[];
  isActive: boolean;
  ariaCurrent?: "page" | "true";
  pathname: string;
  openKey: NavSection | null;
  setOpenKey: (key: NavSection | null) => void;
  onClose: () => void;
}) {
  const panelId = useId();
  const isOpen = openKey === sectionKey;
  const toggle = () => setOpenKey(isOpen ? null : sectionKey);

  return (
    <div className="border-b border-neutral-200">
      <div className="relative flex items-center">
        {isActive ? (
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-3 left-0 w-[2px] rounded-full bg-[var(--color-brand)]"
          />
        ) : null}

        {href ? (
          <>
            {/* Sections with a hub keep the title as a link so no destination
                drops out of the menu; the chevron beside it is the disclosure
                control. */}
            <Link
              href={href}
              onClick={onClose}
              aria-current={ariaCurrent}
              className={cn(mobileTopLinkClass, isActive && mobileTopLinkActiveClass)}
            >
              {title}
            </Link>

            <button
              type="button"
              onClick={toggle}
              aria-expanded={isOpen}
              aria-controls={panelId}
              aria-label={title}
              className="focus-ring flex h-11 w-11 shrink-0 items-center justify-center rounded-lg transition-colors hover:bg-neutral-100 active:bg-neutral-200"
            >
              <MobileChevron open={isOpen} />
            </button>
          </>
        ) : (
          /* No hub route, so the whole row is the disclosure and the chevron
             rides inside it — one control, one accessible name. */
          <button
            type="button"
            onClick={toggle}
            aria-expanded={isOpen}
            aria-controls={panelId}
            aria-current={ariaCurrent}
            className={cn(
              mobileTopLinkClass,
              "justify-between pr-3 text-left",
              isActive && mobileTopLinkActiveClass,
            )}
          >
            {title}
            <MobileChevron open={isOpen} />
          </button>
        )}
      </div>

      {isOpen ? (
        <div id={panelId} className="pb-4">
          <p className="px-3 pb-1 pt-1 text-[10px] uppercase tracking-[0.18em] text-neutral-400">
            {eyebrow}
          </p>

          <div className="flex flex-col">
            {items.map((item) =>
              item.children?.length ? (
                <MobileSubGroup
                  key={item.href}
                  item={item}
                  pathname={pathname}
                  onClose={onClose}
                />
              ) : (
                <MobileRow key={item.href} item={item} pathname={pathname} onClose={onClose} />
              ),
            )}
          </div>

          {supportItems && supportItems.length > 0 ? (
            <div className="mt-2 border-t border-neutral-200 pt-2">
              <p className="px-3 pb-1 pt-1 text-[10px] uppercase tracking-[0.18em] text-neutral-400">
                {supportEyebrow}
              </p>

              <div className="flex flex-col">
                {supportItems.map((item) => (
                  <MobileRow key={item.href} item={item} pathname={pathname} onClose={onClose} />
                ))}
              </div>
            </div>
          ) : null}
        </div>
      ) : null}
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

/** Exact-route test, reusing the file's existing `normalizePath`. */
const isSamePath = (href: string | undefined, pathname: string) =>
  Boolean(href) && normalizePath(href as string) === normalizePath(pathname);

/**
 * `page` is reserved for the exact current route. A trigger whose section owns
 * the current page but is not the page itself gets `true`, so `/e-katalog/cnc`
 * no longer makes the E-katalog trigger claim to be the current page.
 */
function currentFor(isActive: boolean, href: string | undefined, pathname: string) {
  if (!isActive) return undefined;
  if (!href) return "true" as const;
  return isSamePath(href, pathname) ? ("page" as const) : ("true" as const);
}

export default function Header({ locale = "sl", routeKey = "home", parentKey }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const dropdowns = useDropdownController();
  const mobilePanelId = useId();
  const burgerRef = useRef<HTMLButtonElement | null>(null);
  const mobilePanelRef = useRef<HTMLDivElement | null>(null);

  const [openMobileSection, setOpenMobileSection] = useState<NavSection | null>(null);

  const closeMobile = useCallback(() => {
    setOpen(false);
    burgerRef.current?.focus();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  /** Escape closes the mobile panel from anywhere and hands focus back. */
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMobile();
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, closeMobile]);

  /**
   * Minimal focus containment: the panel is `fixed` over the page, so Tab must
   * cycle between the burger and the panel's own links instead of walking into
   * the content behind it. No dependency, no focus library.
   */
  const onMobileKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key !== "Tab") return;

    const focusables = mobilePanelRef.current?.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
    );
    if (!focusables?.length) return;

    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    const burger = burgerRef.current;

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      burger?.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      burger?.focus();
    }
  };

  const labels = chromeLabels[locale];
  const solutionDesktopGroups = getSolutionDesktopGroups(locale);
  const catalogItems = getCatalogItems(locale);
  const solutionsHubHref = getPath("solutions", locale) ?? "/";
  const catalogTriggerHref = getPath("standardCells", locale);
  const visibleMainNavItems = locale === "sl" ? mainNavItems : getLocalizedMainNavItems(locale);
  const visibleCompanyItems = getCompanyItems(locale);
  const contactHref = getPath("contact", locale);
  const activeSection = resolveNavSection(pathname, locale, routeKey, parentKey);

  /*
    Sticky by system design, on every page — site-level navigation is the top
    layer of a two-layer stack, with the WikiNav section index pinning directly
    beneath it at `--header-h`. There is deliberately no opt-out: the old
    `sticky={false}` prop existed only because the rail also claimed `top-0`,
    and the two would overlap. The rail has moved down instead.

    `h-16` on the Container below plus this hairline is what `--header-h`
    records; the two have to be changed together.
  */
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white">
      {/* `relative` makes the Container the positioning context for the nav.
          Logo and utilities stay in normal flex flow at the two edges; the nav
          is taken out of flow and pinned to the container's own axis, so its
          centre no longer depends on how wide the utilities are in a given
          locale. */}
      <Container className="relative flex h-16 items-center justify-between">
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

        <nav className="absolute inset-y-0 left-1/2 hidden -translate-x-1/2 items-center gap-6 xl:flex">
          <SolutionsDesktopDropdown
            href={solutionsHubHref}
            label={labels.trigger}
            primaryEyebrow={labels.eyebrow}
            supportEyebrow={labels.supportEyebrow}
            primaryItems={solutionDesktopGroups.primary}
            supportItems={solutionDesktopGroups.support}
            isActive={activeSection === "solutions"}
            ariaCurrent={currentFor(activeSection === "solutions", solutionsHubHref, pathname)}
            controller={dropdowns}
            pathname={pathname}
          />

          {catalogItems.length > 0 && catalogTriggerHref ? (
            <DesktopDropdown
              dropdownKey="catalog"
              href={catalogTriggerHref}
              label={labels.catalogTrigger}
              eyebrow={labels.catalogEyebrow}
              items={catalogItems}
              featuredLabel={labels.catalogFeatured}
              isActive={activeSection === "catalog"}
              ariaCurrent={currentFor(activeSection === "catalog", catalogTriggerHref, pathname)}
              controller={dropdowns}
              pathname={pathname}
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
                className={cn(
                  navLinkClass,
                  isActive ? navLinkActiveClass : navLinkIdleClass,
                )}
                aria-current={currentFor(isActive, item.href, pathname)}
              >
                {item.label}
                {isActive ? <NavCurrentMarker /> : <NavHoverMarker />}
              </Link>
            );
          })}

        {visibleCompanyItems.length > 0 ? (
          <DesktopDropdown
            dropdownKey="company"
            label={labels.companyTrigger}
            eyebrow={labels.companyEyebrow}
            items={visibleCompanyItems}
            featuredLabel={labels.companyFeatured}
            isActive={activeSection === "company"}
            ariaCurrent={currentFor(activeSection === "company", undefined, pathname)}
            controller={dropdowns}
            pathname={pathname}
          />
        ) : null}
        </nav>

        <div className="hidden items-center gap-4 xl:flex">
          <LocaleSwitcher currentLocale={locale} routeKey={routeKey} parentKey={parentKey} />
          {contactHref ? (
            <Button href={contactHref} variant="brand">
              {labels.kontakt}
            </Button>
          ) : null}
        </div>

        <button
          ref={burgerRef}
          type="button"
          onClick={() => {
            setOpen((value) => {
              /* Opening lands the visitor on their own section already
                 expanded; on Home `activeSection` is null, so everything
                 starts collapsed. */
              if (!value) setOpenMobileSection(activeSection);
              return !value;
            });
          }}
          className="focus-ring flex h-11 w-11 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-900 transition hover:border-neutral-300 xl:hidden"
          aria-label={open ? labels.closeMenu : labels.openMenu}
          aria-expanded={open}
          aria-controls={mobilePanelId}
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
        <div
          id={mobilePanelId}
          ref={mobilePanelRef}
          role="dialog"
          aria-modal="true"
          aria-label={labels.openMenu}
          onKeyDown={onMobileKeyDown}
          // Hangs from the header's real bottom edge, hairline included.
          // `top-16` was the header's content box alone, leaving the panel
          // sitting 1px high over the seam.
          className="fixed inset-x-0 bottom-0 top-[var(--header-h)] z-40 overflow-y-auto border-b border-black/5 bg-white xl:hidden"
        >
          <Container className="py-6">
            <nav className="flex flex-col">
              <MobileSection
                sectionKey="solutions"
                href={solutionsHubHref}
                title={labels.trigger}
                eyebrow={labels.eyebrow}
                items={solutionDesktopGroups.primary}
                supportEyebrow={labels.supportEyebrow}
                supportItems={solutionDesktopGroups.support}
                onClose={() => setOpen(false)}
                isActive={activeSection === "solutions"}
                ariaCurrent={currentFor(activeSection === "solutions", solutionsHubHref, pathname)}
                pathname={pathname}
                openKey={openMobileSection}
                setOpenKey={setOpenMobileSection}
              />

              {catalogItems.length > 0 && catalogTriggerHref ? (
                <MobileSection
                  sectionKey="catalog"
                  href={catalogTriggerHref}
                  title={labels.catalogTrigger}
                  eyebrow={labels.catalogEyebrow}
                  items={catalogItems}
                  onClose={() => setOpen(false)}
                  isActive={activeSection === "catalog"}
                  ariaCurrent={currentFor(activeSection === "catalog", catalogTriggerHref, pathname)}
                  pathname={pathname}
                  openKey={openMobileSection}
                  setOpenKey={setOpenMobileSection}
                />
              ) : null}

              {visibleMainNavItems.map((item) => {
                const isActive =
                  (isProcessHref(item.href) && activeSection === "process") ||
                  (isReferencesHref(item.href) && activeSection === "references");

                return (
                  <div key={item.href} className="relative flex items-center border-b border-neutral-200">
                    {isActive ? (
                      <span
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-y-3 left-0 w-[2px] rounded-full bg-[var(--color-brand)]"
                      />
                    ) : null}

                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={cn(mobileTopLinkClass, isActive && mobileTopLinkActiveClass)}
                      aria-current={currentFor(isActive, item.href, pathname)}
                    >
                      {item.label}
                    </Link>
                  </div>
                );
              })}

            {visibleCompanyItems.length > 0 ? (
              <MobileSection
                sectionKey="company"
                title={labels.companyTrigger}
                eyebrow={labels.companyEyebrow}
                items={visibleCompanyItems}
                onClose={() => setOpen(false)}
                isActive={activeSection === "company"}
                ariaCurrent={currentFor(activeSection === "company", undefined, pathname)}
                pathname={pathname}
                openKey={openMobileSection}
                setOpenKey={setOpenMobileSection}
              />
            ) : null}
            </nav>

            <div className="flex flex-col gap-4 pt-7">
              <LocaleSwitcher currentLocale={locale} routeKey={routeKey} parentKey={parentKey} />
              {contactHref ? (
                <Button href={contactHref} variant="brand" className="w-full justify-center">
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
