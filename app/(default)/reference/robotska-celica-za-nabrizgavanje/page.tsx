import type { Metadata } from "next";

import ReferencePageTemplate from "@/components/references/ReferencePageTemplate";
import { getReferenceContent, referenceShared } from "@/content/references";
import { buildAlternates, withSocial } from "@/i18n/metadata";

const shared = referenceShared["overmolding-cell"];
const content = getReferenceContent("overmolding-cell", "sl");

export const metadata: Metadata = withSocial({
  title: content.meta.title,
  description: content.meta.description,
  alternates: buildAlternates("referenceOvermolding", "sl"),
}, "sl");

export default function Page() {
  return <ReferencePageTemplate locale="sl" shared={shared} content={content} />;
}
