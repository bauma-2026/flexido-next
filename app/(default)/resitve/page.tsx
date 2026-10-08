import type { Metadata } from "next";

import SolutionsHubTemplate from "@/components/solutions/SolutionsHubTemplate";
import { getHubContent } from "@/content/solutions";
import { getPath } from "@/i18n/routes";
import { withSocial } from "@/i18n/metadata";

export const metadata: Metadata = withSocial({
  title: "Rešitve za stabilnejšo proizvodnjo | Flexido",
  description: "Izberite področje, kjer vaš proces potrebuje avtomatizacijo — od CNC in brizganja do kolaborativnih robotov, manipulacije, logistike in namenskih sistemov.",
  alternates: {
    canonical: getPath("solutions", "sl"),
    languages: {
      sl: getPath("solutions", "sl"),
      en: getPath("solutions", "en"),
      de: getPath("solutions", "de"),
      "x-default": getPath("solutions", "sl"),
    },
  },
}, "sl");

export default function ResitvePage() {
  return <SolutionsHubTemplate locale="sl" content={getHubContent("sl")} />;
}
