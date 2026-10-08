/** Canonical production origin. Do not use the Vercel preview host. */
export const SITE_URL = "https://www.flexido.eu";

/**
 * Shared, language-neutral Open Graph / Twitter image (no text in the
 * artwork). Versioned filename: social scrapers cache by URL, so a changed
 * image needs a new name. Resolved to an absolute URL via `metadataBase`.
 */
export const OG_IMAGE = {
  path: "/og/flexido-og-v2.jpg",
  width: 1200,
  height: 630,
  type: "image/jpeg",
} as const;

export const OG_IMAGE_ALT = {
  sl: "Flexido robotska celica ob brizgalnem stroju",
  en: "Flexido robot cell next to an injection molding machine",
  de: "Flexido Roboterzelle an einer Spritzgießmaschine",
} as const;

export const OG_LOCALE = {
  sl: "sl_SI",
  en: "en_US",
  de: "de_DE",
} as const;

/**
 * Jakob's Vercel preview must stay noindex. Production (and local
 * `next build` / `next start`) is launch-ready and indexable.
 * `VERCEL_ENV` is the Vercel signal; `NODE_ENV` is the local fallback.
 * Preview builds also have NODE_ENV=production, so VERCEL_ENV is checked first.
 */
export function shouldIndexSite(): boolean {
  if (process.env.VERCEL_ENV === "preview") return false;
  if (process.env.VERCEL_ENV === "development") return false;
  if (process.env.VERCEL_ENV === "production") return true;
  return process.env.NODE_ENV === "production";
}

export function siteRobots(): { index: boolean; follow: boolean } {
  const index = shouldIndexSite();
  return { index, follow: index };
}
