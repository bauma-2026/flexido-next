import type { Metadata } from "next";
import { notFound } from "next/navigation";

import SolutionPageTemplate from "@/components/solutions/SolutionPageTemplate";
import { getMaterialHandlingContent } from "@/content/solutions";
import { buildAlternates, withSocial } from "@/i18n/metadata";

export function generateStaticParams() {
  return [{ locale: "de" }];
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (locale !== "de") return {};

  return withSocial({
    title: "Materialhandhabung | Flexido",
    description: "Wir gestalten, wie ein Werkstück gegriffen, bewegt, ausgerichtet und an den nächsten Schritt des Produktionsprozesses übergeben wird.",
      alternates: buildAlternates("solutionManipulation", "de"),
  }, "de");
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (locale !== "de") notFound();

  return <SolutionPageTemplate locale="de" content={getMaterialHandlingContent("de")} />;
}
