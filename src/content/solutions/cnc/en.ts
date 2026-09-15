import type { SolutionPageContent } from "../types";

/** English translation of `sl.ts`. Same structure, block-for-block. */
export const cncContent: SolutionPageContent = {
  routeKey: "solutionCnc",
  hero: {
    backLabel: "← All solutions",
    eyebrow: "CNC machine automation",
    titleLines: ["A CNC process,", "not just one cell."],
    subhead:
      "When CNC production needs more than repeatable tending of a single machine, we design automation around the machines, parts, stations, and material flow.",
    ctas: [
      { label: "Standard or custom", anchor: "#resitev" },
      { label: "Let's look at your process", anchor: "#kontakt" },
    ],
    videoSrc: "/video/flexido/hero-cnc.mp4",
  },
  wikiNav: [
    { id: "cnc-proces", label: "CNC process" },
    { id: "moznosti", label: "Implementation options" },
    { id: "resitev", label: "Standard or custom" },
    { id: "projekt", label: "Project" },
  ],
  sections: [
    {
      type: "problemSplit",
      id: "cnc-proces",
      eyebrow: "CNC production process",
      heading: "Automation starts around the machining itself.",
      body: "The CNC machine is only one part of the process. Requirements grow once you need to coordinate part handling, additional operations, and equipment around the machining.",
      itemsEyebrow: "Where requirements arise",
      items: [
        "Loading and unloading parts",
        "Different workpieces and grips",
        "Multiple CNC machines or additional operations",
        "Material flow, inspection, and equipment coordination",
      ],
      result: "the solution must be shaped around the real process, not only the CNC machine.",
      resultLabel: "Result",
    },
    {
      type: "capabilityGroups",
      id: "moznosti",
      eyebrow: "Implementation options",
      heading: "We build the CNC solution around the actual process.",
      body: "The individual building blocks are chosen based on the machines, parts, space, sequence of operations, and required material flow.",
      groups: [
        {
          title: "Machines and motion",
          items: [
            "Tending one or more CNC machines",
            "Robot with an additional servo-driven linear axis where needed",
          ],
        },
        {
          title: "Part handling",
          items: [
            "Different part types and custom grips",
            "ToolChanger — automatic tool or gripper change for multiple part types, where configured",
          ],
        },
        {
          title: "Additional operations",
          items: [
            "Vision, inspection, and measurement",
            "Washing, deburring, engraving, or other process stations",
          ],
        },
        {
          title: "Flow and integration",
          items: [
            "Material infeed, outfeed, and intermediate buffering",
            "Integration of CNC machines, the robot, stations, and existing equipment",
          ],
        },
      ],
    },
    {
      type: "comparisonSplit",
      id: "resitev",
      eyebrow: "Choosing a solution",
      heading: "A standard cell or broader CNC automation.",
      body: "The actual process determines the starting point: whether a configurable cell covers it, or it needs a configuration built around several connected elements.",
      left: {
        tag: "Standard CNC cell",
        title: "For repeatable tending of a CNC machine.",
        body: "FLEX 7 CNC Slim is a configurable base for loading, unloading, and standard stations and modules in a repeatable process.",
        link: { label: "See the standard CNC cell", routeKey: "standardCellsCnc" },
      },
      right: {
        tag: "Custom CNC automation",
        title: "For a process that goes beyond one cell.",
        body: "The solution combines multiple machines, motion, different parts, additional stations, material flow, and integration with existing equipment.",
        link: { label: "See custom-built systems", routeKey: "solutionCustomSystems" },
      },
    },
    {
      type: "crossSell",
      id: "standardna-osnova",
      eyebrow: "CNC machines",
      heading: "FLEX 7 CNC Slim",
      body: "Available with a robot payload of 7 or 10 kg, matched to part size.",
      right: {
        kind: "image",
        src: "/images/systems/raw/flex-7-cnc-slim-studio.png",
        alt: "FLEX 7 CNC Slim",
        reversed: true,
        size: "feature",
        link: { label: "See FLEX 7 CNC Slim", routeKey: "standardCellsCnc" },
      },
    },
    {
      type: "proofProject",
      id: "projekt",
      eyebrow: "Completed project",
      heading: "Inbound-outbound conveyor line.",
      tag: "CNC, cobot, and material flow",
      title: "More autonomy across different CNC machines.",
      body: "A conveyor line for standard KLT containers supports a collaborative cell across different CNC machines. With an integrated camera and a TM robot, it enables independent, continuous operation with different workpieces.",
      result: "The system uses five inbound and five outbound KLT containers, 600 × 400 mm in size.",
      image: { src: "/images/systems/raw/vhodno-izhodna-tracna-proga.png", alt: "Inbound-outbound conveyor line", objectPosition: "object-[50%_38%]" },
      routeKey: "referenceConveyor",
      readMoreLabel: "Read the project",
      chrome: "open",
      resultTone: "quiet",
    },
  ],
  kontakt: {
    eyebrow: "Contact",
    heading: "Let's look at your CNC process.",
    body: "Send us the basic information about your machines, parts, additional operations, and material flow. Together we'll assess whether a standard cell covers the process or it needs broader CNC automation.",
    ctaLabel: "Send an inquiry",
    mailto: "info@flexido.eu",
    imageSrc: "/images/flexido/legacy/image_8.jpg.jpeg",
    imageAlt: "CNC automation of the production process",
    captionEyebrow: "First step",
    captionText: "Where do the CNC machines, parts, and material flow need to come together into a single process?",
    variant: "photo",
  },
};
