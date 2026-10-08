import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";
import news from "./src/data/news.json";
import {
  NEWS_ROOT_REDIRECT_EXCLUSIONS,
  legacyRedirects,
} from "./src/i18n/legacy-redirects";

const newsRootExclusions = new Set<string>(NEWS_ROOT_REDIRECT_EXCLUSIONS);

const nextConfig: NextConfig = {
  // Required for `app/global-not-found.tsx` — this app has multiple root
  // layouts ((default), [locale], (lab)) and no single shared root layout,
  // so a plain root `not-found.tsx` has nothing to compose against.
  experimental: {
    globalNotFound: true,
  },
  async redirects() {
    return [
      ...news
        .filter((item) => !newsRootExclusions.has(item.slug))
        .map((item) => ({
          source: `/${item.slug}`,
          destination: `/novice/${item.slug}`,
          permanent: true,
        })),
      ...legacyRedirects.map((item) => ({
        ...item,
        permanent: true,
      })),
    ];
  },
};

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

export default withNextIntl(nextConfig);
