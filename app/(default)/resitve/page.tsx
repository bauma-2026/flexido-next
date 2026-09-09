import type { Metadata } from "next";

import SolutionsHubTemplate from "@/components/solutions/SolutionsHubTemplate";
import { getHubContent } from "@/content/solutions";
import { getPath } from "@/i18n/routes";

export const metadata: Metadata = {
  title: "Rešitve za stabilnejšo proizvodnjo | Flexido",
  description: "Izberite področje, kjer vaš proces potrebuje avtomatizacijo — od CNC in brizganja do kolaborativnih robotov, manipulacije, logistike in namenskih sistemov.",
  robots: { index: false, follow: false },
  alternates: {
    canonical: getPath("solutions", "sl"),
    languages: {
      sl: getPath("solutions", "sl"),
      en: getPath("solutions", "en"),
      de: getPath("solutions", "de"),
      "x-default": getPath("solutions", "sl"),
    },
  },
};

export default function ResitvePage() {
  return <SolutionsHubTemplate locale="sl" content={getHubContent("sl")} />;
}
