import type { Metadata } from "next";
import { notFound } from "next/navigation";

import CatalogPageTemplate from "@/components/systems/CatalogPageTemplate";
import { getImmSystemContent } from "@/content/systems";
import { buildAlternates, withSocial } from "@/i18n/metadata";

export function generateStaticParams() {
  return [{ locale: "de" }];
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (locale !== "de") return {};
  const content = getImmSystemContent("de");

  return withSocial({
    title: content.meta.title,
    description: content.meta.description,
      alternates: buildAlternates("standardCellsImm", "de"),
  }, "de");
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (locale !== "de") notFound();

  return <CatalogPageTemplate locale="de" content={getImmSystemContent("de")} />;
}
