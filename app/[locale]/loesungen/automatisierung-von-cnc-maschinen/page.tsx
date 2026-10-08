import type { Metadata } from "next";
import { notFound } from "next/navigation";

import SolutionPageTemplate from "@/components/solutions/SolutionPageTemplate";
import { getCncContent } from "@/content/solutions";
import { buildAlternates, withSocial } from "@/i18n/metadata";

export function generateStaticParams() {
  return [{ locale: "de" }];
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (locale !== "de") return {};

  return withSocial({
    title: "Automatisierung von CNC-Maschinen | Flexido",
    description: "Wenn die CNC-Fertigung mehr erfordert als die wiederkehrende Beschickung einer einzelnen Maschine, gestalten wir die Automatisierung rund um Maschinen, Teile, Stationen und Materialfluss.",
      alternates: buildAlternates("solutionCnc", "de"),
  }, "de");
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (locale !== "de") notFound();

  return <SolutionPageTemplate locale="de" content={getCncContent("de")} />;
}
