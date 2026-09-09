import type { Metadata } from "next";
import { notFound } from "next/navigation";

import ReferencesHubTemplate from "@/components/references/ReferencesHubTemplate";
import { getReferencesHubContent } from "@/content/references";
import { buildAlternates } from "@/i18n/metadata";

export function generateStaticParams() {
  return [{ locale: "de" }];
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (locale !== "de") return {};

  const content = getReferencesHubContent("de");
  return {
    title: content.meta.title,
    description: content.meta.description,
    robots: { index: false, follow: false },
    alternates: buildAlternates("references", "de"),
  };
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (locale !== "de") notFound();

  return <ReferencesHubTemplate locale="de" content={getReferencesHubContent("de")} />;
}
