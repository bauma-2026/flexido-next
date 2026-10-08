import type { MetadataRoute } from "next";
import { getNewsSlugs } from "@/content/news";
import { routes } from "@/i18n/routes";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = new Set<string>();

  for (const entry of Object.values(routes)) {
    for (const path of Object.values(entry)) {
      if (path) paths.add(path);
    }
  }

  for (const slug of getNewsSlugs("sl")) {
    paths.add(`/novice/${slug}`);
  }
  for (const slug of getNewsSlugs("en")) {
    paths.add(`/en/news/${slug}`);
  }

  return [...paths]
    .sort()
    .map((path) => ({
      url: path === "/" ? SITE_URL : `${SITE_URL}${path}`,
    }));
}
