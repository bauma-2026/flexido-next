import type { Metadata } from "next";
import { notFound } from "next/navigation";

import ReferencePageTemplate from "@/components/references/ReferencePageTemplate";
import { getReferenceContent, referenceShared } from "@/content/references";
import { buildAlternates } from "@/i18n/metadata";

export function generateStaticParams() {
  return [{ locale: "en" }];
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (locale !== "en") return {};

  const content = getReferenceContent("carton-forming", "en");
  return {
    title: content.meta.title,
    description: content.meta.description,
    robots: { index: false, follow: false },
    alternates: buildAlternates("referenceCarton", "en"),
  };
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (locale !== "en") notFound();

  return (
    <ReferencePageTemplate
      locale="en"
      shared={referenceShared["carton-forming"]}
      content={getReferenceContent("carton-forming", "en")}
    />
  );
}
