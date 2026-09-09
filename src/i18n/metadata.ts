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
