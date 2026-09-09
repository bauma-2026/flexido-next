import type { Metadata } from "next";

import LegalPageTemplate from "@/components/legal/LegalPageTemplate";
import { getPrivacyContent } from "@/content/legal";
import { buildAlternates } from "@/i18n/metadata";

const content = getPrivacyContent("sl");

export const metadata: Metadata = {
  title: content.meta.title,
  description: content.meta.description,
  robots: { index: false, follow: false },
  alternates: buildAlternates("privacyPolicy", "sl"),
};

export default function Page() {
  return <LegalPageTemplate locale="sl" content={content} />;
}
