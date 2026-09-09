import type { NewsArticle } from "../types";

export const article: NewsArticle = {
  id: "klt-conveyor",
  shared: {
    id: "klt-conveyor",
    routeKey: "newsConveyor",
    image: {
      src: "/images/systems/raw/vhodno-izhodna-tracna-proga.png",
      gridObjectPosition: "object-[50%_28%]",
    },
  },
  locales: {
    sl: {
      slug: "vhodno-izhodna-tracna-proga",
      meta: {
        title: "Vhodno-izhodna tračna proga | Novice | Flexido",
        description:
          "Vhodno-izhodna tračna proga za standardne KLT zaboje, pripravljena za večjo avtonomijo kolaborativne celice ob različnih CNC strojih.",
      },
      title: "Vhodno-izhodna tračna proga",
      date: "2022-05-29",
      excerpt:
        "Za povečanje avtonomije delovanja kolaborativne celice v kombinaciji z različnimi CNC stroji smo pripravili vhodno-izhodno tračno progo.",
      imageAlt: "Vhodno-izhodna tračna proga",
      details: [
        { label: "Kategorija", value: "Novice" },
        { label: "Tip rešitve", value: "Vhodno-izhodna tračna proga" },
        { label: "Uporaba", value: "Manipulacija KLT zabojev" },
        { label: "Področje", value: "Avtomatizacija CNC procesov" },
      ],
      blocks: [
        {
          type: "intro",
          text: "Za povečanje avtonomije delovanja kolaborativne celice v kombinaciji z različnimi CNC stroji smo pripravili vhodno-izhodno tračno progo, ki je prirejena za manipulacijo s standardnimi KLT zaboji.",
        },
        {
          type: "section",
          heading: "Avtonomno obratovanje celice",
          paragraphs: [
            "V kombinaciji z integrirano kamero je TM robot primerna rešitev za samostojno neprekinjeno obratovanje z različnimi obdelovanci.",
            "Faze obdelav se lahko priredijo iz vnaprej določenega zaporedja, zato je rešitev uporabna pri procesih, kjer je pomembna stabilna manipulacija materiala med obdelavo.",
          ],
        },
        {
          type: "section",
          heading: "Kapaciteta sistema",
          paragraphs: [
            "Rešitev omogoča uporabo petih vhodnih in petih izhodnih KLT zabojev dimenzije 600 × 400 mm.",
          ],
        },
        {
          type: "callout",
          eyebrow: "Referenca",
          heading: "Ta projekt je dokumentiran tudi kot referenca.",
          body: "Oglejte si strnjen opis realizacije v zbirki referenc.",
          ctaLabel: "Poglej referenco →",
          routeKey: "referenceConveyor",
        },
        {
          type: "callout",
          eyebrow: "Naslednji korak",
          heading: "Vas zanima podobna rešitev za vaš proces?",
          body: "Če želite preveriti, kako bi lahko podobna rešitev podprla vaš CNC proces, nam pošljite osnovne informacije o stroju, kosih in trenutnem toku dela.",
          ctaLabel: "Pišite nam →",
          href: "mailto:info@flexido.eu",
        },
      ],
    },
  },
};
