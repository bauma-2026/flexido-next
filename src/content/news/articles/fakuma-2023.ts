import type { NewsArticle } from "../types";

export const article: NewsArticle = {
  id: "fakuma-2023",
  shared: {
    id: "fakuma-2023",
    routeKey: "newsFakuma2023",
    image: { src: "/raw/fakuma_2023.png" },
  },
  locales: {
    sl: {
      slug: "fakuma-2023",
      meta: {
        title: "Fakuma 2023 | Novice | Flexido",
        description:
          "Med 17. in 21. oktobrom smo sodelovali na največjem mednarodnem sejmu za predelavo plastičnih mas in gume v Evropi.",
      },
      title: "Fakuma 2023",
      date: "2023-10-25",
      excerpt:
        "Med 17. in 21. oktobrom smo sodelovali na največjem mednarodnem sejmu za predelavo plastičnih mas in gume v Evropi.",
      imageAlt: "Fakuma 2023",
      details: [
        { label: "Kategorija", value: "Novice" },
        { label: "Dogodek", value: "Fakuma 2023" },
        { label: "Lokacija", value: "Nemčija" },
        { label: "Področje", value: "Predelava plastike / avtomatizacija" },
      ],
      blocks: [
        {
          type: "intro",
          text: "Med 17. in 21. oktobrom smo sodelovali na največjem mednarodnem sejmu za predelavo plastičnih mas in gume v Evropi.",
        },
        {
          type: "section",
          heading: "Predstavitev rešitev in produktov",
          paragraphs: [
            "Na sejmu smo predstavili naše storitve in produkte, ki prinašajo večjo učinkovitost, stabilnost procesov ter večjo konkurenčnost v proizvodnji.",
          ],
        },
        {
          type: "section",
          heading: "Povezovanje in pregled trendov",
          paragraphs: [
            "Fakuma velja za enega ključnih industrijskih dogodkov v Evropi, kjer podjetja predstavljajo najnovejše tehnologije in trende na področju avtomatizacije, digitalizacije in predelave plastike.",
            "Udeležba nam omogoča neposreden stik s partnerji, izmenjavo znanja ter vpogled v prihodnje smeri razvoja industrije.",
          ],
        },
        {
          type: "callout",
          eyebrow: "Video",
          heading: "Oglejte si video s sejma Fakuma 2023.",
          body: "Kratek video prikazuje dogajanje in predstavitev rešitev na sejmu.",
          ctaLabel: "Odpri video →",
          href: "https://youtu.be/-kDQjzZmMco?feature=shared",
        },
      ],
    },
    en: {
      slug: "fakuma-23",
      meta: {
        title: "Fakuma 2023 | News | Flexido",
        description:
          "Between October 17 and 21, we participated in the largest international trade fair for plastics processing in Europe.",
      },
      title: "Fakuma 2023",
      date: "2023-10-25",
      excerpt:
        "Between October 17 and 21, we participated in the largest international trade fair for plastics processing in Europe.",
      imageAlt: "Fakuma 2023",
      details: [
        { label: "Category", value: "News" },
        { label: "Event", value: "Fakuma 2023" },
        { label: "Location", value: "Germany" },
        { label: "Area", value: "Plastics processing / automation" },
      ],
      blocks: [
        {
          type: "intro",
          text: "Between October 17 and 21, we participated in the largest international trade fair for plastics processing in Europe.",
        },
        {
          type: "section",
          heading: "Services and products",
          paragraphs: [
            "We presented our services and products that bring greater efficiency and competitiveness.",
          ],
        },
      ],
    },
  },
};
