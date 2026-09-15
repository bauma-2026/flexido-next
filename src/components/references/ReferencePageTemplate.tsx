import Image from "next/image";
import Link from "next/link";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
import type { Locale } from "@/i18n/config";
import { getPath } from "@/i18n/routes";
import type { ReferenceShared, ReferencePageContent } from "@/content/references/types";
import { getReferenceSummaries } from "@/content/references";

export default function ReferencePageTemplate({
  locale,
  shared,
  content,
}: {
  locale: Locale;
  shared: ReferenceShared;
  content: ReferencePageContent;
}) {
  const backHref = getPath("references", locale) ?? "/reference";
  const relatedHref = getPath(content.related.routeKey, locale);
  const processHref = getPath("process", locale);
  const productHref = content.productLink ? getPath(content.productLink.routeKey, locale) : undefined;

  /** Sibling proof — next entry in the shared `referenceOrder`, so the three
      references link into each other without a detour through the hub. */
  const summaries = getReferenceSummaries(locale);
  const currentIndex = summaries.findIndex((entry) => entry.shared.id === shared.id);
  const sibling =
    currentIndex >= 0 ? summaries[(currentIndex + 1) % summaries.length] : undefined;
  const siblingHref =
    sibling && sibling.shared.id !== shared.id ? getPath(sibling.shared.routeKey, locale) : undefined;

  return (
    <>
      <Header
        locale={locale}
        routeKey={content.routeKey}
        parentKey="references"
      />

      <main className="bg-white text-neutral-950">
        <section className="border-b border-neutral-200 bg-white">
          <Container className="pt-12 pb-12 sm:pt-16 sm:pb-14 lg:pt-20 lg:pb-16">
            <Link
              href={backHref}
              className="inline-flex text-[14px] text-neutral-500 transition hover:text-neutral-950"
            >
              {content.backLabel}
            </Link>

            <div className="mt-10 max-w-[980px]">
              <p className="text-[11px] uppercase tracking-[0.18em] text-neutral-400">
                {content.eyebrow}
              </p>

              <h1 className="mt-5 max-w-[880px] text-[42px] font-semibold leading-[0.95] tracking-[-0.055em] text-neutral-950 sm:text-[56px] lg:text-[68px]">
                {content.title}
              </h1>
            </div>
          </Container>
        </section>

        <section className="bg-white">
          <Container className="py-14 sm:py-16 lg:py-20">
            {/* Image runs wider than the reading column — it's the proof
                visual, not inline article media — while text keeps a
                readable measure below. Aspect-ratio replaces the old
                native-dimension render, which stretched these portrait
                CAD renders to ~1100px tall and buried the result. */}
            <article className="max-w-[980px]">
              <div className="relative aspect-[16/11] overflow-hidden rounded-[26px] border border-neutral-200 bg-neutral-100">
                <Image
                  src={shared.image.src}
                  alt={content.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 980px, 100vw"
                  className={`object-cover ${shared.image.objectPosition ?? ""}`}
                  priority
                />
              </div>

              <div className="max-w-[820px]">
                <div className="mt-10 space-y-7 text-[16px] leading-8 text-neutral-700">
                  <p className="text-[18px] leading-8 text-neutral-800">{content.intro}</p>

                  {content.sections.map((section) => (
                    <section key={section.heading} className="space-y-5 pt-4">
                      <h2 className="text-[24px] font-semibold tracking-[-0.03em] text-neutral-950">
                        {section.heading}
                      </h2>

                      {section.paragraphs.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </section>
                  ))}
                </div>

                {/* Documented result: the same accent-line proof language used
                    everywhere else on the site (Solution proofProject/proofGrid,
                    the References hub cards) — elevated above body-copy size
                    since this is the page's single strongest proof moment, not
                    a generic callout. Now also carries the reserved proof
                    surface (.surface-soft) as a restrained inset panel — full
                    padding + structural radius, no shadow, no second border —
                    so this is the site's one place that tone is allowed to
                    mean "documented evidence". When there's no result
                    (carton-forming), nothing renders here and the surrounding
                    white stays untouched — see the related block below, which
                    carries the visual pause instead of a faked/empty box. */}
                {content.result ? (
                  <div className="surface-soft mt-12 rounded-[var(--radius-structural)] border-l-2 border-[var(--color-accent-line)] p-6 sm:p-7">
                    <p className="text-[11px] uppercase tracking-[0.16em] text-neutral-400">
                      {content.result.label}
                    </p>

                    <p className="mt-3 text-[22px] font-semibold leading-[1.25] tracking-[-0.02em] text-neutral-900 sm:text-[24px]">
                      {content.result.heading}
                    </p>

                    {content.result.body ? (
                      <p className="mt-4 max-w-[58ch] text-[15px] leading-7 text-neutral-600">
                        {content.result.body}
                      </p>
                    ) : null}
                  </div>
                ) : null}

                {/* Demoted relative to the result above: a rule instead of a
                    box, more separation, quieter typography — reads as a
                    footer-level next step, not another card after the article.
                    The top rule also gives the no-result case a deliberate
                    close instead of prose just stopping. */}
                {relatedHref || processHref || siblingHref || productHref ? (
                  <div className="mt-14 border-t border-neutral-200 pt-8">
                    {relatedHref ? (
                      <>
                        <p className="text-[11px] uppercase tracking-[0.16em] text-neutral-400">
                          {content.related.eyebrow}
                        </p>

                        <h2 className="mt-3 text-[20px] font-semibold tracking-[-0.03em] text-neutral-950">
                          {content.related.heading}
                        </h2>

                        <p className="mt-3 max-w-[58ch] text-[15px] leading-7 text-neutral-600">
                          {content.related.body}
                        </p>

                        <Link
                          href={relatedHref}
                          className="mt-6 inline-flex items-center rounded-full bg-neutral-950 px-6 py-3 text-[14px] font-medium text-white transition hover:bg-neutral-800"
                        >
                          {content.related.ctaLabel}
                        </Link>
                      </>
                    ) : null}

                    {/* Further exits, deliberately lighter than the capability
                        button above — the matching product (when this project
                        maps to one), a continuation into the method (proof →
                        process), and into another documented project. Not a
                        second competing CTA. */}
                    {processHref || siblingHref || productHref ? (
                      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-x-8 sm:gap-y-2">
                        {productHref && content.productLink ? (
                          <Link
                            href={productHref}
                            className="inline-flex items-center text-[14px] font-semibold text-neutral-800 transition hover:text-neutral-950"
                          >
                            {content.productLink.label}
                          </Link>
                        ) : null}

                        {processHref ? (
                          <Link
                            href={processHref}
                            className="inline-flex items-center text-[14px] font-medium text-neutral-600 transition hover:text-neutral-950"
                          >
                            {content.processLink.label}
                          </Link>
                        ) : null}

                        {siblingHref && sibling ? (
                          <Link
                            href={siblingHref}
                            className="inline-flex items-center text-[14px] font-medium text-neutral-600 transition hover:text-neutral-950"
                          >
                            {content.siblingLabel}: {sibling.content.summary.title} →
                          </Link>
                        ) : null}
                      </div>
                    ) : null}
                  </div>
                ) : null}
              </div>
            </article>
          </Container>
        </section>
      </main>

      <Footer locale={locale} />
    </>
  );
}
