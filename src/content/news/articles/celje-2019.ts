import type { NewsArticle } from "../types";

export const article: NewsArticle = {
  id: "celje-2019",
  shared: {
    id: "celje-2019",
    routeKey: "newsCelje2019",
  },
  locales: {
    en: {
      slug: "industry-fair-2019-celje",
      meta: {
        title: "Industry Fair 2019 Celje | News | Flexido",
        description:
          "FLEXIDO at the Industry Fair in Celje, Slovenia, 9–12 April 2019.",
      },
      title: "Industry Fair 2019 Celje",
      date: "2019-04-05",
      excerpt:
        "FLEXIDO welcomes you to attend the biggest trade fair in the region for tooling machine manufacturers, held in Celje, Slovenia.",
      details: [
        { label: "Category", value: "News" },
        { label: "Event", value: "PLAGKEM / FORMATOOL Industry Fair" },
        { label: "Location", value: "Celje, Slovenia" },
      ],
      blocks: [
        {
          type: "intro",
          text: "PLAGKEM / FORMATOOL Industry Fair — Celje, Slovenia, 9–12 April 2019.",
        },
        {
          type: "section",
          heading: "Exhibition",
          paragraphs: [
            "FLEXIDO welcomes you to attend biggest trade fair in the region for tooling Machine manufacturers to be held in Celje / Slovenia from April 9 - 12, 2019.",
            "We will be glad to exhibit FLEX 7 IMM, FLEX 7 Pick & Place, FLEX 20 Robot Cells with integrated rotary pallet system and remote control packeage. Flexido will demonstrate the right solution to automate your process.",
          ],
        },
      ],
    },
  },
};
