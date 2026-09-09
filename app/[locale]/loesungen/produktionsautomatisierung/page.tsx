import type { Metadata } from "next";
import { notFound } from "next/navigation";

import SolutionPageTemplate from "@/components/solutions/SolutionPageTemplate";
import { getAutomationContent } from "@/content/solutions";
import { buildAlternates } from "@/i18n/metadata";

export function generateStaticParams() {
  return [{ locale: "de" }];
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (locale !== "de") return {};

  return {
    title: "Produktionsautomatisierung | Flexido",
    description: "Wenn eine einzelne Zelle nicht ausreicht, gestalten wir die Automatisierung rund um die Maschinen, Teile, den Materialfluss und die erforderlichen Prozessschritte.",
    robots: { index: false, follow: false },
    alternates: buildAlternates("solutionProductionAutomation", "de"),
  };
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (locale !== "de") notFound();

  return <SolutionPageTemplate locale="de" content={getAutomationContent("de")} />;
}
