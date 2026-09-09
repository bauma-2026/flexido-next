import type { Metadata } from "next";

import ReferencePageTemplate from "@/components/references/ReferencePageTemplate";
import { getReferenceContent, referenceShared } from "@/content/references";
import { buildAlternates } from "@/i18n/metadata";

const shared = referenceShared["klt-conveyor"];
const content = getReferenceContent("klt-conveyor", "sl");

export const metadata: Metadata = {
  title: content.meta.title,
  description: content.meta.description,
  robots: { index: false, follow: false },
  alternates: buildAlternates("referenceConveyor", "sl"),
};

export default function Page() {
  return <ReferencePageTemplate locale="sl" shared={shared} content={content} />;
}
