import { getNewsSummaries } from "@/content/news";
import { getPath } from "@/i18n/routes";

/** SL hub list, derived from the News content catalog. */
export const newsItems = getNewsSummaries("sl").map((item) => ({
  title: item.content.title,
  href: getPath(item.shared.routeKey, "sl") ?? `/novice/${item.content.slug}`,
  image: item.shared.image?.src ?? "",
}));
