import type { NewsArticle } from "../types";

export const article: NewsArticle = {
  id: "fakuma-2024",
  shared: {
    id: "fakuma-2024",
    routeKey: "newsFakuma2024",
    image: { src: "/raw/Fakuma 2024.png" },
  },
  locales: {
    sl: {
      slug: "flexido-na-sejmu-fakuma-2024",
      meta: {
        title: "Uspešna predstavitev podjetja Flexido na sejmu Fakuma 2024 | Novice | Flexido",
        description:
          "Podjetje Flexido se je predstavilo na sejmu Fakuma 2024 v Nemčiji, enem pomembnejših dogodkov na področju predelave plastike in industrijske avtomatizacije.",
      },
      title: "Uspešna predstavitev podjetja Flexido na sejmu Fakuma 2024 v Nemčiji",
      date: "2026-03-29",
      excerpt:
        "Podjetje Flexido se je med 15. in 19. oktobrom 2024 udeležilo mednarodnega sejma Fakuma 2024.",
      imageAlt: "Flexido na sejmu Fakuma 2024",
      details: [
        { label: "Kategorija", value: "Novice" },
        { label: "Dogodek", value: "Fakuma 2024" },
        { label: "Lokacija", value: "Nemčija" },
        { label: "Področje", value: "Avtomatizacija proizvodnje" },
      ],
      blocks: [
        {
          type: "intro",
          text: "Podjetje Flexido se je predstavilo na sejmu Fakuma 2024 v Nemčiji, enem pomembnejših dogodkov na področju predelave plastike in industrijske avtomatizacije.",
        },
        {
          type: "section",
          heading: "Predstavitev rešitev za avtomatizacijo",
          paragraphs: [
            "Na sejmu smo predstavili rešitve za avtomatizacijo proizvodnje, robotizacijo procesov ter optimizacijo proizvodnih tokov.",
            "Poudarek je bil na stabilnosti procesa, ponovljivosti proizvodnje in praktičnih rešitvah za podjetja, ki želijo zmanjšati ročno delo ter izboljšati pretočnost proizvodnje.",
          ],
        },
        {
          type: "section",
          heading: "Prisotnost na tujih trgih",
          paragraphs: [
            "Udeležba na sejmu je bila pomembna priložnost za krepitev prisotnosti podjetja na tujih trgih, vzpostavljanje novih poslovnih povezav ter spremljanje aktualnih trendov v industriji.",
          ],
        },
        {
          type: "note",
          text: "Udeležbo na sejmu sofinancira Evropska unija v okviru podpore internacionalizaciji podjetij.",
        },
        {
          type: "fundingLogos",
          logos: [
            {
              src: "/images/funding/mgts.webp",
              alt: "Ministrstvo za gospodarstvo, turizem in šport",
              href: "https://www.gov.si/drzavni-organi/ministrstva/ministrstvo-za-gospodarstvo-turizem-in-sport/",
            },
            {
              src: "/images/funding/spirit-slovenia.webp",
              alt: "SPIRIT Slovenija",
              href: "https://www.spiritslovenia.si",
            },
            {
              src: "/images/funding/i-feel-slovenia.webp",
              alt: "I feel Slovenia",
              href: "https://www.slovenia.info",
            },
            {
              src: "/images/funding/eu-financing.webp",
              alt: "Financira Evropska unija",
              href: "https://evropskasredstva.si/",
            },
          ],
        },
      ],
    },
  },
};
