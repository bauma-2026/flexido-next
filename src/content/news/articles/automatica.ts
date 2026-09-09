import type { NewsArticle } from "../types";

export const article: NewsArticle = {
  id: "automatica",
  shared: {
    id: "automatica",
    routeKey: "newsAutomatica",
  },
  locales: {
    en: {
      slug: "flexido-at-automatica-trade-fair",
      meta: {
        title: "FLEXIDO AT AUTOMATICA TRADE FAIR | News | Flexido",
        description: "Flexido team exploring the Automatica trade fair in Munich.",
      },
      title: "FLEXIDO AT AUTOMATICA TRADE FAIR",
      date: "2018-08-20",
      excerpt: "Flexido Team exploring the Automatica trade fair in Munich. Searching for the latest Nachi goodies.",
      details: [
        { label: "Category", value: "News" },
        { label: "Event", value: "Automatica" },
        { label: "Location", value: "Munich" },
      ],
      blocks: [
        {
          type: "intro",
          text: "Flexido Team exploring the Automatica trade fair in Munich. Searching for the latest Nachi goodies.",
        },
      ],
    },
  },
};
