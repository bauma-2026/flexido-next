import type { Metadata } from "next";
import { notFound } from "next/navigation";

import SolutionPageTemplate from "@/components/solutions/SolutionPageTemplate";
import { getInjectionMoldingContent } from "@/content/solutions";
import { buildAlternates } from "@/i18n/metadata";

export function generateStaticParams() {
  return [{ locale: "de" }];
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (locale !== "de") return {};

  return {
    title: "Automatisierung von Spritzgießmaschinen | Flexido",
    description: "Wenn der Prozess Einlegeteile, Vorbereitung, Prüfung oder zusätzliche Arbeitsschritte erfordert, gestalten wir die Automatisierung rund um Maschine, Werkzeug und den tatsächlichen Spritzgießablauf.",
    robots: { index: false, follow: false },
    alternates: buildAlternates("solutionInjectionMolding", "de"),
  };
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (locale !== "de") notFound();

  return <SolutionPageTemplate locale="de" content={getInjectionMoldingContent("de")} />;
}
