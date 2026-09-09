import type { RouteKey } from "@/i18n/routes";

/**
 * A link to another page in this same migrated family (hub + 7 solutions).
 * Always resolvable in every locale once that route key exists in
 * `src/i18n/routes.ts`, so the template always renders this as a real link.
 */
export type RouteLink = {
  label: string;
  routeKey: RouteKey;
};

/**
 * A link to a page outside the currently migrated families (News,
 * E-catalogue, Company, ...). The `href` is always the real SL path.
 * The template renders it as a link only for `locale === "sl"` — for en/de
 * it renders the same label as inert text rather than pointing at a
 * Slovenian URL or a fabricated translation (see plan §8 / report §I).
 */
export type FamilyExternalLink = {
  label: string;
  href: string;
};

export type HeroCta = {
  label: string;
  anchor: string;
};

export type HeroContent = {
  backLabel: string;
  eyebrow: string;
  /** One or two lines, rendered as separate `<span class="block">` lines. */
  titleLines: string[];
  subhead: string;
  ctas: HeroCta[];
  videoSrc: string;
};

export type WikiNavItem = {
  id: string;
  label: string;
};

export type IntroBlock = {
  type: "intro";
  id: string;
  eyebrow: string;
  heading: string;
  body: string;
};

/**
 * Canonical first “Problem” section used across solution detail pages:
 * left narrative + right 2×2 quiet bordered items + result line.
 */
export type ProblemSplitBlock = {
  type: "problemSplit";
  id: string;
  eyebrow: string;
  heading: string;
  /** One or two supporting paragraphs. */
  body: string | string[];
  itemsEyebrow: string;
  items: [string, string, string, string];
  result: string;
};

/**
 * A grid of short fact/problem statements — either plain one-line items, or
 * small titled cards (title + one-sentence body), depending on the page.
 */
export type FactGridBlock = {
  type: "factGrid";
  id: string;
  eyebrow: string;
  heading: string;
  body: string;
  columns?: 2 | 3 | 4 | 5;
  items: (string | { title: string; body: string })[];
  /** Optional trailing sentence within the same section, e.g. "See also X, Y and Z." */
  trailingNote?: { template: string; links: RouteLink[] };
};

/** Standard-cell vs custom/purpose-built split (present on most pages). */
export type ComparisonSplitBlock = {
  type: "comparisonSplit";
  id: string;
  eyebrow: string;
  heading: string;
  body: string;
  left: { tag: string; title: string; body: string; link?: FamilyExternalLink | RouteLink };
  right: { tag: string; title: string; body: string; link?: FamilyExternalLink | RouteLink };
};

/**
 * Titled groups, each either a bullet list or a short paragraph.
 * `layout` picks the visual pattern: "boxed" (default) = bordered 2-col
 * grid with bullet lists; "plainColumns" = ungirded multi-col grid, title +
 * bullet list, no borders; "numberedRows" = single-column numbered rows,
 * each with one paragraph; "numberedGrid" = boxed multi-col grid, each card
 * numbered with a title + paragraph; "connectedPath" = the homepage Process
 * grammar — one shared hairline with a node per item, blue index (via
 * `.index-label`), title + paragraph; horizontal on wide desktop, a single
 * vertical line on everything narrower; "openColumns" = intro stacked full
 * width above, then equal open columns below (one shared top hairline,
 * `divide-x` between columns on desktop, hairline-separated stack on
 * mobile) — no per-item borders, no numbering; for parallel alternatives
 * or grouped-fact columns, not a process.
 */
export type CapabilityGroupsBlock = {
  type: "capabilityGroups";
  id: string;
  eyebrow: string;
  heading: string;
  body: string;
  layout?: "boxed" | "plainColumns" | "numberedRows" | "numberedGrid" | "connectedPath" | "openColumns";
  groups: { number?: string; title: string; items?: string[]; body?: string }[];
  /**
   * `plainColumns` only: split `groups` into stacked rows of these sizes
   * (e.g. `[3, 2]`) instead of one flat `grid-cols-3`, so a trailing row
   * with fewer items spans the full width as its own group instead of
   * leaving an empty column. A hairline separates rows after the first,
   * desktop only — mobile always collapses to one continuous column.
   */
  rowSizes?: number[];
  /** Optional trailing sentence within the same section, e.g. "See also X, Y and Z." */
  trailingNote?: { template: string; links: RouteLink[] };
};

/**
 * Ordered numbered steps. Each step is either plain text (no matching
 * elaboration lives elsewhere on the page) or `{ label, anchor }`, which
 * links the row to the existing section further down the *same* page that
 * honestly elaborates it (e.g. `#moznosti`). `anchor` must always be a real
 * section id already present in that page's `wikiNav` — never a fabricated
 * or cross-page target.
 */
export type NumberedStepsBlock = {
  type: "numberedSteps";
  id: string;
  eyebrow: string;
  heading: string;
  body: string;
  /** "list" = single-column numbered rows; "grid" = numbered card grid. */
  layout?: "list" | "grid";
  steps: (string | { label: string; anchor: string })[];
};

/**
 * Product/standard-cell cross-sell. The right-hand side is either a product
 * image (with its own link) or a bordered text box (tag/title/body/link) —
 * the two visual patterns actually used across the solution pages.
 */
export type CrossSellBlock = {
  type: "crossSell";
  id: string;
  eyebrow: string;
  heading: string;
  body: string;
  right:
    | {
        kind: "image";
        src: string;
        alt: string;
        reversed?: boolean;
        /** "compact" (default) = existing 340px thumbnail column. "feature" = large, near-equal product column. */
        size?: "compact" | "feature";
        link: FamilyExternalLink | RouteLink;
      }
    | { kind: "box"; tag: string; title: string; body: string; link: FamilyExternalLink | RouteLink };
};

/** Cross-sell into a specific `flexidoSystems` product (e.g. TMX). */
export type ProductCrossSellBlock = {
  type: "productCrossSell";
  id: string;
  eyebrow: string;
  heading: string;
  body: string;
  systemSlug: string;
  imageAlt: string;
  link: FamilyExternalLink | RouteLink;
};

/** A single realized-project case study, optionally linking to /novice/*. */
export type ProofProjectBlock = {
  type: "proofProject";
  id: string;
  eyebrow: string;
  heading: string;
  tag: string;
  title: string;
  body: string;
  result?: string;
  image: { src: string; alt: string; objectPosition?: string };
  /** Localized reference route. Card is clickable wherever the path exists. */
  routeKey?: RouteKey;
  readMoreLabel: string;
  /** "boxed" (default) = bordered case-study card. "open" = no outer border, image edge is the boundary. */
  chrome?: "boxed" | "open";
  /** "quote" (default) = blue-accent callout. "quiet" = plain hairline-divided line, no accent color. */
  resultTone?: "quote" | "quiet";
};

/** One item in a multi-project proof grid (fixed-dimension image, not `fill`). */
export type ProofGridItem = {
  area: string;
  title: string;
  body: string;
  result: string;
  image: { src: string; width: number; height: number; objectPosition?: string };
  /** Localized reference route. Card is clickable wherever the path exists. */
  routeKey?: RouteKey;
};

/** A grid of 2+ realized-project case studies (e.g. hub, production-automation). */
export type ProofGridBlock = {
  type: "proofGrid";
  id: string;
  eyebrow: string;
  heading: string;
  body?: string;
  items: ProofGridItem[];
  readMoreLabel: string;
  /** Small eyebrow-style label above each item's result line, e.g. "Rezultat" — quiet metadata, not a heading. */
  resultLabel?: string;
};

/** A short text block ending in one cross-family CTA (e.g. "See how a project runs"). */
export type CtaBannerBlock = {
  type: "ctaBanner";
  id: string;
  eyebrow: string;
  heading: string;
  body: string;
  cta: RouteLink | FamilyExternalLink;
};

/** Grid of links to other pages within this family. */
export type RelatedSolutionsBlock = {
  type: "relatedSolutions";
  id: string;
  eyebrow: string;
  heading: string;
  body?: string;
  linkLabel: string;
  items: { title: string; body: string; routeKey: RouteKey }[];
};

/** A sentence with 1-3 inline in-family links spliced in via {0} {1} {2}. */
export type CrossLinksParagraphBlock = {
  type: "crossLinksParagraph";
  id: string;
  template: string;
  links: RouteLink[];
};

export type TextOnlyBlock = {
  type: "textOnly";
  id: string;
  eyebrow: string;
  heading: string;
  body: string;
};

export type SolutionSectionBlock =
  | IntroBlock
  | ProblemSplitBlock
  | FactGridBlock
  | ComparisonSplitBlock
  | CapabilityGroupsBlock
  | NumberedStepsBlock
  | CrossSellBlock
  | ProductCrossSellBlock
  | ProofProjectBlock
  | ProofGridBlock
  | CtaBannerBlock
  | RelatedSolutionsBlock
  | CrossLinksParagraphBlock
  | TextOnlyBlock;

export type KontaktContent = {
  eyebrow: string;
  heading: string;
  body: string;
  ctaLabel: string;
  mailto: string;
  imageSrc: string;
  imageAlt: string;
  captionEyebrow: string;
  captionText: string;
  bordered?: boolean;
  /** "plain" (default) = white section, no image. "photo" = full-bleed image + dark-band overlay, matching the /resitve hub's final CTA. */
  variant?: "plain" | "photo";
};

export type SolutionPageContent = {
  routeKey: RouteKey;
  hero: HeroContent;
  wikiNav: WikiNavItem[];
  sections: SolutionSectionBlock[];
  kontakt: KontaktContent;
};

// --- Hub-specific shapes -----------------------------------------------

export type HubHero = {
  eyebrow: string;
  heading: string;
  subhead: string;
  ctaLabel: string;
};

export type HubSecondaryPath = {
  title: string;
  body: string;
  routeKey: RouteKey;
};

/** One card in the hub's embedded compact solutions grid (see `src/components/blocks/home/Solutions.tsx`). */
export type HubGridItem = {
  routeKey: RouteKey;
  title: string;
  desc: string;
  label?: string;
  icon?: "cnc" | "imm" | "manipulation" | "materialFlow";
};

export type HubContent = {
  hero: HubHero;
  gridHeading: string;
  gridBody: string;
  gridItems: HubGridItem[];
  /** "Preberi več" — the compact grid cards' read-more label. */
  gridReadMoreLabel: string;
  widerApproach: {
    eyebrow: string;
    heading: string;
    linkLabel: string;
    paths: HubSecondaryPath[];
    footNote: { template: string; link: RouteLink };
  };
  proof: {
    eyebrow: string;
    heading: string;
    body: string;
    items: ProofGridItem[];
    readMoreLabel: string;
  };
  unsure: {
    eyebrow: string;
    heading: string;
    body: string;
    cta: RouteLink | FamilyExternalLink;
  };
  finalCta: {
    eyebrow: string;
    heading: string;
    body: string;
    ctaLabel: string;
    mailto: string;
  };
};
