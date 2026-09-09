import type { Metadata } from "next";
import { notFound } from "next/navigation";

import SolutionPageTemplate from "@/components/solutions/SolutionPageTemplate";
import { getLogisticsContent } from "@/content/solutions";
import { buildAlternates } from "@/i18n/metadata";

export function generateStaticParams() {
  return [{ locale: "de" }];
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (locale !== "de") return {};

  return {
    title: "Interne Logistik | Flexido",
    description: "Wir gestalten den physischen Fluss von Paletten, Behältern, KLT-Behältern und Material zwischen Maschinen, Stationen und den nächsten Phasen des Prozesses.",
    robots: { index: false, follow: false },
    alternates: buildAlternates("solutionLogistics", "de"),
  };
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (locale !== "de") notFound();

  return <SolutionPageTemplate locale="de" content={getLogisticsContent("de")} />;
}
