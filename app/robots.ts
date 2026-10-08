import type { MetadataRoute } from "next";
import { SITE_URL, shouldIndexSite } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  if (!shouldIndexSite()) {
    return {
      rules: {
        userAgent: "*",
        disallow: "/",
      },
    };
  }

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/lab",
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
