import type { NewsHubContent } from "../types";

export const newsHubContent: NewsHubContent = {
  routeKey: "news",
  meta: {
    title: "News | Flexido",
    description:
      "Trade-fair notes, product updates, and project stories from Flexido.",
  },
  hero: {
    eyebrow: "News",
    heading: "Updates and projects",
    body: "A review of trade fairs, product updates, and project stories from Flexido.",
    aside:
      "These posts show how solutions are presented, developed, and used in real production environments.",
  },
  featuredEyebrow: "Featured",
  featuredFallbackBody:
    "The latest post from Flexido’s trade fairs, collaborations, and project updates.",
  readMoreLabel: "Read more →",
  grid: {
    eyebrow: "All posts",
    heading: "Fairs, products, and projects",
    body: "Selected notes from exhibitions, product releases, and installed cells in the English news inventory.",
    cardLabel: "Post",
  },
  cta: {
    eyebrow: "Next step",
    heading: "Looking for a solution for your process?",
    body: "If your process has recurring stops, manual steps, or waiting between stages, we can review together which solution makes the most sense.",
    primaryLabel: "See the solutions →",
    primaryRouteKey: "solutions",
    secondaryLabel: "Send an inquiry →",
    mailto: "info@flexido.eu",
  },
  chrome: {
    backLabel: "← Back to news",
    prevLabel: "← Previous",
    nextLabel: "Next →",
    detailsLabel: "Details",
  },
};
