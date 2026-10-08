import type { Metadata } from "next";
import { notFound } from "next/navigation";

import ReferencesHubTemplate from "@/components/references/ReferencesHubTemplate";
import { getReferencesHubContent } from "@/content/references";
import { buildAlternates, withSocial } from "@/i18n/metadata";

export function generateStaticParams() {
  return [{ locale: "en" }];
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (locale !== "en") return {};

  const content = getReferencesHubContent("en");
  return withSocial({
    title: content.meta.title,
    description: content.meta.description,
      alternates: buildAlternates("references", "en"),
  }, "en");
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (locale !== "en") notFound();

  return <ReferencesHubTemplate locale="en" content={getReferencesHubContent("en")} />;
}
