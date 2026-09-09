import type { Metadata } from "next";
import { notFound } from "next/navigation";

import ReferencePageTemplate from "@/components/references/ReferencePageTemplate";
import { getReferenceContent, referenceShared } from "@/content/references";
import { buildAlternates } from "@/i18n/metadata";

export function generateStaticParams() {
  return [{ locale: "de" }];
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (locale !== "de") return {};

  const content = getReferenceContent("klt-conveyor", "de");
  return {
    title: content.meta.title,
    description: content.meta.description,
    robots: { index: false, follow: false },
    alternates: buildAlternates("referenceConveyor", "de"),
  };
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (locale !== "de") notFound();

  return (
    <ReferencePageTemplate
      locale="de"
      shared={referenceShared["klt-conveyor"]}
      content={getReferenceContent("klt-conveyor", "de")}
    />
  );
}
