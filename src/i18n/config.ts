/**
 * Site-wide locale constants. This is the conceptual three-language model
 * (SL default + EN + DE) agreed in the i18n architecture audit.
 *
 * IMPORTANT — current scope:
 * Slovenian is NOT yet routed through next-intl. It stays exactly where it
 * already lives today (the flat, unprefixed `app/` tree) and is untouched by
 * this pass. Only `/en` and `/de` are actually wired up right now — see
 * `src/i18n/routing.ts` for why the next-intl routing config only lists
 * `en`/`de`, not `sl`.
 *
 * `locales` and `defaultLocale` here describe the target end-state and are
 * what the route registry (`src/i18n/routes.ts`) is keyed against.
 */
export const locales = ["sl", "en", "de"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "sl";

/** Locales actually served through the `app/[locale]` next-intl subsystem today. */
export const routedLocales = ["en", "de"] as const;

export type RoutedLocale = (typeof routedLocales)[number];
