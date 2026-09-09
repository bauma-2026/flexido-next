export type PageMeta = {
  title: string;
  description: string;
};

export type TextCard = {
  title: string;
  desc: string;
};

export type CompanyAboutContent = {
  routeKey: "aboutUs";
  meta: PageMeta;
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
  whatWeDo: {
    eyebrow: string;
    heading: string;
    lead?: string;
    items: TextCard[];
  };
  team: {
    eyebrow: string;
    heading: string;
    body: string;
    image: { src: string; alt: string };
  };
  video: {
    eyebrow: string;
    heading: string;
    body: string;
    src: string;
    poster: string;
    ctaLabel: string;
    aside: string;
  };
  approach: {
    eyebrow: string;
    heading: string;
    items: TextCard[];
  };
  cta: {
    id: string;
    eyebrow: string;
    heading: string;
    body: string;
    label: string;
    mailto: string;
    image?: { src: string; alt: string };
  };
};

export type CompanyVideoContent = {
  routeKey: "video";
  meta: PageMeta;
  hero: {
    eyebrow: string;
    heading: string;
    subhead: string;
  };
  player: {
    src: string;
    poster: string;
    fallback: string;
    bridgeLead?: string;
    bridgeBody?: string;
  };
  intro: {
    eyebrow: string;
    heading: string;
    paragraphs: string[];
  };
  cta: {
    label: string;
    mailto: string;
    aside?: string;
  };
};
