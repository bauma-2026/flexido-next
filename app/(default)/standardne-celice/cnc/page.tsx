import type { Metadata } from "next";

import CatalogPageTemplate from "@/components/systems/CatalogPageTemplate";
import { getCncSystemContent } from "@/content/systems";
import { buildAlternates, withSocial } from "@/i18n/metadata";

export function generateMetadata(): Metadata {
  const content = getCncSystemContent("sl");

  return withSocial({
    title: content.meta.title,
    description: content.meta.description,
      alternates: buildAlternates("standardCellsCnc", "sl"),
  }, "sl");
}

export default function Page() {
  return <CatalogPageTemplate locale="sl" content={getCncSystemContent("sl")} />;
}
