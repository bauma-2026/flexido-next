import type { Metadata } from "next";
import { notFound } from "next/navigation";

import SolutionPageTemplate from "@/components/solutions/SolutionPageTemplate";
import { getCustomSystemsContent } from "@/content/solutions";
import { buildAlternates } from "@/i18n/metadata";

export function generateStaticParams() {
  return [{ locale: "en" }];
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (locale !== "en") return {};

  return {
    title: "Custom-Built Automation Systems | Flexido",
    description: "When neither a configurable cell nor a single specialist area covers the whole solution, we design a custom-built system around the actual sequence of operations, stations, and implementation constraints.",
    robots: { index: false, follow: false },
    alternates: buildAlternates("solutionCustomSystems", "en"),
  };
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (locale !== "en") notFound();

  return <SolutionPageTemplate locale="en" content={getCustomSystemsContent("en")} />;
}
