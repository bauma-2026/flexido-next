import type { Metadata } from "next";

import ServicePricingTemplate from "@/components/service/ServicePricingTemplate";
import { getServicePricingContent } from "@/content/servicePricing";
import { buildAlternates, withSocial } from "@/i18n/metadata";

const content = getServicePricingContent("sl");

export const metadata: Metadata = withSocial({
  title: content.meta.title,
  description: content.meta.description,
  alternates: buildAlternates("servicePricing", "sl"),
}, "sl");

export default function Page() {
  return <ServicePricingTemplate locale="sl" content={content} />;
}
