import type { Metadata } from "next";

import NewsHubTemplate from "@/components/news/NewsHubTemplate";
import { getNewsHubContent } from "@/content/news";
import { buildAlternates } from "@/i18n/metadata";

const content = getNewsHubContent("sl");

export const metadata: Metadata = {
  title: content.meta.title,
  description: content.meta.description,
  robots: { index: false, follow: false },
  alternates: buildAlternates("news", "sl"),
};

export default function Page() {
  return <NewsHubTemplate locale="sl" content={content} />;
}
