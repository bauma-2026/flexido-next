import type { ReferencePageContent } from "../types";

export const conveyorContent: ReferencePageContent = {
  routeKey: "referenceConveyor",
  meta: {
    title: "Inbound-outbound conveyor line | References | Flexido",
    description:
      "An inbound-outbound conveyor line for standard KLT containers, built for greater autonomy of a collaborative cell alongside different CNC machines.",
  },
  backLabel: "← Back to references",
  eyebrow: "Reference",
  title: "Inbound-outbound conveyor line",
  intro:
    "To increase the autonomy of a collaborative cell working with different CNC machines, we built an inbound-outbound conveyor line adapted for handling standard KLT containers.",
  imageAlt: "Inbound-outbound conveyor line",
  sections: [
    {
      heading: "Autonomous cell operation",
      paragraphs: [
        "Combined with an integrated camera, a TM robot is a suitable solution for independent, continuous operation with different workpieces.",
        "Machining stages can be adapted from a predefined sequence, so the solution is useful in processes where stable material handling during machining matters.",
      ],
    },
    {
      heading: "System capacity",
      paragraphs: [
        "The solution supports five inbound and five outbound KLT containers, 600 × 400 mm in size.",
      ],
    },
  ],
  result: {
    label: "Result",
    heading:
      "Independent, continuous operation with different workpieces, combined with an integrated camera.",
  },
  related: {
    eyebrow: "Related solution",
    heading: "CNC machine automation",
    body: "See how Flexido approaches loading, unloading, and part flow around CNC machines.",
    ctaLabel: "See the solution →",
    routeKey: "solutionCnc",
  },
  processLink: { label: "How does a project like this run? See the process →" },
  siblingLabel: "Another reference",
  productLink: { label: "See FLEX 7 CNC Slim →", routeKey: "standardCellsCnc" },
  summary: {
    area: "CNC and material flow",
    title: "Inbound-outbound conveyor line",
    body: "A conveyor line for KLT containers alongside different CNC machines, built for greater autonomy of the collaborative cell.",
    result:
      "Independent, continuous operation with different workpieces, combined with an integrated camera.",
  },
};
