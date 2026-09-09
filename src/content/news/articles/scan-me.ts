import type { NewsArticle } from "../types";

export const article: NewsArticle = {
  id: "scan-me",
  shared: {
    id: "scan-me",
    routeKey: "newsScanMe",
  },
  locales: {
    en: {
      slug: "new-application-is-released",
      meta: {
        title: "NEW APPLICATION IS RELEASED | News | Flexido",
        description:
          "Flexido SCAN ME is placed on every robot cell so service requests can be sent quickly by scanning the code.",
      },
      title: "NEW APPLICATION IS RELEASED",
      date: "2018-08-24",
      excerpt:
        "Flexido SCAN ME is placed on every robot cell so you can let us know about robot problems easily and fast.",
      details: [
        { label: "Category", value: "News" },
        { label: "Product", value: "Flexido SCAN ME" },
        { label: "Area", value: "Service" },
      ],
      blocks: [
        {
          type: "intro",
          text: "Our new APPLICATION is released ! Flexido SCAN ME is placed on every robot cell so you can let us know about robot problems EASY and FAST. Just scan and we will arrange the service.",
        },
        {
          type: "callout",
          eyebrow: "Related page",
          heading: "Service and support",
          body: "See how Flexido approaches support after commissioning.",
          ctaLabel: "See service →",
          routeKey: "service",
        },
      ],
    },
  },
};
