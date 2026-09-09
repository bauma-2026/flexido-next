export type PageMeta = {
  title: string;
  description: string;
};

export type PriceRow = {
  label: string;
  value: string;
};

export type PricingSection = {
  heading: string;
  body?: string;
  rows?: PriceRow[];
  note?: string;
  highlight?: string;
  after?: string;
  bullets?: string[];
};

export type ServicePricingContent = {
  routeKey: "servicePricing";
  meta: PageMeta;
  eyebrow: string;
  title: string;
  date: string;
  heroImage: { src: string; alt: string };
  detailsLabel: string;
  details: { label: string; value: string }[];
  backLabel: string;
  sections: PricingSection[];
  footerNote: {
    strong: string;
    company: string;
  };
};
