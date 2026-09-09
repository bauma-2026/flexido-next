import type { Metadata } from "next";

import ServicePageTemplate from "@/components/service/ServicePageTemplate";
import { getServiceContent } from "@/content/service";
import { buildAlternates } from "@/i18n/metadata";

const content = getServiceContent("sl");

export const metadata: Metadata = {
  title: content.meta.title,
  description: content.meta.description,
  robots: { index: false, follow: false },
  alternates: buildAlternates("service", "sl"),
};

export default function Page() {
  return <ServicePageTemplate locale="sl" content={content} />;
}
