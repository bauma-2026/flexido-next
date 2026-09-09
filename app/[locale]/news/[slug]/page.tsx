import type { Metadata } from "next";
import { notFound } from "next/navigation";

import NewsArticleTemplate from "@/components/news/NewsArticleTemplate";
import { getNewsArticleBySlug, getNewsSlugs } from "@/content/news";
import { buildAlternates } from "@/i18n/metadata";

export function generateStaticParams() {
  return getNewsSlugs("en").map((slug) => ({ locale: "en", slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  if (locale !== "en") return {};

  const article = getNewsArticleBySlug("en", slug);
  if (!article) return {};

  return {
    title: article.content.meta.title,
    description: article.content.meta.description,
    robots: { index: false, follow: false },
    alternates: buildAlternates(article.shared.routeKey, "en"),
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (locale !== "en") notFound();

  const article = getNewsArticleBySlug("en", slug);
  if (!article) notFound();

  return (
    <NewsArticleTemplate locale="en" shared={article.shared} content={article.content} />
  );
}
