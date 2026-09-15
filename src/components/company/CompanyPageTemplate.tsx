import Image from "next/image";
import Link from "next/link";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import type { Locale } from "@/i18n/config";
import { getPath } from "@/i18n/routes";
import type { CompanyAboutContent } from "@/content/company/types";
import Button from "@/components/ui/Button";
import SectionHeader from "@/components/ui/SectionHeader";

export default function CompanyPageTemplate({
  locale,
  content,
}: {
  locale: Locale;
  content: CompanyAboutContent;
}) {
  const processHref = getPath("process", locale) ?? "/proces";
  const videoHref = getPath("video", locale) ?? "/video";

  return (
    <>
      <Header locale={locale} routeKey={content.routeKey} />

      <main className="bg-white text-neutral-950">
        <section className="relative overflow-hidden text-white">
          <div className="absolute inset-0">
            <Image
              src={content.hero.image.src}
              alt={content.hero.image.alt}
              fill
              priority
              sizes="100vw"
              className="object-cover object-[32%_42%]"
            />
          </div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(14,165,233,0.20),transparent_32%)]" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/72 to-black/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/78 via-black/15 to-transparent" />

          <Container className="relative z-10 flex min-h-[480px] items-end pb-16 pt-32 sm:min-h-[560px] lg:min-h-[620px] lg:pb-20">
            <div className="max-w-[720px]">
              <p className="eyebrow-on-dark">
                {content.hero.eyebrow}
              </p>

              <h1 className="text-display mt-4 max-w-[12ch]">
                {content.hero.heading}
              </h1>

              <p className="mt-6 max-w-[62ch] text-base leading-7 text-white/70 sm:text-lg">
                {content.hero.subhead}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={content.hero.primaryCta.href}
                  className="inline-flex items-center rounded-full bg-white px-6 py-3 text-[14px] font-medium text-neutral-950 transition hover:bg-white/90"
                >
                  {content.hero.primaryCta.label}
                </a>

                <Link
                  href={processHref}
                  className="inline-flex items-center rounded-full border border-white/20 px-6 py-3 text-[14px] font-medium text-white transition hover:bg-white/10"
                >
                  {content.hero.secondaryCtaLabel}
                </Link>
              </div>
            </div>

            <div className="absolute bottom-8 right-6 hidden max-w-[240px] text-right sm:block lg:bottom-10 lg:right-10">
              <p className="text-[10px] uppercase tracking-[0.18em] text-white/55">
                {content.hero.imageCaptionEyebrow}
              </p>

              <p className="mt-2 text-[13px] leading-5 text-white/80">
                {content.hero.imageCaption}
              </p>
            </div>
          </Container>
        </section>

        <Section>
          <Container>
            <div className="grid gap-6 lg:grid-cols-[0.82fr_1.18fr] lg:items-end lg:gap-8">
              <div>
                <SectionHeader
                  eyebrow={content.whatWeDo.eyebrow}
                  title={content.whatWeDo.heading}
                />
              </div>

              {content.whatWeDo.lead ? (
                <p className="text-body max-w-[52ch]">
                  {content.whatWeDo.lead}
                </p>
              ) : null}
            </div>

            {/* Same ruled index/title/body structure as "Kako pristopimo"
                below — ties the two three-part sections to one shared
                card language instead of two different idioms. */}
            <div className="mt-16 grid border-t border-neutral-200 sm:grid-cols-3 sm:divide-x sm:divide-neutral-200 lg:mt-20">
              {content.whatWeDo.items.map((item) => (
                <div
                  key={item.title}
                  className="border-b border-neutral-200 py-8 last:border-b-0 sm:border-b-0 sm:px-8 sm:py-10 sm:first:pl-0 sm:last:pr-0"
                >
                  {/* Three offerings, not a sequence — no index (Pass 2A). */}
                  <h3 className="text-xl font-semibold tracking-[-0.02em] text-neutral-950">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-neutral-600">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        <Section variant="large" className="border-y border-neutral-200 surface-muted">
          <Container>
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.6fr] lg:items-center lg:gap-12">
              <div>
                <SectionHeader
                  eyebrow={content.team.eyebrow}
                  title={content.team.heading}
                  desc={content.team.body}
                  descClassName="max-w-[42ch]"
                />
              </div>

              <div className="overflow-hidden rounded-[var(--radius-panel)] border border-neutral-200 bg-white">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={content.team.image.src}
                    alt={content.team.image.alt}
                    fill
                    sizes="(min-width: 1024px) 62vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </Container>
        </Section>

        <Section variant="large">
          <Container>
            <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
              <div>
                <SectionHeader
                  eyebrow={content.video.eyebrow}
                  title={content.video.heading}
                />
              </div>

              <div>
                <p className="text-body measure-prose">
                  {content.video.body}
                </p>

                <div className="mt-8 overflow-hidden rounded-[var(--radius-panel)] border border-neutral-200 bg-black">
                  <video
                    controls
                    playsInline
                    preload="metadata"
                    poster={content.video.poster}
                    className="aspect-video w-full bg-black object-cover"
                  >
                    <source src={content.video.src} type="video/mp4" />
                  </video>
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-4">
                  <Button href={videoHref} className="shrink-0">
                    {content.video.ctaLabel}
                  </Button>

                  <p className="text-sm leading-6 text-neutral-500">
                    {content.video.aside}
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* F2 marks the team section only; approach returns to normal content
            and owns the white-to-white boundary (Pass 3). */}
        <Section className="border-t border-neutral-200 bg-white">
          <Container>
            <div className="max-w-[620px]">
              <SectionHeader
                eyebrow={content.approach.eyebrow}
                title={content.approach.heading}
              />
            </div>

            {/* Restrained horizontal process-axis pattern — same ruled
                index-label idiom used for itemGrids across the system
                pages (CNC/IMM/TMX/Middleware): border-t + sm:divide-x
                columns instead of a plain gapped grid, so the sequence
                reads with real column separation and more weight than
                whatWeDo's quiet unboxed principles above. */}
            <div className="mt-10 grid border-t border-neutral-200 sm:grid-cols-3 sm:divide-x sm:divide-neutral-200">
              {content.approach.items.map((item, index) => (
                <div
                  key={item.title}
                  className="border-b border-neutral-200 py-8 last:border-b-0 sm:border-b-0 sm:px-8 sm:py-10 sm:first:pl-0 sm:last:pr-0"
                >
                  <p className="index-label">{String(index + 1).padStart(2, "0")}</p>

                  <h3 className="mt-3 text-xl font-semibold tracking-[-0.02em] text-neutral-950">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-neutral-600">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {content.cta.image ? (
          <Section
            id={content.cta.id}
            variant="large"
            className="relative overflow-hidden bg-[var(--color-dark-band)]"
          >
            <div className="absolute inset-0 opacity-20">
              <img
                src={content.cta.image.src}
                alt=""
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-dark-band)] via-[var(--color-dark-band)]/55 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

            <Container className="relative">
              <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
                <div className="max-w-[620px]">
                  <p className="eyebrow-on-dark">{content.cta.eyebrow}</p>

                  <h2 className="text-section-title mt-3 measure-heading text-white">
                    {content.cta.heading}
                  </h2>
                </div>

                <div className="max-w-[680px]">
                  <p className="text-[15px] leading-7 text-white/72 sm:text-[16px]">
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
              </div>
            </Container>
          </Section>
        ) : (
          <Section
            id={content.cta.id}
            variant="large"
            className="border-t border-neutral-200/60 bg-white"
          >
            <Container>
              <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
                <div className="max-w-[620px]">
                  <SectionHeader
                    eyebrow={content.cta.eyebrow}
                    title={content.cta.heading}
                    headingClassName="measure-heading"
                  />
                </div>

                <div className="max-w-[680px]">
                  <p className="text-body measure-prose">
                    {content.cta.body}
                  </p>

                  <div className="mt-8">
                    <a
                      href={`mailto:${content.cta.mailto}`}
                      className="inline-flex items-center rounded-full bg-[var(--color-interactive)] px-6 py-3 text-[14px] font-medium text-white transition hover:bg-[var(--color-interactive-hover)]"
                    >
                      {content.cta.label}
                    </a>
                  </div>
                </div>
              </div>
            </Container>
          </Section>
        )}
      </main>

      <Footer locale={locale} />
    </>
  );
}
