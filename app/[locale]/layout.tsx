import "../globals.css";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ConsentRoot from "@/components/consent/ConsentRoot";
import SectionAnchors from "@/components/layout/SectionAnchors";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import type { RoutedLocale } from "@/i18n/config";
import {
  OG_IMAGE,
  OG_IMAGE_ALT,
  OG_LOCALE,
  SITE_URL,
  siteRobots,
} from "@/lib/site";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

/**
 * Without this, an unknown single top-level segment (e.g. `/this-typo`)
 * structurally matches `[locale]` before the `hasLocale` check below runs,
 * so Next attempts to render this layout, the `notFound()` call below fires
 * *inside* an already-started root-layout render, and there is no parent
 * boundary left to catch it — it falls through to Next's built-in generic
 * 404 instead of `app/global-not-found.tsx`. Rejecting unknown locale
 * values here, at the router level, makes that case a true route non-match,
 * same as any other unmatched path, so it correctly reaches
 * `global-not-found`. Does not change which locales are valid — `en`/`de`
 * were already the only ones this layout ever accepted.
 */
export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "footer" });
  const ogLocale = locale === "de" ? "de" : "en";

  return {
    metadataBase: new URL(SITE_URL),
    title: "Flexido",
    description: t("tagline"),
    robots: siteRobots(),
    // Neutral fallback only; pages add title/description/url via `withSocial`.
    openGraph: {
      siteName: "Flexido",
      locale: OG_LOCALE[ogLocale],
      type: "website",
      images: [
        {
          url: OG_IMAGE.path,
          width: OG_IMAGE.width,
          height: OG_IMAGE.height,
          type: OG_IMAGE.type,
          alt: OG_IMAGE_ALT[ogLocale],
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      images: [{ url: OG_IMAGE.path, alt: OG_IMAGE_ALT[ogLocale] }],
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
