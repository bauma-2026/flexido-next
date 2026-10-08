import type { Metadata } from "next";
import { notFound } from "next/navigation";

import SolutionsHubTemplate from "@/components/solutions/SolutionsHubTemplate";
import { getHubContent } from "@/content/solutions";
import { buildAlternates, withSocial } from "@/i18n/metadata";

export function generateStaticParams() {
  return [{ locale: "en" }];
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (locale !== "en") return {};

  return withSocial({
    title: "Automation Solutions | Flexido",
    description: "Choose the area where your process needs automation — from CNC and injection molding to collaborative robots, material handling, logistics and custom-built systems.",
      alternates: buildAlternates("solutions", "en"),
  }, "en");
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (locale !== "en") notFound();

  return <SolutionsHubTemplate locale="en" content={getHubContent("en")} />;
}
