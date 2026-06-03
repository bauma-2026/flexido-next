"use client";

import { useEffect, useState } from "react";

import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";

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

type NavIconName = keyof typeof navIcons;

type DropdownItem = {
  label: string;
  desc: string;
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
};

const mainNavItems = [
  { label: "E-katalog", href: "/e-katalog" },
  { label: "Proces", href: "/proces" },
  { label: "Reference", href: "/reference" },
];

const solutionItems: DropdownItem[] = [
  {
    label: "Standardne celice",
    desc: "CNC in IMM robotske celice",
    href: "/standardne-celice",
    featured: true,
    icon: "standardCell",
    children: [
      {
        label: "CNC stroji",
        href: "/standardne-celice/cnc",
      },
      {
        label: "IMM stroji",
        href: "/standardne-celice/imm",
      },
    ],
  },
  {
    label: "Avtomatizacija proizvodnje",
    desc: "Sistemski pristop",
    href: "/resitve/avtomatizacija-proizvodnje",
    icon: "customSystem",
  },
  {
    label: "CNC stroji",
    desc: "Nalaganje, odvzem, izkoristek",
    href: "/resitve/avtomatizacija-cnc-strojev",
    icon: "cnc",
  },
  {
    label: "Brizganje plastike",
    desc: "Odvzem, cikel, tok kosov",
    href: "/resitve/brizganje-plastike",
    icon: "imm",
  },
  {
    label: "Kolaborativni roboti",
    desc: "Fleksibilna avtomatizacija",
    href: "/resitve/kolaborativni-roboti",
    icon: "cobot",
  },
  {
    label: "Manipulacija materiala",
    desc: "Prijem, premik, obrat, odlaganje",
    href: "/resitve/manipulacija",
    icon: "manipulation",
  },
  {
    label: "Interna logistika",
    desc: "Tok materiala med fazami",
    href: "/resitve/logistika",
    icon: "materialFlow",
  },
  {
    label: "Namenski sistemi",
    desc: "Rešitev za poseben proces",
    href: "/resitve/namenski-sistemi",
    icon: "customSystem",
  },
  {
    label: "Servis in podpora",
    desc: "Digitalni servis in poprodajna podpora",
    href: "/servis",
    icon: "service",
  },
  {
    label: "Cenik servisa",
    desc: "Pregled cen in pogojev",
    href: "/cenik",
    icon: "service",
  },
];

const companyItems: DropdownItem[] = [
  {
    label: "O nas",
    desc: "Ekipa, pristop in način dela",
    href: "/o-nas",
  },
  {
    label: "Video",
    desc: "Flexido v gibanju",
    href: "/video",
  },
  {
    label: "Novice",
    desc: "Novosti in objave",
    href: "/novice",
  },
  {
    label: "Zaposlitev",
    desc: "Priložnosti za sodelovanje",
    href: "/zaposlitev",
  },
  {
    label: "Razvojni projekti",
    desc: "EU projekti in razvoj",
    href: "/razvojni-projekti",
  },
];

function DesktopDropdown({
  href,
  label,
  eyebrow,
  items,
  featuredLabel,
}: {
  href?: string;
  label: string;
  eyebrow: string;
  items: DropdownItem[];
  featuredLabel: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
    {href ? (
  <a
    href={href}
    className="inline-flex h-10 items-center gap-1.5 rounded-full px-1.5 text-[14px] font-normal text-neutral-600 transition hover:text-neutral-950"
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
  </a>
) : (
  <button
    type="button"
    className="inline-flex h-10 items-center gap-1.5 rounded-full px-1.5 text-[14px] font-normal text-neutral-600 transition hover:text-neutral-950"
    aria-expanded={isOpen}
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
          <div className="rounded-[20px] border border-neutral-200 bg-white p-2 shadow-[0_18px_60px_rgba(15,23,42,0.12)]">
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
                    <a
                      href={item.href}
                      className={`block rounded-[14px] px-3 py-2 transition ${
                        item.featured
                          ? "bg-neutral-950 text-white hover:bg-neutral-900"
                          : "hover:bg-neutral-50"
                      }`}
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

      <p
        className={`mt-1 text-[12px] leading-[1.35] ${
          item.featured ? "text-white/60" : "text-neutral-500"
        }`}
      >
        {item.desc}
      </p>
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
                    </a>

                    {hasChildren ? (
                      <div className="invisible absolute left-full top-0 z-50 w-[198px] pl-2 opacity-0 transition-opacity duration-150 group-hover/item:visible group-hover/item:opacity-100">
                        <div className="rounded-[18px] border border-neutral-200 bg-white p-2 shadow-[0_18px_50px_rgba(15,23,42,0.12)]">
                          {item.children?.map((child) => (
                            <a
                              key={child.href}
                              href={child.href}
                              className="flex items-center justify-between rounded-[12px] px-3 py-2.5 text-[14px] font-normal text-neutral-700 transition hover:bg-neutral-50 hover:text-neutral-950"
                            >
                              <span>{child.label}</span>
                              <span className="text-neutral-300">→</span>
                            </a>
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

function MobileLinkGroup({
  href,
  title,
  eyebrow,
  items,
  featuredLabel,
  onClose,
}: {
  href?: string;
  title: string;
  eyebrow: string;
  items: DropdownItem[];
  featuredLabel: string;
  onClose: () => void;
}) {
  return (
    <div>
    {href ? (
  <a
    href={href}
    onClick={onClose}
    className="block border-b border-neutral-200 pb-4 text-[19px] font-normal tracking-[-0.03em] text-neutral-950"
  >
    {title}
  </a>
) : (
  <div className="border-b border-neutral-200 pb-4 text-[19px] font-normal tracking-[-0.03em] text-neutral-950">
    {title}
  </div>
)}

      <div className="mt-4 rounded-[22px] bg-neutral-50 p-2">
        <p className="px-3 pb-2 pt-2 text-[10px] uppercase tracking-[0.18em] text-neutral-400">
          {eyebrow}
        </p>

        <div className="flex flex-col gap-1">
          {items.map((item) => {
            const Icon = item.icon ? navIcons[item.icon] : null;

            return (
              <div key={item.href}>
                <a
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

                      <p
                        className={`mt-1 text-[12px] leading-5 ${
                          item.featured ? "text-white/60" : "text-neutral-500"
                        }`}
                      >
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </a>

                {item.children ? (
                  <div className="ml-3 mt-1 flex flex-col gap-1 border-l border-neutral-200 pl-3">
                    {item.children.map((child) => (
                      <a
                        key={child.href}
                        href={child.href}
                        onClick={onClose}
                        className="rounded-[12px] px-3 py-2 text-[14px] font-normal text-neutral-700 transition hover:bg-white hover:text-neutral-950"
                      >
                        {child.label}
                      </a>
                    ))}
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default function Header({ sticky = true }: HeaderProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`${
        sticky ? "sticky top-0" : "relative"
      } z-50 border-b border-neutral-200 bg-white/95 backdrop-blur`}
    >
      <Container className="flex h-16 items-center justify-between">
        <a
          href="/"
          className="flex shrink-0 items-center"
          onClick={() => setOpen(false)}
        >
          <img
            src="/logo/flexido-header.svg"
            alt="Flexido"
            className="h-8 w-auto sm:h-9"
          />
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          <DesktopDropdown
            href="/resitve"
            label="Rešitve"
            eyebrow="Področja"
            items={solutionItems}
            featuredLabel="Sistemi"
          />

          {mainNavItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="inline-flex h-10 items-center rounded-full px-1.5 text-[14px] font-normal text-neutral-600 transition hover:text-neutral-950"
            >
              {item.label}
            </a>
          ))}

        <DesktopDropdown
  label="Podjetje"
  eyebrow="Podjetje"
  items={companyItems}
  featuredLabel="Podjetje"
/>
        </nav>

        <div className="hidden md:block">
          <Button href="/kontakt">Kontakt</Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-900 transition hover:border-neutral-300 md:hidden"
          aria-label={open ? "Zapri meni" : "Odpri meni"}
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
                href="/resitve"
                title="Rešitve"
                eyebrow="Področja avtomatizacije"
                items={solutionItems}
                featuredLabel="Začni tukaj"
                onClose={() => setOpen(false)}
              />

              <div>
                <p className="mb-3 text-[10px] uppercase tracking-[0.18em] text-neutral-400">
                  Glavne strani
                </p>

                <div className="flex flex-col rounded-[22px] border border-neutral-200 bg-white">
                  {mainNavItems.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="border-b border-neutral-100 px-4 py-4 text-[16px] font-normal tracking-[-0.03em] text-neutral-900 last:border-b-0"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>

            <MobileLinkGroup
  title="Podjetje"
  eyebrow="Podjetje"
  items={companyItems}
  featuredLabel="Podjetje"
  onClose={() => setOpen(false)}
/>
            </nav>

            <div className="pt-7">
              <Button href="/kontakt" className="w-full justify-center">
                Kontakt
              </Button>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}