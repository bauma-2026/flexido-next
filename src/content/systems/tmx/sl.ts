import type { SystemPageContent } from "../types";

/**
 * New page. Authored from `src/data/flexido-systems.ts`'s `tmx` entry and
 * the framing already used in `src/content/solutions/cobots/sl.ts`'s "tmx"
 * product cross-sell block.
 */
export const tmxSystemContent: SystemPageContent = {
  routeKey: "standardCellsTmx",
  meta: {
    title: "TMX | Flexido",
    description: "Mobilna kolaborativna robotska platforma za naloge, kjer je pomembna uporaba na različnih mestih v proizvodnji.",
  },
  backLabel: "← Standardne celice",
  hero: {
    eyebrow: "Standardne robotske celice",
    heading: "TMX",
    subhead: "Mobilna kolaborativna robotska platforma za naloge, kjer je pomembna uporaba na različnih mestih v proizvodnji.",
    media: { kind: "image", src: "/images/systems/raw/tmx-studio-hero.png", alt: "TMX kolaborativna robotska platforma" },
  },
  intro: {
    eyebrow: "Mobilna avtomatizacija",
    heading: "Mobilna platforma za naloge ob obstoječi opremi.",
    paragraphs: [
      "Platforma je primerna, kadar naloga ne zahteva polne robotske celice, temveč hitro prestavljivo pomoč ob obstoječi opremi.",
      "V dokumentiranem postopku prestavitve se platforma premakne med postajami. Kamera na postaji prebere lokacijski marker in z njim umeri položaj platforme na novi lokaciji.",
    ],
    image: { src: "/raw/0-tmx.png", alt: "TMX kolaborativna robotska platforma v celoti" },
  },
  product: {
    eyebrow: "Kolaborativna platforma",
    systemSlug: "tmx",
    description:
      "TMX je kolaborativni robot na mobilni platformi, namenjen enostavnim nalogam, kjer so pomembni fleksibilnost, hitra prestavitev in uporaba na različnih mestih v proizvodnji.",
    showTechnical: true,
  },
  itemGrids: [
    {
      role: "applications",
      eyebrow: "Aplikacije",
      heading: "Kje se TMX uporablja.",
      items: ["Pick and place aplikacije", "Kontrola kakovosti", "Enostavne montažne aplikacije"],
    },
    {
      role: "capabilities",
      eyebrow: "Oprema in funkcije",
      heading: "Kaj platforma vključuje.",
      items: [
        "Kolaborativni robot na mobilni platformi",
        "Univerzalno pnevmatsko prijemalo",
        "Integriran 2D vision sistem",
        "Možnost 3D safety scannerja",
        "Nosilci za vmesne sloje",
        "Senzorika za kontrolo aplikacije",
        "Električna omarica",
      ],
    },
  ],
  gallery: {
    role: "options",
    eyebrow: "Opcije",
    heading: "Prijemalo, vmesniki in varnost.",
    alts: [
      "Nosilec za embalažne zaboje",
      "Elektro in pnevmatski vmesniki",
      "3D safety scanner",
    ],
  },
  relatedSolutions: {
    eyebrow: "Povezane rešitve",
    heading: "Kje TMX vstopi v širši proces.",
    linkLabel: "Poglej rešitev",
    items: [
      {
        title: "Kolaborativni roboti",
        body: "Za naloge, kjer se robot premika med različnimi postajami ali delovnimi mesti.",
        routeKey: "solutionCobots",
      },
      {
        title: "Manipulacija materiala",
        body: "Aplikacije vključujejo pick and place, kontrolo kakovosti in enostavne montažne naloge ob obstoječi opremi.",
        routeKey: "solutionManipulation",
      },
    ],
  },
  kontakt: {
    eyebrow: "Kontakt",
    heading: "Je TMX prava rešitev za vašo nalogo?",
    body: "Skupaj pogledamo nalogo, delovno mesto in razpoložljiv prostor — potem ocenimo, ali je mobilna kolaborativna platforma smiselna izbira.",
    ctaLabel: "Pošljite povpraševanje",
    mailto: "info@flexido.eu",
    imageSrc: "/images/systems/raw/tmx-studio.png",
    imageAlt: "TMX kolaborativna robotska platforma",
    captionEyebrow: "Prvi korak",
    captionText: "Katera naloga potrebuje hitro prestavljivo pomoč?",
  },
};
