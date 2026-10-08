import type { Metadata } from "next";

import LegalPageTemplate from "@/components/legal/LegalPageTemplate";
import { getSalesTermsContent } from "@/content/legal";
import { buildAlternates, withSocial } from "@/i18n/metadata";

const content = getSalesTermsContent("sl");

export const metadata: Metadata = withSocial({
  title: content.meta.title,
  description: content.meta.description,
  alternates: buildAlternates("salesTerms", "sl"),
}, "sl");

export default function Page() {
  return <LegalPageTemplate locale="sl" content={content} />;
}
