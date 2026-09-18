import Image from "next/image";
import Link from "next/link";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
import FundingLogos from "@/components/blocks/editorial/FundingLogos";
import NewsCTA from "@/components/news/NewsCTA";
import type { Locale } from "@/i18n/config";
import { getPath } from "@/i18n/routes";
import type { NewsArticleContent, NewsShared } from "@/content/news/types";
import { getNewsHubContent, getNewsSummaries } from "@/content/news";
import { formatNewsDate } from "@/content/news/formatDate";

function DetailsCard({
  label,
  details,
  className = "",
}: {
  label: string;
  details: { label: string; value: string }[];
  className?: string;
}) {
  return (
    <aside
      className={`rounded-[var(--radius-structural)] border border-neutral-200 bg-white p-6 ${className}`}
    >
      <p className="eyebrow">{label}</p>
      <div className="mt-4 divide-y divide-neutral-200">
        {details.map((item) => (
          <div key={item.label} className="py-3 first:pt-0 last:pb-0">
            <p className="text-[13px] font-medium text-neutral-950">{item.label}</p>
            <p className="mt-1 text-[14px] leading-6 text-neutral-600">{item.value}</p>
          </div>
        ))}
      </div>
    </aside>
  );
}

export default function NewsArticleTemplate({
  locale,
  shared,
  content,
}: {
  locale: Locale;
  shared: NewsShared;
  content: NewsArticleContent;
}) {
  const hub = getNewsHubContent(locale);
  const hubHref = getPath("news", locale) ?? "/novice";
  const siblings = getNewsSummaries(locale);
  const index = siblings.findIndex((item) => item.id === shared.id);
  const prev = index > 0 ? siblings[index - 1] : undefined;
  const next = index >= 0 ? siblings[index + 1] : undefined;

  return (
    <>
      <Header
        locale={locale}
        routeKey={shared.routeKey}
        parentKey="news"
      />

      <main className="bg-white text-neutral-950">
        <section className="bg-white">
          <Container className="pt-8 pb-14 sm:pt-10 sm:pb-16 lg:pt-12 lg:pb-20">
            <Link
              href={hubHref}
              className="inline-flex text-[14px] text-neutral-500 transition hover:text-neutral-950"
            >
              {hub.chrome.backLabel}
            </Link>

            <div className="mt-6 max-w-[820px]">
              <p className="eyebrow">
                {hub.hero.eyebrow}
              </p>
              <h1 className="text-document-title mt-4">
                {content.title}
              </h1>
              <p className="mt-4 text-[14px] text-neutral-500">
                {formatNewsDate(content.date, locale)}
              </p>
            </div>

            <article>
              {shared.image ? (
                <div className="mt-12 grid gap-6 sm:mt-14 lg:mt-10 lg:grid-cols-[1fr_300px] lg:items-start lg:gap-12 xl:grid-cols-[1fr_340px] xl:gap-14">
                  {/* Fixed aspect rather than the native render, matching
                      ReferencePageTemplate: the portrait 757x1024 studio
                      sources rendered intrinsically ran ~1100px tall at 1440
                      and pushed the article body a full viewport down. */}
                  <div className="relative aspect-[16/11] overflow-hidden rounded-[var(--radius-panel)] border border-neutral-200 bg-neutral-100">
                    <Image
                      src={shared.image.src}
                      alt={content.imageAlt ?? content.title}
                      fill
                      sizes="(min-width: 1280px) 820px, (min-width: 1024px) 612px, 100vw"
                      className="object-cover"
                      priority
                    />
                  </div>

                  {content.details.length > 0 ? (
                    <DetailsCard label={hub.chrome.detailsLabel} details={content.details} />
                  ) : null}
                </div>
              ) : content.details.length > 0 ? (
                <DetailsCard
                  label={hub.chrome.detailsLabel}
                  details={content.details}
                  className="mt-12 max-w-[340px] sm:mt-14 lg:mt-16"
                />
              ) : null}

              <div className="max-w-[820px]">
                <div
                  className={`${shared.image || content.details.length > 0 ? "mt-10" : ""} space-y-7 text-[16px] leading-8 text-neutral-700`}
                >
                  {(() => {
                    // A callout marked `editorial` never claims the primary
                    // slot, so a single-callout article can still render a
                    // quiet cross-link instead of a filled button. Blocks
                    // without the flag behave exactly as before.
                    const primaryCalloutIndex = (() => {
                      const withCta = content.blocks.findIndex(
                        (b) =>
                          b.type === "callout" &&
                          b.variant !== "editorial" &&
                          Boolean(b.ctaLabel && (b.href || b.routeKey)),
                      );
                      if (withCta !== -1) return withCta;
                      return content.blocks.findIndex(
                        (b) => b.type === "callout" && b.variant !== "editorial",
                      );
                    })();

                    return content.blocks.map((block, blockIndex) => {
                    if (block.type === "intro") {
                      return (
                        <p key={blockIndex} className="text-[18px] leading-8 text-neutral-800">
                          {block.text}
                        </p>
                      );
                    }

                    if (block.type === "section") {
                      return (
                        <section key={block.heading} className="space-y-5 pt-4">
                          <h2 className="text-[24px] font-semibold tracking-[-0.03em] text-neutral-950">
                            {block.heading}
                          </h2>
                          {block.paragraphs.map((paragraph) => (
                            <p key={paragraph}>{paragraph}</p>
                          ))}
                          {block.list ? (
                            <ul className="list-disc space-y-2 pl-5 text-neutral-700">
                              {block.list.map((item) => (
                                <li key={item}>{item}</li>
                              ))}
                            </ul>
                          ) : null}
                        </section>
                      );
                    }

                    if (block.type === "note") {
                      return (
                        <div
                          key={block.text}
                          className="mt-8 rounded-[var(--radius-structural)] border border-neutral-200 bg-neutral-50 p-5 text-[14px] leading-6 text-neutral-600"
                        >
                          {block.text}
                        </div>
                      );
                    }

                    if (block.type === "result") {
                      return (
                        <div
                          key={block.heading}
                          className="mt-10 rounded-[var(--radius-structural)] border border-neutral-200 bg-neutral-50 p-6"
                        >
                          <p className="text-[11px] uppercase tracking-[0.16em] text-neutral-400">
                            {block.label}
                          </p>
                          <h2 className="mt-3 text-[22px] font-semibold tracking-[-0.03em] text-neutral-950">
                            {block.heading}
                          </h2>
                          {block.body ? (
                            <p className="mt-3 max-w-[58ch] text-[15px] leading-7 text-neutral-600">
                              {block.body}
                            </p>
                          ) : null}
                        </div>
                      );
                    }

                    if (block.type === "callout") {
                      const href = block.routeKey
                        ? getPath(block.routeKey, locale)
                        : block.href;
                      const isExternal = Boolean(href && /^https?:/.test(href));
                      const isPrimary = blockIndex === primaryCalloutIndex;

                      const cta =
                        href && block.ctaLabel ? (
                          isExternal || href.startsWith("mailto:") ? (
                            <a
                              href={href}
                              target={isExternal ? "_blank" : undefined}
                              rel={isExternal ? "noreferrer" : undefined}
                              className={
                                isPrimary
                                  ? "mt-6 inline-flex items-center rounded-full bg-[var(--color-interactive)] px-6 py-3 text-[14px] font-medium text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.18)] transition hover:bg-[var(--color-interactive-hover)] hover:text-white focus:outline-none focus:ring-2 focus:ring-[var(--color-interactive)]/30 focus:ring-offset-2"
                                  : "mt-3 inline-flex items-center text-[14px] font-medium text-neutral-900 underline decoration-neutral-300 underline-offset-4 transition hover:decoration-neutral-900"
                              }
                            >
                              {block.ctaLabel}
                            </a>
                          ) : (
                            <Link
                              href={href}
                              className={
                                isPrimary
                                  ? "mt-6 inline-flex items-center rounded-full bg-[var(--color-interactive)] px-6 py-3 text-[14px] font-medium text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.18)] transition hover:bg-[var(--color-interactive-hover)] hover:text-white focus:outline-none focus:ring-2 focus:ring-[var(--color-interactive)]/30 focus:ring-offset-2"
                                  : "mt-3 inline-flex items-center text-[14px] font-medium text-neutral-900 underline decoration-neutral-300 underline-offset-4 transition hover:decoration-neutral-900"
                              }
                            >
                              {block.ctaLabel}
                            </Link>
                          )
                        ) : null;

                      if (isPrimary) {
                        return (
                          <div
                            key={block.heading}
                            className="mt-8 rounded-[var(--radius-structural)] border border-neutral-200 bg-white p-6"
                          >
                            <p className="text-[11px] uppercase tracking-[0.16em] text-neutral-400">
                              {block.eyebrow}
                            </p>
                            <h2 className="mt-3 text-[22px] font-semibold tracking-[-0.03em] text-neutral-950">
                              {block.heading}
                            </h2>
                            <p className="mt-3 max-w-[58ch] text-[15px] leading-7 text-neutral-600">
                              {block.body}
                            </p>
                            {cta}
                          </div>
                        );
                      }

                      return (
                        <div key={block.heading} className="mt-5 border-t border-neutral-200 pt-5">
                          <p className="text-[11px] uppercase tracking-[0.16em] text-neutral-400">
                            {block.eyebrow}
                          </p>
                          <h2 className="mt-2 text-[16px] font-semibold tracking-[-0.02em] text-neutral-900">
                            {block.heading}
                          </h2>
                          <p className="mt-2 max-w-[58ch] text-[14px] leading-6 text-neutral-500">
                            {block.body}
                          </p>
                          {cta}
                        </div>
                      );
                    }

                    if (block.type === "fundingLogos") {
                      return <FundingLogos key={block.logos[0]?.alt ?? blockIndex} logos={block.logos} />;
                    }

                    return null;
                  });
                  })()}
                </div>
              </div>

              <div className="max-w-[820px]">
                {hub.articleCta ? (
                  <div className="mt-12">
                    <NewsCTA content={hub.articleCta} />
                  </div>
                ) : null}

                <div className="not-prose mt-14 border-t border-neutral-200 pt-6">
                  <div className="grid gap-3 sm:grid-cols-3 sm:items-center">
                    <Link
                      href={hubHref}
                      className="text-[14px] font-medium text-neutral-600 transition hover:text-neutral-950"
                    >
                      {hub.chrome.backLabel}
                    </Link>
                    <div>
                      {prev && getPath(prev.shared.routeKey, locale) ? (
                        <Link
                          href={getPath(prev.shared.routeKey, locale)!}
                          className="block rounded-[var(--radius-structural)] border border-neutral-200 px-4 py-3 text-[13px] text-neutral-600 transition hover:border-neutral-300 hover:text-neutral-950 sm:text-center"
                        >
                          {hub.chrome.prevLabel}
                        </Link>
                      ) : null}
                    </div>
                    <div>
                      {next && getPath(next.shared.routeKey, locale) ? (
                        <Link
                          href={getPath(next.shared.routeKey, locale)!}
                          className="block rounded-[var(--radius-structural)] border border-neutral-200 px-4 py-3 text-[13px] text-neutral-600 transition hover:border-neutral-300 hover:text-neutral-950 sm:text-center"
                        >
                          {hub.chrome.nextLabel}
                        </Link>
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </Container>
        </section>
      </main>

      <Footer locale={locale} />
    </>
  );
}
