import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import HomePageTemplate from "@/components/home/HomePageTemplate";
import { getHomeContent } from "@/content/home";
import type { RoutedLocale } from "@/i18n/config";
import { routing } from "@/i18n/routing";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    return {};
  }

  const content = getHomeContent(locale as RoutedLocale);

  return {
    title: content.meta.title,
    description: content.meta.description,
    robots: {
      index: false,
      follow: false,
    },
  };
}

export default async function LocaleHomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return <HomePageTemplate locale={locale as RoutedLocale} />;
}
