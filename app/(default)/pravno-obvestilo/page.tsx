import type { Metadata } from "next";

import LegalPageTemplate from "@/components/legal/LegalPageTemplate";
import { getLegalNoticeContent } from "@/content/legal";
import { buildAlternates } from "@/i18n/metadata";

const content = getLegalNoticeContent("sl");

export const metadata: Metadata = {
  title: content.meta.title,
  description: content.meta.description,
  robots: { index: false, follow: false },
  alternates: buildAlternates("legalNotice", "sl"),
};

export default function Page() {
  return <LegalPageTemplate locale="sl" content={content} />;
}
