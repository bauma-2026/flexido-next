import type { Metadata } from "next";

import SolutionPageTemplate from "@/components/solutions/SolutionPageTemplate";
import { getInjectionMoldingContent } from "@/content/solutions";
import { getPath } from "@/i18n/routes";
import { withSocial } from "@/i18n/metadata";

export const metadata: Metadata = withSocial({
  title: "Avtomatizacija brizganja plastike | Flexido",
  description: "Kadar proces zahteva inserte, pripravo, kontrolo ali dodatne operacije, avtomatizacijo zasnujemo okoli stroja, orodja in dejanskega poteka brizganja.",
  alternates: {
    canonical: getPath("solutionInjectionMolding", "sl"),
    languages: {
      sl: getPath("solutionInjectionMolding", "sl"),
      en: getPath("solutionInjectionMolding", "en"),
      de: getPath("solutionInjectionMolding", "de"),
      "x-default": getPath("solutionInjectionMolding", "sl"),
    },
  },
}, "sl");

export default function Page() {
  return <SolutionPageTemplate locale="sl" content={getInjectionMoldingContent("sl")} />;
}
