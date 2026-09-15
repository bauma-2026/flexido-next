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
              src: "/logos/funding/ministry-mgrt.png",
              alt: "Republika Slovenija, Ministrstvo za gospodarski razvoj in tehnologijo",
              href: "https://www.gov.si/",
            },
            {
              // Intentionally the Home stacked SVG, not the legacy
              // compact WebP used elsewhere on news/project pages —
              // this page wants visual consistency with Home even
              // though it's a different SPS lockup.
              src: "/logos/funding/sps.svg",
              alt: "Slovenski podjetniški sklad",
              href: "https://www.podjetniskisklad.si/",
              // Ink-mass calibrated against this row's MGRT (44/48,
              // mass coefficient ~0.78) and ERDF (42/46, ~0.76): the
              // stacked SVG's solid gold/navy icon carries the same
              // kind of outsized Gestalt weight the compact WebP did,
              // so it's eased just below ERDF to keep MGRT reading as
              // the anchor and SPS as the lightest of the three, not
              // equal heights. Overridden per-instance rather than via
              // the shared map since sps.svg is also Home's asset.
              heightClassOverride: "h-[36px] sm:h-[40px]",
            },
            {
              src: "/logos/funding/eu-regional-development-fund.png",
              alt: "Evropska unija, Evropski sklad za regionalni razvoj",
              href: "https://www.eu-skladi.si/",
            },
          ],
        },
      ],
    },
  },
};
