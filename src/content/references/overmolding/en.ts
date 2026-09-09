import type { ReferencePageContent } from "../types";

export const overmoldingContent: ReferencePageContent = {
  routeKey: "referenceOvermolding",
  meta: {
    title: "Robotic overmolding cell | References | Flexido",
    description:
      "For a customer, Flexido automated the overmolding of parts and optimized the required output quantity in the production process.",
  },
  backLabel: "← Back to references",
  eyebrow: "Reference",
  title: "Robotic overmolding cell",
  intro:
    "For a customer, Flexido automated the overmolding of parts and optimized the required output quantity in the production process.",
  imageAlt: "Robotic overmolding cell",
  sections: [
    {
      heading: "Higher production capacity",
      paragraphs: [
        "With the implemented solution, the customer now produces almost a third more parts than originally planned.",
        "The robotic cell enables a more stable workflow, less dependence on manual intervention, and more predictable production.",
      ],
    },
    {
      heading: "Automating the overmolding process",
      paragraphs: [
        "The solution is designed for efficient part handling in the injection molding process, where repeatability, speed, and quality control matter.",
      ],
    },
  ],
  result: {
    label: "Result",
    heading: "Almost a third more parts than originally planned.",
    body: "The example shows how a correctly designed robotic cell can improve process stability, reduce manual intervention, and increase production capacity.",
  },
  related: {
    eyebrow: "Related solution",
    heading: "Injection molding automation",
    body: "See how Flexido approaches unloading, placing, inspection, and a stable part flow after the molding cycle.",
    ctaLabel: "See the solution →",
    routeKey: "solutionInjectionMolding",
  },
  processLink: { label: "How does a project like this run? See the process →" },
  siblingLabel: "Another reference",
  productLink: { label: "See FLEX 7 IMM Slim →", routeKey: "standardCellsImm" },
  summary: {
    area: "Injection molding",
    title: "Robotic overmolding cell",
    body: "Automating the overmolding of parts and optimizing the required output in the production process.",
    result: "Almost a third more parts than the originally planned quantity.",
  },
};
