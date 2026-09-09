import type { SystemsHubContent } from "../types";

/**
 * Semantic reframe: the five commercial offers span robotske celice (CNC,
 * IMM, FLEX 25/50), a kolaborativna robotska platforma (TMX), and a
 * povezovalni sloj (Middleware) — not five "cells". Card `title` carries the
 * product name and `eyebrow` carries the category, matching the taxonomy
 * already established in `/e-katalog` (`offerTypes` in its page.tsx before
 * that route was consolidated into this hub).
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
      "Ponudba obsega standardne robotske celice za strego CNC strojev in strojev za brizganje plastike, kolaborativno robotsko platformo TMX ter povezovalni sloj Middleware za povezavo opreme, transporta in ERP oziroma proizvodnih sistemov.",
      "Izmenljiv Station System omogoča prilagoditev z moduli, prijemali in postajami glede na stroj, kos in konkreten potek proizvodnje.",
    ],
  },
  cardsHeading: {
    eyebrow: "Vrste sistemov",
    heading: "Izberite sistem glede na nalogo.",
  },
  cardLinkLabel: "Poglej sistem",
  cards: [
    { routeKey: "standardCellsCnc", systemSlug: "flex-7-cnc", title: "FLEX 7 CNC Slim", eyebrow: "Robotska celica", desc: "Kompaktna robotska celica za strego CNC strojev, nalaganje, odvzem in stabilnejši tok kosov." },
    { routeKey: "standardCellsImm", systemSlug: "flex-7-imm", title: "FLEX 7 IMM Slim", eyebrow: "Robotska celica", desc: "Robotska celica za strego strojev za brizganje plastike, odvzem kosov, insert moulding in kontrolo." },
    { routeKey: "standardCellsFlex2550", systemSlug: "flex-25-50", title: "FLEX 25 / 50", eyebrow: "Robotska celica", desc: "Fleksibilna robotska celica za srednje in zahtevnejše aplikacije z večjo nosilnostjo in možnostjo dodatnih modulov." },
    { routeKey: "standardCellsTmx", systemSlug: "tmx", title: "TMX", eyebrow: "Kolaborativna robotska platforma", desc: "Mobilna kolaborativna robotska platforma za pick and place, enostavno montažo, kontrolo kakovosti in pomoč operaterju." },
    { routeKey: "standardCellsMiddleware", systemSlug: "middleware", title: "Middleware", eyebrow: "Povezovalni sloj", desc: "Povezovalni sloj med proizvodno opremo, transportnimi enotami, postajami in ERP oziroma proizvodnimi sistemi." },
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
          "Bowl feeder",
          "Stacker",
          "Cleaning station",
          "Engraving",
          "Infeed sorting station",
          "Conveyor",
          "Buffer",
          "Storage lift",
        ],
      },
      {
        title: "Prijem in kontrola",
        items: ["Gripper", "Vision system", "3D safety scanner"],
      },
      {
        title: "Vmesniki",
        items: ["Interfaces"],
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
