import type { SystemPageContent } from "../types";

/**
 * Authored from `src/data/flexido-systems.ts`, legacy FLEX 25/50 e-catalog options,
 * and curated product imagery in `public/images/flexido/products/flex-25-50/`.
 */
export const flex2550SystemContent: SystemPageContent = {
  routeKey: "standardCellsFlex2550",
  meta: {
    title: "FLEX 25 / 50 | Flexido",
    description: "A highly flexible robotic cell for more demanding applications, higher payload, and a wider range of options.",
  },
  backLabel: "← All standard cells",
  layoutRefresh: true,
  hero: {
    eyebrow: "Standard robot cells",
    heading: "FLEX 25 / 50",
    subhead: "A highly flexible robotic cell for more demanding applications, higher payload, and a wider range of options.",
    media: { kind: "image", src: "/images/systems/raw/flex-25-50-studio-wide.webp", alt: "FLEX 25 / 50 robotic cell" },
  },
  intro: {
    eyebrow: "A highly flexible cell",
    heading: "A platform for more demanding applications.",
    paragraphs: [
      "FLEX 25 / 50 is a more powerful automation platform for insert placing, insert molding, quality control, and process applications where larger robots, higher payload, or a wider range of options are needed.",
      "In some builds, FLEX 25 / 50 is a configurable starting point — particularly when the standard FLEX 7 cell doesn't cover the required payload, reach, or range of options.",
    ],
    image: { src: "/raw/flex-25-50-isometric-robotic-manufacturing-cell.png", alt: "Complete FLEX 25 / 50 automation system with safety fencing" },
  },
  product: {
    eyebrow: "Standard cell",
    systemSlug: "flex-25-50",
    description:
      "FLEX 25 / 50 is a more powerful automation platform for insert placing, insert molding, quality control, and process applications where larger robots, higher payload, or a wider range of options are needed.",
    showTechnical: true,
    highlights: [
      "Mid & high performance applications",
      "Flexible gripper options",
      "Infeed and outfeed systems",
      "Vision and sensor options",
    ],
  },
  itemGrids: [
    {
      eyebrow: "Applications",
      heading: "Where FLEX 25 / 50 is used.",
      items: [
        "Insert placing and insert molding",
        "Insert laser cleaning before the molding process",
        "Laser engraving after the molding process",
        "Quality control and in-process inspection",
      ],
    },
  ],
  applicationSignals: {
    eyebrow: "Application signals",
    heading: "Mid & high performance applications with minimal footprint.",
    items: [
      {
        image: { src: "/images/flexido/products/flex-25-50/flex-25-50-stator.jpg", alt: "Stator" },
        label: "Stator",
      },
      {
        image: { src: "/images/flexido/products/flex-25-50/flex-25-50-stator-segment.jpg", alt: "Stator segment" },
        label: "Stator segment",
      },
      {
        image: { src: "/images/flexido/products/flex-25-50/flex-25-50-rotor.png", alt: "Rotor" },
        label: "Rotor",
      },
      {
        image: { src: "/images/flexido/products/flex-25-50/flex-25-50-connector.png", alt: "Connector" },
        label: "Connector",
      },
      {
        image: { src: "/images/flexido/products/flex-25-50/flex-25-50-venting-flap.png", alt: "Venting flap" },
        label: "Venting flap",
      },
      {
        image: { src: "/images/flexido/products/flex-25-50/flex-25-50-gear.png", alt: "Gear" },
        label: "Gear",
      },
    ],
  },
  optionGrids: [
    {
      eyebrow: "Grippers",
      heading: "Documented gripper configurations.",
      items: [
        {
          image: {
            src: "/images/flexido/products/flex-25-50/flex-25-50-simple-gripper.jpg",
            alt: "Simple gripper on the FLEX 25 / 50",
          },
          title: "Simple handling gripper",
          description: "For basic part handling in a repeatable process.",
        },
        {
          image: {
            src: "/images/flexido/products/flex-25-50/flex-25-50-gripper-insert-placing.png",
            alt: "Insert-placement gripper",
          },
          title: "Insert-placement gripper",
          description: "For precise insert placement into tooling or nests.",
        },
        {
          image: {
            src: "/images/flexido/products/flex-25-50/flex-25-50-complex-insert-moulding-gripper.png",
            alt: "Complex insert-molding gripper",
          },
          title: "Complex insert-molding gripper",
          description: "Multiple pick points and combined functions for demanding insert applications.",
        },
        {
          image: {
            src: "/images/flexido/products/flex-25-50/flex-25-50-complex-gripper.jpg",
            alt: "Complex insert-molding gripper (documented variant 2)",
          },
          title: "Complex insert-molding gripper (documented variant 2)",
          description: "Second documented construction from the e-catalog.",
        },
      ],
    },
    {
      eyebrow: "Infeed / outfeed",
      heading: "Documented infeed and outfeed configurations.",
      items: [
        {
          image: {
            src: "/images/flexido/products/flex-25-50/flex-25-50-cell-vibratory-bowl-feeder.png",
            alt: "Cell with vibratory bowl and conveyor",
          },
          title: "Vibratory bowl + conveyor",
          description: "Part or insert infeed from a bowl feeder onto a conveyor into the cell.",
        },
        {
          image: {
            src: "/images/flexido/products/flex-25-50/flex-25-50-cell-conveyor-camera.png",
            alt: "Conveyor with 2D camera",
          },
          title: "Conveyor + 2D camera",
          description: "Guided infeed or outfeed with 2D vision for orientation or inspection.",
        },
        {
          image: {
            src: "/images/flexido/products/flex-25-50/flex-25-50-cell-vibrating-feeder-plate.png",
            alt: "Vibrating feeder plate and conveyor",
          },
          title: "Vibrating feeder plate + conveyor",
          description: "INFEED: vibrating feeder plate — OUTFEED: conveyor in the documented system.",
        },
        {
          image: {
            src: "/images/flexido/products/flex-25-50/flex-25-50-infeed-trays.png",
            alt: "2x infeed + 2x outfeed trays",
          },
          title: "2× infeed + 2× outfeed trays",
          description: "Two infeed and two outfeed tray stations — separate from tray stacker systems.",
        },
        {
          image: {
            src: "/images/flexido/products/flex-25-50/flex-25-50-infeed-conveyor-paper-trays.jpg",
            alt: "Infeed with paper trays",
          },
          title: "Paper-tray infeed",
          description: "Conveyor infeed for paper trays with inserts or parts.",
        },
        {
          image: {
            src: "/images/flexido/products/flex-25-50/flex-25-50-infeed-belt-inserts.jpg",
            alt: "Belt infeed for inserts",
          },
          title: "Belt infeed for inserts",
          description: "Belt conveyor for inserts into preparation or the gripper path.",
        },
      ],
    },
    {
      eyebrow: "Preparation and support",
      heading: "Insert preparation, trays, and process visibility.",
      items: [
        {
          image: {
            src: "/images/flexido/products/flex-25-50/flex-25-50-tray-stacker.png",
            alt: "Tray stacker system",
          },
          title: "Tray stacker systems",
          description: "Vertical, large-capacity, and 3+3 configurations in the documented system.",
        },
        {
          image: {
            src: "/images/flexido/products/flex-25-50/flex-25-50-preheating-hot-air.jpg",
            alt: "Hot-air insert preheating",
          },
          title: "Preheating — hot air",
          description: "Insert preparation before placement or molding.",
        },
        {
          image: {
            src: "/images/flexido/products/flex-25-50/flex-25-50-preheating-induction-1.png",
            alt: "Induction coil for insert preheating",
          },
          title: "Preheating — induction",
          description: "Local induction heating for thermally sensitive inserts.",
        },
        {
          image: {
            src: "/images/flexido/products/flex-25-50/flex-25-50-insert-preparation-table.jpg",
            alt: "Insert preparation table",
          },
          title: "Insert preparation table",
          description: "Workstation for manual or semi-automatic preparation before the process.",
        },
        {
          image: {
            src: "/images/flexido/products/flex-25-50/flex-25-50-bowl-feeder-inserts.jpg",
            alt: "Bowl feeder for inserts",
          },
          title: "Bowl feeder / insert sorting",
          description: "Insert infeed and orientation before placement.",
        },
        {
          image: {
            src: "/raw/flex-25-50-modular-conveyor.png",
            alt: "Vision system for quality check",
          },
          title: "Vision system for quality check",
          description: "Documented vision station for quality inspection.",
        },
        {
          image: {
            src: "/images/flexido/products/flex-25-50/flex-25-50-vibro-plate-vision.png",
            alt: "Vibro plate with 2D vision system",
          },
          title: "Vibro plate with 2D vision system",
          description: "Documented option from the e-catalog.",
        },
        {
          image: {
            src: "/images/flexido/products/flex-25-50/flex-25-50-visualisation-sensor-status.jpg",
            alt: "Remote sensor status visualization",
          },
          title: "Remote sensor-status visualization",
          description: "Remote view of sensor states — connectable to higher-level production systems.",
        },
      ],
    },
  ],
  relatedSolutions: {
    eyebrow: "Related solutions",
    heading: "Where FLEX 25 / 50 enters a broader process.",
    linkLabel: "See the solution",
    items: [
      {
        title: "Custom-built systems",
        body: "In some builds, FLEX 25 / 50 is a configurable starting point when the standard FLEX 7 cell doesn't cover the required payload, reach, or range of options.",
        routeKey: "solutionCustomSystems",
      },
      {
        title: "Injection molding automation",
        body: "Applications include insert placing, insert molding, and steps before and after the injection molding process.",
        routeKey: "solutionInjectionMolding",
      },
    ],
  },
  kontakt: {
    eyebrow: "Contact",
    heading: "Is FLEX 25 / 50 the right platform for your process?",
    body: "Together we look at your process, the required payload, parts, and additional operations — then assess whether FLEX 25 / 50 covers the required application.",
    ctaLabel: "Send an inquiry",
    mailto: "info@flexido.eu",
    imageSrc: "/raw/flex-25-50-cell-rear-studio.png",
    imageAlt: "FLEX 25 / 50 in production",
    captionEyebrow: "First step",
    captionText: "Which application needs higher payload or reach?",
  },
};
