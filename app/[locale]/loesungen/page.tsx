import type { Metadata } from "next";
import { notFound } from "next/navigation";

import SolutionsHubTemplate from "@/components/solutions/SolutionsHubTemplate";
import { getHubContent } from "@/content/solutions";
import { buildAlternates, withSocial } from "@/i18n/metadata";

export function generateStaticParams() {
  return [{ locale: "de" }];
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (locale !== "de") return {};

  return withSocial({
    title: "Automatisierungslösungen | Flexido",
    description: "Wählen Sie den Bereich, in dem Ihr Prozess Automatisierung braucht — von CNC und Spritzguss über kollaborative Roboter bis zu Materialhandhabung, Logistik und kundenspezifischen Systemen.",
      alternates: buildAlternates("solutions", "de"),
  }, "de");
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (locale !== "de") notFound();

  return <SolutionsHubTemplate locale="de" content={getHubContent("de")} />;
}
