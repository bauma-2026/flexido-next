import type { SolutionPageContent } from "../types";

/** Faithful structural port of `app/(default)/resitve/logistika/page.tsx`. */
export const logisticsContent: SolutionPageContent = {
  routeKey: "solutionLogistics",
  hero: {
    backLabel: "← All solutions",
    eyebrow: "Internal logistics",
    titleLines: ["Material between production stages."],
    subhead:
      "We design the physical flow of pallets, containers, KLT bins, and material between machines, stations, and the next stages of the process.",
    ctas: [{ label: "See the material flow", anchor: "#tok-materiala" }],
    videoSrc: "/video/flexido/hero-logistika.mp4",
  },
  wikiNav: [
    { id: "tok-materiala", label: "Material flow" },
    { id: "sistemi", label: "Systems" },
    { id: "izvedbe", label: "Receiving" },
    { id: "paletizacija", label: "Palletizing" },
    { id: "povezovanje", label: "Connectivity" },
    { id: "projekt", label: "Project" },
  ],
  sections: [
    {
      type: "problemSplit",
      id: "tok-materiala",
      eyebrow: "Production logistics",
      heading: "Material has to reach the next stage.",
      body: [
        "When machines and stations operate in isolation, material waits between operations, builds up at intermediate points, or moves without a clear way of being handed off.",
        "Internal logistics defines how the flow is connected between individual stages.",
      ],
      itemsEyebrow: "Where delays appear",
      items: [
        "Material waits between operations",
        "Stations aren't connected into a single flow",
        "Containers or pallets wait for the next stage",
        "Transport and production aren't in sync",
      ],
      result: "until the stages are connected, material waits between operations.",
      resultLabel: "Result",
    },
    {
      type: "capabilityGroups",
      id: "sistemi",
      eyebrow: "Physical material flow",
      heading: "The elements that connect production stages.",
      body: "We assemble the material flow from the elements required by the specific machines, material units, and the path through production. For mobile transport, we distinguish guided paths from autonomous mobile units that navigate with onboard sensing, adapt routes dynamically, and operate safely around people — without fixed guidance infrastructure where that makes sense.",
      groups: [
        { title: "KLT, containers, and pallets", body: "Material units that must stay within a defined flow between stages." },
        { title: "Conveyors and transport paths", body: "Connections between machines, stations, and handoff points." },
        { title: "Buffers and intermediate storage", body: "Places where material waits, gets collected, or is prepared for the next stage." },
        { title: "Storage and lifting systems", body: "Organizing material when the process requires multiple levels or intermediate storage." },
        {
          title: "Mobile transport (AMR / SDV)",
          body: "Autonomous mobile units for travel between areas. Payload and configuration adapt to the environment — from injection molding plants to CNC shops.",
        },
        { title: "Connecting machines and stations", body: "A coordinated flow from the source of the material to the next operation." },
      ],
    },
    {
      type: "capabilityGroups",
      id: "izvedbe",
      eyebrow: "Receiving configurations",
      heading: "How mobile transport connects to the receiving unit.",
      body: "At the receiving unit, the configuration depends on the operation, process rhythm, and level of automation required. These are implementation patterns — not standard products or reference projects.",
      layout: "openColumns",
      groups: [
        {
          title: "Manual tending",
          body: "Receiving unit with load delivery by mobile transport. The operator performs the manual handling step at the station.",
        },
        {
          title: "Stationary robot",
          body: "A fixed industrial or collaborative robot at the receiving unit takes over the handoff from mobile transport.",
        },
        {
          title: "Moving robot",
          body: "Robot or cobot on a linear axis at the receiving unit; mobile transport supplies or removes the load at the handoff point.",
        },
      ],
    },
    {
      type: "capabilityGroups",
      id: "paletizacija",
      eyebrow: "Palletizing and depalletizing",
      heading: "The pallet is part of a broader material flow.",
      body: "Palletizing combines material preparation, stacking, intermediate storage, transport, and the next stage. Depalletizing is the reverse process in the same logistical context.",
      layout: "openColumns",
      groups: [
        {
          title: "Sensing and safety",
          items: [
            "Vision system for flexible recognition and shorter changeover times",
            "3D safety sensing for safe work with operators",
            "Partial or full automation, depending on the process",
          ],
        },
        {
          title: "Stations and autonomy",
          items: [
            "One or two pallet loading stations",
            "Empty-pallet magazine for longer autonomous operation",
            "Automatic stretch wrapping at the outfeed",
          ],
        },
        {
          title: "Transport connection",
          items: [
            "Automatic pallet delivery and removal by mobile transport",
            "Depalletizing as the reverse process in the same flow",
            "Suitable for warehouses, processing lines, and food production",
          ],
        },
      ],
    },
    {
      type: "crossSell",
      id: "povezovanje",
      eyebrow: "Connecting systems",
      heading: "Physical flow needs coordinated handoffs.",
      body: "A coordinated process requires knowing where the material comes from, where it is going, when it is available, and how it is handed off between production and transport equipment.",
      right: {
        kind: "box",
        tag: "Middleware",
        title: "A connecting layer for equipment and systems.",
        body: "Middleware connects production equipment, transport units, stations, and production systems. Product details, interfaces, and transport orders are on the Middleware page.",
        link: { label: "View Middleware", routeKey: "standardCellsMiddleware" },
      },
    },
    {
      type: "proofProject",
      id: "projekt",
      eyebrow: "Realized project",
      heading: "Inbound-outbound conveyor line.",
      tag: "CNC, KLT, and material flow",
      title: "KLT containers across different CNC machines.",
      body: "A conveyor line for standard KLT containers supports a collaborative cell serving different CNC machines. With an integrated camera and a TM robot, it enables independent, continuous operation across different workpieces.",
      result: "The system uses five inbound and five outbound KLT containers measuring 600 × 400 mm.",
      image: { src: "/images/systems/raw/vhodno-izhodna-tracna-proga.png", alt: "Inbound-outbound conveyor line", objectPosition: "object-[50%_38%]" },
      routeKey: "referenceConveyor",
      readMoreLabel: "Read the project",
      chrome: "open",
      resultTone: "quiet",
    },
  ],
  kontakt: {
    eyebrow: "Contact",
    heading: "How does material travel through your process?",
    body: "Send us basic information about the material, containers or pallets, origin and destination, stations, waiting points, and your current mode of transport.",
    ctaLabel: "Send an inquiry",
    mailto: "info@flexido.eu",
    imageSrc: "/images/flexido/legacy/home-slide-v2-2.jpg.jpeg",
    imageAlt: "Internal logistics and material flow in production",
    captionEyebrow: "First step",
    captionText: "Where does material wait, get stored, or move on to the next stage?",
    variant: "photo",
  },
};
