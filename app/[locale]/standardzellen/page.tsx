import type { Metadata } from "next";
import { notFound } from "next/navigation";

import SystemsHubTemplate from "@/components/systems/SystemsHubTemplate";
import { getSystemsHubContent } from "@/content/systems";
import { buildAlternates } from "@/i18n/metadata";

export function generateStaticParams() {
  return [{ locale: "de" }];
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (locale !== "de") return {};
  const content = getSystemsHubContent("de");

  return {
    title: content.meta.title,
    description: content.meta.description,
    robots: { index: false, follow: false },
    alternates: buildAlternates("standardCells", "de"),
  };
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (locale !== "de") notFound();

  return <SystemsHubTemplate locale="de" content={getSystemsHubContent("de")} />;
}
