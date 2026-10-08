"use client";

import { useSyncExternalStore } from "react";
import Link from "next/link";
import { locales, type Locale } from "@/i18n/config";
import { getPath, resolveLanguageSwitch, type RouteKey } from "@/i18n/routes";

type Props = {
  currentLocale: Locale;
  routeKey: RouteKey;
  parentKey?: RouteKey;
  desktop?: boolean;
};

const switcherLabel: Record<Locale, string> = {
  sl: "Jezik",
  en: "Language",
  de: "Sprache",
};

/**
 * Language switcher used in the real `Header` (all three locales) and the
 * `[locale]` proof surface. Resolves each target via the route registry's
 * fallback rule (§8 of the i18n audit) — never a dead link, never a silent
 * stay-on-current-locale. Preserves the current `#hash` across a locale
 * switch when the target page is the exact same route (section anchor ids
 * are kept identical across locales in the Solutions content modules), so a
 * deep-linked section survives a language switch.
 */
function subscribeToHashChange(callback: () => void) {
  window.addEventListener("hashchange", callback);
  return () => window.removeEventListener("hashchange", callback);
}

function getHashSnapshot() {
  return window.location.hash;
}

function getServerHashSnapshot() {
  return "";
}

export default function LocaleSwitcher({
  currentLocale,
  routeKey,
  parentKey,
  desktop = false,
}: Props) {
  const hash = useSyncExternalStore(subscribeToHashChange, getHashSnapshot, getServerHashSnapshot);

  return (
    <div
      role="group"
      aria-label={switcherLabel[currentLocale]}
      className={
        desktop
          ? "flex items-center gap-1.5 text-[13px] leading-4 tracking-[0.025em]"
          : "flex items-center gap-2 text-[13px]"
      }
    >
      {locales.map((locale) => {
        const target = resolveLanguageSwitch(routeKey, locale, parentKey);
        const isExactRoute = target === getPath(routeKey, locale);
        const href = isExactRoute && hash ? `${target}${hash}` : target;
        const isCurrent = locale === currentLocale;

        return (
          <Link
            key={locale}
            href={href}
            aria-current={isCurrent ? "true" : undefined}
            /* Colour alone, at one weight, matching the header's own rule:
               location is carried by tone, never by a weight swap. The
               previous treatment did both — `font-semibold` plus an underline
               — which made the switcher the one element in the bar that
               contradicted the nav it sits beside. Idle is neutral-600: still
               high-contrast, while staying quieter than the primary navigation.
               No marker: a 2px rule would need vertical room the header does
               not have. */
            className={
              isCurrent
                ? "focus-ring text-neutral-950"
                : "focus-ring text-neutral-600 transition hover:text-neutral-950"
            }
          >
            {locale.toUpperCase()}
          </Link>
        );
      })}
    </div>
  );
}
