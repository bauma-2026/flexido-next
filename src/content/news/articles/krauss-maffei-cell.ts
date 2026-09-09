import type { NewsArticle } from "../types";

export const article: NewsArticle = {
  id: "krauss-maffei-cell",
  shared: {
    id: "krauss-maffei-cell",
    routeKey: "newsKraussMaffei",
  },
  locales: {
    en: {
      slug: "next-level-efficiency-flexido-robot-cell-on-krauss-maffei-km-81-250-px",
      meta: {
        title:
          "NEXT LEVEL EFFICIENCY — Flexido robot cell on Krauss Maffei KM81/250 PX | News | Flexido",
        description:
          "High-performance Flexido robot cell with integrated vision control, installed on a Krauss Maffei KM81/250 PX.",
      },
      title: "NEXT LEVEL EFFICIENCY - FLEXIDO ROBOT CELL ON KRAUSS MAFFEI KM81/250 PX",
      date: "2021-04-26",
      excerpt:
        "Shown in this video is a high-performance Flexido robot cell with integrated vision control, installed on Krauss Maffei KM81/250 PX.",
      details: [
        { label: "Category", value: "News" },
        { label: "Machine", value: "Krauss Maffei KM81/250 PX" },
        { label: "Area", value: "Injection molding automation" },
      ],
      blocks: [
        {
          type: "intro",
          text: "Shown in this video is high performance FLEXIDO robot cell with integrated vision control, installed on Krauss Maffei KM81/250 PX.",
        },
        {
          type: "section",
          heading: "Automation and control",
          paragraphs: ["Automation and control for next level efficiency."],
        },
        {
          type: "callout",
          eyebrow: "Related solution",
          heading: "Injection molding automation",
          body: "See how Flexido approaches unloading, placing, inspection, and a stable part flow after the molding cycle.",
          ctaLabel: "See the solution →",
          routeKey: "solutionInjectionMolding",
        },
      ],
    },
  },
};
