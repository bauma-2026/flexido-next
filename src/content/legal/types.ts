export type PageMeta = {
  title: string;
  description: string;
};

export type LegalInline =
  | string
  | { type: "strong"; text: string }
  | { type: "a"; href: string; text: string };

export type LegalBlock =
  | { type: "p"; children: LegalInline[] }
  | { type: "ul"; items: LegalInline[][] }
  | { type: "h3"; text: string };

export type LegalSection = {
  id?: string;
  heading: string;
  blocks: LegalBlock[];
};

export type LegalRouteKey = "legalNotice" | "salesTerms" | "privacyPolicy";

export type LegalPageContent = {
  routeKey: LegalRouteKey;
  meta: PageMeta;
  eyebrow: string;
  title: string;
  desc?: string;
  sections: LegalSection[];
};
