import type { NewsArticle } from "../types";

export const article: NewsArticle = {
  id: "flex-7-pro-dental",
  shared: {
    id: "flex-7-pro-dental",
    routeKey: "newsFlex7ProDental",
    image: { src: "/images/2020/09/23/thumb_dental_industry.jpg" },
  },
  locales: {
    en: {
      slug: "flex-7-pro-for-dental-industry",
      meta: {
        title: "FLEX 7 PRO FOR DENTAL INDUSTRY | News | Flexido",
        description: "Flex 7 Pro released for dental industry. Flexido robot cells are used in various fields.",
      },
      title: "FLEX 7 PRO FOR DENTAL INDUSTRY",
      date: "2018-08-18",
      excerpt: "Flex 7 Pro released for dental industry. Flexido robot cells are used in various fields.",
      imageAlt: "FLEX 7 PRO FOR DENTAL INDUSTRY",
      details: [
        { label: "Category", value: "News" },
        { label: "Product", value: "FLEX 7 PRO" },
      ],
      blocks: [
        {
          type: "intro",
          text: "Flex 7 Pro released for dental industry. Flexido robot cells are used in various fields. With our individual approach we can solve any challenge in the way of your company's automation process.",
        },
      ],
    },
  },
};
