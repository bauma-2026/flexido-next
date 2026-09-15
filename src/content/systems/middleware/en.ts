import type { SystemPageContent } from "../types";

/**
 * Authored from `src/data/flexido-systems.ts`, e-katalog Middleware section,
 * and legacy e-catalogue-middlewear.pdf (documented platforms — not current commercial claims).
 */
export const middlewareSystemContent: SystemPageContent = {
  routeKey: "standardCellsMiddleware",
  meta: {
    title: "Middleware | Flexido",
    description:
      "A connecting layer between production equipment, transport units, stations, storage, and ERP or production systems.",
  },
  backLabel: "← All standard cells",
  hero: {
    eyebrow: "Connecting layer",
    heading: "Middleware",
    subhead:
      "A connecting layer between production equipment, transport units, stations, storage, and ERP or production systems.",
    media: { kind: "image", src: "/raw/middleware-industrial-robot-1-1.png", alt: "Middleware connectivity layer" },
  },
  intro: {
    eyebrow: "Connecting equipment and systems",
    heading: "Connecting equipment, stations, and data.",
    paragraphs: [
      "Middleware connects automation equipment, mobile transport, storage, buffer stations, and higher-level production or ERP systems into one structured communication layer.",
      "The layer does not replace individual devices — it defines how stations, transport units, and higher-level systems exchange transport orders, station state, and material context.",
    ],
    image: {
      src: "/images/systems/raw/custom-robotic-cell-studio-render.png",
      alt: "Connected automation stations and a robotic cell in a production line",
    },
  },
  product: {
    eyebrow: "Connecting layer",
    systemSlug: "middleware",
    description:
      "Middleware integrates hardware stations, transport platforms, storage, and mechanical buffer units with a transport-order API and connection to higher-level production systems.",
  },
  itemGrids: [
    {
      role: "technical-definitions",
      eyebrow: "Integration layer",
      heading: "How Middleware connects machines, transport, and ERP.",
      items: [
        "Hardware Station Service — standard hardware interface for stations and transport units",
        "Transport order service API — JSON structure or file-based exchange (e.g. FTP)",
        "Backend service — dynamic routing of orders by transport type and cargo type",
        "MWContext Broker — contextual link between production equipment and higher-level systems",
        "ERP / production-system connection — configurable data exchange, not universal ERP support",
      ],
    },
    {
      role: "module-class",
      media: { kind: "image", src: "/raw/middleware-transport-unit-sdv-1.png", alt: "Mobile transport platform SDV/AMR (documented OTTO lines)" },
      eyebrow: "Transport platforms",
      heading: "Documented classes of mobile transport units.",
      items: [
        "OTTO 100 — documented lower-payload platform in the e-catalog (~150 kg)",
        "OTTO 750 / 1500 — documented higher-payload platform (~2000 kg)",
        "OTTO Lifter — documented lifting unit for pallets and vertical handoffs",
        "Fast Charger — documented fast-charging station for AMR/SDV fleets",
      ],
    },
    {
      role: "module-class",
      media: { kind: "video", src: "/video/flexido/hero-logistika.mp4", alt: "Automated storage and transfer in the flow." },
      eyebrow: "Storage and robot transfer",
      heading: "Automated storage and transfer in the flow.",
      items: [
        "WELAND automated storage — automated storage in the documented system",
        "Vertical storage LIFT — height 5–16 m, trays with fixation for transport units",
        "ABB IRB 6700 — documented industrial robot platform for transfer between lift, linear buffer, and palletizing",
      ],
    },
    {
      role: "module-class",
      eyebrow: "Buffer and drop-off",
      heading: "Mechanical units for intermediate storage and handoff.",
      lead: "Linear Buffer (entry/exit) — servo-driven platform, Siemens PLC, end-position sensing",
      tiles: [
        { src: "/raw/middleware-mechanical-buffer-chute-1.png", alt: "Mechanical Buffer Chute", caption: "Mechanical Buffer Chute — LR (count-based) / W (weight-based), two integrated chambers" },
        { src: "/raw/middleware-mechanical-drop-off-unit-1.png", alt: "Mechanical Drop-off unit", caption: "Mechanical Drop-off — vertical axis and rotation, Siemens PLC, automatic line feeding" },
      ],
      items: [],
    },
  ],
  optionGroupsHeading: { eyebrow: "Connected equipment", heading: "Machines, stations, and transport units." },
  detailPanel: {
    placement: "related",
    paragraphs: [
      "The practical integration question is: how does a station know when a mobile unit should arrive, what it should pick up, and how that is reported to a higher-level system? Middleware combines the hardware station interface, transport order service, and backend logic that routes calls by transport and cargo type.",
      "An ERP or production system is not connected through one fixed module — an intermediate layer handles transport-order exchange and context (MWContext Broker), adaptable to existing and new equipment in the same plant.",
    ],
  },
  relatedSolutions: {
    eyebrow: "Related solution",
    heading: "Where Middleware enters the material flow.",
    linkLabel: "See the solution",
    items: [
      {
        title: "Internal logistics",
        body: "How transport platforms, receiving stations, and storage work in the wider material flow between stages.",
        routeKey: "solutionLogistics",
      },
    ],
  },
  kontakt: {
    eyebrow: "Contact",
    heading: "Need to connect equipment and systems?",
    body: "Together we look at your existing and new equipment, transport units, and ERP or production system — then assess how the connection should be designed.",
    ctaLabel: "Send an inquiry",
    mailto: "info@flexido.eu",
    imageSrc: "/images/flexido/legacy/s-3.jpg.jpeg",
    imageAlt: "Connected production equipment and transport units",
    captionEyebrow: "First step",
    captionText: "Which equipment and systems need to be connected?",
  },
};
