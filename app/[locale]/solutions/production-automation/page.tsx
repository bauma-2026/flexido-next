import type { Metadata } from "next";
import { notFound } from "next/navigation";

import SolutionPageTemplate from "@/components/solutions/SolutionPageTemplate";
import { getAutomationContent } from "@/content/solutions";
import { buildAlternates } from "@/i18n/metadata";

export function generateStaticParams() {
  return [{ locale: "en" }];
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (locale !== "en") return {};

  return {
    title: "Production Automation | Flexido",
    description: "When a single cell isn't enough, we design automation around the machines, parts, material flow, and operations the process actually needs.",
    robots: { index: false, follow: false },
    alternates: buildAlternates("solutionProductionAutomation", "en"),
  };
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (locale !== "en") notFound();

  return <SolutionPageTemplate locale="en" content={getAutomationContent("en")} />;
}
