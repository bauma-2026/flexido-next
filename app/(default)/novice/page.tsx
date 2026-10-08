import type { Metadata } from "next";

import NewsHubTemplate from "@/components/news/NewsHubTemplate";
import { getNewsHubContent } from "@/content/news";
import { buildAlternates, withSocial } from "@/i18n/metadata";

const content = getNewsHubContent("sl");

export const metadata: Metadata = withSocial({
  title: content.meta.title,
  description: content.meta.description,
  alternates: buildAlternates("news", "sl"),
}, "sl");

export default function Page() {
  return <NewsHubTemplate locale="sl" content={content} />;
}
