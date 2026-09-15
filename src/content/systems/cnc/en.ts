import type { SystemPageContent } from "../types";

export const cncSystemContent: SystemPageContent = {
  routeKey: "standardCellsCnc",
  meta: {
    title: "CNC machines | Flexido",
    description:
      "Robot cells for tending CNC machines — for loading, unloading, flexible part changeover, and additional operations in the production process.",
  },
  backLabel: "← All standard cells",
  hero: {
    eyebrow: "Standard robot cells",
    heading: "CNC machines",
    subhead:
      "Robot cells for tending CNC machines — for loading, unloading, flexible part changeover, and additional operations in the production process.",
    media: { kind: "video", src: "/video/flexido/hero-standardne-celice-cnc.mp4" },
  },
  intro: {
    eyebrow: "CNC machine automation",
    heading: "Flexible robotic tending of CNC machines.",
    paragraphs: [
      "Flexido cells offer a rich range of options for robotic tending of CNC machines. The loading and unloading system is chosen based on the part, machining, and available space.",
      "Robotic part removal using the Vision smart vision system is also increasingly used, enabling a higher degree of flexibility for the robot cell.",
      "With the integrated Pick & Place option, the robot can pick different parts of different shapes from the infeed conveyor.",
    ],
    image: { src: "/images/systems/raw/flexido-cnc-machine-studio.png", alt: "CNC machine with a Flexido robot cell" },
  },
  product: {
    eyebrow: "Standard cell",
    systemSlug: "flex-7-cnc",
    description:
      "FLEX 7 CNC Slim is a compact automation cell for tending CNC machines, with options for stackers, cleaning, engraving, and vibro sorting.",
    showTechnical: true,
    highlights: [
      "Compact CNC robot cell",
      "Integrated conveyor belt",
      "Stacker option",
      "Cleaning and engraving option",
    ],
  },
  itemGrids: [
    {
      role: "documented-systems",
      eyebrow: "Loading and unloading",
      heading: "Documented loading and unloading systems.",
      items: [
        "sliding pallet system",
        "rotary table system",
        "rotary pallet system",
      ],
    },
  ],
  optionGrids: [
    {
      eyebrow: "Additional operations",
      heading: "The standard cell can include additional stations in the process.",
      items: [
        {
          image: {
            src: "/raw/cnc-option-storage.webp",
            alt: "Stacker",
          },
          title: "Stacker",
          description: "Stacker for feeding or storing parts in the process.",
        },
        {
          image: {
            src: "/raw/cnc-option-cleaning-station.webp",
            alt: "Cleaning station",
          },
          title: "Cleaning station",
          description: "Part washing station.",
        },
        {
          image: {
            src: "/raw/cnc-option-engraving.webp",
            alt: "Engraving",
          },
          title: "Engraving",
          description: "Part engraving station.",
        },
        {
          image: {
            src: "/raw/cnc-option-vibro-sorting.webp",
            alt: "Vibro sorting station",
          },
          title: "Vibro sorting station",
          description: "Vibro sorting station for parts.",
        },
      ],
    },
  ],
  benefits: {
    items: [
      { title: "Modular design", body: "Thanks to their modular design, standard robot cells are affordable even for smaller companies." },
      { title: "Higher availability", body: "Integrating a robot cell helps improve production quality and the availability of CNC machines." },
    ],
  },
  relatedSolutions: {
    eyebrow: "Related solution",
    heading: "When CNC needs more than one cell.",
    linkLabel: "See the solution",
    items: [
      {
        title: "CNC machine automation",
        body: "When production needs more than repeatable tending of a single machine — around the machines, parts, stations, and material flow.",
        routeKey: "solutionCnc",
      },
      {
        tag: "Reference",
        title: "Inbound-outbound conveyor line",
        body: "A completed conveyor line project for KLT containers alongside CNC machines, showing the broader context of CNC automation with a collaborative robot.",
        routeKey: "referenceConveyor",
        linkLabel: "See the implementation in practice",
      },
    ],
  },
  kontakt: {
    eyebrow: "Contact",
    heading: "Is a CNC cell the right solution for your process?",
    body: "Together we look at your CNC machine, loading method, part, available space, and additional operations — then we assess which cell configuration makes the most sense.",
    ctaLabel: "Send an inquiry",
    mailto: "info@flexido.eu",
    imageSrc: "/images/flexido/legacy/s-3.jpg.jpeg",
    imageAlt: "CNC robot cell in production",
    captionEyebrow: "First step",
    captionText: "Where in your CNC process are you losing time, rhythm, or machine availability?",
  },
};
