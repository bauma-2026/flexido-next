import type { RouteKey } from "@/i18n/routes";

export type FundingRouteKey =
  | "fundingProjects"
  | "fundingProjectSalesDigitalization"
  | "fundingProjectPolyDigit"
  | "fundingProjectFlexidoDigital"
  | "fundingProjectSmartim"
  | "fundingProjectSafeguard";

export const fundingRouteKeys: FundingRouteKey[] = [
  "fundingProjects",
  "fundingProjectSalesDigitalization",
  "fundingProjectPolyDigit",
  "fundingProjectFlexidoDigital",
  "fundingProjectSmartim",
  "fundingProjectSafeguard",
];

/** SL-only metadata — no EN/DE funding routes exist. */
export const fundingMetadata: Record<
  FundingRouteKey,
  { title: string; description: string }
> = {
  fundingProjects: {
    title: "Razvojni projekti | Flexido",
    description:
      "Pregled razvojnih projektov, digitalnih preobrazb in sofinanciranih aktivitet podjetja Flexido.",
  },
  fundingProjectSalesDigitalization: {
    title:
      "Sofinanciranje digitalizacije prodajnih poti | Razvojni projekti | Flexido",
    description:
      "Projekt digitalizacije prodajnih poti, predstavitvenih gradiv in promocije podjetja na tujih trgih.",
  },
  fundingProjectPolyDigit: {
    title: "Poly Digit — digitalna preobrazba | Razvojni projekti | Flexido",
    description:
      "Projekt digitalne preobrazbe ključnih funkcij podjetja Polycom v okviru Načrta za okrevanje in odpornost.",
  },
  fundingProjectFlexidoDigital: {
    title:
      "Digitalna transformacija podjetja Flexido d.o.o. | Razvojni projekti | Flexido",
    description:
      "Digitalna transformacija podjetja Flexido d.o.o. v okviru programa P4D ReactEU.",
  },
  fundingProjectSmartim: {
    title: "SmartIM — pametna tovarna | Razvojni projekti | Flexido",
    description:
      "Razvojni projekt pametne tovarne Iskra Mehanizmi v okviru Javnega razpisa Digitalna preobrazba gospodarstva.",
  },
  fundingProjectSafeguard: {
    title: "SAFEGUARD — pametna zaščitna komora | Razvojni projekti | Flexido",
    description:
      "Raziskovalno-razvojni projekt pametne zaščitne komore SAFEGUARD za kooperativne robote.",
  },
};

export const fundingLanguageSwitchParent: RouteKey = "aboutUs";
