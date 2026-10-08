import type { Metadata } from "next";

import LegalPageTemplate from "@/components/legal/LegalPageTemplate";
import { getLegalNoticeContent } from "@/content/legal";
import { buildAlternates, withSocial } from "@/i18n/metadata";

const content = getLegalNoticeContent("sl");

export const metadata: Metadata = withSocial({
  title: content.meta.title,
  description: content.meta.description,
  alternates: buildAlternates("legalNotice", "sl"),
}, "sl");

export default function Page() {
  return <LegalPageTemplate locale="sl" content={content} />;
}
