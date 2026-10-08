import type { Metadata } from "next";
import { notFound } from "next/navigation";

import CatalogPageTemplate from "@/components/systems/CatalogPageTemplate";
import { getTmxSystemContent } from "@/content/systems";
import { buildAlternates, withSocial } from "@/i18n/metadata";

export function generateStaticParams() {
  return [{ locale: "en" }];
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (locale !== "en") return {};
  const content = getTmxSystemContent("en");

  return withSocial({
    title: content.meta.title,
    description: content.meta.description,
      alternates: buildAlternates("standardCellsTmx", "en"),
  }, "en");
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (locale !== "en") notFound();

  return <CatalogPageTemplate locale="en" content={getTmxSystemContent("en")} />;
}
