import type { NewsArticle } from "../types";

export const article: NewsArticle = {
  id: "new-in-family",
  shared: {
    id: "new-in-family",
    routeKey: "newsNewInFamily",
    image: { src: "/images/2020/09/23/thumb_mz_12.jpg" },
  },
  locales: {
    en: {
      slug: "new-in-flexido-family",
      meta: {
        title: "New in Flexido family | News | Flexido",
        description: "New robot from Nachi - MZ 12 is now available with the Flexido FLEX 20 Basic robot cell.",
      },
      title: "New in Flexido family",
      date: "2018-08-11",
      excerpt: "New robot from Nachi - MZ 12 is now available with the Flexido FLEX 20 Basic robot cell.",
      imageAlt: "New in Flexido family",
      details: [
        { label: "Category", value: "News" },
        { label: "Product", value: "FLEX 20 Basic with Nachi MZ 12" },
      ],
      blocks: [
        {
          type: "intro",
          text: "New robot from Nachi - MZ 12 is now available with Flexido FLEX 20 Basic robot cell. The powerful and compact MZ 12 leads its class in speed and precision. Footprint is 17% smaller than conventional robots and the paint is coolant resistant.",
        },
      ],
    },
  },
};
