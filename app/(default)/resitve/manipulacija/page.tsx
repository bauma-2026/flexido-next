import type { Metadata } from "next";

import SolutionPageTemplate from "@/components/solutions/SolutionPageTemplate";
import { getMaterialHandlingContent } from "@/content/solutions";
import { getPath } from "@/i18n/routes";
import { withSocial } from "@/i18n/metadata";

export const metadata: Metadata = withSocial({
  title: "Manipulacija materiala | Flexido",
  description: "Zasnovali smo, kako se kos prime, premakne, usmeri in preda v naslednji korak proizvodnega procesa.",
  alternates: {
    canonical: getPath("solutionManipulation", "sl"),
    languages: {
      sl: getPath("solutionManipulation", "sl"),
      en: getPath("solutionManipulation", "en"),
      de: getPath("solutionManipulation", "de"),
      "x-default": getPath("solutionManipulation", "sl"),
    },
  },
}, "sl");

export default function Page() {
  return <SolutionPageTemplate locale="sl" content={getMaterialHandlingContent("sl")} />;
}
