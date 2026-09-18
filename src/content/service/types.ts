export type PageMeta = {
  title: string;
  description: string;
};

export type ServiceFlowItem = {
  step: string;
  title: string;
  desc: string;
};

export type ServicePageContent = {
  routeKey: "service";
  meta: PageMeta;
  wikiNav: { href: string; label: string }[];
  hero: {
    eyebrow: string;
    heading: string;
    subhead: string;
    primaryCta: { label: string; href: string };
    secondaryCtaLabel: string;
    image: { src: string; alt: string };
    imageCaptionEyebrow: string;
    imageCaption: string;
  };
  coverage: {
    id: string;
    eyebrow: string;
    heading: string;
    paragraphs: string[];
  };
  request: {
    id: string;
    eyebrow: string;
    heading: string;
    body: string;
    details: string[];
    /** Tertiary text link closing the checklist. Carries no arrow — the
     * `link-arrow` span supplies it, per the site's text-link grammar. */
    ctaLabel: string;
  };
  flow: {
    id: string;
    eyebrow: string;
    heading: string;
    items: ServiceFlowItem[];
  };
  equipment: {
    id: string;
    eyebrow: string;
    heading: string;
    body: string;
    groups: { number: string; title: string; items: string[] }[];
  };
  pricing: {
    id: string;
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
    image: { src: string; alt: string };
    captionEyebrow: string;
    caption: string;
  };
};
