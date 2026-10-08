import type { Metadata } from "next";
import { notFound } from "next/navigation";

import CompanyPageTemplate from "@/components/company/CompanyPageTemplate";
import { getAboutContent } from "@/content/company";
import { buildAlternates, withSocial } from "@/i18n/metadata";

export function generateStaticParams() {
  return [{ locale: "de" }];
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (locale !== "de") return {};

  const content = getAboutContent("de");
  return withSocial({
    title: content.meta.title,
    description: content.meta.description,
      alternates: buildAlternates("aboutUs", "de"),
  }, "de");
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (locale !== "de") notFound();

  return <CompanyPageTemplate locale="de" content={getAboutContent("de")} />;
}
