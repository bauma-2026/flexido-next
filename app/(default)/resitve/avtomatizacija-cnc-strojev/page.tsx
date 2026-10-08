import type { Metadata } from "next";

import SolutionPageTemplate from "@/components/solutions/SolutionPageTemplate";
import { getCncContent } from "@/content/solutions";
import { getPath } from "@/i18n/routes";
import { withSocial } from "@/i18n/metadata";

export const metadata: Metadata = withSocial({
  title: "CNC avtomatizacija | Flexido",
  description: "Ko CNC proizvodnja zahteva več kot ponovljivo strego enega stroja, zasnujemo avtomatizacijo okoli strojev, kosov, postaj in toka materiala.",
  alternates: {
    canonical: getPath("solutionCnc", "sl"),
    languages: {
      sl: getPath("solutionCnc", "sl"),
      en: getPath("solutionCnc", "en"),
      de: getPath("solutionCnc", "de"),
      "x-default": getPath("solutionCnc", "sl"),
    },
  },
}, "sl");

export default function Page() {
  return <SolutionPageTemplate locale="sl" content={getCncContent("sl")} />;
}
