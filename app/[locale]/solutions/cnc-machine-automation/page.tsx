import type { Metadata } from "next";
import { notFound } from "next/navigation";

import SolutionPageTemplate from "@/components/solutions/SolutionPageTemplate";
import { getCncContent } from "@/content/solutions";
import { buildAlternates } from "@/i18n/metadata";

export function generateStaticParams() {
  return [{ locale: "en" }];
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (locale !== "en") return {};

  return {
    title: "CNC Machine Automation | Flexido",
    description: "When CNC production needs more than repeatable tending of a single machine, we design automation around the machines, parts, stations, and material flow.",
    robots: { index: false, follow: false },
    alternates: buildAlternates("solutionCnc", "en"),
  };
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (locale !== "en") notFound();

  return <SolutionPageTemplate locale="en" content={getCncContent("en")} />;
}
