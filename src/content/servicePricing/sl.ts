import type { ServicePricingContent } from "./types";

export const servicePricingContent: ServicePricingContent = {
  routeKey: "servicePricing",
  meta: {
    title: "Cenik servisnih storitev | Flexido",
    description: "Urne postavke, dodatki, stroški poti in pogoji servisnih storitev Flexido.",
  },
  eyebrow: "Servis",
  title: "Cenik servisnih storitev",
  date: "2026",
  heroImage: {
    src: "/images/systems/raw/flex-7-cnc-slim-studio.png",
    alt: "Flexido CNC robotska celica",
  },
  detailsLabel: "Podrobnosti",
  details: [
    { label: "Kategorija", value: "Servis" },
    { label: "Tip", value: "Cenik servisnih storitev" },
    { label: "Veljavnost", value: "od 01.01.2026 dalje" },
    { label: "Območje", value: "Slovenija" },
  ],
  backLabel: "Nazaj na servis",
  sections: [
    {
      heading: "1. Cena za uro popravila",
      body: "Cena za uro popravila v času rednega delovnega časa, tj. od ponedeljka do petka, razen praznikov, v času med 7.00 in 16.00:",
      rows: [
        { label: "Serviser tehnik II — enostavna mehanika", value: "51,20 EUR" },
        { label: "Serviser tehnik I — zahtevna mehanika, pnevmatika, elektro", value: "58,60 EUR" },
        { label: "Serviser elektronike II — roboti, preprosto krmiljenje", value: "63,80 EUR" },
        { label: "Serviser elektronike I — kamere, zahtevno krmiljenje", value: "72,60 EUR" },
      ],
      note: "V čas za obračun se šteje tudi čas na poti, priprava na popravilo in morebitni čakalni čas.",
    },
    {
      heading: "2. Dodatki za delo izven rednega delovnega časa",
      rows: [
        { label: "Nadurno delo in delo ob sobotah", value: "dodatno 50 %" },
        { label: "Nočno delo po 20.00 uri ter delo ob nedeljah in praznikih", value: "dodatno 100 %" },
      ],
    },
    {
      heading: "3. Stroški prevoza",
      highlight: "0,58 EUR / km",
      after:
        "Morebitni dodatni stroški, kot so stroški nočitev, cestnin, drugi prevozni stroški in podobni neposredni stroški, se obračunajo posebej po dejanskih stroških.",
      bullets: [
        "Na zgoraj navedene cene se obračuna DDV.",
        "Plačilni rok za servisne storitve in rezervne dele je 30 dni po opravljeni storitvi oziroma po dobavi.",
        "Cenik velja za nedoločen čas in se lahko spremeni v primeru, da nastopijo razlogi za spremembo.",
      ],
    },
  ],
  footerNote: {
    strong: "Cenik velja od 01.01.2026 dalje.",
    company: "Flexido d.o.o.",
  },
};
