import type { Metadata } from "next";
import { notFound } from "next/navigation";

import ProcessPageTemplate from "@/components/process/ProcessPageTemplate";
import { getProcessContent } from "@/content/process";
import { buildAlternates, withSocial } from "@/i18n/metadata";

export function generateStaticParams() {
  return [{ locale: "de" }];
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (locale !== "de") return {};

  const content = getProcessContent("de");
  return withSocial({
    title: content.meta.title,
    description: content.meta.description,
      alternates: buildAlternates("process", "de"),
  }, "de");
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (locale !== "de") notFound();

  return <ProcessPageTemplate locale="de" content={getProcessContent("de")} />;
}
