import type { RouteKey } from "@/i18n/routes";

export type PageMeta = {
  title: string;
  description: string;
};

export type ReferenceId = "overmolding-cell" | "klt-conveyor" | "carton-forming";

export type ReferenceShared = {
  id: ReferenceId;
  routeKey: RouteKey;
  image: { src: string; width: number; height: number; objectPosition?: string };
  relatedSolutions: RouteKey[];
};

export type ReferenceSummary = {
  area: string;
  title: string;
  body: string;
  result?: string;
};

export type ReferencePageContent = {
  routeKey: RouteKey;
  meta: PageMeta;
  backLabel: string;
  eyebrow: string;
  title: string;
  intro: string;
  imageAlt: string;
  sections: { heading: string; paragraphs: string[] }[];
  result?: { label: string; heading: string; body?: string };
  related: {
    eyebrow: string;
    heading: string;
    body: string;
    ctaLabel: string;
    routeKey: RouteKey;
  };
  /** Lightweight continuation into the process page — proof consumed, next question is "how would this run for me". */
  processLink: { label: string };
  /** Label above the compact next-reference link (sibling navigation via `referenceOrder`). */
  siblingLabel: string;
  /** Optional lightweight bridge into the matching standard-cell product page — only authored for the CNC/conveyor and IMM/overmolding pairs. */
  productLink?: { label: string; routeKey: RouteKey };
  summary: ReferenceSummary;
};

export type ReferencesHubContent = {
  routeKey: "references";
  meta: PageMeta;
  hero: {
    eyebrow: string;
    heading: string;
    subhead: string;
    primaryCta: { label: string; href: string };
    secondaryCta: { label: string; href: string };
    videoSrc: string;
  };
  projects: {
    eyebrow: string;
    heading: string;
    body: string;
    readMoreLabel: string;
  };
  areas: {
    eyebrow: string;
    heading: string;
    body: string;
    linkLabel: string;
    items: { title: string; body: string; routeKey: RouteKey }[];
  };
  principles: {
    eyebrow: string;
    heading: string;
    items: { title: string; desc: string }[];
  };
  cta: {
    id: string;
    eyebrow: string;
    heading: string;
    body: string;
    label: string;
    mailto: string;
  };
};
