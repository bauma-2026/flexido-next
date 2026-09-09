import type { Metadata } from "next";
import { notFound } from "next/navigation";

import SolutionPageTemplate from "@/components/solutions/SolutionPageTemplate";
import { getMaterialHandlingContent } from "@/content/solutions";
import { buildAlternates } from "@/i18n/metadata";

export function generateStaticParams() {
  return [{ locale: "de" }];
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (locale !== "de") return {};

  return {
    title: "Materialhandhabung | Flexido",
    description: "Wir gestalten, wie ein Werkstück gegriffen, bewegt, ausgerichtet und an den nächsten Schritt des Produktionsprozesses übergeben wird.",
    robots: { index: false, follow: false },
    alternates: buildAlternates("solutionManipulation", "de"),
  };
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (locale !== "de") notFound();

  return <SolutionPageTemplate locale="de" content={getMaterialHandlingContent("de")} />;
}
