import type { Locale } from "@/i18n/config";

const localeTag: Record<Locale, string> = {
  sl: "sl-SI",
  en: "en-GB",
  de: "de-DE",
};

/** Formats a stored editorial date. Year-only values stay year-only. */
export function formatNewsDate(date: string, locale: Locale): string {
  if (/^\d{4}$/.test(date)) return date;

  const parsed = new Date(`${date}T00:00:00`);
  if (Number.isNaN(parsed.getTime())) return date;

  return new Intl.DateTimeFormat(localeTag[locale], {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(parsed);
}
