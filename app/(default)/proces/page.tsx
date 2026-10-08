import type { Metadata } from "next";

import ProcessPageTemplate from "@/components/process/ProcessPageTemplate";
import { getProcessContent } from "@/content/process";
import { buildAlternates, withSocial } from "@/i18n/metadata";

const content = getProcessContent("sl");

export const metadata: Metadata = withSocial({
  title: content.meta.title,
  description: content.meta.description,
  alternates: buildAlternates("process", "sl"),
}, "sl");

export default function Page() {
  return <ProcessPageTemplate locale="sl" content={content} />;
}
