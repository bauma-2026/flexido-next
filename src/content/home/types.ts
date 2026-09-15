import type { RouteKey } from "@/i18n/routes";

export type HomeHeroContent = {
  eyebrow: string;
  titleLines: [string, string];
  /**
   * Mobile carries one claim, not two. `titleMobile` is the single H1 idea;
   * the counter-claim from `titleLines[1]` is demoted into `subheadMobile`.
   * Both fall back to the desktop strings when omitted.
   */
  titleMobile?: string;
  subhead: string;
  subheadMobile?: string;
  slogan: string;
  ctaPrimary: string;
  ctaSecondary: string;
};

export type HomeTrustItem = {
  href: string;
  src: string;
  alt: string;
  external?: boolean;
};

export type HomeTrustStripContent = {
  label: string;
  items: HomeTrustItem[];
};

export type HomeSolutionsCompactItem = {
  routeKey: RouteKey;
  title: string;
  desc: string;
  icon: "cnc" | "imm" | "manipulation" | "materialFlow";
};

export type HomeSolutionsContent = {
  eyebrow: string;
  title: string;
  desc: string;
  compactReadMoreLabel: string;
  compactItems: HomeSolutionsCompactItem[];
  /**
   * Short problem→response line shown below the compact rows, previewing
   * the Systems/productProof section that follows. Deliberately distinct
   * from `productProof.heading`, which renders immediately after it.
   */
  bridge?: string;
};

export type HomeProductProofSystem = {
  slug: "flex-7-cnc" | "flex-7-imm";
  category: string;
  shortDescription: string;
  routeKey: RouteKey;
};

export type HomeProductProofContent = {
  eyebrow: string;
  heading: string;
  body: string;
  viewAllLabel: string;
  viewAllRouteKey: RouteKey;
  viewSystemLabel: string;
  systems: HomeProductProofSystem[];
};

export type HomeCompetenciesContent = {
  eyebrow: string;
  heading: string;
  /** Optional one-line framing that connects the heading to the list below — frames the items as coverage within one project/team rather than separate services. */
  intro?: string;
  items: string[];
  /** Optional continuation link to development-project evidence. Omitted where no equivalent route exists for the locale. */
  developmentProjectsLabel?: string;
};

export type HomeProcessStep = {
  step: string;
  title: string;
  desc: string;
};

export type HomeProcessContent = {
  eyebrow: string;
  title: string;
  desc: string;
  steps: HomeProcessStep[];
  fullProcessLabel: string;
};

export type HomeFinalCtaContent = {
  eyebrow: string;
  heading: string;
  body: string;
  ctaLabel: string;
  imageCaptionEyebrow: string;
  imageCaption: string;
};

/**
 * Home-only funding/development-support register, rendered once near the
 * footer. Certification (Bureau Veritas / ISO 9001) lives in the post-hero
 * `trustStrip` instead — this block is funding only, split into two
 * semantic subgroups: the SL-only project-funding voucher scheme (SPS,
 * ERDF, Ministry) and the shared development-support programme (SPIRIT,
 * EU Cohesion Fund). `quote`, `projectFundingLabel` and `legalNote` are
 * SL-specific voucher-scheme copy (no faithful EN/DE source text exists)
 * and are omitted for other locales; the subgroup labels and eyebrow are
 * safe to translate since they're structural, not funding claims.
 */
export type HomeFundingCertificationContent = {
  eyebrow: string;
  quote?: string;
  /** Label for the SL-only group (SPS, ERDF, Ministry). Omitted elsewhere. */
  projectFundingLabel?: string;
  /** Label for the shared group (SPIRIT, EU Cohesion Fund), all locales. */
  developmentSupportLabel: string;
  /** Text preceding the eu-skladi.si link, e.g. "…Več lahko najdete na". */
  legalNote?: string;
  legalNoteLinkHref?: string;
  legalNoteLinkLabel?: string;
};

export type HomePageMeta = {
  title: string;
  description: string;
};

export type HomePageContent = {
  meta: HomePageMeta;
  hero: HomeHeroContent;
  trustStrip: HomeTrustStripContent;
  solutions: HomeSolutionsContent;
  productProof: HomeProductProofContent;
  competencies: HomeCompetenciesContent;
  process: HomeProcessContent;
  finalCta: HomeFinalCtaContent;
  fundingCertification: HomeFundingCertificationContent;
};
