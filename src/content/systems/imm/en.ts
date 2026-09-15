import type { SystemPageContent } from "../types";

export const immSystemContent: SystemPageContent = {
  routeKey: "standardCellsImm",
  backLabel: "← All standard cells",
  meta: {
    title: "IMM machines | Flexido",
    description:
      "Standard robot cells for tending injection molding machines — with industrial 6-axis robots, additional operations, and modular stations.",
  },
  hero: {
    eyebrow: "Standard robot cells",
    heading: "IMM machines",
    subhead:
      "Standard robot cells for tending injection molding machines — with industrial 6-axis robots, additional operations, and modular stations.",
    media: { kind: "video", src: "/video/flexido/hero-standardne-celice-imm.mp4" },
  },
  intro: {
    eyebrow: "IMM automation",
    heading: "An alternative to traditional linear manipulators.",
    paragraphs: [
      "Flexido standard cells are an excellent alternative to traditional automation solutions with linear manipulators when it comes to robotic tending of plastics machines.",
      "The standard robot cells integrate 6-axis robots that, in addition to their basic function of removing parts from the mold, also offer additional operations.",
      "Standard robot cells are also used in cases where machines are installed in production areas with low ceiling height.",
    ],
    image: { src: "/images/systems/raw/flexido-imm-machine-studio.png", alt: "Injection molding machine with a Flexido robot cell" },
  },
  product: {
    eyebrow: "Standard cell",
    systemSlug: "flex-7-imm",
    description:
      "FLEX 7 IMM Slim is a compact automation cell for injection molding machines. It is intended for part removal, insert moulding, insert preparation, and quality inspection in a small footprint.",
    showTechnical: true,
    highlights: [
      "Small footprint",
      "Integrated conveyor belt",
      "Bowl feeder option",
      "Vision system option",
    ],
  },
  itemGrids: [
    {
      role: "applications",
      eyebrow: "Applications",
      heading: "Documented FLEX 7 IMM Slim applications.",
      items: [
        "unloading and ejecting parts",
        "quality control",
        "simple insert placing",
        "insert moulding",
      ],
    },
    {
      role: "capabilities",
      eyebrow: "Additional operations",
      heading: "More than just removing the part from the mold.",
      items: [
        "sprue removal",
        "checking parts for complete fill",
        "checking for flash or excess material",
        "detecting surface defects",
        "assembly of the molded part within the cell",
        "post-processing of the molded part",
      ],
    },
  ],
  optionGrids: [
    {
      eyebrow: "Insert preparation",
      heading: "Documented options for insert preparation and feeding.",
      items: [
        {
          image: {
            src: "/raw/flex-7-imm-bowl-feeder-1.png",
            alt: "Bowl feeder for insert feeding",
          },
          title: "Bowl feeder",
          description: "Feeding and orientation of inserts before placement.",
        },
        {
          image: {
            src: "/raw/flex-7-imm-insert-preparation-table-1.png",
            alt: "Insert preparation table",
          },
          title: "Insert preparation table",
          description: "Workstation for preparing inserts before the cycle.",
        },
        {
          image: {
            src: "/raw/flex-7-imm-skara-robot-1.png",
            alt: "Integrated SCARA robot for insert sorting",
          },
          title: "Integrated SCARA robot",
          description: "Insert sorting and preparation in the cell, where configured.",
        },
        {
          image: {
            src: "/raw/flex-7-imm-vision-system-2.png",
            alt: "Vision system for quality control",
          },
          title: "Vision system",
          description: "Quality check as a documented cell option.",
        },
      ],
    },
  ],
  detailPanel: {
    placement: "options",
    eyebrow: "Cell integration",
    heading: "The 6-axis robot handles basic machine tending and insert placement into the mold.",
    paragraphs: [
      "An integrated SCARA robot supports insert sorting and preparation where configured in the cell. Grippers are adapted for the 6-axis and SCARA robot.",
      "The interfaces that must be pre-installed on the injection molding machines are Euromap 67 and Euromap 63 or Euromap 77.",
      "Standard robot cells are also frequently used for inserting inserts into the mold during the overmolding process.",
    ],
    panelEyebrow: "Modular stations",
    panelItems: ["infeed vibratory station", "sliding pallet system", "rotary table system", "Pick & Place Vision system"],
  },
  benefits: {
    items: [
      { title: "Affordability", body: "Thanks to their modular design, standard robot cells are more affordable." },
      { title: "Higher quality", body: "The cell helps improve production quality and the availability of machines and production assets." },
    ],
  },
  relatedSolutions: {
    eyebrow: "Related solution",
    heading: "When molding needs more than part removal.",
    linkLabel: "See the solution",
    items: [
      {
        title: "Injection molding automation",
        body: "When the process requires inserts, special grips, additional stations, or connection to existing equipment around the molding machine.",
        routeKey: "solutionInjectionMolding",
      },
      {
        tag: "Reference",
        title: "Robotic overmolding cell",
        body: "A completed robotic overmolding cell project — a concrete example of this type of IMM automation in practice.",
        routeKey: "referenceOvermolding",
        linkLabel: "See a related project",
      },
    ],
  },
  kontakt: {
    eyebrow: "Contact",
    heading: "Is an IMM cell the right solution for your process?",
    body: "Together we look at your injection molding machine, part, the space around the machine, the removal method, and additional operations — then we assess which cell configuration makes the most sense.",
    ctaLabel: "Send an inquiry",
    mailto: "info@flexido.eu",
    imageSrc: "/images/systems/raw/flexido-imm-machine-studio.png",
    imageAlt: "Injection molding machine with a Flexido robot cell",
    captionEyebrow: "First step",
    captionText: "Where in your injection molding process are you losing time, stability, or repeatability?",
  },
};
