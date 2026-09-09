export type PageMeta = {
  title: string;
  description: string;
};

export type ProcessStep = {
  number: string;
  title: string;
  desc: string;
};

export type ProcessPrinciple = {
  title: string;
  desc: string;
};

export type ProcessPageContent = {
  routeKey: "process";
  meta: PageMeta;
  hero: {
    eyebrow: string;
    heading: string;
    subhead: string;
    primaryCta: { label: string; href: string };
    secondaryCta: { label: string; href: string };
    videoSrc: string;
  };
  intro: {
    eyebrow: string;
    heading: string;
    paragraphs: string[];
  };
  steps: {
    id: string;
    eyebrow: string;
    heading: string;
    body: string;
    items: ProcessStep[];
  };
  principles: {
    eyebrow: string;
    heading: string;
    items: ProcessPrinciple[];
  };
  /** Proof continuation into /reference, placed before the final contact CTA. */
  proof: {
    eyebrow: string;
    heading: string;
    body: string;
    ctaLabel: string;
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
