import type { Metadata } from "next";
import { notFound } from "next/navigation";

import ServicePricingTemplate from "@/components/service/ServicePricingTemplate";
import { getServicePricingContent } from "@/content/servicePricing";
import { buildAlternates } from "@/i18n/metadata";

export function generateStaticParams() {
  return [{ locale: "de" }];
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (locale !== "de") return {};

  const content = getServicePricingContent("de");
  return {
    title: content.meta.title,
    description: content.meta.description,
    robots: { index: false, follow: false },
    alternates: buildAlternates("servicePricing", "de"),
  };
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (locale !== "de") notFound();

  return <ServicePricingTemplate locale="de" content={getServicePricingContent("de")} />;
}
