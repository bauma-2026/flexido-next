import type { HomePageContent } from "./types";

/** Mirrors the live SL homepage copy in `src/components/blocks/home/*.tsx`. */
export const homeContent: HomePageContent = {
  meta: {
    title: "Flexido — Avtomatizacija proizvodnih procesov",
    description:
      "Urejamo in avtomatiziramo proizvodne procese — od posameznega stroja do povezanega toka materiala, ljudi in podatkov.",
  },
  hero: {
    eyebrow: "Avtomatizacija proizvodnje",
    titleLines: ["Povežemo tok med stroji.", "Ne samo robot ob stroju."],
    titleMobile: "Stroje povežemo v proizvodni tok.",
    subhead:
      "Izdelujemo standardne robotske celice in celice po naročilu — ter jih povežemo v stabilen tok med stroji, z manj čakanja med posameznimi fazami.",
    subheadMobile:
      "Ne samo robot ob stroju. Standardne in namenske robotske celice, povezane v stabilen tok — z manj čakanja med fazami.",
    slogan: "Od pregleda procesa do zagona sistem načrtuje, integrira in zažene ena ekipa.",
    ctaPrimary: "Poglejmo vaš proces",
    ctaSecondary: "Kako poteka projekt",
  },
  trustStrip: {
    label: "Certifikati",
    items: [
      {
        href: "https://www.flexido.eu/images/pdf/FLEXIDO-9001-CERT-Certificate-SLO-24092021.pdf",
        src: "/logos/funding/bureau-veritas-iso9001.svg",
        alt: "ISO 9001 Bureau Veritas Certification",
        external: true,
      },
    ],
  },
  solutions: {
    eyebrow: "Rešitve",
    title: "Kje lahko avtomatizacija pomaga",
    desc: "Od posameznega stroja do povezanih faz proizvodnje najprej preverimo, kje proces izgublja čas, stabilnost ali predvidljivost.",
    compactReadMoreLabel: "Preberi več",
    compactItems: [
      {
        routeKey: "solutionCnc",
        title: "CNC stroji",
        desc: "Nalaganje, odvzem in boljši izkoristek stroja.",
        icon: "cnc",
      },
      {
        routeKey: "solutionInjectionMolding",
        title: "Brizganje plastike",
        desc: "Stabilen cikel, odvzem kosov in manj ročnega dela.",
        icon: "imm",
      },
      {
        routeKey: "solutionManipulation",
        title: "Manipulacija materiala",
        desc: "Premikanje, obračanje in prenos kosov med fazami.",
        icon: "manipulation",
      },
      {
        routeKey: "solutionLogistics",
        title: "Paletizacija in interna logistika",
        desc: "Ko material ne teče gladko skozi proizvodnjo.",
        icon: "materialFlow",
      },
    ],
    bridge: "Standardna robotska celica je lahko izhodišče, nato jo prilagodimo stroju, kosu in dejanskim pogojem proizvodnje.",
  },
  productProof: {
    eyebrow: "Sistemi",
    heading: "Od standardne celice do izvedbe v proizvodnji.",
    body:
      "Izhajamo iz standardne robotske celice in jo prilagodimo kosu, prostoru ter obstoječi opremi.",
    viewAllLabel: "Poglej vse sisteme",
    viewAllRouteKey: "standardCells",
    viewSystemLabel: "Poglej sistem",
    systems: [
      {
        slug: "flex-7-cnc",
        category: "CNC stroji",
        shortDescription:
          "Kompaktna robotska celica za strego CNC strojev, nalaganje, odvzem in stabilen tok kosov.",
        routeKey: "standardCellsCnc",
      },
      {
        slug: "flex-7-imm",
        category: "Brizganje plastike",
        shortDescription:
          "Kompaktna robotska celica za strego strojev za brizganje plastike, odvzem kosov, insert moulding in kontrolo.",
        routeKey: "standardCellsImm",
      },
    ],
  },
  competencies: {
    eyebrow: "Kompetence",
    heading: "Kaj obvladamo znotraj projekta",
    intro: "Konstrukcijo, programiranje, integracijo in zagon izvaja ista ekipa.",
    items: [
      "Izvedba študije izvedljivosti",
      "Konstruiranje",
      "Elektro projektiranje",
      "Programiranje robotov in PLC-jev",
      "Sistemi pametnega vida",
      "Projektno vodenje",
    ],
    developmentProjectsLabel: "Oglejte si reference",
  },
  process: {
    eyebrow: "Proces",
    title: "Od pregleda procesa do podpore po zagonu",
    desc: "Začnemo pri procesu in rešitev vodimo do zagona ter podpore v proizvodnji.",
    steps: [
      {
        step: "01",
        title: "Pregled procesa",
        desc: "Pregledamo stroj, kos, tok materiala, prostor in mesta, kjer proces izgublja ritem.",
      },
      {
        step: "02",
        title: "Določitev rešitve",
        desc: "Določimo rešitev, ki ustreza konkretnemu stroju, kosu, prostoru in dodatnim operacijam.",
      },
      {
        step: "03",
        title: "Izvedba in integracija",
        desc: "Sistem povežemo z obstoječimi stroji, umestimo v prostor in uskladimo z dejanskim ritmom dela operaterjev.",
      },
      {
        step: "04",
        title: "Zagon in podpora",
        desc: "Sistem zaženemo, stabiliziramo v realni proizvodnji ter nudimo servisno in poprodajno podporo.",
      },
    ],
    fullProcessLabel: "Celoten proces",
  },
  finalCta: {
    eyebrow: "Kontakt",
    heading: "Poglejmo vaš proces",
    body:
      "Pošljite kratek opis procesa, stroja in kosa. Ocenimo izgube časa in stabilnosti, obseg ročnega dela ter ali je avtomatizacija smiselna.",
    ctaLabel: "Pošljite opis procesa",
    imageCaptionEyebrow: "Prvi pregled",
    imageCaption: "Kje proces izgublja čas, material ali stabilen ritem?",
  },
  fundingCertification: {
    eyebrow: "Sofinanciranje",
    quote:
      "»Podjetje Flexido d.o.o. je pridobilo sofinanciranje upravičenih stroškov preko Vavčerja za pridobitev certifikatov. Naložbo sofinancirata Republika Slovenija in Evropska unija iz Evropskega sklada za regionalni razvoj.«",
    projectFundingLabel: "Sofinanciranje projekta",
    developmentSupportLabel: "Razvojna podpora",
    legalNote:
      "Naložbo sofinancira Republika Slovenija in Evropska unija iz Evropskega sklada za regionalni razvoj. Več lahko najdete na",
    legalNoteLinkHref: "https://www.eu-skladi.si",
    legalNoteLinkLabel: "www.eu-skladi.si",
  },
};

/** @deprecated Use `homeContent.hero` — kept for any legacy imports. */
export const homeHero = homeContent.hero;
