import type { RouteKey } from "@/i18n/routes";
import type { FamilyExternalLink, RouteLink } from "@/content/solutions/types";

export type SystemHero = {
  eyebrow: string;
  heading: string;
  subhead: string;
  /** No video asset exists for the 3 new pages — hero falls back to a static studio image. */
  media: { kind: "video"; src: string } | { kind: "image"; src: string; alt: string };
};

/** Intro copy paired with a static image (no video assets exist for these pages). */
export type IntroBlock = {
  eyebrow: string;
  heading: string;
  paragraphs: string[];
  image: { src: string; alt: string };
};

/**
 * The product block never duplicates technical data — the template looks up
 * `flexidoSystems.find(s => s.slug === systemSlug)` itself for `name`,
 * `image`, gallery paths, and `technical` values. Localized `description`
 * lives here so EN/DE never silently render the Slovenian string from
 * `flexido-systems.ts`. `showTechnical` is off for CNC/IMM so those pages
 * keep their original product-block hierarchy (name + description + image).
 */
export type ProductBlock = {
  eyebrow: string;
  systemSlug: string;
  description: string;
  showTechnical?: boolean;
  /**
   * Product-specific override for the identity image. Declared in content so
   * the template holds no per-slug lookup table.
   *
   * FLEX 25/50 only: `flexidoSystems.image` is a portrait studio shot
   * (1122×1402) that the landscape 3:2 identity frame crops hard. The `-wide`
   * shot is the same machine, same asset family, already 3:2 (1536×1024).
   * No new asset work — the swap just removes the crop.
   */
  imageSrc?: string;
  /**
   * Identity-frame treatment. `cover` (default) suits studio photography;
   * `contain` on a `dark` stage suits a system diagram that has to stay
   * fully readable rather than be cropped to fill. Middleware only.
   */
  imageFit?: "cover" | "contain";
  imageStage?: "light" | "dark";
  /**
   * Compact quick-scan bullets, authored per locale here rather than read
   * from `flexidoSystems[].highlights` — that array is Slovenian-only, and
   * the template renders every locale's page from the same shared data.
   */
  highlights?: string[];
};

export type GalleryBlock = {
  eyebrow: string;
  heading: string;
  /** Localized alts aligned with `flexidoSystems[].gallery` by index. Paths stay in the data file. */
  alts: string[];
  /**
   * `options` — the images *are* the product's documented options (TMX:
   * gripper / interfaces / safety scanner), so the gallery renders as an
   * Options subgroup. A gallery with no role renders nowhere.
   */
  role?: "options";
};

export type RelatedSolutionsBlock = {
  eyebrow: string;
  heading: string;
  linkLabel: string;
  items: {
    title: string;
    body: string;
    routeKey: RouteKey;
    /** Small label above the title — distinguishes a proof-project card (e.g. "Referenca") from a capability card in the same grid. */
    tag?: string;
    /** Per-item override for the block's shared `linkLabel` — a proof card needs different CTA wording than a capability card. */
    linkLabel?: string;
  }[];
};

export type PageMeta = {
  title: string;
  description: string;
};

/**
 * Which catalogue slot an `itemGrids` entry belongs to. Before the shared
 * template this was inferred from array position, which is why the same
 * eyebrow ("Dodatne operacije") rendered as image cards on CNC and as a text
 * matrix on IMM. The role is now declared next to the copy it describes.
 *
 * - `applications`          → slot 05, muted register, peer matrix
 * - `capabilities`          → slot 06, dense text matrix ("what it contains")
 * - `documented-systems`    → slot 04, compact inventory under the specs
 * - `technical-definitions` → slot 04, `name — explanation` as label/value
 * - `module-class`          → slot 06, a documented class with its own media
 */
export type ItemGridRole =
  | "applications"
  | "capabilities"
  | "documented-systems"
  | "technical-definitions"
  | "module-class";

export type ItemGridBlock = {
  eyebrow: string;
  heading: string;
  items: string[];
  /** Defaults to `applications` when omitted — the majority role. */
  role?: ItemGridRole;
  /** `module-class` only: opening paragraph above the media/tiles. */
  lead?: string;
  /** `module-class` only: the single documented visual for this class. */
  media?: { kind: "image"; src: string; alt: string } | { kind: "video"; src: string; alt: string };
  /** `module-class` only: a paired set of documented units, each captioned. */
  tiles?: { src: string; alt: string; caption?: string }[];
};

/** Compact technical option row — thumbnail + title + one line (low-res legacy assets). */
export type OptionThumbnailItem = {
  image: { src: string; alt: string };
  title: string;
  description: string;
};

export type OptionThumbnailGridBlock = {
  eyebrow: string;
  heading: string;
  items: OptionThumbnailItem[];
};

/** Example-part thumbnails — application range signals, not product options. */
export type ApplicationSignalItem = {
  image: { src: string; alt: string };
  label: string;
};

export type ApplicationSignalsBlock = {
  eyebrow: string;
  heading: string;
  items: ApplicationSignalItem[];
};

/** IMM's "Modulne postaje" aside — paragraphs on one side, a short list on the other.
 * `eyebrow`/`heading` are optional: when present, IMM's template renders the paragraphs
 * as a split-statement (thesis left, rationale right) instead of a plain text column. */
export type DetailPanelBlock = {
  eyebrow?: string;
  heading?: string;
  paragraphs: string[];
  /**
   * The bordered list that closes an `options`-placed panel. Optional: a
   * `related`-placed panel contributes only its paragraphs, and Middleware's
   * panel list was dropped once the same five services became the Technical
   * Data definitions.
   */
  panelEyebrow?: string;
  panelItems?: string[];
  /**
   * Which slot the panel closes. `options` renders it as the integration note
   * at the end of slot 06 (IMM); `related` renders its paragraphs as the
   * lead-in above the related cards (Middleware, unchanged from today).
   * Declared rather than inferred from whether `heading` is set.
   */
  placement?: "options" | "related";
};

export type BenefitsBlock = {
  items: { title: string; body: string }[];
};

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
  /** Optional secondary exit alongside the mailto CTA (e.g. hub → solutions, for a visitor who knows their process but not yet which cell fits). */
  secondaryCta?: { label: string; routeKey: RouteKey };
};

export type SystemPageContent = {
  routeKey: RouteKey;
  meta: PageMeta;
  /** Hero back link to the catalogue hub. Present on all five products. */
  backLabel?: string;
  hero: SystemHero;
  intro: IntroBlock;
  product: ProductBlock;
  /** One or two fact/feature grids (e.g. "Applications" and/or "Highlights"). */
  itemGrids?: ItemGridBlock[];
  /** Example-part signal strip (FLEX 25 / 50 application range). */
  applicationSignals?: ApplicationSignalsBlock;
  /** Curated small-thumbnail option groups (FLEX 25 / 50 and similar). */
  optionGrids?: OptionThumbnailGridBlock[];
  /**
   * Parent umbrella heading for a page whose `optionGrids` are subgroups of
   * one documented-configuration topic (FLEX 25 / 50's Grippers / Infeed-
   * outfeed / Preparation) rather than unrelated sections. Only rendered
   * when `optionGrids.length > 1` — a single-group page (CNC/IMM) ignores it.
   */
  optionGroupsHeading?: { eyebrow?: string; heading: string };
  detailPanel?: DetailPanelBlock;
  gallery?: GalleryBlock;
  benefits?: BenefitsBlock;
  relatedSolutions?: RelatedSolutionsBlock;
  kontakt: KontaktContent;
};

// --- Hub -----------------------------------------------------------------

export type SystemsHubCard = {
  routeKey: RouteKey;
  systemSlug: string;
  title: string;
  eyebrow: string;
  desc: string;
};

export type ModuleGroup = {
  title: string;
  items: string[];
};

/** Grouped module/technical-element inventory, subordinate to the five main product cards. */
export type ModulesBlock = {
  eyebrow: string;
  heading: string;
  paragraphs?: string[];
  groups: ModuleGroup[];
};

export type SystemsHubContent = {
  meta: PageMeta;
  hero: SystemHero;
  intro: { eyebrow: string; heading: string; paragraphs: string[] };
  cardsHeading: { eyebrow: string; heading: string };
  cardLinkLabel: string;
  cards: SystemsHubCard[];
  modules?: ModulesBlock;
  kontakt: KontaktContent;
};

export type { FamilyExternalLink, RouteLink };
