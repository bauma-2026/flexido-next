import type { NewsArticle } from "../types";

export const article: NewsArticle = {
  id: "robot-cell-installed",
  shared: {
    id: "robot-cell-installed",
    routeKey: "newsRobotCellInstalled",
    image: { src: "/images/2020/09/23/thumb-flex-semic.jpg" },
  },
  locales: {
    en: {
      slug: "new-flexido-robot-cell-installed",
      meta: {
        title: "New Flexido robot cell installed | News | Flexido",
        description: "Our client got a new reliable partner, a FLEX 7 PRO robot cell working non-stop at 206 pieces/hour.",
      },
      title: "New Flexido robot cell installed",
      date: "2017-08-27",
      excerpt: "Our client got a new reliable partner, a FLEX 7 PRO robot cell working non-stop at 206 pieces/hour.",
      imageAlt: "New Flexido robot cell installed",
      details: [
        { label: "Category", value: "News" },
        { label: "Product", value: "FLEX 7 PRO" },
      ],
      blocks: [
        {
          type: "intro",
          text: "Our client got his new reliable partner - FLEX 7 PRO. This robot cell is working non-stop with speed 206 pieces/hour.",
        },
      ],
    },
  },
};
