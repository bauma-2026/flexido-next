"use client";

import { useEffect, useState } from "react";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";

const navItems = [
  { label: "Proces", href: "/proces" },
  { label: "O nas", href: "/o-nas" },
  { label: "Reference", href: "/reference" },
  { label: "Novice", href: "/novice" },
  { label: "Zaposlitev", href: "/zaposlitev" },
];

const solutionItems = [
  {
    label: "Kje nastajajo zastoji",
    desc: "Najdi problem v procesu",
    href: "/resitve/system-map",
    featured: true,
  },
  {
    label: "Avtomatizacija proizvodnje",
    desc: "Sistemski pristop",
    href: "/resitve/avtomatizacija-proizvodnje",
  },
  {
    label: "CNC stroji",
    desc: "Nalaganje, odvzem, izkoristek",
    href: "/resitve/avtomatizacija-cnc-strojev",
  },
  {
    label: "Brizganje plastike",
    desc: "Odvzem, cikel, tok kosov",
    href: "/resitve/brizganje-plastike",
  },
  {
    label: "Manipulacija materiala",
    desc: "Prenos med fazami",
    href: "/resitve/manipulacija",
  },
  {
    label: "Interna logistika",
    desc: "Pretok materiala",
    href: "/resitve/logistika",
  },
  {
    label: "Kolaborativni roboti",
    desc: "Fleksibilna avtomatizacija",
    href: "/resitve/kolaborativni-roboti",
  },
{
  label: "Servis in podpora",
  desc: "Stabilnost po zagonu",
  href: "/resitve/servis",
},
{
  label: "Cenik servisnih storitev",
  desc: "Pregled cen in pogojev",
  href: "/cenik",
},
];

const projectItems = [
  {
    label: "Digitalizacija prodajnih poti",
    desc: "Promocija na tujih trgih",
    href: "/razvojni-projekti",
    featured: true,
  },
  {
    label: "Poly Digit",
    desc: "Digitalna preobrazba Polycom",
    href: "/razvojni-projekti/digitalna-preobrazba-kljucnih-funkcij-podjetja-polycom",
  },
  {
    label: "Digitalna transformacija",
    desc: "P4D ReactEU",
    href: "/razvojni-projekti/digitalna-transformacija-podjetja-flexido-d-o-o",
  },
  {
    label: "SmartIM",
    desc: "Pametna tovarna",
    href: "/razvojni-projekti/naziv-projekta-smartim-pametna-tovarna-iskra-mehanizmi",
  },
  {
    label: "SAFEGUARD",
    desc: "Raziskovalno-razvojni projekt",
    href: "/razvojni-projekti/spodbude-za-raziskovalno-razvojni-projekt",
  },
];

type HeaderProps = {
  sticky?: boolean;
};

function DesktopDropdown({
  href,
  label,
  eyebrow,
  items,
  featuredLabel,
}: {
  href: string;
  label: string;
  eyebrow: string;
  items: {
    label: string;
    desc: string;
    href: string;
    featured?: boolean;
  }[];
  featuredLabel: string;
}) {
  return (
    <div className="group relative">
      <a
        href={href}
        className="inline-flex items-center gap-1 text-[14px] text-neutral-600 transition hover:text-neutral-950"
      >
        {label}
        <span className="text-[12px] text-neutral-400 transition group-hover:rotate-180">
          ↓
        </span>
      </a>

      <div className="invisible absolute left-0 top-full z-50 mt-4 w-[360px] rounded-[22px] border border-neutral-200 bg-white p-3 opacity-0 shadow-[0_24px_80px_rgba(15,23,42,0.12)] transition-all duration-200 group-hover:visible group-hover:mt-3 group-hover:opacity-100">
        <div className="mb-2 border-b border-neutral-100 px-3 pb-3">
          <p className="text-[11px] uppercase tracking-[0.16em] text-neutral-400">
            {eyebrow}
          </p>
        </div>

        <div className="flex flex-col gap-1">
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`group/item rounded-[14px] px-3 py-3 transition ${
                item.featured
                  ? "bg-neutral-950 text-white hover:bg-neutral-900"
                  : "hover:bg-neutral-50"
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  {item.featured && (
                    <span className="mb-2 block text-[10px] uppercase tracking-[0.16em] text-white/40">
                      {featuredLabel}
                    </span>
                  )}

                  <p
                    className={`text-[14px] font-medium transition ${
                      item.featured
                        ? "text-white"
                        : "text-neutral-800 group-hover/item:text-neutral-950"
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

                <span
                  className={`mt-[2px] text-[13px] transition group-hover/item:translate-x-0.5 ${
                    item.featured
                      ? "text-white/45 group-hover/item:text-white"
                      : "text-neutral-300 group-hover/item:text-neutral-700"
                  }`}
                >
                  →
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
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
  href: string;
  title: string;
  eyebrow: string;
  items: {
    label: string;
    desc: string;
    href: string;
    featured?: boolean;
  }[];
  featuredLabel: string;
  onClose: () => void;
}) {
  return (
    <>
      <a
        href={href}
        onClick={onClose}
        className="border-b border-neutral-200 pb-5 text-[18px] font-semibold tracking-[-0.03em] text-neutral-950"
      >
        {title}
      </a>

      <div className="mt-5 rounded-[22px] bg-neutral-50 p-3">
        <p className="px-3 pb-2 text-[11px] uppercase tracking-[0.16em] text-neutral-400">
          {eyebrow}
        </p>

        <div className="flex flex-col gap-1">
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={onClose}
              className={`rounded-[14px] px-3 py-3 transition ${
                item.featured ? "bg-neutral-950 text-white" : "hover:bg-white"
              }`}
            >
              {item.featured && (
                <span className="mb-2 block text-[10px] uppercase tracking-[0.16em] text-white/40">
                  {featuredLabel}
                </span>
              )}

              <p
                className={`text-[15px] font-medium ${
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
            </a>
          ))}
        </div>
      </div>
    </>
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
      } z-50 border-b border-neutral-200 bg-white`}
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

        <nav className="hidden items-center gap-8 md:flex">
          <DesktopDropdown
            href="/resitve"
            label="Rešitve"
            eyebrow="Rešitve"
            items={solutionItems}
            featuredLabel="Začni tukaj"
          />

          <DesktopDropdown
            href="/razvojni-projekti"
            label="Razvojni projekti"
            eyebrow="Razvojni projekti"
            items={projectItems}
            featuredLabel="Glavni projekt"
          />

          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[14px] text-neutral-600 transition hover:text-neutral-950"
            >
              {item.label}
            </a>
          ))}
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
            <nav className="flex flex-col">
              <MobileLinkGroup
                href="/resitve"
                title="Rešitve"
                eyebrow="Področja avtomatizacije"
                items={solutionItems}
                featuredLabel="Začni tukaj"
                onClose={() => setOpen(false)}
              />

              <div className="mt-7">
                <MobileLinkGroup
                  href="/razvojni-projekti"
                  title="Razvojni projekti"
                  eyebrow="Razvojni projekti"
                  items={projectItems}
                  featuredLabel="Glavni projekt"
                  onClose={() => setOpen(false)}
                />
              </div>

              <div className="mt-5 flex flex-col">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="border-t border-neutral-200 py-5 text-[16px] font-medium leading-none tracking-[-0.03em] text-neutral-900 transition hover:text-neutral-600"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </nav>

            <div className="pt-6">
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