import "../globals.css";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ConsentRoot from "@/components/consent/ConsentRoot";
import SectionAnchors from "@/components/layout/SectionAnchors";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import type { RoutedLocale } from "@/i18n/config";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "footer" });

  return {
    metadataBase: new URL("https://flexido-next.vercel.app"),
    title: "Flexido",
    description: t("tagline"),
    // Matches the current site-wide state (app/(default)/layout.tsx) — this
    // is still a pre-launch preview, EN/DE included.
    robots: {
      index: false,
      follow: false,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Enables static rendering for this locale subtree.
  setRequestLocale(locale as RoutedLocale);

  return (
    <html lang={locale}>
      <body className="bg-white text-neutral-950 antialiased">
        <SectionAnchors />
        <NextIntlClientProvider locale={locale}>
          <ConsentRoot locale={locale as RoutedLocale}>
            {children}
          </ConsentRoot>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
