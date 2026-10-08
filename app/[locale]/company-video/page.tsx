import type { Metadata } from "next";
import { notFound } from "next/navigation";

import VideoPageTemplate from "@/components/company/VideoPageTemplate";
import { getVideoContent } from "@/content/company";
import { buildAlternates, withSocial } from "@/i18n/metadata";

export function generateStaticParams() {
  return [{ locale: "en" }];
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (locale !== "en") return {};

  const content = getVideoContent("en");
  return withSocial({
    title: content.meta.title,
    description: content.meta.description,
      alternates: buildAlternates("video", "en"),
  }, "en");
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (locale !== "en") notFound();

  return <VideoPageTemplate locale="en" content={getVideoContent("en")} />;
}
