import type { Metadata } from "next";

import ImmPageTemplate from "@/components/systems/ImmPageTemplate";
import { getImmSystemContent } from "@/content/systems";
import { buildAlternates } from "@/i18n/metadata";

export function generateMetadata(): Metadata {
  const content = getImmSystemContent("sl");

  return {
    title: content.meta.title,
    description: content.meta.description,
    robots: { index: false, follow: false },
    alternates: buildAlternates("standardCellsImm", "sl"),
  };
}

export default function Page() {
  return <ImmPageTemplate locale="sl" content={getImmSystemContent("sl")} />;
}
