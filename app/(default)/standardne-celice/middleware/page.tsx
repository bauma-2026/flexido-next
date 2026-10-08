import type { Metadata } from "next";

import CatalogPageTemplate from "@/components/systems/CatalogPageTemplate";
import { getMiddlewareSystemContent } from "@/content/systems";
import { buildAlternates, withSocial } from "@/i18n/metadata";

export function generateMetadata(): Metadata {
  const content = getMiddlewareSystemContent("sl");

  return withSocial({
    title: content.meta.title,
    description: content.meta.description,
      alternates: buildAlternates("standardCellsMiddleware", "sl"),
  }, "sl");
}

export default function Page() {
  return <CatalogPageTemplate locale="sl" content={getMiddlewareSystemContent("sl")} />;
}
