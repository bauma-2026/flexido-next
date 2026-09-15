import type { RouteKey } from "@/i18n/routes";

export type NewsArticleId =
  | "fakuma-2024"
  | "polydigit"
  | "fakuma-2023"
  | "klt-conveyor"
  | "flex-7-imm"
  | "overmolding-cell"
  | "carton-forming"
  | "digital-transformation"
  | "krauss-maffei-cell"
  | "celje-2019"
  | "flex-220-pro"
  | "scan-me"
  | "automatica";

export type NewsShared = {
  id: NewsArticleId;
  routeKey: RouteKey;
  image?: { src: string; gridObjectPosition?: string };
};

export type NewsDetail = {
  label: string;
  value: string;
};

export type NewsBlock =
  | { type: "intro"; text: string }
  | { type: "section"; heading: string; paragraphs: string[]; list?: string[] }
  | { type: "note"; text: string }
  | { type: "result"; label: string; heading: string; body?: string }
  | { type: "callout"; eyebrow: string; heading: string; body: string; ctaLabel?: string; href?: string; routeKey?: RouteKey }
  | {
      type: "fundingLogos";
      logos: {
        src: string;
        alt: string;
        href?: string;
        /** Per-instance override of the shared fundingLogoOptics height — see FundingLogos.tsx. */
        heightClassOverride?: string;
      }[];
    };

export type NewsArticleContent = {
  slug: string;
  meta: { title: string; description: string };
  title: string;
  /** ISO date `YYYY-MM-DD`, or year-only `YYYY` when that is the published fact. */
  date: string;
  excerpt: string;
  imageAlt?: string;
  details: NewsDetail[];
  blocks: NewsBlock[];
};

export type NewsArticle = {
  id: NewsArticleId;
  shared: NewsShared;
  locales: Partial<Record<"sl" | "en" | "de", NewsArticleContent>>;
};

export type NewsHubContent = {
  routeKey: "news";
  meta: { title: string; description: string };
  hero: {
    eyebrow: string;
    heading: string;
    body: string;
    aside: string;
  };
  featuredEyebrow: string;
  featuredFallbackBody: string;
  readMoreLabel: string;
  grid: {
    eyebrow: string;
    heading: string;
    body: string;
    cardLabel: string;
  };
  empty?: {
    heading: string;
    body: string;
  };
  cta: {
    eyebrow: string;
    heading: string;
    body: string;
    primaryLabel: string;
    primaryRouteKey: RouteKey;
    secondaryLabel: string;
    mailto: string;
  };
  chrome: {
    backLabel: string;
    prevLabel: string;
    nextLabel: string;
    detailsLabel: string;
  };
};
