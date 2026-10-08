import type { Metadata } from "next";
import { notFound } from "next/navigation";

import LegalPageTemplate from "@/components/legal/LegalPageTemplate";
import { getLegalNoticeContent } from "@/content/legal";
import { buildAlternates, withSocial } from "@/i18n/metadata";

export function generateStaticParams() {
  return [{ locale: "de" }];
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (locale !== "de") return {};

  const content = getLegalNoticeContent("de");
  return withSocial({
    title: content.meta.title,
    description: content.meta.description,
      alternates: buildAlternates("legalNotice", "de"),
  }, "de");
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (locale !== "de") notFound();

  return <LegalPageTemplate locale="de" content={getLegalNoticeContent("de")} />;
}
