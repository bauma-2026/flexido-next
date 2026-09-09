import type { SolutionPageContent } from "../types";

/** Faithful structural port of `app/(default)/resitve/logistika/page.tsx`. */
export const logisticsContent: SolutionPageContent = {
  routeKey: "solutionLogistics",
  hero: {
    backLabel: "← Vse rešitve",
    eyebrow: "Interna logistika",
    titleLines: ["Material med proizvodnimi fazami."],
    subhead:
      "Zasnovali smo fizični tok palet, zabojev, KLT vsebnikov in materiala med stroji, postajami in naslednjimi fazami procesa.",
    ctas: [{ label: "Poglej tok materiala", anchor: "#tok-materiala" }],
    videoSrc: "/video/flexido/hero-logistika.mp4",
  },
  wikiNav: [
    { id: "tok-materiala", label: "Tok materiala" },
    { id: "sistemi", label: "Sistemi" },
    { id: "izvedbe", label: "Prevzem" },
    { id: "paletizacija", label: "Paletizacija" },
    { id: "povezovanje", label: "Povezovanje" },
    { id: "projekt", label: "Projekt" },
  ],
  sections: [
    {
      type: "problemSplit",
      id: "tok-materiala",
      eyebrow: "Logistika proizvodnje",
      heading: "Material mora priti do naslednje faze.",
      body: [
        "Ko stroji in postaje delujejo ločeno, material čaka med operacijami, se kopiči na vmesnih mestih ali se premika brez jasnega načina predaje.",
        "Interna logistika določi, kako se tok poveže med posameznimi fazami.",
      ],
      itemsEyebrow: "Kje nastajajo zastoji",
      items: [
        "Material čaka med operacijami",
        "Postaje niso povezane v en tok",
        "Zaboji ali palete čakajo na naslednjo fazo",
        "Transport in proizvodnja nista usklajena",
      ],
      result: "Rezultat: dokler faze niso povezane, material čaka med operacijami.",
    },
    {
      type: "capabilityGroups",
      id: "sistemi",
      eyebrow: "Fizični tok materiala",
      heading: "Elementi, ki povežejo proizvodne faze.",
      body: "Materialni tok sestavimo iz elementov, ki jih zahtevajo konkretni stroji, enote materiala in pot skozi proizvodnjo. Pri mobilnem transportu ločimo vodene poti od avtonomnih mobilnih enot, ki navigirajo z onboard senzoriko, dinamično prilagajajo pot in varno delujejo v okolju z ljudmi — brez fiksne vodilne infrastrukture, kjer je to smiselno.",
      groups: [
        { title: "KLT, zaboji in palete", body: "Enote materiala, ki morajo med fazami ostati v določenem toku." },
        { title: "Trakovi in transportne poti", body: "Povezave med stroji, postajami in predajnimi mesti." },
        { title: "Bufferji in vmesno skladiščenje", body: "Mesta, kjer material počaka, se zbere ali pripravi za naslednjo fazo." },
        { title: "Skladiščni in dvižni sistemi", body: "Organizacija materiala, kadar proces zahteva več nivojev ali vmesno hrambo." },
        {
          title: "Mobilni transport (AMR / SDV)",
          body: "Avtonomne mobilne enote za pot med območji. Nosilnost in izvedba se prilagajajo okolju — od brizgalnic do CNC obratov.",
        },
        { title: "Povezava strojev in postaj", body: "Usklajen tok od izvora materiala do naslednje operacije." },
      ],
    },
    {
      type: "capabilityGroups",
      id: "izvedbe",
      eyebrow: "Konfiguracije prevzema",
      heading: "Kako mobilni transport poveže sprejemno enoto.",
      body: "Pri prevzemu na sprejemni enoti izberemo izvedbo glede na operacijo, ritm procesa in raven avtomatizacije. To so implementacijski vzorci, ne standardni produkti ali reference.",
      layout: "openColumns",
      groups: [
        {
          title: "Ročno posluževanje",
          body: "Sprejemna enota z dostavo tovora mobilnim transportom. Operater na postaji opravi ročni korak predaje ali obdelave.",
        },
        {
          title: "Stacionarni robot",
          body: "Fiksni industrijski ali kolaborativni robot na sprejemni enoti prevzame predajo tovora iz mobilnega transporta.",
        },
        {
          title: "Premični robot",
          body: "Robot ali cobot na linearni osi ob sprejemni enoti; mobilni transport dovozi ali odvzame tovor na predajnem mestu.",
        },
      ],
    },
    {
      type: "capabilityGroups",
      id: "paletizacija",
      eyebrow: "Paletizacija in depaletizacija",
      heading: "Paleta je del širšega toka materiala.",
      body: "Paletizacija združi pripravo materiala, nalaganje, vmesno hrambo, transport in naslednjo fazo. Depaletizacija je obraten proces v istem logističnem kontekstu.",
      layout: "openColumns",
      groups: [
        {
          title: "Zaznavanje in varnost",
          items: [
            "Vision sistem za fleksibilno prepoznavanje in krajše menjalne čase",
            "3D varnostna senzorika za varno delo z operaterji",
            "Delna ali popolna avtomatizacija, odvisno od procesa",
          ],
        },
        {
          title: "Postaje in avtonomija",
          items: [
            "Ena ali dve nalagalne postaje na paleti",
            "Zalogovnik praznih palet za daljše avtonomno delovanje",
            "Avtomatsko povijanje palete s folijo na izhodu",
          ],
        },
        {
          title: "Povezava s transportom",
          items: [
            "Avtomatski dovoz in odvoz palet z mobilnim transportom",
            "Depaletizacija kot obraten proces v istem toku",
            "Primerno za skladišča, predelovalne in prehrambene linije",
          ],
        },
      ],
    },
    {
      type: "crossSell",
      id: "povezovanje",
      eyebrow: "Povezovanje sistemov",
      heading: "Fizični tok potrebuje usklajene predaje.",
      body: "Za usklajen potek je treba vedeti, od kod material prihaja, kam je namenjen, kdaj je na voljo in kako se preda med proizvodno ter transportno opremo.",
      right: {
        kind: "box",
        tag: "Middleware",
        title: "Povezovalni sloj za opremo in sisteme.",
        body: "Middleware povezuje proizvodno opremo, transportne enote, postaje in proizvodne sisteme. Produktne podrobnosti, vmesniki in transportna naročila so na strani Middleware.",
        link: { label: "Poglej Middleware", routeKey: "standardCellsMiddleware" },
      },
    },
    {
      type: "proofProject",
      id: "projekt",
      eyebrow: "Realizirani projekt",
      heading: "Vhodno-izhodna tračna proga.",
      tag: "CNC, KLT in tok materiala",
      title: "KLT zaboji ob različnih CNC strojih.",
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
    heading: "Kako material potuje skozi vaš proces?",
    body: "Pošljite nam osnovne informacije o materialu, zabojnikih ali paletah, izvoru in cilju, postajah, mestih čakanja ter trenutnem načinu transporta.",
    ctaLabel: "Pošljite povpraševanje",
    mailto: "info@flexido.eu",
    imageSrc: "/images/flexido/legacy/home-slide-v2-2.jpg.jpeg",
    imageAlt: "Interna logistika in tok materiala v proizvodnji",
    captionEyebrow: "Prvi korak",
    captionText: "Kje material čaka, se hrani ali prehaja v naslednjo fazo?",
    variant: "photo",
  },
};
