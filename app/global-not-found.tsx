import "./globals.css";
import { headers } from "next/headers";
import type { Metadata } from "next";
import ConsentRoot from "@/components/consent/ConsentRoot";
import NotFoundView from "@/components/errors/NotFoundView";
import { getPath } from "@/i18n/routes";
import type { Locale } from "@/i18n/config";

/**
 * Whole-app 404 fallback (Next 16 `global-not-found`, enabled via
 * `experimental.globalNotFound` in next.config.ts).
 *
 * Required here because this app has multiple root layouts
 * (`(default)`, `[locale]`, `(lab)` each declare their own `<html>`) and no
 * single shared root layout — exactly the case Next's docs call out as
 * needing `global-not-found` instead of a plain root `not-found.tsx`.
 *
 * It is also, empirically, the *only* 404 boundary Next actually reaches in
 * this app once the experimental flag is on: a scoped `app/[locale]/not-
 * found.tsx` was tried first and never fired, not even for an explicit
 * in-page `notFound()` call from an already-matched page (e.g. an unknown
 * `/en/news/[slug]`) — every unmatched path and every `notFound()` call
 * lands here instead. So this one file has to cover SL, EN and DE, and it
 * does so by locale-sniffing the request path (see `getRequestLocale`
 * below), since a bypass-rendering page like this gets no route params.
 *
 * Bypasses normal rendering, so unlike every other page here it must
 * import global styles itself and build its own `<html>`/`<body>`.
 */

const COPY: Record<
  Locale,
  { title: string; desc: string; cta: string; metaDesc: string }
> = {
  sl: {
    title: "Stran ni najdena",
    desc: "Stran, ki jo iščete, ne obstaja ali je bila premaknjena.",
    cta: "Nazaj na domačo stran",
    metaDesc: "Stran ni bila najdena.",
  },
  en: {
    title: "Page not found",
    desc: "The page you're looking for doesn't exist or has moved.",
    cta: "Back to homepage",
    metaDesc: "The page you're looking for doesn't exist or has moved.",
  },
  de: {
    title: "Seite nicht gefunden",
    desc: "Die gesuchte Seite existiert nicht oder wurde verschoben.",
    cta: "Zur Startseite",
    metaDesc: "Die gesuchte Seite existiert nicht oder wurde verschoben.",
  },
};

/**
 * Reads the path `proxy.ts` stamps onto every request and maps its prefix
 * to a locale. Falls back to `sl`, the unprefixed default.
 *
 * `global-not-found` bypasses normal rendering (that's the whole point of
 * it — see the file-level comment above), which means it also bypasses the
 * usual unwrapping Next does for other pages: a header set via
 * `NextResponse.next({ request: { headers } })` in proxy shows up here
 * still under its raw internal name, `x-middleware-request-x-pathname`,
 * not as a plain `x-pathname`. Checking both keeps this working if a
 * future Next version stops needing that rewrap.
 */
async function getRequestLocale(): Promise<Locale> {
  const allHeaders = await headers();
  const pathname =
    allHeaders.get("x-pathname") ??
    allHeaders.get("x-middleware-request-x-pathname") ??
    "";
  if (pathname === "/en" || pathname.startsWith("/en/")) return "en";
  if (pathname === "/de" || pathname.startsWith("/de/")) return "de";
  return "sl";
}

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getRequestLocale();
  return {
    title: "404",
    description: COPY[locale].metaDesc,
    robots: { index: false, follow: false },
  };
}

export default async function GlobalNotFound() {
  const locale = await getRequestLocale();
  const copy = COPY[locale];

  return (
    <html lang={locale}>
      <body className="bg-white text-neutral-950 antialiased">
        <ConsentRoot locale={locale}>
          <NotFoundView
            locale={locale}
            eyebrow="404"
            title={copy.title}
            desc={copy.desc}
            cta={copy.cta}
            homeHref={getPath("home", locale) ?? "/"}
          />
        </ConsentRoot>
      </body>
    </html>
  );
}
