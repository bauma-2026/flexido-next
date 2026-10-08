import type { Metadata } from "next";

import ReferencesHubTemplate from "@/components/references/ReferencesHubTemplate";
import { getReferencesHubContent } from "@/content/references";
import { buildAlternates, withSocial } from "@/i18n/metadata";

const content = getReferencesHubContent("sl");

export const metadata: Metadata = withSocial({
  title: content.meta.title,
  description: content.meta.description,
  alternates: buildAlternates("references", "sl"),
}, "sl");

export default function Page() {
  return <ReferencesHubTemplate locale="sl" content={content} />;
}
