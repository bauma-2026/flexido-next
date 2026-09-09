import type { SystemsHubContent } from "../types";

export const hubSystemsContent: SystemsHubContent = {
  meta: {
    title: "Standard automation systems | Flexido",
    description:
      "An overview of Flexido's standard automation systems — robot cells, a collaborative robot platform, and a connecting layer — for repeatable production processes.",
  },
  hero: {
    eyebrow: "Program",
    heading: "Standard systems for automation.",
    subhead:
      "Five standard starting points — robot cells, a collaborative robot platform, and a connecting layer — adapted to the machine, part, and production process.",
    media: { kind: "image", src: "/images/flexido/legacy/s-1.jpg.jpeg", alt: "Flexido standard automation systems" },
  },
  intro: {
    eyebrow: "Offering",
    heading: "We choose the system based on the process.",
    paragraphs: [
      "The offering spans standard robot cells for tending CNC machines and injection molding machines, the TMX collaborative robot platform, and the Middleware connecting layer linking equipment, transport, and ERP or production systems.",
      "The interchangeable Station System allows adaptation with modules, grippers, and stations to match the machine, part, and specific production flow.",
    ],
  },
  cardsHeading: {
    eyebrow: "System types",
    heading: "Choose a system based on the task.",
  },
  cardLinkLabel: "View system",
  cards: [
    { routeKey: "standardCellsCnc", systemSlug: "flex-7-cnc", title: "FLEX 7 CNC Slim", eyebrow: "Robot cell", desc: "A compact robot cell for tending CNC machines — loading, unloading, and a more stable part flow." },
    { routeKey: "standardCellsImm", systemSlug: "flex-7-imm", title: "FLEX 7 IMM Slim", eyebrow: "Robot cell", desc: "A robot cell for tending injection molding machines — part removal, insert moulding, and inspection." },
    { routeKey: "standardCellsFlex2550", systemSlug: "flex-25-50", title: "FLEX 25 / 50", eyebrow: "Robot cell", desc: "A flexible robot cell for medium and more demanding applications, with higher payload capacity and the option of additional modules." },
    { routeKey: "standardCellsTmx", systemSlug: "tmx", title: "TMX", eyebrow: "Collaborative robot platform", desc: "A mobile collaborative robot platform for pick and place, simple assembly, quality inspection, and operator assistance." },
    { routeKey: "standardCellsMiddleware", systemSlug: "middleware", title: "Middleware", eyebrow: "Connecting layer", desc: "A connecting layer between production equipment, transport units, stations, and ERP or production systems." },
  ],
  modules: {
    eyebrow: "Modules and technical elements",
    heading: "We build the system from the right elements.",
    paragraphs: [
      "We extend a cell or platform with the elements the specific production flow requires.",
    ],
    groups: [
      {
        title: "Stations and transport",
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
        title: "Gripping and inspection",
        items: ["Gripper", "Vision system", "3D safety scanner"],
      },
      {
        title: "Interfaces",
        items: ["Interfaces"],
      },
    ],
  },
  kontakt: {
    eyebrow: "Contact",
    heading: "Not sure which system is right for you?",
    body: "Together we look at your machine, part, loading method, and the space around the machine — then it's easier to determine which standard cell, platform, or connecting solution makes the most sense.",
    ctaLabel: "Send an inquiry",
    mailto: "info@flexido.eu",
    imageSrc: "/images/flexido/legacy/s-3.jpg.jpeg",
    imageAlt: "Standard automation system in production",
    captionEyebrow: "First step",
    captionText: "Which system best fits your production task?",
    secondaryCta: { label: "See the solutions →", routeKey: "solutions" },
  },
};
