import { defineRouting } from "next-intl/routing";

/**
 * next-intl routing config.
 *
 * Scoped deliberately to `en` and `de` only, both always-prefixed.
 *
 * Slovenian is intentionally excluded from this config. The locked URL
 * strategy keeps SL unprefixed at the existing root (`/`, `/resitve/...`,
 * `/standardne-celice/...`) with zero changes to those routes in this pass.
 * If SL were added here, next-intl's middleware would need to intercept `/`
 * itself to resolve the default locale — which would mean the existing,
 * already-working `app/page.tsx` tree gets replaced by the `[locale]`
 * subsystem. That is exactly the "destabilize the existing Slovenian site"
 * risk this pass is required to avoid, so it's deferred to the full
 * migration, where the whole SL tree moves under `app/[locale]/` together
 * (at which point `localePrefix: "as-needed"` with `defaultLocale: "sl"`
 * becomes the right config, and this file gets `sl` added back in).
 */
export const routing = defineRouting({
  locales: ["en", "de"],
  defaultLocale: "en",
  localePrefix: "always",
  localeDetection: false,
});
