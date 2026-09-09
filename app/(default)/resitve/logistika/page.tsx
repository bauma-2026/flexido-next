import type { Metadata } from "next";

import SolutionPageTemplate from "@/components/solutions/SolutionPageTemplate";
import { getLogisticsContent } from "@/content/solutions";
import { getPath } from "@/i18n/routes";

export const metadata: Metadata = {
  title: "Interna logistika | Flexido",
  description: "Zasnovali smo fizični tok palet, zabojev, KLT vsebnikov in materiala med stroji, postajami in naslednjimi fazami procesa.",
  robots: { index: false, follow: false },
  alternates: {
    canonical: getPath("solutionLogistics", "sl"),
    languages: {
      sl: getPath("solutionLogistics", "sl"),
      en: getPath("solutionLogistics", "en"),
      de: getPath("solutionLogistics", "de"),
      "x-default": getPath("solutionLogistics", "sl"),
    },
  },
};

export default function Page() {
  return <SolutionPageTemplate locale="sl" content={getLogisticsContent("sl")} />;
}
