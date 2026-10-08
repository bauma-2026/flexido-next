import type { Metadata } from "next";

import { OG_IMAGE, OG_IMAGE_ALT, OG_LOCALE } from "@/lib/site";
import type { Locale } from "./config";
import { getPath, type RouteKey } from "./routes";

/**
 * hreflang alternates for a migrated route: self-referencing canonical plus
 * every locale variant that exists (all three, for the Solutions family),
 * with `x-default` pointing at the Slovenian version — the conceptual
 * default locale (see `src/i18n/config.ts`).
 */
export function buildAlternates(routeKey: RouteKey, locale: Locale) {
  const sl = getPath(routeKey, "sl");
  const en = getPath(routeKey, "en");
  const de = getPath(routeKey, "de");

  const languages = {
    ...(sl ? { sl } : {}),
    ...(en ? { en } : {}),
    ...(de ? { de } : {}),
  };

  return {
    canonical: getPath(routeKey, locale),
    languages: {
      ...languages,
      // x-default is the Slovenian URL when that variant exists.
      // Locale-only EN/DE pages use their own URL — never a hub fallback.
      ...(sl || getPath(routeKey, locale)
        ? { "x-default": sl ?? getPath(routeKey, locale) }
        : {}),
    },
  };
}

/**
 * Adds Open Graph + Twitter metadata to a page's own metadata object.
 *
 * Next shallow-merges metadata across segments and never derives `openGraph`
 * from `title`/`description`, so every page must state its social fields
 * itself. This derives them from the same object the page already exports,
 * so the three can't drift apart: `og:title`/`og:description` are the page's
 * `title`/`description`, and `og:url` is the page's `alternates.canonical`
 * (resolved against `metadataBase`). `alternates` is passed through untouched.
 *
 * Fails the build rather than emitting wrong social tags if the page has no
 * string title, no string description, or no canonical.
 */
export function withSocial(meta: Metadata, locale: Locale): Metadata {
  const { title, description, alternates } = meta;
  const canonical = alternates?.canonical;

  if (typeof title !== "string" || typeof description !== "string") {
    throw new Error("withSocial: page metadata needs a string title and description");
  }
  if (typeof canonical !== "string" && !(canonical instanceof URL)) {
    throw new Error(`withSocial: page "${title}" needs a string or URL alternates.canonical`);
  }

  return {
    ...meta,
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: "Flexido",
      locale: OG_LOCALE[locale],
      type: "website",
      images: [
        {
          url: OG_IMAGE.path,
          width: OG_IMAGE.width,
          height: OG_IMAGE.height,
          type: OG_IMAGE.type,
          alt: OG_IMAGE_ALT[locale],
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [{ url: OG_IMAGE.path, alt: OG_IMAGE_ALT[locale] }],
    },
  };
}
