import type { Metadata } from "next";
import { notFound } from "next/navigation";

import ContactPageTemplate from "@/components/contact/ContactPageTemplate";
import { getContactContent } from "@/content/contact";
import { buildAlternates } from "@/i18n/metadata";

export function generateStaticParams() {
  return [{ locale: "en" }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (locale !== "en") return {};

  const content = getContactContent("en");
  return {
    title: content.meta.title,
    description: content.meta.description,
    robots: { index: false, follow: false },
    alternates: buildAlternates("contact", "en"),
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (locale !== "en") notFound();

  return <ContactPageTemplate locale="en" content={getContactContent("en")} />;
}
