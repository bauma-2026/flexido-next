import type { Metadata } from "next";
import { notFound } from "next/navigation";

import SystemsHubTemplate from "@/components/systems/SystemsHubTemplate";
import { getSystemsHubContent } from "@/content/systems";
import { buildAlternates, withSocial } from "@/i18n/metadata";

export function generateStaticParams() {
  return [{ locale: "en" }];
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (locale !== "en") return {};
  const content = getSystemsHubContent("en");

  return withSocial({
    title: content.meta.title,
    description: content.meta.description,
      alternates: buildAlternates("standardCells", "en"),
  }, "en");
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (locale !== "en") notFound();

  return <SystemsHubTemplate locale="en" content={getSystemsHubContent("en")} />;
}
