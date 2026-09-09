import type { Metadata } from "next";
import { notFound } from "next/navigation";

import ServicePageTemplate from "@/components/service/ServicePageTemplate";
import { getServiceContent } from "@/content/service";
import type { Locale } from "@/i18n/config";
import { buildAlternates } from "@/i18n/metadata";

const serviceLocales = ["en", "de"] as const;

function isServiceLocale(locale: string): locale is (typeof serviceLocales)[number] {
  return locale === "en" || locale === "de";
}

export function generateStaticParams() {
  return serviceLocales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isServiceLocale(locale)) return {};

  const content = getServiceContent(locale);
  return {
    title: content.meta.title,
    description: content.meta.description,
    robots: { index: false, follow: false },
    alternates: buildAlternates("service", locale),
  };
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isServiceLocale(locale)) notFound();

  return <ServicePageTemplate locale={locale as Locale} content={getServiceContent(locale)} />;
}
