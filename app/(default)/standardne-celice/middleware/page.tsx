import type { Metadata } from "next";

import CatalogPageTemplate from "@/components/systems/CatalogPageTemplate";
import { getMiddlewareSystemContent } from "@/content/systems";
import { buildAlternates } from "@/i18n/metadata";

export function generateMetadata(): Metadata {
  const content = getMiddlewareSystemContent("sl");

  return {
    title: content.meta.title,
    description: content.meta.description,
    robots: { index: false, follow: false },
    alternates: buildAlternates("standardCellsMiddleware", "sl"),
  };
}

export default function Page() {
  return <CatalogPageTemplate locale="sl" content={getMiddlewareSystemContent("sl")} />;
}
