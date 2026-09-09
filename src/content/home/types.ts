import type { RouteKey } from "@/i18n/routes";

export type HomeHeroContent = {
  eyebrow: string;
  titleLines: [string, string];
  /** Optional shorter mobile-only override for the second title line (keeps the mobile H1 rhythm compact without shrinking type). Falls back to titleLines when omitted. */
  titleLinesMobile?: [string, string];
  subhead: string;
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
  showFundingTrust: boolean;
};
