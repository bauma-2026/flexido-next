import type { Metadata } from "next";
import { notFound } from "next/navigation";

import LegalPageTemplate from "@/components/legal/LegalPageTemplate";
import { getPrivacyContent } from "@/content/legal";
import { buildAlternates } from "@/i18n/metadata";

export function generateStaticParams() {
  return [{ locale: "de" }];
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (locale !== "de") return {};

  const content = getPrivacyContent("de");
  return {
    title: content.meta.title,
    description: content.meta.description,
    robots: { index: false, follow: false },
    alternates: buildAlternates("privacyPolicy", "de"),
  };
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (locale !== "de") notFound();

  return <LegalPageTemplate locale="de" content={getPrivacyContent("de")} />;
}
