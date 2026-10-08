import type { Metadata } from "next";

import CompanyPageTemplate from "@/components/company/CompanyPageTemplate";
import { getAboutContent } from "@/content/company";
import { buildAlternates, withSocial } from "@/i18n/metadata";

const content = getAboutContent("sl");

export const metadata: Metadata = withSocial({
  title: content.meta.title,
  description: content.meta.description,
  alternates: buildAlternates("aboutUs", "sl"),
}, "sl");

export default function Page() {
  return <CompanyPageTemplate locale="sl" content={content} />;
}
