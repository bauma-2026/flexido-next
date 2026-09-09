import type { Metadata } from "next";
import { notFound } from "next/navigation";

import SolutionPageTemplate from "@/components/solutions/SolutionPageTemplate";
import { getInjectionMoldingContent } from "@/content/solutions";
import { buildAlternates } from "@/i18n/metadata";

export function generateStaticParams() {
  return [{ locale: "en" }];
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (locale !== "en") return {};

  return {
    title: "Injection Molding Automation | Flexido",
    description: "When the process requires inserts, preparation, inspection, or additional operations, we design automation around the machine, the mold, and the actual molding workflow.",
    robots: { index: false, follow: false },
    alternates: buildAlternates("solutionInjectionMolding", "en"),
  };
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (locale !== "en") notFound();

  return <SolutionPageTemplate locale="en" content={getInjectionMoldingContent("en")} />;
}
