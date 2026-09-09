import type { Metadata } from "next";
import { notFound } from "next/navigation";

import CompanyPageTemplate from "@/components/company/CompanyPageTemplate";
import { getAboutContent } from "@/content/company";
import { buildAlternates } from "@/i18n/metadata";

export function generateStaticParams() {
  return [{ locale: "en" }];
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (locale !== "en") return {};

  const content = getAboutContent("en");
  return {
    title: content.meta.title,
    description: content.meta.description,
    robots: { index: false, follow: false },
    alternates: buildAlternates("aboutUs", "en"),
  };
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (locale !== "en") notFound();

  return <CompanyPageTemplate locale="en" content={getAboutContent("en")} />;
}
