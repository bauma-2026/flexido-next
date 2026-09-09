import type { NewsArticle } from "../types";

export const article: NewsArticle = {
  id: "digital-transformation",
  shared: {
    id: "digital-transformation",
    routeKey: "newsDigitalTransformation",
    image: { src: "/raw/Digitalna transformacija podjetja Flexido d.o.o..png" },
  },
  locales: {
    sl: {
      slug: "digitalna-transformacija-podjetja-flexido-d-o-o",
      meta: {
        title: "Digitalna transformacija podjetja Flexido d.o.o. | Novice | Flexido",
        description:
          "V okviru javnega razpisa Spodbude za digitalno transformacijo MSP (P4D ReactEU) smo pridobili subvencijo za digitalno transformacijo podjetja.",
      },
      title: "Digitalna transformacija podjetja Flexido d.o.o.",
      date: "2022",
      excerpt:
        "V okviru javnega razpisa Spodbude za digitalno transformacijo MSP (P4D ReactEU) smo pridobili subvencijo za izvedbo digitalne transformacije podjetja.",
      details: [
        { label: "Kategorija", value: "Novice" },
        { label: "Projekt", value: "Digitalna transformacija" },
        { label: "Program", value: "P4D ReactEU" },
        { label: "Področje", value: "Digitalizacija podjetja" },
      ],
      blocks: [
        {
          type: "intro",
          text: "V okviru javnega razpisa Spodbude za digitalno transformacijo MSP (P4D ReactEU), ki ga je objavil Slovenski podjetniški sklad, smo pridobili subvencijo za izvedbo digitalne transformacije podjetja.",
        },
        {
          type: "section",
          heading: "Cilji digitalne transformacije",
          paragraphs: [
            "Operacija je v celoti financirana iz Evropskega sklada za regionalni razvoj in virov ReactEU, skupna vrednost projekta pa znaša 151.507,00 EUR.",
            "Glavni cilj operacije je izvedba celovite digitalne transformacije podjetja na naslednjih področjih:",
          ],
          list: [
            "Izkušnja kupca",
            "Podatkovna strategija",
            "Procesi in digitalni poslovni modeli",
            "Kibernetska varnost",
            "Industrija 4.0",
          ],
        },
        {
          type: "section",
          heading: "Učinki projekta",
          paragraphs: [
            "Skozi izvedeno transformacijo pričakujemo pozitivne učinke na prodajo, razvoj kadrov, optimizacijo procesov ter večjo inovacijsko sposobnost podjetja.",
            "Projekt se izvaja v poslovni enoti v Šenčurju.",
          ],
        },
        {
          type: "callout",
          eyebrow: "Sofinanciranje",
          heading: "Projekt je sofinanciran iz evropskih sredstev.",
          body: "Naložbo sofinancirata Republika Slovenija in Evropska unija iz Evropskega sklada za regionalni razvoj (ESSR) v okviru odziva Unije na pandemijo COVID-19.",
          ctaLabel: "Več informacij →",
          href: "https://www.eu-skladi.si/",
        },
        {
          type: "fundingLogos",
          logos: [
            {
              src: "/images/funding/mgrt.webp",
              alt: "Republika Slovenija, Ministrstvo za gospodarski razvoj in tehnologijo",
              href: "https://www.gov.si/",
            },
            {
              src: "/images/funding/slovenski-podjetniski-sklad.webp",
              alt: "Slovenski podjetniški sklad",
              href: "https://www.podjetniskisklad.si/",
            },
            {
              src: "/images/funding/eu-skladi.webp",
              alt: "Evropska unija, Evropski sklad za regionalni razvoj",
              href: "https://www.eu-skladi.si/",
            },
          ],
        },
      ],
    },
  },
};
