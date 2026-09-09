import type { ProcessPageContent } from "./types";

export const processContent: ProcessPageContent = {
  routeKey: "process",
  meta: {
    title: "Proces | Flexido",
    description:
      "Avtomatizacija ima največji učinek takrat, ko najprej razumemo, kje proizvodnja izgublja ritem — šele nato izberemo tehnologijo, robotiko ali sistem.",
  },
  hero: {
    eyebrow: "Proces",
    heading: "Najprej proces. Potem rešitev.",
    subhead:
      "Avtomatizacija ima največji učinek takrat, ko najprej razumemo, kje proizvodnja izgublja ritem — šele nato izberemo tehnologijo, robotiko ali sistem.",
    primaryCta: { label: "Poglejmo vaš proces →", href: "#kontakt" },
    secondaryCta: { label: "Kako poteka projekt →", href: "#koraki" },
    videoSrc: "/video/flexido/hero-proces.mp4",
  },
  intro: {
    eyebrow: "Naš pristop",
    heading: "Ne začnemo pri robotu.",
    paragraphs: [
      "Robot, celica ali transportni sistem niso cilj sami po sebi. Cilj je proizvodni tok, ki deluje bolj stabilno, predvidljivo in z manj ročnega usklajevanja.",
      "Zato najprej pogledamo proces kot celoto: stroje, material, operaterje, podatke, prostor in mesta, kjer nastajajo zastoji.",
    ],
  },
  steps: {
    id: "koraki",
    eyebrow: "Kako poteka projekt",
    heading: "Od pregleda procesa do delujoče rešitve.",
    body: "Postopek prilagodimo projektu, vendar logika ostane enaka: najprej razumemo proces, nato zasnujemo in izvedemo rešitev.",
    items: [
      {
        number: "01",
        title: "Pregled procesa",
        desc: "Najprej pogledamo, kje nastajajo zastoji, ročni koraki, čakanje ali nejasen tok materiala.",
      },
      {
        number: "02",
        title: "Zasnova rešitve",
        desc: "Določimo, kateri del procesa ima največji učinek za avtomatizacijo — brez nepotrebne kompleksnosti.",
      },
      {
        number: "03",
        title: "Integracija v proizvodnjo",
        desc: "Rešitev povežemo z obstoječimi stroji, operaterji, prostorom in realnim ritmom dela.",
      },
      {
        number: "04",
        title: "Zagon in podpora",
        desc: "Sistem zaženemo, stabiliziramo v praksi in po potrebi prilagodimo spremembam v proizvodnji.",
      },
    ],
  },
  principles: {
    eyebrow: "Zakaj tako",
    heading: "Rešitev mora slediti procesu.",
    items: [
      {
        title: "Najprej proces",
        desc: "Ne začnemo z izbiro robota, ampak z razumevanjem toka dela.",
      },
      {
        title: "Manj improvizacije",
        desc: "Cilj je stabilen proces, kjer so premiki, čakanje in odgovornosti jasni.",
      },
      {
        title: "Rešitev za prakso",
        desc: "Sistem mora delovati v realni proizvodnji, ne samo v predstavitvi.",
      },
    ],
  },
  proof: {
    eyebrow: "Reference",
    heading: "Rešitve v praksi.",
    body: "Poglejte izvedene projekte in kako je bil ta proces že izpeljan v realni proizvodnji.",
    ctaLabel: "Oglejte si reference →",
  },
  cta: {
    id: "kontakt",
    eyebrow: "Naslednji korak",
    heading: "Poglejmo vaš proces",
    body: "Če veste, kje se proces ustavlja, lahko skupaj preverimo, katera rešitev ima največ smisla za naslednji korak.",
    label: "Pošljite povpraševanje →",
    mailto: "info@flexido.eu",
  },
};
