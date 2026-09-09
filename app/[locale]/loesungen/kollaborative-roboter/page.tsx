import type { Metadata } from "next";
import { notFound } from "next/navigation";

import SolutionPageTemplate from "@/components/solutions/SolutionPageTemplate";
import { getCobotsContent } from "@/content/solutions";
import { buildAlternates } from "@/i18n/metadata";

export function generateStaticParams() {
  return [{ locale: "de" }];
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (locale !== "de") return {};

  return {
    title: "Kollaborative Roboter | Flexido",
    description: "Ein kollaborativer Roboter kann für das Greifen, Einlegen, Prüfen oder Montieren innerhalb eines bestehenden Produktionsprozesses eine geeignete Lösung sein.",
    robots: { index: false, follow: false },
    alternates: buildAlternates("solutionCobots", "de"),
  };
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (locale !== "de") notFound();

  return <SolutionPageTemplate locale="de" content={getCobotsContent("de")} />;
}
