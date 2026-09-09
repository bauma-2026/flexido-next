import type { NewsArticle } from "../types";

export const article: NewsArticle = {
  id: "overmolding-cell",
  shared: {
    id: "overmolding-cell",
    routeKey: "newsOvermolding",
    image: { src: "/images/systems/raw/robotska-celica-za-nabrizgavanje.png" },
  },
  locales: {
    sl: {
      slug: "robotska-celica-za-nabrizgavanje",
      meta: {
        title: "Robotska celica za nabrizgavanje | Novice | Flexido",
        description:
          "Za naročnika smo avtomatizirali nabrizgavanje kosov in optimizirali zahtevano količino v proizvodnem procesu.",
      },
      title: "Robotska celica za nabrizgavanje",
      date: "2022-03-08",
      excerpt:
        "Za naročnika smo uspešno avtomatizirali nabrizgavanje kosov in optimizirali zahtevano količino kosov v proizvodnem procesu.",
      imageAlt: "Robotska celica za nabrizgavanje",
      details: [
        { label: "Kategorija", value: "Novice" },
        { label: "Tip rešitve", value: "Robotska celica" },
        { label: "Uporaba", value: "Nabrizgavanje kosov" },
        { label: "Področje", value: "Avtomatizacija brizganja plastike" },
      ],
      blocks: [
        {
          type: "intro",
          text: "Za naročnika smo uspešno avtomatizirali nabrizgavanje kosov in optimizirali zahtevano količino kosov v proizvodnem procesu.",
        },
        {
          type: "section",
          heading: "Večja proizvodna zmogljivost",
          paragraphs: [
            "Z uvedeno rešitvijo naročnik danes izdeluje skoraj tretjino več kosov, kot je bilo prvotno predvideno.",
            "Robotska celica omogoča bolj stabilen potek dela, manj odvisnosti od ročnega poseganja v proces in bolj predvidljivo proizvodnjo.",
          ],
        },
        {
          type: "section",
          heading: "Avtomatizacija procesa nabrizgavanja",
          paragraphs: [
            "Rešitev je zasnovana za učinkovito manipulacijo kosov v procesu brizganja plastike, kjer so pomembni ponovljivost, hitrost in nadzor kakovosti.",
          ],
        },
        {
          type: "result",
          label: "Rezultat",
          heading: "Skoraj tretjina več kosov od prvotno predvidene količine.",
          body: "Primer pokaže, kako lahko pravilno zasnovana robotska celica izboljša stabilnost procesa, zmanjša ročno poseganje in poveča proizvodno zmogljivost.",
        },
        {
          type: "callout",
          eyebrow: "Referenca",
          heading: "Ta projekt je dokumentiran tudi kot referenca.",
          body: "Oglejte si strnjen opis realizacije v zbirki referenc.",
          ctaLabel: "Poglej referenco →",
          routeKey: "referenceOvermolding",
        },
        {
          type: "callout",
          eyebrow: "Povezana rešitev",
          heading: "Avtomatizacija brizganja plastike",
          body: "Preverite, kako Flexido pristopa k odvzemu, odlaganju, kontroli in stabilnemu toku kosov po ciklu brizganja.",
          ctaLabel: "Poglej rešitev →",
          routeKey: "solutionInjectionMolding",
        },
      ],
    },
  },
};
