import type { Metadata } from "next";
import { notFound } from "next/navigation";

import ServicePricingTemplate from "@/components/service/ServicePricingTemplate";
import { getServicePricingContent } from "@/content/servicePricing";
import { buildAlternates, withSocial } from "@/i18n/metadata";

export function generateStaticParams() {
  return [{ locale: "en" }];
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (locale !== "en") return {};

  const content = getServicePricingContent("en");
  return withSocial({
    title: content.meta.title,
    description: content.meta.description,
      alternates: buildAlternates("servicePricing", "en"),
  }, "en");
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (locale !== "en") notFound();

  return <ServicePricingTemplate locale="en" content={getServicePricingContent("en")} />;
}
