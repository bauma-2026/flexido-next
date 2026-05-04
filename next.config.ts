import type { NextConfig } from "next";
import news from "./src/data/news.json";

const nextConfig: NextConfig = {
  async redirects() {
    return news.map((item) => ({
      source: `/${item.slug}`,
      destination: `/novice/${item.slug}`,
      permanent: true,
    }));
  },
};

export default nextConfig;