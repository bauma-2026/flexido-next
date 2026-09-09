"use client";

import { useSyncExternalStore } from "react";
import Link from "next/link";
import { locales, type Locale } from "@/i18n/config";
import { getPath, resolveLanguageSwitch, type RouteKey } from "@/i18n/routes";

type Props = {
  currentLocale: Locale;
  routeKey: RouteKey;
  parentKey?: RouteKey;
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
}: Props) {
  const hash = useSyncExternalStore(subscribeToHashChange, getHashSnapshot, getServerHashSnapshot);

  return (
    <div className="flex items-center gap-3 text-[13px]">
      <span className="text-neutral-400">{switcherLabel[currentLocale]}:</span>

      <div className="flex items-center gap-2">
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
              className={
                isCurrent
                  ? "focus-ring font-semibold text-neutral-950 underline underline-offset-4"
                  : "focus-ring text-neutral-500 transition hover:text-neutral-950"
              }
            >
              {locale.toUpperCase()}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
