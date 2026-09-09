import type { SystemPageContent } from "../types";

/**
 * New page. Authored from `src/data/flexido-systems.ts`'s `tmx` entry and
 * the framing already used in `src/content/solutions/cobots/en.ts`'s "tmx"
 * product cross-sell block.
 */
export const tmxSystemContent: SystemPageContent = {
  routeKey: "standardCellsTmx",
  meta: {
    title: "TMX | Flexido",
    description: "A mobile collaborative robot platform for tasks where use at different locations across production matters.",
  },
  backLabel: "← All standard cells",
  hero: {
    eyebrow: "Standard robot cells",
    heading: "TMX",
    subhead: "A mobile collaborative robot platform for tasks where use at different locations across production matters.",
    media: { kind: "image", src: "/images/systems/raw/tmx-studio-hero.png", alt: "TMX collaborative robot platform" },
  },
  intro: {
    eyebrow: "Mobile automation",
    heading: "Flexibility instead of a fixed setup.",
    paragraphs: [
      "The platform is a good fit when the task doesn't call for a full robotic cell, but rather quick, redeployable assistance alongside existing equipment.",
      "In the documented relocation setup, the platform moves between stations; the camera reads a location marker at the station and uses it for position calibration at the new location.",
    ],
    image: { src: "/raw/0-tmx.png", alt: "TMX collaborative robot platform, full unit" },
  },
  product: {
    eyebrow: "Collaborative platform",
    systemSlug: "tmx",
    description:
      "TMX is a collaborative robot on a mobile platform, designed for simple tasks where flexibility, quick redeployment, and use at different locations across production matter.",
    showTechnical: true,
  },
  itemGrids: [
    {
      eyebrow: "Applications",
      heading: "Where TMX is used.",
      items: ["Pick and place applications", "Quality control", "Simple assembly applications"],
    },
    {
      eyebrow: "Advantages",
      heading: "Why choose TMX.",
      items: [
        "Collaborative robot on a mobile platform",
        "Universal pneumatic gripper",
        "Integrated 2D vision system",
        "Optional 3D safety scanner",
        "Holders for intermediate layers",
        "Sensorics for application control",
        "Electrical cabinet",
      ],
    },
  ],
  gallery: {
    eyebrow: "Options",
    heading: "Gripper, interfaces, and safety.",
    alts: [
      "Holder for packaging crates",
      "Electrical and pneumatic interfaces",
      "3D safety scanner",
    ],
  },
  relatedSolutions: {
    eyebrow: "Related solutions",
    heading: "Where TMX enters a broader process.",
    linkLabel: "See the solution",
    items: [
      {
        title: "Collaborative robots",
        body: "TMX is a mobile collaborative platform for tasks where use at different locations across production matters.",
        routeKey: "solutionCobots",
      },
      {
        title: "Material handling",
        body: "Applications include pick and place, quality inspection, and simple assembly tasks alongside existing equipment.",
        routeKey: "solutionManipulation",
      },
    ],
  },
  kontakt: {
    eyebrow: "Contact",
    heading: "Is TMX the right solution for your task?",
    body: "Together we look at the task, the workstation, and available space — then assess whether a mobile collaborative platform is the right fit.",
    ctaLabel: "Send an inquiry",
    mailto: "info@flexido.eu",
    imageSrc: "/images/systems/raw/tmx-studio.png",
    imageAlt: "TMX collaborative robot platform",
    captionEyebrow: "First step",
    captionText: "Which task needs quick, redeployable assistance?",
  },
};
