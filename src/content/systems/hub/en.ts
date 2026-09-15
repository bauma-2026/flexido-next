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
      "The program combines standard robot cells, a mobile robotic platform, and a connecting layer between equipment, transport, and production systems.",
      "A standard platform is the starting point, adapted to the machine, part, space, and process.",
      "When several operations or stations need to work together in a coordinated way, we design a custom-built system.",
    ],
  },
  cardsHeading: {
    eyebrow: "System types",
    heading: "Choose a system based on the task.",
  },
  cardLinkLabel: "View system",
  cards: [
    { routeKey: "standardCellsCnc", systemSlug: "flex-7-cnc", title: "FLEX 7 CNC Slim", eyebrow: "CNC machines", desc: "A compact robot cell for tending CNC machines — loading, unloading, and a more stable part flow." },
    { routeKey: "standardCellsImm", systemSlug: "flex-7-imm", title: "FLEX 7 IMM Slim", eyebrow: "Injection molding", desc: "A robot cell for tending injection molding machines — part removal, insert moulding, and inspection." },
    { routeKey: "standardCellsFlex2550", systemSlug: "flex-25-50", title: "FLEX 25 / 50", eyebrow: "25 / 50 kg payload", desc: "A configurable robot cell with a 25 or 50 kg payload robot when FLEX 7 does not cover the required payload, reach, or options." },
    { routeKey: "standardCellsTmx", systemSlug: "tmx", title: "TMX", eyebrow: "Collaborative robot platform", desc: "A collaborative robot on a mobile platform for tasks alongside existing equipment and across different work areas." },
    { routeKey: "standardCellsMiddleware", systemSlug: "middleware", title: "Middleware", eyebrow: "Connecting layer", desc: "Connects equipment, mobile transport, storage and buffer units, and ERP. Exchanges transport orders, station status, and material context." },
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
