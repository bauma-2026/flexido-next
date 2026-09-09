import type { Metadata } from "next";

import CncPageTemplate from "@/components/systems/CncPageTemplate";
import { getCncSystemContent } from "@/content/systems";
import { buildAlternates } from "@/i18n/metadata";

export function generateMetadata(): Metadata {
  const content = getCncSystemContent("sl");

  return {
    title: content.meta.title,
    description: content.meta.description,
    robots: { index: false, follow: false },
    alternates: buildAlternates("standardCellsCnc", "sl"),
  };
}

export default function Page() {
  return <CncPageTemplate locale="sl" content={getCncSystemContent("sl")} />;
}
