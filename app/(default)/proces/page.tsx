import type { Metadata } from "next";

import ProcessPageTemplate from "@/components/process/ProcessPageTemplate";
import { getProcessContent } from "@/content/process";
import { buildAlternates } from "@/i18n/metadata";

const content = getProcessContent("sl");

export const metadata: Metadata = {
  title: content.meta.title,
  description: content.meta.description,
  robots: { index: false, follow: false },
  alternates: buildAlternates("process", "sl"),
};

export default function Page() {
  return <ProcessPageTemplate locale="sl" content={content} />;
}
