import type { Metadata } from "next";

import ServicePageTemplate from "@/components/service/ServicePageTemplate";
import { getServiceContent } from "@/content/service";
import { buildAlternates, withSocial } from "@/i18n/metadata";

const content = getServiceContent("sl");

export const metadata: Metadata = withSocial({
  title: content.meta.title,
  description: content.meta.description,
  alternates: buildAlternates("service", "sl"),
}, "sl");

export default function Page() {
  return <ServicePageTemplate locale="sl" content={content} />;
}
