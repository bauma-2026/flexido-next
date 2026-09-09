import type { Metadata } from "next";
import { notFound } from "next/navigation";

import SolutionPageTemplate from "@/components/solutions/SolutionPageTemplate";
import { getCustomSystemsContent } from "@/content/solutions";
import { buildAlternates } from "@/i18n/metadata";

export function generateStaticParams() {
  return [{ locale: "de" }];
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (locale !== "de") return {};

  return {
    title: "Kundenspezifische Automatisierungssysteme | Flexido",
    description: "Wenn weder eine konfigurierbare Zelle noch ein einzelnes Fachgebiet die gesamte Lösung abbildet, entwickeln wir ein kundenspezifisches System rund um die konkrete Abfolge von Abläufen, Stationen und Umsetzungsbedingungen.",
    robots: { index: false, follow: false },
    alternates: buildAlternates("solutionCustomSystems", "de"),
  };
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (locale !== "de") notFound();

  return <SolutionPageTemplate locale="de" content={getCustomSystemsContent("de")} />;
}
