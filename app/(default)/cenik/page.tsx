import type { Metadata } from "next";

import ServicePricingTemplate from "@/components/service/ServicePricingTemplate";
import { getServicePricingContent } from "@/content/servicePricing";
import { buildAlternates } from "@/i18n/metadata";

const content = getServicePricingContent("sl");

export const metadata: Metadata = {
  title: content.meta.title,
  description: content.meta.description,
  robots: { index: false, follow: false },
  alternates: buildAlternates("servicePricing", "sl"),
};

export default function Page() {
  return <ServicePricingTemplate locale="sl" content={content} />;
}
