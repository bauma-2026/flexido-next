import type { Locale } from "@/i18n/config";

/**
 * Catalogue family type + surface roles — the single place the later
 * typography pass edits.
 *
 * Typography pass 1A: `section`, `lead` and `dark` now share one canonical
 * section scale (30 / 36 / 44, leading 1.06, tracking -0.04em), which is the
 * same scale as `.text-section-title` in app/globals.css. Keep the two in
 * sync — this file is the catalogue's copy of that role, not a second scale.
 *
 * Do not add a new heading string in a Catalog* component. Add a role here.
 */
const SECTION_BASE =
  "text-[30px] font-semibold leading-[1.06] tracking-[-0.04em] sm:text-[36px] lg:text-[44px]";

export const HEADING = {
  /** h1 — page title, hero only. The shared display role from app/globals.css (40 / 56 / 68). */
  page: "text-display",
  /** h2 — every section-level heading: intro, identity, applications, options, proof, related. */
  section: `${SECTION_BASE} text-neutral-950`,
  /** h2 — the two lead statements (intro, identity). Same role as `section`; distinction comes from measure and lead body, not size. */
  lead: `${SECTION_BASE} text-neutral-950`,
  /** h3 — an option subgroup inside slot 06. */
  subsection:
    "text-[24px] font-semibold leading-[1.15] tracking-[-0.035em] text-neutral-950 sm:text-[28px]",
  /** h3 — a related / ruled-cell title. The shared card-title role from app/globals.css (20 / 1.3). */
  card: "text-card-title",
  /** h4 — an option tile title. The shared list-title role from app/globals.css (16 / 22). */
  tile: "text-list-title",
  /** h2 — the locked dark CTA close. Same section role, in white, so the close supports rather than outranks the sections. */
  dark: `${SECTION_BASE} text-white`,
} as const;

export const BODY = {
  /** First paragraph of intro / identity — carries the statement. */
  lead: "text-[17px] font-medium leading-8 text-neutral-800",
  /** Continuation paragraphs. */
  base: "text-[16px] leading-8 text-neutral-600",
  /** Standalone descriptive paragraph (identity, module classes). */
  strong: "text-[16px] leading-8 text-neutral-700",
  /** Card and note bodies. */
  card: "text-[15px] leading-7 text-neutral-600",
  /** Tile captions and supporting notes. */
  small: "text-[14px] leading-6 text-neutral-600",
  /** Tile descriptions — 14 / 20 (Pass 2B-2; was 13 / 20). */
  micro: "text-[14px] leading-5 text-neutral-600",
  /** Matrix cell text — applications and capability rows. */
  matrix: "text-[15px] font-normal leading-6 text-neutral-800",
  /** Applications peer-cell text: calmer than a capability row. */
  peer: "text-[16px] font-normal leading-6 text-neutral-700",
} as const;

/**
 * Approved surface meanings. No sixth tone, and no mechanical alternation —
 * a slot always renders on the surface its role owns, so a page with no
 * applications content (CNC, Middleware) simply has no muted band.
 */
export const SURFACE = {
  /** default / editorial / identity / technical / options / related */
  white: "bg-white",
  /** applications — deliberate register change */
  muted: "surface-muted",
  /** proof / documented result only */
  proof: "surface-soft",
  /** locked final CTA close */
  dark: "bg-[var(--color-dark-band)]",
} as const;

/** Stable, locale-independent anchor ids — nav hrefs and section ids agree. */
export const SLOT_ID = {
  identity: "sistem",
  technical: "tehnicni-podatki",
  applications: "aplikacije",
  options: "konfiguracije",
  proof: "dokazilo",
  related: "povezano",
  kontakt: "kontakt",
} as const;

/**
 * Technical-data band eyebrow. Was duplicated verbatim as a local constant in
 * CncPageTemplate, ImmPageTemplate and TmxPageTemplate; promoted here so the
 * family has one source. Values unchanged.
 */
export const TECHNICAL_DATA_EYEBROW: Record<Locale, string> = {
  sl: "Tehnični podatki",
  en: "Technical data",
  de: "Technische Daten",
};

/**
 * Minimum number of anchorable slots before the in-page index renders. All
 * five products clear it today (Middleware 4, CNC/FLEX/TMX 5, IMM 6); the
 * threshold exists so a future short product page doesn't get a two-item nav.
 */
export const NAV_MIN_ITEMS = 4;
