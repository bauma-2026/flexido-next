import type { Metadata } from "next";

import SolutionPageTemplate from "@/components/solutions/SolutionPageTemplate";
import { getCobotsContent } from "@/content/solutions";
import { getPath } from "@/i18n/routes";
import { withSocial } from "@/i18n/metadata";

export const metadata: Metadata = withSocial({
  title: "Kolaborativni roboti | Flexido",
  description: "Kolaborativni robot je lahko primerna rešitev za prijemanje, vstavljanje, kontrolo ali montažo v obstoječem proizvodnem procesu.",
  alternates: {
    canonical: getPath("solutionCobots", "sl"),
    languages: {
      sl: getPath("solutionCobots", "sl"),
      en: getPath("solutionCobots", "en"),
      de: getPath("solutionCobots", "de"),
      "x-default": getPath("solutionCobots", "sl"),
    },
  },
}, "sl");

export default function Page() {
  return <SolutionPageTemplate locale="sl" content={getCobotsContent("sl")} />;
}
