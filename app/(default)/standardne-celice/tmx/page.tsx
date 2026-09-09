import type { Metadata } from "next";

import TmxPageTemplate from "@/components/systems/TmxPageTemplate";
import { getTmxSystemContent } from "@/content/systems";
import { buildAlternates } from "@/i18n/metadata";

export function generateMetadata(): Metadata {
  const content = getTmxSystemContent("sl");

  return {
    title: content.meta.title,
    description: content.meta.description,
    robots: { index: false, follow: false },
    alternates: buildAlternates("standardCellsTmx", "sl"),
  };
}

export default function Page() {
  return <TmxPageTemplate locale="sl" content={getTmxSystemContent("sl")} />;
}
