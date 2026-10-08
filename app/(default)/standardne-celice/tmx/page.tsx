import type { Metadata } from "next";

import CatalogPageTemplate from "@/components/systems/CatalogPageTemplate";
import { getTmxSystemContent } from "@/content/systems";
import { buildAlternates, withSocial } from "@/i18n/metadata";

export function generateMetadata(): Metadata {
  const content = getTmxSystemContent("sl");

  return withSocial({
    title: content.meta.title,
    description: content.meta.description,
      alternates: buildAlternates("standardCellsTmx", "sl"),
  }, "sl");
}

export default function Page() {
  return <CatalogPageTemplate locale="sl" content={getTmxSystemContent("sl")} />;
}
