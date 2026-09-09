import type { Metadata } from "next";
import { notFound } from "next/navigation";

import CncPageTemplate from "@/components/systems/CncPageTemplate";
import { getCncSystemContent } from "@/content/systems";
import { buildAlternates } from "@/i18n/metadata";

export function generateStaticParams() {
  return [{ locale: "en" }];
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (locale !== "en") return {};
  const content = getCncSystemContent("en");

  return {
    title: content.meta.title,
    description: content.meta.description,
    robots: { index: false, follow: false },
    alternates: buildAlternates("standardCellsCnc", "en"),
  };
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (locale !== "en") notFound();

  return <CncPageTemplate locale="en" content={getCncSystemContent("en")} />;
}
