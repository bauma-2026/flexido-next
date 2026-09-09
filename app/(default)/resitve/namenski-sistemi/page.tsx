import type { Metadata } from "next";

import SolutionPageTemplate from "@/components/solutions/SolutionPageTemplate";
import { getCustomSystemsContent } from "@/content/solutions";
import { getPath } from "@/i18n/routes";

export const metadata: Metadata = {
  title: "Namenski sistemi | Flexido",
  description: "Kadar niti konfigurabilna celica niti eno specialistično področje ne opišeta celotne rešitve, zasnujemo sistem okoli konkretne sestave operacij, postaj in omejitev izvedbe.",
  robots: { index: false, follow: false },
  alternates: {
    canonical: getPath("solutionCustomSystems", "sl"),
    languages: {
      sl: getPath("solutionCustomSystems", "sl"),
      en: getPath("solutionCustomSystems", "en"),
      de: getPath("solutionCustomSystems", "de"),
      "x-default": getPath("solutionCustomSystems", "sl"),
    },
  },
};

export default function Page() {
  return <SolutionPageTemplate locale="sl" content={getCustomSystemsContent("sl")} />;
}
