import type { Metadata } from "next";

import LegalPageTemplate from "@/components/legal/LegalPageTemplate";
import { getPrivacyContent } from "@/content/legal";
import { buildAlternates, withSocial } from "@/i18n/metadata";

const content = getPrivacyContent("sl");

export const metadata: Metadata = withSocial({
  title: content.meta.title,
  description: content.meta.description,
  alternates: buildAlternates("privacyPolicy", "sl"),
}, "sl");

export default function Page() {
  return <LegalPageTemplate locale="sl" content={content} />;
}
