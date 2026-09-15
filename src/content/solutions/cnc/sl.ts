import type { SolutionPageContent } from "../types";

/** Faithful structural port of `app/(default)/resitve/avtomatizacija-cnc-strojev/page.tsx`. */
export const cncContent: SolutionPageContent = {
  routeKey: "solutionCnc",
  hero: {
    backLabel: "← Vse rešitve",
    eyebrow: "CNC avtomatizacija",
    titleLines: ["CNC proces,", "ne le ena celica."],
    subhead:
      "Ko CNC proizvodnja zahteva več kot ponovljivo strego enega stroja, zasnujemo avtomatizacijo okoli strojev, kosov, postaj in toka materiala.",
    ctas: [
      { label: "Standardno ali namensko", anchor: "#resitev" },
      { label: "Poglejmo vaš proces", anchor: "#kontakt" },
    ],
    videoSrc: "/video/flexido/hero-cnc.mp4",
  },
  wikiNav: [
    { id: "cnc-proces", label: "CNC proces" },
    { id: "moznosti", label: "Možnosti izvedbe" },
    { id: "resitev", label: "Standardno ali namensko" },
    { id: "projekt", label: "Projekt" },
  ],
  sections: [
    {
      type: "problemSplit",
      id: "cnc-proces",
      eyebrow: "CNC proizvodni proces",
      heading: "Avtomatizacija se začne okoli obdelave.",
      body: "CNC stroj je le en del procesa. Zahteve se razširijo, ko je treba uskladiti delo s kosi, dodatne operacije in opremo okoli obdelave.",
      itemsEyebrow: "Kje nastajajo zahteve",
      items: [
        "Nalaganje in odvzem kosov",
        "Različni obdelovanci in prijemi",
        "Več CNC strojev ali dodatne operacije",
        "Tok materiala, kontrola in usklajevanje opreme",
      ],
      result: "rešitev mora biti zasnovana okoli dejanskega procesa, ne le okoli CNC stroja.",
      resultLabel: "Rezultat",
    },
    {
      type: "capabilityGroups",
      id: "moznosti",
      eyebrow: "Možnosti izvedbe",
      heading: "CNC rešitev sestavimo okoli dejanskega procesa.",
      body: "Posamezni gradniki so izbrani glede na stroje, kose, prostor, zaporedje operacij in potreben tok materiala.",
      groups: [
        {
          title: "Stroji in gibanje",
          items: [
            "Strega enega ali več CNC strojev",
            "Robot in dodatna servo gnana linearna os po potrebi",
          ],
        },
        {
          title: "Delo s kosi",
          items: [
            "Različni tipi kosov in prilagojeni prijemi",
            "ToolChanger — samodejna menjava orodja ali prijema pri več tipih kosov, kadar je konfigurirana",
          ],
        },
        {
          title: "Dodatne operacije",
          items: [
            "Vision, kontrola in meritve",
            "Pranje, raziglevanje, graviranje ali druge procesne postaje",
          ],
        },
        {
          title: "Tok in integracija",
          items: [
            "Dovod, odvod in vmesno odlaganje materiala",
            "Povezava CNC strojev, robota, postaj in obstoječe opreme",
          ],
        },
      ],
    },
    {
      type: "comparisonSplit",
      id: "resitev",
      eyebrow: "Izbira rešitve",
      heading: "Standardna celica ali širša CNC avtomatizacija.",
      body: "Izhodišče določa dejanski proces: ali ga pokrije konfigurabilna celica ali potrebuje sestavo okoli več povezanih elementov.",
      left: {
        tag: "Standardna CNC celica",
        title: "Za ponovljivo strego CNC stroja.",
        body: "FLEX 7 CNC Slim je konfigurabilna osnova za nalaganje, odvzem ter standardne postaje in module v ponovljivem procesu.",
        link: { label: "Poglej standardno CNC celico", routeKey: "standardCellsCnc" },
      },
      right: {
        tag: "Namenska CNC avtomatizacija",
        title: "Za proces, ki preseže eno celico.",
        body: "Rešitev združi več strojev, gibanje, različne kose, dodatne postaje, tok materiala in povezavo z obstoječo opremo.",
        link: { label: "Poglej namenske sisteme", routeKey: "solutionCustomSystems" },
      },
    },
    {
      type: "crossSell",
      id: "standardna-osnova",
      eyebrow: "CNC stroji",
      heading: "FLEX 7 CNC Slim",
      body: "Na voljo z robotom nosilnosti 7 ali 10 kg, glede na velikost obdelovancev.",
      right: {
        kind: "image",
        src: "/images/systems/raw/flex-7-cnc-slim-studio.png",
        alt: "FLEX 7 CNC Slim",
        reversed: true,
        size: "feature",
        link: { label: "Poglej FLEX 7 CNC Slim", routeKey: "standardCellsCnc" },
      },
    },
    {
      type: "proofProject",
      id: "projekt",
      eyebrow: "Realizirani projekt",
      heading: "Vhodno-izhodna tračna proga.",
      tag: "CNC, cobot in tok materiala",
      title: "Več avtonomije ob različnih CNC strojih.",
      body: "Tračna proga za standardne KLT zaboje podpira kolaborativno celico ob različnih CNC strojih. Z integrirano kamero in TM robotom omogoča samostojno neprekinjeno obratovanje z različnimi obdelovanci.",
      result: "Sistem uporablja pet vhodnih in pet izhodnih KLT zabojev dimenzije 600 × 400 mm.",
      image: { src: "/images/systems/raw/vhodno-izhodna-tracna-proga.png", alt: "Vhodno-izhodna tračna proga", objectPosition: "object-[50%_38%]" },
      routeKey: "referenceConveyor",
      readMoreLabel: "Preberi projekt",
      chrome: "open",
      resultTone: "quiet",
    },
  ],
  kontakt: {
    eyebrow: "Kontakt",
    heading: "Poglejmo vaš CNC proces.",
    body: "Pošljite nam osnovne informacije o strojih, kosih, dodatnih operacijah in toku materiala. Skupaj ocenimo, ali proces pokrije standardna celica ali širša CNC avtomatizacija.",
    ctaLabel: "Pošljite povpraševanje",
    mailto: "info@flexido.eu",
    imageSrc: "/images/flexido/legacy/image_8.jpg.jpeg",
    imageAlt: "CNC avtomatizacija proizvodnega procesa",
    captionEyebrow: "Prvi korak",
    captionText: "Kje se morajo CNC stroji, kosi in tok materiala povezati v en proces?",
    variant: "photo",
  },
};
