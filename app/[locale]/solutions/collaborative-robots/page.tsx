import type { Metadata } from "next";
import { notFound } from "next/navigation";

import SolutionPageTemplate from "@/components/solutions/SolutionPageTemplate";
import { getCobotsContent } from "@/content/solutions";
import { buildAlternates } from "@/i18n/metadata";

export function generateStaticParams() {
  return [{ locale: "en" }];
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (locale !== "en") return {};

  return {
    title: "Collaborative Robots | Flexido",
    description: "A collaborative robot can be a suitable solution for picking, insertion, inspection, or assembly within an existing production process.",
    robots: { index: false, follow: false },
    alternates: buildAlternates("solutionCobots", "en"),
  };
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (locale !== "en") notFound();

  return <SolutionPageTemplate locale="en" content={getCobotsContent("en")} />;
}
