import type { Metadata } from "next";

import CompanyPageTemplate from "@/components/company/CompanyPageTemplate";
import { getAboutContent } from "@/content/company";
import { buildAlternates } from "@/i18n/metadata";

const content = getAboutContent("sl");

export const metadata: Metadata = {
  title: content.meta.title,
  description: content.meta.description,
  robots: { index: false, follow: false },
  alternates: buildAlternates("aboutUs", "sl"),
};

export default function Page() {
  return <CompanyPageTemplate locale="sl" content={content} />;
}
