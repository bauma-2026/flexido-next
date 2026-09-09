import type { HubContent } from "../types";

/** Faithful structural port of `hub/sl.ts`. */
export const hubContent: HubContent = {
  hero: {
    eyebrow: "Solutions",
    heading: "Solutions for more stable production",
    subhead: "Choose the area where your process needs automation.",
    ctaLabel: "Choose an area",
  },
  gridHeading: "Where does your process stall?",
  gridBody:
    "Start with the part of production where bottlenecks, manual steps, or waiting between stages occur.",
  gridItems: [
    { routeKey: "solutionCnc", title: "CNC machines", desc: "Loading, unloading, and better machine utilization.", label: "Machine process", icon: "cnc" },
    { routeKey: "solutionInjectionMolding", title: "Injection molding", desc: "A stable cycle, part removal, and less manual work.", label: "Production cycle", icon: "imm" },
    { routeKey: "solutionManipulation", title: "Material handling", desc: "Moving, turning, and transferring parts between stages.", label: "Material transfer", icon: "manipulation" },
    { routeKey: "solutionLogistics", title: "Palletizing and internal logistics", desc: "When material doesn't flow smoothly through production.", label: "Material flow", icon: "materialFlow" },
  ],
  gridReadMoreLabel: "Read more",
  widerApproach: {
    eyebrow: "A wider approach",
    heading: "When the problem spans more than one area.",
    linkLabel: "See the solution",
    paths: [
      {
        title: "Production automation",
        body: "When you want to connect several process steps into a stable flow.",
        routeKey: "solutionProductionAutomation",
      },
      {
        title: "Custom-built systems",
        body: "When a standard solution doesn't cover the space, the parts, and the real workflow.",
        routeKey: "solutionCustomSystems",
      },
    ],
    footNote: {
      template: "For repetitive tasks alongside an operator, also see {0}.",
      link: { label: "collaborative robots", routeKey: "solutionCobots" },
    },
  },
  proof: {
    eyebrow: "Completed projects",
    heading: "Solutions in practice.",
    body: "Two concrete examples of production process automation.",
    readMoreLabel: "Read the project",
    items: [
      {
        area: "Injection molding",
        title: "Robotic cell for overmolding",
        body: "Automating the overmolding of parts and optimizing the required output in the production process.",
        result: "Almost a third more parts than the originally planned quantity.",
        routeKey: "referenceOvermolding",
        image: {
          src: "/images/systems/raw/robotska-celica-za-nabrizgavanje.png",
          width: 757,
          height: 1024,
        },
      },
      {
        area: "CNC and material flow",
        title: "Inbound-outbound conveyor line",
        body: "To increase the autonomy of a collaborative cell working with several CNC machines, we built a conveyor line for KLT containers.",
        result:
          "Independent, continuous operation with different workpieces, combined with an integrated camera.",
        routeKey: "referenceConveyor",
        image: {
          src: "/images/systems/raw/vhodno-izhodna-tracna-proga.png",
          width: 757,
          height: 1024,
          objectPosition: "object-[50%_27%] scale-[1.17] origin-[100%_58%] group-hover:scale-[1.2]",
        },
      },
    ],
  },
  unsure: {
    eyebrow: "Not sure?",
    heading: "Start with the process.",
    body: "We start by looking at the machine, the part, material flow, space, and production rhythm.",
    cta: { label: "How a project works", routeKey: "process" },
  },
  finalCta: {
    eyebrow: "Next step",
    heading: "Let's look at your process.",
    body: "Tell us what you want to automate. Together we'll work out which solution makes the most sense for your process.",
    ctaLabel: "Send an inquiry",
    mailto: "info@flexido.eu",
  },
};
