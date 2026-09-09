import type { Metadata } from "next";

import ReferencesHubTemplate from "@/components/references/ReferencesHubTemplate";
import { getReferencesHubContent } from "@/content/references";
import { buildAlternates } from "@/i18n/metadata";

const content = getReferencesHubContent("sl");

export const metadata: Metadata = {
  title: content.meta.title,
  description: content.meta.description,
  robots: { index: false, follow: false },
  alternates: buildAlternates("references", "sl"),
};

export default function Page() {
  return <ReferencesHubTemplate locale="sl" content={content} />;
}
