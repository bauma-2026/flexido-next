import type { SystemsHubContent } from "../types";

/**
 * Semantic reframe: the five commercial offers span robotske celice (CNC,
 * IMM, FLEX 25/50), a kolaborativna robotska platforma (TMX), and a
 * povezovalni sloj (Middleware) — not five "cells". Card `title` carries the
 * product name; card `eyebrow` carries the task/type that distinguishes the
 * card in the catalogue (repeated "Robotska celica" on the three cells did
 * not). Matches the taxonomy already established when `/e-katalog` was
 * consolidated into this hub.
 */
export const hubSystemsContent: SystemsHubContent = {
  meta: {
    title: "Standardni sistemi za avtomatizacijo | Flexido",
    description:
      "Pregled standardnih sistemov za avtomatizacijo — robotskih celic, kolaborativne platforme in povezovalnega sloja — za ponovljive proizvodne procese.",
  },
  hero: {
    eyebrow: "Program",
    heading: "Standardni sistemi za avtomatizacijo.",
    subhead:
      "Pet standardnih izhodišč — robotske celice, kolaborativna platforma in povezovalni sloj — ki jih prilagodimo stroju, kosu in proizvodnemu procesu.",
    media: { kind: "image", src: "/images/flexido/legacy/s-1.jpg.jpeg", alt: "Standardni sistemi za avtomatizacijo Flexido" },
  },
  intro: {
    eyebrow: "Ponudba",
    heading: "Sistem izberemo glede na proces.",
    paragraphs: [
      "Program združuje standardne robotske celice, mobilno robotsko platformo in povezovalni sloj med opremo, transportom ter proizvodnimi sistemi.",
      "Standardna platforma je izhodišče, ki ga prilagodimo stroju, kosu, prostoru in procesu.",
      "Kadar mora več operacij ali postaj delovati usklajeno, zasnujemo namenski sistem.",
    ],
  },
  cardsHeading: {
    eyebrow: "Vrste sistemov",
    heading: "Izberite sistem glede na nalogo.",
  },
  cardLinkLabel: "Poglej sistem",
  cards: [
    { routeKey: "standardCellsCnc", systemSlug: "flex-7-cnc", title: "FLEX 7 CNC Slim", eyebrow: "CNC stroji", desc: "Kompaktna robotska celica za strego CNC strojev, nalaganje, odvzem in stabilnejši tok kosov." },
    { routeKey: "standardCellsImm", systemSlug: "flex-7-imm", title: "FLEX 7 IMM Slim", eyebrow: "Brizganje plastike", desc: "Robotska celica za strego strojev za brizganje plastike, odvzem kosov, insert moulding in kontrolo." },
    { routeKey: "standardCellsFlex2550", systemSlug: "flex-25-50", title: "FLEX 25 / 50", eyebrow: "25 / 50 kg nosilnosti", desc: "Konfigurabilna robotska celica z robotom nosilnosti 25 ali 50 kg, kadar FLEX 7 ne pokrije potrebne nosilnosti, dosega ali opcij." },
    { routeKey: "standardCellsTmx", systemSlug: "tmx", title: "TMX", eyebrow: "Kolaborativna robotska platforma", desc: "Kolaborativni robot na mobilni platformi za naloge ob obstoječi opremi in na različnih delovnih mestih." },
    { routeKey: "standardCellsMiddleware", systemSlug: "middleware", title: "Middleware", eyebrow: "Povezovalni sloj", desc: "Povezuje opremo, mobilni transport, skladiščne in buffer enote ter ERP. Izmenjuje transportna naročila, stanje postaj in kontekst materiala." },
  ],
  modules: {
    eyebrow: "Moduli in tehnični elementi",
    heading: "Sistem sestavimo iz pravih elementov.",
    paragraphs: [
      "Celico ali platformo dopolnimo z elementi, ki jih zahteva konkreten potek proizvodnje.",
    ],
    groups: [
      {
        title: "Postaje in transport",
        items: [
          "Vibro posoda",
          "Stacker",
          "Čistilna postaja",
          "Graviranje",
          "Dovodna sortirna postaja",
          "Transporter",
          "Buffer",
          "Storage lift",
        ],
      },
      {
        title: "Prijem in kontrola",
        items: ["Prijemalo", "Vision system", "3D varnostni skener"],
      },
      {
        title: "Vmesniki",
        items: ["Vmesniki"],
      },
    ],
  },
  kontakt: {
    eyebrow: "Kontakt",
    heading: "Niste prepričani, kateri sistem je pravi?",
    body: "Skupaj pogledamo vaš stroj, kos, način nalaganja in prostor ob stroju — potem lažje določimo, katera standardna celica, platforma ali povezovalna rešitev je najbolj smiselna.",
    ctaLabel: "Pošljite povpraševanje",
    mailto: "info@flexido.eu",
    imageSrc: "/images/flexido/legacy/s-3.jpg.jpeg",
    imageAlt: "Standardni sistem za avtomatizacijo v proizvodnji",
    captionEyebrow: "Prvi korak",
    captionText: "Kateri sistem najbolje ustreza vaši proizvodni nalogi?",
    secondaryCta: { label: "Poglej rešitve →", routeKey: "solutions" },
  },
};
