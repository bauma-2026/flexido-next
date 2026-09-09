import type { SolutionPageContent } from "../types";

/** Faithful structural port of `app/(default)/resitve/kolaborativni-roboti/page.tsx`. */
export const cobotsContent: SolutionPageContent = {
  routeKey: "solutionCobots",
  hero: {
    backLabel: "← All solutions",
    eyebrow: "Collaborative robots",
    titleLines: ["Flexible automation for specific operations."],
    subhead:
      "A collaborative robot can be a suitable solution for picking, insertion, inspection, or assembly within an existing production process.",
    ctas: [{ label: "When is a cobot suitable?", anchor: "#primernost" }],
    videoSrc: "/video/flexido/hero-cobot.mp4",
  },
  wikiNav: [
    { id: "primernost", label: "When it's suitable" },
    { id: "aplikacije", label: "Applications" },
    { id: "integracija", label: "Integration" },
    { id: "tmx", label: "TMX" },
  ],
  sections: [
    {
      type: "problemSplit",
      id: "primernost",
      eyebrow: "Collaborative automation",
      heading: "When a cobot is the right part of the process.",
      body: [
        "We don't start with the robot, we start with the operation.",
        "We check whether the task is repeatable, how it connects to the existing workstation, and what constraints the part, space, and equipment impose.",
      ],
      itemsEyebrow: "When it is suitable",
      items: [
        "Repeatable operation",
        "Existing workstation",
        "Changing requirements",
        "Equipment around the operation",
      ],
      result: "Result: a cobot makes sense when it fits the operation, the workstation, and the constraints of the process.",
    },
    {
      type: "capabilityGroups",
      id: "aplikacije",
      eyebrow: "Applications",
      heading: "Operations where a cobot can take on a clear role.",
      body: "Collaborative automation is suitable where a specific operation needs to be connected to the part, the workstation, and the rhythm of the process.",
      groups: [
        { title: "Pick & Place", body: "Picking up and placing parts in a defined sequence." },
        { title: "Packaging", body: "Stacking parts, preparing them for packaging, or placing them into boxes." },
        { title: "Inspection and testing", body: "Support for visual inspection, sorting, or repeated quality checks." },
        { title: "Assembly and screwdriving", body: "Repetitive assembly steps and handling of components." },
        { title: "Press tending", body: "Repeatable tending and support at press stations." },
      ],
      trailingNote: {
        template:
          "For machine tending and broader material flow, the requirements of the specific process are key. Take a look at {0}, {1}, and {2}.",
        links: [
          { label: "CNC machine automation", routeKey: "solutionCnc" },
          { label: "injection molding automation", routeKey: "solutionInjectionMolding" },
          { label: "internal logistics", routeKey: "solutionLogistics" },
        ],
      },
    },
    {
      type: "capabilityGroups",
      id: "integracija",
      eyebrow: "Integration into the process",
      heading: "The robot is one element of a working solution.",
      body: "A cobot only becomes meaningful once it is aligned with the actual task, the workstation, and the equipment around it.",
      layout: "numberedRows",
      groups: [
        { number: "01", title: "Defining the task", body: "We define the part, the grip, the sequence of steps, and the requirements of the operation." },
        { number: "02", title: "Integration into the workstation", body: "We determine the robot's position, connections to equipment, and communication with surrounding stations." },
        { number: "03", title: "Verifying execution", body: "Where needed, we add vision, align the process sequence, and prepare the safety design." },
        { number: "04", title: "Teach-in", body: "In certain implementations, positions and tasks can be taught by guiding the robot and recording reference points." },
      ],
    },
    {
      type: "crossSell",
      id: "tmx",
      eyebrow: "Collaborative platform",
      heading: "TMX for mobile collaborative applications.",
      body: "TMX is a mobile collaborative robot platform for tasks where use at different locations across production matters.",
      right: {
        kind: "image",
        src: "/images/systems/raw/tmx-studio.png",
        alt: "TMX collaborative robot platform",
        reversed: true,
        size: "feature",
        link: { label: "View TMX", routeKey: "standardCellsTmx" },
      },
    },
  ],
  kontakt: {
    eyebrow: "Contact",
    heading: "Which operation could a cobot take on?",
    body: "Send us basic information about the task, the workstation, the part, the grip, the equipment around the station, and the available space. Together we'll assess whether collaborative automation is suitable for your process.",
    ctaLabel: "Send an inquiry",
    mailto: "info@flexido.eu",
    imageSrc: "/images/flexido/raw/tmx/14.jpg",
    imageAlt: "Collaborative robot in a production process",
    captionEyebrow: "First step",
    captionText: "Which operation, station, and equipment define your solution?",
    variant: "photo",
  },
};
