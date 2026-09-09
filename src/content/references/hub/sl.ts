import type { ReferencesHubContent } from "../types";

export const referencesHubContent: ReferencesHubContent = {
  routeKey: "references",
  meta: {
    title: "Reference | Flexido",
    description:
      "Avtomatizacija ima vrednost šele takrat, ko v praksi izboljša tok dela, zmanjša ročne prekinitve in naredi proces bolj stabilen.",
  },
  hero: {
    eyebrow: "Reference",
    heading: "Rešitve iz realne proizvodnje.",
    subhead:
      "Avtomatizacija ima vrednost šele takrat, ko v praksi izboljša tok dela, zmanjša ročne prekinitve in naredi proces bolj stabilen.",
    primaryCta: { label: "Poglej rešitve →", href: "/resitve" },
    secondaryCta: { label: "Poglejmo vaš proces →", href: "#kontakt" },
    videoSrc: "/video/flexido/hero-home.mp4",
  },
  projects: {
    eyebrow: "Realizirani projekti",
    heading: "Konkretni primeri iz proizvodnje.",
    body: "Tri realizacije, ki so že dokumentirane v Flexido vsebini.",
    readMoreLabel: "Preberi projekt",
  },
  areas: {
    eyebrow: "Področja",
    heading: "Kje se rešitve najpogosteje pokažejo v praksi",
    body: "Reference je smiselno razumeti po delu procesa, kjer nastaja učinek — ne samo po uporabljeni tehnologiji.",
    linkLabel: "Preberi več →",
    items: [
      { title: "CNC avtomatizacija", body: "Nalaganje, odvzem in stabilnejši tok kosov okoli CNC strojev.", routeKey: "solutionCnc" },
      { title: "Brizganje plastike", body: "Odvzem, odlaganje in tok kosov po ciklu brizganja.", routeKey: "solutionInjectionMolding" },
      { title: "Manipulacija materiala", body: "Prijemanje, prestavljanje, obračanje, pozicioniranje in odlaganje kosov.", routeKey: "solutionManipulation" },
      { title: "Interna logistika", body: "Ureditev toka materiala med fazami, stroji in postajami.", routeKey: "solutionLogistics" },
      { title: "Kolaborativni roboti", body: "Prevzem ponavljajočih nalog, kjer operater ostane v nadzoru procesa.", routeKey: "solutionCobots" },
      { title: "Namenski sistemi", body: "Rešitve po meri procesa, prostora, kosov in obstoječih strojev.", routeKey: "solutionCustomSystems" },
    ],
  },
  principles: {
    eyebrow: "Kaj šteje kot referenca",
    heading: "Rešitev mora delovati v praksi.",
    items: [
      { title: "Realna proizvodnja", desc: "Rešitve morajo delovati v dejanskih proizvodnih pogojih, ne samo v predstavitvi." },
      { title: "Celovit proces", desc: "Pomemben ni samo en stroj, ampak tok med fazami, materialom in ljudmi." },
      { title: "Podpora po zagonu", desc: "Sistem mora ostati uporaben tudi po predaji in spremembah v proizvodnji." },
    ],
  },
  cta: {
    id: "kontakt",
    eyebrow: "Kontakt",
    heading: "Poglejmo vaš proces",
    body: "Če veste, kje se proces ustavlja, lahko skupaj preverimo, katera rešitev ima največ smisla za naslednji korak.",
    label: "Pošljite povpraševanje →",
    mailto: "info@flexido.eu",
  },
};
