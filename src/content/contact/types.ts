export type PageMeta = {
  title: string;
  description: string;
};

export type ContactStep = {
  title: string;
  desc: string;
};

export type ContactPageContent = {
  routeKey: "contact";
  meta: PageMeta;
  hero: {
    eyebrow: string;
    heading: string;
    subhead: string;
    primaryCtaLabel: string;
    secondaryCtaLabel: string;
    stepsEyebrow: string;
    steps: ContactStep[];
  };
  details: {
    eyebrow: string;
    heading: string;
    body: string;
    emailLabel: string;
    phoneLabel: string;
    companyLabel: string;
    companyNameLabel: string;
    registeredOfficeLabel: string;
    businessUnitLabel: string;
    topicsLabel: string;
    topics: string[];
  };
  final: {
    eyebrow: string;
    heading: string;
    body: string;
    emailCta: string;
    phoneCta: string;
  };
};
