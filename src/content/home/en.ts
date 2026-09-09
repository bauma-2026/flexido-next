import type { HomePageContent } from "./types";

/** Faithful translation of `sl.ts` — no new claims, no repositioning. */
export const homeContent: HomePageContent = {
  meta: {
    title: "Flexido — Production automation",
    description:
      "We design and automate production processes — from a single machine to a connected flow of material, people and data.",
  },
  hero: {
    eyebrow: "Production automation",
    titleLines: [
      "We connect the flow between machines.",
      "Not just a robot next to a machine.",
    ],
    subhead:
      "We build standard robotic cells and custom-built cells — and connect them into a stable flow between machines, with less waiting between stages.",
    slogan: "At Flexido, we make automation easier.",
    ctaPrimary: "Let's look at your process",
    ctaSecondary: "How a project works",
  },
  trustStrip: {
    label: "Certifications",
    items: [
      {
        href: "https://www.flexido.eu/images/pdf/FLEXIDO-9001-CERT-Certificate-SLO-24092021.pdf",
        src: "/logos/trust/bureau-veritas-iso-9001.webp",
        alt: "ISO 9001 Bureau Veritas Certification",
        external: true,
      },
    ],
  },
  solutions: {
    eyebrow: "Solutions",
    title: "Where automation can help",
    desc: "From a single machine to connecting several stages — we choose the solution based on where the process loses time, stability, or predictability.",
    compactReadMoreLabel: "Read more",
    compactItems: [
      {
        routeKey: "solutionCnc",
        title: "CNC machines",
        desc: "Loading, unloading, and better machine utilization.",
        icon: "cnc",
      },
      {
        routeKey: "solutionInjectionMolding",
        title: "Injection molding",
        desc: "A stable cycle, part removal, and less manual work.",
        icon: "imm",
      },
      {
        routeKey: "solutionManipulation",
        title: "Material handling",
        desc: "Moving, turning, and transferring parts between stages.",
        icon: "manipulation",
      },
      {
        routeKey: "solutionLogistics",
        title: "Palletizing and internal logistics",
        desc: "When material doesn't flow smoothly through production.",
        icon: "materialFlow",
      },
    ],
  },
  productProof: {
    eyebrow: "Systems",
    heading: "Systems we adapt to the process.",
    body:
      "Standard robotic cells are the foundation for solutions we adapt to production, parts, space, and existing equipment.",
    viewAllLabel: "View all systems",
    viewAllRouteKey: "standardCells",
    viewSystemLabel: "View system",
    systems: [
      {
        slug: "flex-7-cnc",
        category: "CNC machine automation",
        shortDescription:
          "A compact robot cell for tending CNC machines — loading, unloading, and a more stable part flow.",
        routeKey: "standardCellsCnc",
      },
      {
        slug: "flex-7-imm",
        category: "IMM automation",
        shortDescription:
          "A compact robot cell for tending injection molding machines — part removal, insert moulding, and inspection.",
        routeKey: "standardCellsImm",
      },
    ],
  },
  competencies: {
    eyebrow: "Competencies",
    heading: "What we cover within a project",
    items: [
      "Feasibility study",
      "Mechanical design",
      "Electrical design",
      "Robot and PLC programming",
      "Smart vision systems",
      "Project management",
    ],
  },
  process: {
    eyebrow: "Process",
    title: "From process review to post-commissioning support",
    desc: "We start with the process and guide the solution through commissioning and production support.",
    steps: [
      {
        step: "01",
        title: "Process review",
        desc: "We review the machine, part, material flow, space, and where the process loses its rhythm.",
      },
      {
        step: "02",
        title: "Solution definition",
        desc: "We define a solution that fits the specific machine, part, space, and additional operations.",
      },
      {
        step: "03",
        title: "Implementation and integration",
        desc: "We connect the solution with existing machines, operators, space, and the real work rhythm.",
      },
      {
        step: "04",
        title: "Commissioning and support",
        desc: "We start the system, stabilize it in real production, and provide service and after-sales support.",
      },
    ],
    fullProcessLabel: "Full process",
  },
  finalCta: {
    eyebrow: "Contact",
    heading: "Let's look at your process",
    body:
      "Send a short description of the process, machine, and part. We assess time and stability losses, the scope of manual work, and whether automation makes sense.",
    ctaLabel: "Send a process description",
    imageCaptionEyebrow: "First review",
    imageCaption: "Where does the process lose time, material, or a stable rhythm?",
  },
  showFundingTrust: false,
};

/** @deprecated Use `homeContent.hero` */
export const homeHero = homeContent.hero;
