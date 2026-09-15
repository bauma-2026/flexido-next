import Link from "next/link";

import Container from "./Container";
import CookieSettingsTrigger from "@/components/consent/CookieSettingsTrigger";
import type { Locale } from "@/i18n/config";
import { getPath, isAvailable, type RouteKey } from "@/i18n/routes";
import slMessages from "../../../messages/sl.json";
import enMessages from "../../../messages/en.json";
import deMessages from "../../../messages/de.json";

const solutions = [
  {
    label: "Avtomatizacija proizvodnje",
    href: "/resitve/avtomatizacija-proizvodnje",
  },
  {
    label: "CNC stroji",
    href: "/resitve/avtomatizacija-cnc-strojev",
  },
  {
    label: "Brizganje plastike",
    href: "/resitve/brizganje-plastike",
  },
  {
    label: "Kolaborativni roboti",
    href: "/resitve/kolaborativni-roboti",
  },
  {
    label: "Manipulacija materiala",
    href: "/resitve/manipulacija",
  },
  {
    label: "Interna logistika",
    href: "/resitve/logistika",
  },
  {
    label: "Namenski sistemi",
    href: "/resitve/namenski-sistemi",
  },
];

const nav = [
  { label: "Proces", href: "/proces" },
  { label: "Servis in podpora", href: "/servis" },
  { label: "Cenik servisa", href: "/cenik" },
    { label: "E-katalog", href: "/standardne-celice" },
  { label: "O nas", href: "/o-nas" },
  { label: "Reference", href: "/reference" },
  { label: "Novice", href: "/novice" },
  { label: "Zaposlitev", href: "/zaposlitev" },
  { label: "Video", href: "/video" },
];

/**
 * Certificate PDF is the single Bureau Veritas file published on
 * flexido.eu — the same document in every locale; only the caption below
 * it is translated.
 */
const isoCertificateHref =
  "https://www.flexido.eu/images/pdf/FLEXIDO-9001-CERT-Certificate-SLO-24092021.pdf";

function getTrustLogos(locale: Locale) {
  const euFundingHref =
    getPath("fundingProjects", locale) ?? "https://www.eu-skladi.si/";

  return [
    {
      href: euFundingHref,
      src: "/logos/trust/eu-regional-development-fund.webp",
      alt: "Evropska unija — Evropski sklad za regionalni razvoj",
      note:
        locale === "sl"
          ? "Projekt sofinancirata Republika Slovenija in Evropska unija."
          : locale === "en"
            ? "Co-financed by the Republic of Slovenia and the European Union."
            : "Kofinanziert von der Republik Slowenien und der Europäischen Union.",
    },
    {
      href: isoCertificateHref,
      src: "/logos/funding/bureau-veritas-iso9001.svg",
      alt: "ISO 9001 Bureau Veritas Certification",
      note:
        locale === "de"
          ? "ISO 9001 — Bureau Veritas Zertifizierung."
          : "ISO 9001 — Bureau Veritas Certification.",
    },
  ];
}
const legalRouteKeys = ["legalNotice", "salesTerms", "privacyPolicy"] as const;

function getFooterLegal(locale: Locale) {
  const messages = { sl: slMessages, en: enMessages, de: deMessages }[locale];
  return legalRouteKeys
    .filter((key) => isAvailable(key, locale))
    .map((key) => ({
      label: messages.footer[key],
      href: getPath(key, locale) ?? "#",
    }));
}
const footerCopy = {
  sl: {
    taglineMain: "Urejamo in avtomatiziramo proizvodne procese — od posameznega stroja do povezanega toka materiala, ljudi in podatkov.",
    taglineSub: "Od pregleda procesa do delujoče rešitve in podpore po zagonu.",
    solutionsHeading: "Rešitve",
    systemsHeading: "Standardne celice",
    navHeading: "Navigacija",
    contactHeading: "Kontakt",
    emailLabel: "E-pošta",
    phoneLabel: "Telefon",
    contactCta: "Kontakt",
    legalHeading: "Pravno",
    bottomTagline: "Avtomatizacija proizvodnih procesov",
  },
  en: {
    taglineMain: "We design and automate production processes — from a single machine to a connected flow of material, people and data.",
    taglineSub: enMessages.footer.tagline,
    solutionsHeading: enMessages.nav.solutions,
    systemsHeading: enMessages.nav.standardCells,
    navHeading: "Navigation",
    contactHeading: enMessages.nav.contact,
    emailLabel: "Email",
    phoneLabel: "Phone",
    contactCta: enMessages.nav.contact,
    legalHeading: "Legal",
    bottomTagline: enMessages.footer.tagline,
  },
  de: {
    taglineMain: "Wir gestalten und automatisieren Produktionsprozesse — von einer einzelnen Maschine bis zum verbundenen Fluss von Material, Menschen und Daten.",
    taglineSub: deMessages.footer.tagline,
    solutionsHeading: deMessages.nav.solutions,
    systemsHeading: deMessages.nav.standardCells,
    navHeading: "Navigation",
    contactHeading: deMessages.nav.contact,
    emailLabel: "E-Mail",
    phoneLabel: "Telefon",
    contactCta: deMessages.nav.contact,
    legalHeading: "Rechtliches",
    bottomTagline: deMessages.footer.tagline,
  },
} as const;

const solutionsNavMessages = { en: enMessages.solutionsNav, de: deMessages.solutionsNav };

const solutionRouteKeys: RouteKey[] = [
  "solutionProductionAutomation",
  "solutionCnc",
  "solutionInjectionMolding",
  "solutionCobots",
  "solutionManipulation",
  "solutionLogistics",
  "solutionCustomSystems",
];

const systemRouteKeys: RouteKey[] = [
  "standardCells",
  "standardCellsCnc",
  "standardCellsImm",
  "standardCellsFlex2550",
  "standardCellsTmx",
  "standardCellsMiddleware",
];

function getFooterSolutions(locale: Locale) {
  if (locale === "sl") return solutions;

  const messages = solutionsNavMessages[locale];
  return solutionRouteKeys
    .filter((key) => isAvailable(key, locale))
    .map((key) => ({
      label: messages.items[key as keyof typeof messages.items].label,
      href: getPath(key, locale) ?? "#",
    }));
}

function getFooterProcessService(locale: Locale) {
  if (locale === "sl") return [];

  const messages = locale === "en" ? enMessages : deMessages;
  const keys: { key: RouteKey; label: string }[] = [
    { key: "process", label: messages.nav.process },
    { key: "service", label: messages.nav.service },
    { key: "servicePricing", label: messages.nav.servicePricing },
    { key: "aboutUs", label: messages.nav.aboutUs },
    { key: "video", label: messages.nav.video },
    { key: "references", label: messages.nav.references },
    { key: "news", label: messages.nav.news },
  ];

  return keys
    .filter((item) => isAvailable(item.key, locale))
    .map((item) => ({
      label: item.label,
      href: getPath(item.key, locale) ?? "#",
    }));
}

function getFooterSystems(locale: Locale) {
  if (locale === "sl") return [];

  const messages = { en: enMessages.standardCellsNav, de: deMessages.standardCellsNav }[locale];
  const hubHref = getPath("standardCells", locale);
  const items = [
    hubHref ? { label: messages.hubLabel, href: hubHref } : null,
    ...systemRouteKeys
      .filter((key) => key !== "standardCells" && isAvailable(key, locale))
      .map((key) => ({
        label: messages.items[key as keyof typeof messages.items].label,
        href: getPath(key, locale) ?? "#",
      })),
  ].filter((item): item is { label: string; href: string } => item !== null);

  return items;
}

export default function Footer({ locale = "sl" }: { locale?: Locale }) {
  const copy = footerCopy[locale];
  const footerSolutions = getFooterSolutions(locale);
  const footerSystems = getFooterSystems(locale);
  const footerProcessService = getFooterProcessService(locale);
  const visibleNav = locale === "sl" ? nav : [];
  const kontaktHref = getPath("contact", locale);
  const legalLinks = getFooterLegal(locale);
  const trustLogos = getTrustLogos(locale);

  return (
    <footer className="border-t border-white/10 bg-neutral-950 text-white">
      <Container className="py-14 sm:py-16 lg:py-20">
        <div className="grid gap-12 border-b border-white/10 pb-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start lg:pb-12">
          {/* LEFT */}
          <div className="max-w-[560px]">
            <img
              src="/logo/flexido-footer.svg"
              alt="Flexido"
              width={126}
              height={36}
              className="h-9 w-auto"
            />

            <p className="mt-3 text-[13px] font-medium text-white/45">
              We make automation easier.
            </p>

            <p className="mt-5 max-w-[52ch] text-[15px] leading-7 text-white/65">
              {copy.taglineMain}
            </p>

            <p className="mt-5 text-[14px] leading-6 text-white/40">
              {copy.taglineSub}
            </p>

      {/* TRUST / OFFICIAL */}
<div className="mt-8 max-w-[620px] border-t border-white/10 pt-6">
  <div className="grid gap-3 sm:grid-cols-2">
    {trustLogos.map((logo) => (
      <a
        key={logo.src}
        href={logo.href}
        target={logo.href.startsWith("http") ? "_blank" : undefined}
        rel={logo.href.startsWith("http") ? "noopener noreferrer" : undefined}
        className="focus-ring group flex min-h-[92px] gap-4 border border-white/10 bg-white/[0.025] p-4 transition hover:border-white/20 hover:bg-white/[0.04]"
      >
        <div className="flex h-[50px] w-[116px] shrink-0 items-center justify-center bg-white px-3 py-2">
          <img
            src={logo.src}
            alt={logo.alt}
            className="max-h-[36px] w-auto max-w-full object-contain"
          />
        </div>

        <p className="max-w-[17ch] text-[11px] leading-[1.45] text-white/42 transition group-hover:text-white/58">
          {logo.note}
        </p>
      </a>
    ))}
  </div>
</div>
</div>
         {/* RIGHT */}
{/*
  Below sm the three link groups would otherwise stack into one ~1000px
  rail. Two columns instead, with Solutions spanning the full first row —
  its labels are the longest set (DE "Produktionsautomatisierung" /
  "Kundenspezifische Systeme" at 193px) and are the only ones that would
  wrap in a half-column. gap-y-10 also keeps the column gap above the
  legal sub-block's mt-9, so that group stays subordinate to Contact.
  sm and up are unchanged.
*/}
<div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 sm:gap-8 lg:gap-10">
  {/* SOLUTIONS */}
  <div className="col-span-2 sm:col-span-1">
    <p className="text-[11px] uppercase tracking-[0.16em] text-white/40">
      {copy.solutionsHeading}
    </p>

    <nav className="mt-5 flex flex-col gap-3">
      {footerSolutions.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="focus-ring text-[15px] leading-[1.35] text-white/70 transition hover:text-white"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  </div>

  {/* NAV */}
  {visibleNav.length > 0 ? (
    <div>
      <p className="text-[11px] uppercase tracking-[0.16em] text-white/40">
        {copy.navHeading}
      </p>

      <nav className="mt-5 flex flex-col gap-3">
        {visibleNav.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="focus-ring text-[15px] leading-[1.35] text-white/70 transition hover:text-white"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </div>
  ) : footerSystems.length > 0 ? (
    <div>
      <p className="text-[11px] uppercase tracking-[0.16em] text-white/40">
        {copy.systemsHeading}
      </p>

      <nav className="mt-5 flex flex-col gap-3">
        {footerSystems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="focus-ring text-[15px] leading-[1.35] text-white/70 transition hover:text-white"
          >
            {item.label}
          </Link>
        ))}
        {footerProcessService.length > 0 ? (
          <div className="mt-3 flex flex-col gap-3 border-t border-white/10 pt-3">
            {footerProcessService.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="focus-ring text-[15px] leading-[1.35] text-white/70 transition hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>
        ) : null}
      </nav>
    </div>
  ) : null}

  {/* CONTACT */}
  <div>
    <p className="text-[11px] uppercase tracking-[0.16em] text-white/40">
      {copy.contactHeading}
    </p>

    <div className="mt-5 space-y-4 text-[15px] leading-6">
      <div>
        <p className="text-white/40">{copy.emailLabel}</p>
        <a
          href="mailto:info@flexido.eu"
          className="focus-ring font-medium text-white/85 transition hover:text-white"
        >
          info@flexido.eu
        </a>
      </div>

      <div>
        <p className="text-white/40">{copy.phoneLabel}</p>
        <a
          href="tel:+38659351100"
          className="focus-ring font-medium text-white/85 transition hover:text-white"
        >
          0593 51100
        </a>
      </div>

      {kontaktHref ? (
        <Link
          href={kontaktHref}
          className="focus-ring inline-flex rounded-full border border-white/15 px-4 py-2 text-[14px] font-medium text-white/70 transition hover:border-white/30 hover:text-white"
        >
          {copy.contactCta} →
        </Link>
      ) : null}
    </div>

   <div className="mt-9">
  <p className="text-[11px] uppercase tracking-[0.18em] text-white/32">
    {copy.legalHeading}
  </p>

  <nav className="mt-5 flex flex-col gap-3">
    {legalLinks.map((item) => (
      <Link
        key={item.href}
        href={item.href}
        className="focus-ring max-w-[18ch] text-[13px] leading-[1.45] text-white/45 transition hover:text-white/75"
      >
        {item.label}
      </Link>
    ))}
    <CookieSettingsTrigger
      className="focus-ring max-w-[18ch] text-left text-[13px] leading-[1.45] text-white/45 transition hover:text-white/75"
    />
  </nav>
</div>
  </div>
</div>  </div>        {/* BOTTOM */}
        <div className="flex flex-col gap-3 pt-6 text-[13px] text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Flexido</p>
          <p>{copy.bottomTagline}</p>
        </div>
      </Container>
    </footer>
  );
}