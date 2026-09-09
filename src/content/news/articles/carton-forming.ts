import type { NewsArticle } from "../types";

export const article: NewsArticle = {
  id: "carton-forming",
  shared: {
    id: "carton-forming",
    routeKey: "newsCarton",
    image: { src: "/images/systems/raw/avtomatsko-oblikovanje-in-lepljenje-skatel.png" },
  },
  locales: {
    sl: {
      slug: "avtomatsko-oblikovanje-in-lepljenje-skatel",
      meta: {
        title: "Avtomatsko oblikovanje in lepljenje škatel | Novice | Flexido",
        description:
          "Za naročnika smo pripravili rešitev za avtomatizacijo oblikovanja in lepljenja kartonske embalaže.",
      },
      title: "Avtomatsko oblikovanje in lepljenje škatel",
      date: "2022-03-08",
      excerpt:
        "Za naročnika smo pripravili rešitev za avtomatizacijo oblikovanja in lepljenja kartonske embalaže.",
      imageAlt: "Avtomatsko oblikovanje in lepljenje škatel",
      details: [
        { label: "Kategorija", value: "Novice" },
        { label: "Tip rešitve", value: "Avtomatsko oblikovanje in lepljenje" },
        { label: "Uporaba", value: "Kartonska embalaža" },
        { label: "Področje", value: "Avtomatizacija pakiranja" },
      ],
      blocks: [
        {
          type: "intro",
          text: "Za naročnika smo pripravili rešitev za avtomatizacijo oblikovanja in lepljenja kartonske embalaže.",
        },
        {
          type: "section",
          heading: "Avtomatizacija zahtevnega procesa",
          paragraphs: [
            "Sama izdelava embalaže je bila zahtevna zaradi različnih in tudi nepredvidljivih variabil, zato je bila potrebna rešitev, ki omogoča bolj stabilen in nadzorovan potek dela.",
            "Sistem pomaga zmanjšati ročno delo, izboljšati ponovljivost procesa in zagotoviti bolj predvidljivo pripravo embalaže.",
          ],
        },
        {
          type: "section",
          heading: "Stabilnejši potek pakiranja",
          paragraphs: [
            "Rešitev je primerna za proizvodna okolja, kjer sta pomembni zanesljivost procesa in prilagodljivost pri delu z embalažo.",
          ],
        },
        {
          type: "callout",
          eyebrow: "Proces po meri",
          heading: "Ko standardna rešitev ne pokrije realnega toka dela.",
          body: "Primer kaže, kako je mogoče avtomatizirati tudi procese, kjer se pojavljajo različne oblike, variabilnost materiala in potreba po stabilnem ponavljanju.",
        },
        {
          type: "callout",
          eyebrow: "Referenca",
          heading: "Ta projekt je dokumentiran tudi kot referenca.",
          body: "Oglejte si strnjen opis realizacije v zbirki referenc.",
          ctaLabel: "Poglej referenco →",
          routeKey: "referenceCarton",
        },
        {
          type: "callout",
          eyebrow: "Povezana rešitev",
          heading: "Namenski sistemi za poseben proces",
          body: "Preverite, kako Flexido pristopa k rešitvam po meri procesa, prostora, kosov, materiala in obstoječe opreme.",
          ctaLabel: "Poglej rešitev →",
          routeKey: "solutionCustomSystems",
        },
      ],
    },
  },
};
