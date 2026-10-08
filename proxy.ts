import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import createMiddleware from "next-intl/middleware";
import { routing } from "@/i18n/routing";

const intlMiddleware = createMiddleware(routing);

function isRoutedLocalePath(pathname: string): boolean {
  return (
    pathname === "/en" ||
    pathname.startsWith("/en/") ||
    pathname === "/de" ||
    pathname.startsWith("/de/")
  );
}

/**
 * Stamps the request pathname onto an `x-pathname` header for every
 * request — read by `app/global-not-found.tsx` to tell SL/EN/DE apart (it
 * renders outside the normal route tree and gets no params, see that file).
 * This is the only reason the matcher below now covers the whole app
 * instead of just `/en` and `/de`.
 *
 * The next-intl behavior itself is untouched: `/en/*` and `/de/*` still run
 * through `intlMiddleware` exactly as before — same locale cookie, same
 * hreflang `Link` header, same any redirect/rewrite it decides on — this
 * just also carries the pathname stamp through on top of it. Every
 * Slovenian route still never touches `intlMiddleware` at all, so it keeps
 * being served exactly as it is today.
 */
export default function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-pathname", pathname);
  const response = NextResponse.next({ request: { headers: requestHeaders } });

  if (isRoutedLocalePath(pathname)) {
    const intlResponse = intlMiddleware(request);

    // A redirect or rewrite means next-intl wants to take over this
    // response entirely — no render happens for this request, so the
    // pathname stamp isn't needed (the redirected request re-enters proxy
    // and gets stamped on its own pass).
    if (
      intlResponse.headers.get("location") ||
      intlResponse.headers.get("x-middleware-rewrite")
    ) {
      return intlResponse;
    }

    // Otherwise carry next-intl's outgoing headers/cookies (locale cookie,
    // hreflang Link header) onto the pathname-stamped response so both
    // behaviors apply together.
    intlResponse.headers.forEach((value, key) => {
      response.headers.set(key, value);
    });
    intlResponse.cookies.getAll().forEach((cookie) => {
      response.cookies.set(cookie);
    });
  }

  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon\\.ico).*)"],
};
