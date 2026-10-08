import type { NewsArticle } from "../types";

export const article: NewsArticle = {
  id: "flex-7-pro",
  shared: {
    id: "flex-7-pro",
    routeKey: "newsFlex7Pro",
    image: { src: "/images/2020/09/23/thumb_growing_family.jpg" },
  },
  locales: {
    en: {
      slug: "flex-7-pro",
      meta: {
        title: "FLEX 7 PRO | News | Flexido",
        description: "The Flexido family at our client is growing. Another FLEX 7 PRO robot cell will reduce production costs and quality issues.",
      },
      title: "FLEX 7 PRO",
      date: "2018-08-05",
      excerpt: "The Flexido family at our client is growing. Another FLEX 7 PRO robot cell will reduce production costs and quality issues.",
      imageAlt: "FLEX 7 PRO",
      details: [
        { label: "Category", value: "News" },
        { label: "Product", value: "FLEX 7 PRO" },
      ],
      blocks: [
        {
          type: "intro",
          text: "The Flexido family at our client is growing. Another Flexido FLEX 7 PRO robot cell will reduce the production costs and quality issues.",
        },
      ],
    },
  },
};
