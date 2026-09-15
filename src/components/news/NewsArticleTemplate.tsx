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
  mobile = false,
}: {
  label: string;
  details: { label: string; value: string }[];
  mobile?: boolean;
}) {
  return (
    <aside
      className={[
        "rounded-[24px] border border-neutral-200 bg-white p-6",
        mobile ? "lg:hidden" : "hidden lg:block lg:sticky lg:top-24",
      ].join(" ")}
    >
      <p className="text-[11px] uppercase tracking-[0.16em] text-neutral-500">{label}</p>
      <div className="mt-5 divide-y divide-neutral-200">
        {details.map((item) => (
          <div key={item.label} className="py-4 first:pt-0 last:pb-0">
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
        <section className="border-b border-neutral-200 bg-[#f6f9fc]">
          <Container className="pt-8 pb-8 sm:pt-10 sm:pb-9 lg:pt-12 lg:pb-10">
            <Link
              href={hubHref}
              className="inline-flex text-[14px] text-neutral-500 transition hover:text-neutral-950"
            >
              {hub.chrome.backLabel}
            </Link>

            <div className="mt-6 max-w-[820px]">
              <p className="text-[11px] uppercase tracking-[0.18em] text-neutral-400">
                {hub.hero.eyebrow}
              </p>
              <h1 className="mt-4 text-[32px] font-semibold leading-[1.04] tracking-[-0.045em] text-neutral-950 sm:text-[40px] lg:text-[48px]">
                {content.title}
              </h1>
              <p className="mt-4 text-[14px] text-neutral-500">
                {formatNewsDate(content.date, locale)}
              </p>
            </div>
          </Container>
        </section>

        <section className="bg-white">
          <Container className="py-14 sm:py-16 lg:py-20">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,760px)_280px] lg:gap-14 xl:grid-cols-[minmax(0,820px)_300px]">
              <article>
                {shared.image ? (
                  <Image
                    src={shared.image.src}
                    alt={content.imageAlt ?? content.title}
                    width={1200}
                    height={800}
                    className="w-full rounded-[26px] border border-neutral-200 bg-neutral-100"
                    priority
                  />
                ) : null}

                {content.details.length > 0 ? (
                  <div className={shared.image ? "mt-6" : undefined}>
                    <DetailsCard label={hub.chrome.detailsLabel} details={content.details} mobile />
                  </div>
                ) : null}

                <div className={`${shared.image ? "mt-10" : ""} space-y-7 text-[16px] leading-8 text-neutral-700`}>
                  {(() => {
                    const primaryCalloutIndex = (() => {
                      const withCta = content.blocks.findIndex(
                        (b) => b.type === "callout" && Boolean(b.ctaLabel && (b.href || b.routeKey)),
                      );
                      if (withCta !== -1) return withCta;
                      return content.blocks.findIndex((b) => b.type === "callout");
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
                          className="mt-8 rounded-2xl border border-neutral-200 bg-neutral-50 p-5 text-[14px] leading-6 text-neutral-600"
                        >
                          {block.text}
                        </div>
                      );
                    }

                    if (block.type === "result") {
                      return (
                        <div
                          key={block.heading}
                          className="mt-10 rounded-2xl border border-neutral-200 bg-neutral-50 p-6"
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
                                  ? "mt-6 inline-flex items-center rounded-full bg-neutral-950 px-6 py-3 text-[14px] font-medium text-white transition hover:bg-neutral-800"
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
                                  ? "mt-6 inline-flex items-center rounded-full bg-neutral-950 px-6 py-3 text-[14px] font-medium text-white transition hover:bg-neutral-800"
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
                            className="mt-8 rounded-2xl border border-neutral-200 bg-white p-6"
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

                <NewsCTA />

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
                          className="block rounded-2xl border border-neutral-200 px-4 py-3 text-[13px] text-neutral-600 transition hover:border-neutral-300 hover:text-neutral-950 sm:text-center"
                        >
                          {hub.chrome.prevLabel}
                        </Link>
                      ) : null}
                    </div>
                    <div>
                      {next && getPath(next.shared.routeKey, locale) ? (
                        <Link
                          href={getPath(next.shared.routeKey, locale)!}
                          className="block rounded-2xl border border-neutral-200 px-4 py-3 text-[13px] text-neutral-600 transition hover:border-neutral-300 hover:text-neutral-950 sm:text-center"
                        >
                          {hub.chrome.nextLabel}
                        </Link>
                      ) : null}
                    </div>
                  </div>
                </div>
              </article>

              {content.details.length > 0 ? (
                <DetailsCard label={hub.chrome.detailsLabel} details={content.details} />
              ) : null}
            </div>
          </Container>
        </section>
      </main>

      <Footer locale={locale} />
    </>
  );
}
