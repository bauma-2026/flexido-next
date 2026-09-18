import Image from "next/image";
import Link from "next/link";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import type { Locale } from "@/i18n/config";
import { getPath } from "@/i18n/routes";
import type { NewsHubContent } from "@/content/news/types";
import { getNewsSummaries } from "@/content/news";
import { formatNewsDate } from "@/content/news/formatDate";
import Button from "@/components/ui/Button";
import SectionHeader from "@/components/ui/SectionHeader";

export default function NewsHubTemplate({
  locale,
  content,
}: {
  locale: Locale;
  content: NewsHubContent;
}) {
  const articles = getNewsSummaries(locale);
  const featured = articles[0];
  const rest = articles.slice(1);
  const solutionsHref = getPath(content.cta.primaryRouteKey, locale) ?? "/resitve";

  return (
    <>
      <Header locale={locale} routeKey={content.routeKey} />

      <main className="bg-white text-neutral-950">
        <section className="border-b border-neutral-200 bg-white">
          <Container className="pt-14 pb-16 sm:pt-20 sm:pb-20 lg:pt-24 lg:pb-24">
            <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-start lg:gap-14">
              <div className="max-w-[680px]">
                <p className="eyebrow">{content.hero.eyebrow}</p>

                <h1 className="text-display mt-4 max-w-[12ch]">
                  {content.hero.heading}
                </h1>
              </div>

              <div className="max-w-[42ch]">
                <p className="text-body">{content.hero.body}</p>
                <p className="mt-4 text-[15px] leading-7 text-neutral-500">{content.hero.aside}</p>
              </div>
            </div>

            {content.empty && articles.length === 0 ? (
              <SectionHeader
                className="mt-12 max-w-[720px] rounded-[var(--radius-structural)] border border-neutral-200 bg-neutral-50 p-8 sm:p-10 lg:p-12"
                eyebrow={content.hero.eyebrow}
                title={content.empty.heading}
                headingClassName="measure-heading"
                desc={content.empty.body}
                descClassName="measure-prose"
              />
            ) : null}

            {featured ? (
              <div className="mt-12 grid gap-8 sm:mt-14 lg:mt-16 lg:grid-cols-[1.3fr_1fr] lg:items-start lg:gap-14">
                <Link href={getPath(featured.shared.routeKey, locale) ?? "#"} className="group block">
                  <div className="overflow-hidden rounded-[var(--radius-panel)] border border-neutral-200 bg-neutral-100">
                    {featured.shared.image ? (
                      <Image
                        src={featured.shared.image.src}
                        alt={featured.content.imageAlt ?? featured.content.title}
                        width={1200}
                        height={750}
                        sizes="(min-width: 1280px) 656px, (min-width: 1024px) 50vw, 100vw"
                        className="aspect-[16/10] w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                      />
                    ) : (
                      <div className="aspect-[16/10] w-full bg-neutral-100" />
                    )}
                  </div>
                </Link>

                <div className="max-w-[520px]">
                  <p className="eyebrow">{content.featuredEyebrow}</p>
                  <p className="mt-3 text-[14px] text-neutral-500">
                    {formatNewsDate(featured.content.date, locale)}
                  </p>
                  <h2 className="text-section-title mt-3">
                    {featured.content.title}
                  </h2>
                  <p className="mt-5 text-[15px] leading-7 text-neutral-600">
                    {featured.content.excerpt || content.featuredFallbackBody}
                  </p>
                  <div className="mt-7">
                    <Link
                      href={getPath(featured.shared.routeKey, locale) ?? "#"}
                      className="focus-ring inline-flex items-center text-[14px] font-medium text-neutral-500 transition hover:text-[var(--color-interactive)]"
                    >
                      {content.readMoreLabel}
                    </Link>
                  </div>
                </div>
              </div>
            ) : null}
          </Container>
        </section>

        {rest.length > 0 ? (
          <Section className="surface-muted">
            <Container>
              <div className="mb-10 grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
                <SectionHeader
                  className="max-w-[620px]"
                  eyebrow={content.grid.eyebrow}
                  title={content.grid.heading}
                />
                <p className="text-body max-w-[560px]">{content.grid.body}</p>
              </div>

              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {rest.map((item) => {
                  const href = getPath(item.shared.routeKey, locale);
                  if (!href) return null;

                  return (
                    <Link
                      key={item.id}
                      href={href}
                      className="group overflow-hidden rounded-[var(--radius-panel)] border border-neutral-200 bg-white transition hover:-translate-y-0.5 hover:border-neutral-300"
                    >
                      {/* No image frame when the entry has no image: an empty
                          16/10 neutral block reads as a broken thumbnail, so
                          the card collapses to a deliberate text-only card
                          instead (the EN-only posts have no imagery). */}
                      {item.shared.image ? (
                        <div className="overflow-hidden bg-neutral-100">
                          <Image
                            src={item.shared.image.src}
                            alt={item.content.imageAlt ?? item.content.title}
                            width={800}
                            height={500}
                            sizes="(min-width: 1280px) 392px, (min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw"
                            className={`aspect-[16/10] w-full object-cover transition duration-500 group-hover:scale-[1.04] ${item.shared.image.gridObjectPosition ?? ""}`}
                          />
                        </div>
                      ) : null}
                      <div className="p-6">
                        <p className="text-[11px] uppercase tracking-[0.16em] text-neutral-400">
                          {content.grid.cardLabel}
                        </p>
                        <p className="mt-2 text-[13px] text-neutral-500">
                          {formatNewsDate(item.content.date, locale)}
                        </p>
                        <h3 className="mt-3 text-[19px] font-semibold leading-snug tracking-[-0.03em] text-neutral-950">
                          {item.content.title}
                        </h3>
                        <p className="mt-5 text-[14px] font-medium text-neutral-500 transition group-hover:text-neutral-950">
                          {content.readMoreLabel}
                        </p>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </Container>
          </Section>
        ) : null}

        <Section className="border-y border-neutral-200/70 bg-white">
          <Container>
            <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
              <SectionHeader
                eyebrow={content.cta.eyebrow}
                title={content.cta.heading}
              />
              <div>
                <p className="text-body measure-prose">{content.cta.body}</p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <Button href={solutionsHref}>{content.cta.primaryLabel}</Button>
                  <Button href={`mailto:${content.cta.mailto}`} variant="secondary">
                    {content.cta.secondaryLabel}
                  </Button>
                </div>
              </div>
            </div>
          </Container>
        </Section>
      </main>

      <Footer locale={locale} />
    </>
  );
}
