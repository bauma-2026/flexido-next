import type { Metadata } from "next";
import { notFound } from "next/navigation";

import NewsArticleTemplate from "@/components/news/NewsArticleTemplate";
import { getNewsArticleBySlug, getNewsSlugs } from "@/content/news";
import { buildAlternates, withSocial } from "@/i18n/metadata";

export function generateStaticParams() {
  return getNewsSlugs("sl").map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getNewsArticleBySlug("sl", slug);
  if (!article) return {};

  return withSocial({
    title: article.content.meta.title,
    description: article.content.meta.description,
      alternates: buildAlternates(article.shared.routeKey, "sl"),
  }, "sl");
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getNewsArticleBySlug("sl", slug);
  if (!article) notFound();

  return (
    <NewsArticleTemplate locale="sl" shared={article.shared} content={article.content} />
  );
}
