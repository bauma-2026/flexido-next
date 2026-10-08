import type { Metadata } from "next";

import SolutionPageTemplate from "@/components/solutions/SolutionPageTemplate";
import { getAutomationContent } from "@/content/solutions";
import { getPath } from "@/i18n/routes";
import { withSocial } from "@/i18n/metadata";

export const metadata: Metadata = withSocial({
  title: "Avtomatizacija proizvodnje | Flexido",
  description: "Ko posamezna celica ni dovolj, avtomatizacijo zasnujemo okoli strojev, kosov, toka materiala in potrebnih operacij v procesu.",
  alternates: {
    canonical: getPath("solutionProductionAutomation", "sl"),
    languages: {
      sl: getPath("solutionProductionAutomation", "sl"),
      en: getPath("solutionProductionAutomation", "en"),
      de: getPath("solutionProductionAutomation", "de"),
      "x-default": getPath("solutionProductionAutomation", "sl"),
    },
  },
}, "sl");

export default function Page() {
  return <SolutionPageTemplate locale="sl" content={getAutomationContent("sl")} />;
}
