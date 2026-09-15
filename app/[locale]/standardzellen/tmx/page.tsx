import type { Metadata } from "next";
import { notFound } from "next/navigation";

import CatalogPageTemplate from "@/components/systems/CatalogPageTemplate";
import { getTmxSystemContent } from "@/content/systems";
import { buildAlternates } from "@/i18n/metadata";

export function generateStaticParams() {
  return [{ locale: "de" }];
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (locale !== "de") return {};
  const content = getTmxSystemContent("de");

  return {
    title: content.meta.title,
    description: content.meta.description,
    robots: { index: false, follow: false },
    alternates: buildAlternates("standardCellsTmx", "de"),
  };
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (locale !== "de") notFound();

  return <CatalogPageTemplate locale="de" content={getTmxSystemContent("de")} />;
}
