import type { Metadata } from "next";
import { notFound } from "next/navigation";

import SystemPageTemplate from "@/components/systems/SystemPageTemplate";
import { getFlex2550SystemContent } from "@/content/systems";
import { buildAlternates } from "@/i18n/metadata";

export function generateStaticParams() {
  return [{ locale: "en" }];
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (locale !== "en") return {};
  const content = getFlex2550SystemContent("en");

  return {
    title: content.meta.title,
    description: content.meta.description,
    robots: { index: false, follow: false },
    alternates: buildAlternates("standardCellsFlex2550", "en"),
  };
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (locale !== "en") notFound();

  return <SystemPageTemplate locale="en" content={getFlex2550SystemContent("en")} />;
}
