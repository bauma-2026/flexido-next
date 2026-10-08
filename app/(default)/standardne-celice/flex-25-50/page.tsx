import type { Metadata } from "next";

import CatalogPageTemplate from "@/components/systems/CatalogPageTemplate";
import { getFlex2550SystemContent } from "@/content/systems";
import { buildAlternates, withSocial } from "@/i18n/metadata";

export function generateMetadata(): Metadata {
  const content = getFlex2550SystemContent("sl");

  return withSocial({
    title: content.meta.title,
    description: content.meta.description,
      alternates: buildAlternates("standardCellsFlex2550", "sl"),
  }, "sl");
}

export default function Page() {
  return <CatalogPageTemplate locale="sl" content={getFlex2550SystemContent("sl")} />;
}
