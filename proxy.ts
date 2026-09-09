import createMiddleware from "next-intl/middleware";
import { routing } from "@/i18n/routing";

const intlMiddleware = createMiddleware(routing);

export default intlMiddleware;

/**
 * Scoped deliberately to `/en` and `/de` only. Every existing Slovenian
 * route (`/`, `/resitve/...`, `/standardne-celice/...`, everything else in
 * the flat `app/` tree) is intentionally excluded from this matcher and is
 * therefore never touched by next-intl — it keeps being served exactly as
 * it is today, with zero behavior change.
 */
export const config = {
  matcher: ["/en", "/en/:path*", "/de", "/de/:path*"],
};
