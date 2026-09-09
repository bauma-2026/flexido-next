import type { ReferencePageContent } from "../types";

export const conveyorContent: ReferencePageContent = {
  routeKey: "referenceConveyor",
  meta: {
    title: "Vhodno-izhodna tračna proga | Reference | Flexido",
    description:
      "Vhodno-izhodna tračna proga za standardne KLT zaboje, pripravljena za večjo avtonomijo kolaborativne celice ob različnih CNC strojih.",
  },
  backLabel: "← Nazaj na reference",
  eyebrow: "Referenca",
  title: "Vhodno-izhodna tračna proga",
  intro:
    "Za povečanje avtonomije delovanja kolaborativne celice v kombinaciji z različnimi CNC stroji smo pripravili vhodno-izhodno tračno progo, ki je prirejena za manipulacijo s standardnimi KLT zaboji.",
  imageAlt: "Vhodno-izhodna tračna proga",
  sections: [
    {
      heading: "Avtonomno obratovanje celice",
      paragraphs: [
        "V kombinaciji z integrirano kamero je TM robot primerna rešitev za samostojno neprekinjeno obratovanje z različnimi obdelovanci.",
        "Faze obdelav se lahko priredijo iz vnaprej določenega zaporedja, zato je rešitev uporabna pri procesih, kjer je pomembna stabilna manipulacija materiala med obdelavo.",
      ],
    },
    {
      heading: "Kapaciteta sistema",
      paragraphs: [
        "Rešitev omogoča uporabo petih vhodnih in petih izhodnih KLT zabojev dimenzije 600 × 400 mm.",
      ],
    },
  ],
  result: {
    label: "Rezultat",
    heading:
      "Samostojno neprekinjeno obratovanje z različnimi obdelovanci, v kombinaciji z integrirano kamero.",
  },
  related: {
    eyebrow: "Povezana rešitev",
    heading: "Avtomatizacija CNC strojev",
    body: "Preverite, kako Flexido pristopa k nalaganju, odvzemu in toku kosov okoli CNC strojev.",
    ctaLabel: "Poglej rešitev →",
    routeKey: "solutionCnc",
  },
  processLink: { label: "Kako poteka tak projekt? Poglejte proces →" },
  siblingLabel: "Druga referenca",
  productLink: { label: "Oglejte si FLEX 7 CNC Slim →", routeKey: "standardCellsCnc" },
  summary: {
    area: "CNC in tok materiala",
    title: "Vhodno-izhodna tračna proga",
    body: "Tračna proga za KLT zaboje ob različnih CNC strojih, za večjo avtonomijo kolaborativne celice.",
    result:
      "Samostojno neprekinjeno obratovanje z različnimi obdelovanci, v kombinaciji z integrirano kamero.",
  },
};
