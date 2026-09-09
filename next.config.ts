import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";
import news from "./src/data/news.json";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      ...news.map((item) => ({
        source: `/${item.slug}`,
        destination: `/novice/${item.slug}`,
        permanent: true,
      })),
      {
        source: "/e-katalog",
        destination: "/standardne-celice",
        permanent: true,
      },
    ];
  },
};

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

export default withNextIntl(nextConfig);