import type { Metadata } from "next";

import ReferencePageTemplate from "@/components/references/ReferencePageTemplate";
import { getReferenceContent, referenceShared } from "@/content/references";
import { buildAlternates, withSocial } from "@/i18n/metadata";

const shared = referenceShared["carton-forming"];
const content = getReferenceContent("carton-forming", "sl");

export const metadata: Metadata = withSocial({
  title: content.meta.title,
  description: content.meta.description,
  alternates: buildAlternates("referenceCarton", "sl"),
}, "sl");

export default function Page() {
  return <ReferencePageTemplate locale="sl" shared={shared} content={content} />;
}
