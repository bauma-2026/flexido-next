import Link from "next/link";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import type { Locale } from "@/i18n/config";
import { getPath } from "@/i18n/routes";
import type { ProcessPageContent } from "@/content/process/types";
import SectionHeader from "@/components/ui/SectionHeader";

export default function ProcessPageTemplate({
  locale,
  content,
}: {
  locale: Locale;
  content: ProcessPageContent;
}) {
  const referencesHref = getPath("references", locale);

  return (
    <>
      <Header locale={locale} routeKey={content.routeKey} />

      <main className="bg-white text-neutral-950">
        <section className="relative overflow-hidden bg-neutral-950 text-white">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="absolute inset-0 h-full w-full object-cover opacity-45"
          >
            <source src={content.hero.videoSrc} type="video/mp4" />
          </video>

          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-black/25" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/20" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(14,165,233,0.16),transparent_30%)]" />

          <Container className="relative z-10 flex min-h-[520px] items-end py-16 sm:min-h-[600px] sm:py-20 lg:min-h-[640px] lg:py-24">
            <div className="max-w-[760px]">
              <p className="eyebrow-on-dark">
                {content.hero.eyebrow}
              </p>

              <h1 className="text-display mt-4 max-w-[13ch]">
                {content.hero.heading}
              </h1>

              <p className="mt-6 max-w-[58ch] text-balance text-[16px] leading-7 text-white/75 sm:text-lg">
                {content.hero.subhead}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={content.hero.primaryCta.href}
                  className="inline-flex items-center rounded-full bg-white px-6 py-3 text-[14px] font-medium text-neutral-950 transition hover:bg-white/90"
                >
                  {content.hero.primaryCta.label}
                </a>

                <a
                  href={content.hero.secondaryCta.href}
                  className="inline-flex items-center rounded-full border border-white/20 px-6 py-3 text-[14px] font-medium text-white transition hover:bg-white/10"
                >
                  {content.hero.secondaryCta.label}
                </a>
              </div>
            </div>
          </Container>
        </section>

        <Section className="border-b border-neutral-200 bg-white">
          <Container>
            {/* Tighter ratio + a shared hairline threading heading into copy:
                ties the two columns together instead of leaving them to
                float across a wide gap. Lead/supporting paragraph sizing
                (mirrors the reference-detail intro pattern) gives the two
                paragraphs distinct weight instead of one uniform block. */}
            <div className="grid gap-8 lg:grid-cols-[0.7fr_1fr] lg:gap-12">
              <SectionHeader
                eyebrow={content.intro.eyebrow}
                title={content.intro.heading}
              />

              <div className="max-w-[560px] lg:border-l lg:border-neutral-200 lg:pl-10">
                {content.intro.paragraphs.map((paragraph, index) => (
                  <p
                    key={paragraph}
                    className={
                      index === 0
                        ? "text-[17px] leading-8 text-neutral-800"
                        : "mt-4 text-[15px] leading-7 text-neutral-500"
                    }
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </Container>
        </Section>

        <Section id={content.steps.id} className="scroll-mt-24 surface-muted">
          <Container>
            <SectionHeader
              className="max-w-[720px]"
              eyebrow={content.steps.eyebrow}
              title={content.steps.heading}
              desc={content.steps.body}
              descClassName="measure-prose"
            />

            {/* Connected sequence, homepage-pattern: a shared hairline (left on
                mobile, top on desktop) carries a node + stem per step, and
                title/body are measure-capped so four steps read as a paced
                sequence instead of four columns fighting for width. */}
            <ol className="relative mt-10 lg:mt-14 lg:grid lg:grid-cols-4 lg:gap-x-8 lg:border-t lg:border-neutral-200">
              <span aria-hidden className="absolute left-0 top-1 bottom-1 w-px bg-neutral-200 lg:hidden" />

              {content.steps.items.map((step) => (
                <li key={step.title} className="relative pb-8 pl-8 last:pb-0 lg:pb-0 lg:pl-0 lg:pt-7">
                  <span
                    aria-hidden
                    className="absolute left-0 top-[5px] h-[7px] w-[7px] -translate-x-1/2 rounded-full border-[1.5px] border-[var(--color-brand)] bg-white lg:hidden"
                  />
                  <span aria-hidden className="absolute left-0 top-0 hidden h-7 w-px bg-[var(--color-brand)]/50 lg:block" />
                  <span
                    aria-hidden
                    className="absolute left-0 top-0 hidden h-[7px] w-[7px] -translate-x-1/2 -translate-y-1/2 rounded-full border-[1.5px] border-[var(--color-brand)] bg-white lg:block"
                  />

                  <p className="index-label">{step.number}</p>

                  {/* Two-line title band on desktop (2 x 18px x 1.2 = 2.4em):
                      the four steps share a top rule, so the descriptions have
                      to share a baseline too — without it a wrapped title (EN
                      "Commissioning and support", most DE titles) drops its
                      body 22px below its neighbours. */}
                  <h3 className="mt-3 max-w-[20ch] text-[18px] font-semibold leading-[1.2] tracking-[-0.02em] text-neutral-950 lg:min-h-[2.4em]">
                    {step.title}
                  </h3>

                  {/* No right padding: `lg:gap-x-8` on the grid is already the
                      gutter, and doubling it cost the body 32px of an
                      already-narrow 216px column at 1024. */}
                  <p className="mt-3 max-w-[34ch] text-[15px] leading-7 text-neutral-600">
                    {step.desc}
                  </p>
                </li>
              ))}
            </ol>
          </Container>
        </Section>

        <Section className="bg-white">
          <Container>
            <SectionHeader
              className="max-w-[720px]"
              eyebrow={content.principles.eyebrow}
              title={content.principles.heading}
            />

            {/* Grounded technical layout, not floating cards: one shared
                top rule + divide-x columns — calm and structural, not decorative. */}
            <div className="mt-10 grid border-t border-neutral-200 lg:grid-cols-3 lg:divide-x lg:divide-neutral-200">
              {content.principles.items.map((item) => (
                <div
                  key={item.title}
                  className="border-b border-neutral-200 py-8 last:border-b-0 lg:border-b-0 lg:px-8 lg:py-10 lg:first:pl-0 lg:last:pr-0"
                >
                  <h3 className="text-xl font-semibold tracking-[-0.02em] text-neutral-950">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-[15px] leading-6 text-neutral-600">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* Related-next: same split-statement grammar as the page intro
            (thesis left, copy right behind a desktop hairline). Quiet because
            it stays `tight` and the CTA stays a tertiary text link — not a
            second conversion band before the dark contact section. */}
        {referencesHref ? (
          <Section variant="tight" className="border-y border-neutral-200 bg-white">
            <Container>
              <div className="grid gap-8 lg:grid-cols-[0.7fr_1fr] lg:gap-12">
                <SectionHeader
                  eyebrow={content.proof.eyebrow}
                  title={content.proof.heading}
                />

                <div className="max-w-[560px] lg:border-l lg:border-neutral-200 lg:pl-10">
                  <p className="text-body">
                    {content.proof.body}
                  </p>

                  <Link
                    href={referencesHref}
                    className="focus-ring mt-6 inline-flex items-center text-[14px] font-medium text-neutral-500 transition hover:text-[#0b8fdc]"
                  >
                    {content.proof.ctaLabel}
                  </Link>
                </div>
              </div>
            </Container>
          </Section>
        ) : null}

        <Section
          id={content.cta.id}
          variant="large"
          className="relative overflow-hidden bg-[var(--color-dark-band)]"
        >
          <div className="absolute inset-0 opacity-20">
            <img
              src="/images/systems/raw/custom-robotic-cell-studio-render.png"
              alt=""
              className="h-full w-full object-cover object-[60%_center]"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-dark-band)] via-[var(--color-dark-band)]/55 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

          <Container className="relative">
            <div className="max-w-[720px]">
              <p className="eyebrow-on-dark">{content.cta.eyebrow}</p>

              <h2 className="text-section-title mt-3 measure-heading text-white">
                {content.cta.heading}
              </h2>

              <p className="mt-5 max-w-[58ch] text-[16px] leading-7 text-white/72 sm:text-lg">
                {content.cta.body}
              </p>

              <div className="mt-8">
                <a
                  href={`mailto:${content.cta.mailto}`}
                  className="inline-flex items-center rounded-full bg-white px-6 py-3 text-[14px] font-medium text-neutral-950 transition hover:bg-white/90"
                >
                  {content.cta.label}
                </a>
              </div>
            </div>
          </Container>
        </Section>
      </main>

      <Footer locale={locale} />
    </>
  );
}
