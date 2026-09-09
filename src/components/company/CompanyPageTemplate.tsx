import Image from "next/image";
import Link from "next/link";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
import type { Locale } from "@/i18n/config";
import { getPath } from "@/i18n/routes";
import type { CompanyAboutContent } from "@/content/company/types";

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
              <p className="text-[11px] uppercase tracking-[0.18em] text-white/45">
                {content.hero.eyebrow}
              </p>

              <h1 className="mt-4 max-w-[12ch] text-5xl font-semibold leading-[0.96] tracking-[-0.045em] sm:text-6xl lg:text-[66px]">
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

        <section className="py-14 sm:py-24 lg:py-28">
          <Container>
            <div className="grid gap-6 lg:grid-cols-[0.82fr_1.18fr] lg:items-end lg:gap-8">
              <div>
                <p className="text-[11px] uppercase tracking-[0.18em] text-neutral-500">
                  {content.whatWeDo.eyebrow}
                </p>

                <h2 className="mt-3 max-w-[15ch] text-3xl font-semibold leading-tight tracking-[-0.035em] sm:text-4xl">
                  {content.whatWeDo.heading}
                </h2>
              </div>

              {content.whatWeDo.lead ? (
                <p className="max-w-[52ch] text-[16px] leading-7 text-neutral-600">
                  {content.whatWeDo.lead}
                </p>
              ) : null}
            </div>

            {/* Same ruled index/title/body structure as "Kako pristopimo"
                below — ties the two three-part sections to one shared
                card language instead of two different idioms. */}
            <div className="mt-16 grid border-t border-neutral-200 sm:grid-cols-3 sm:divide-x sm:divide-neutral-200 lg:mt-20">
              {content.whatWeDo.items.map((item, index) => (
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
        </section>

        <section className="border-y border-neutral-200 surface-muted py-20 sm:py-24 lg:py-28">
          <Container>
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.6fr] lg:items-center lg:gap-12">
              <div>
                <p className="text-[11px] uppercase tracking-[0.18em] text-neutral-500">
                  {content.team.eyebrow}
                </p>

                <h2 className="mt-3 max-w-[15ch] text-3xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-4xl lg:text-[42px]">
                  {content.team.heading}
                </h2>

                <p className="mt-5 max-w-[42ch] text-[16px] leading-7 text-neutral-600">
                  {content.team.body}
                </p>
              </div>

              <div className="overflow-hidden rounded-[2rem] border border-neutral-200 bg-white">
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
        </section>

        <section className="py-20 sm:py-24 lg:py-28">
          <Container>
            <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
              <div>
                <p className="text-[11px] uppercase tracking-[0.18em] text-neutral-500">
                  {content.video.eyebrow}
                </p>

                <h2 className="mt-3 max-w-[14ch] text-3xl font-semibold leading-[1] tracking-[-0.04em] sm:text-4xl lg:text-5xl">
                  {content.video.heading}
                </h2>
              </div>

              <div>
                <p className="max-w-[64ch] text-[16px] leading-7 text-neutral-600">
                  {content.video.body}
                </p>

                <div className="mt-8 overflow-hidden rounded-[2rem] border border-neutral-200 bg-black">
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
                  <Link
                    href={videoHref}
                    className="inline-flex items-center rounded-full bg-neutral-950 px-6 py-3 text-sm font-medium text-white transition hover:bg-neutral-800"
                  >
                    {content.video.ctaLabel}
                  </Link>

                  <p className="text-sm leading-6 text-neutral-500">
                    {content.video.aside}
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className="surface-muted py-14 sm:py-24 lg:py-28">
          <Container>
            <div className="max-w-[620px]">
              <p className="text-[11px] uppercase tracking-[0.18em] text-neutral-500">
                {content.approach.eyebrow}
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.035em] sm:text-4xl lg:text-5xl">
                {content.approach.heading}
              </h2>
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
        </section>

        {content.cta.image ? (
          <section
            id={content.cta.id}
            className="relative overflow-hidden bg-[var(--color-dark-band)] py-20 sm:py-24 lg:py-28"
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

                  <h2 className="mt-3 max-w-[13ch] text-3xl font-semibold leading-[0.98] tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl">
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
          </section>
        ) : (
          <section
            id={content.cta.id}
            className="border-t border-neutral-200/60 bg-white py-20 sm:py-24 lg:py-28"
          >
            <Container>
              <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
                <div className="max-w-[620px]">
                  <p className="text-[11px] uppercase tracking-[0.16em] text-neutral-500">
                    {content.cta.eyebrow}
                  </p>

                  <h2 className="mt-3 max-w-[13ch] text-3xl font-semibold leading-[0.98] tracking-[-0.04em] text-neutral-950 sm:text-4xl lg:text-5xl">
                    {content.cta.heading}
                  </h2>
                </div>

                <div className="max-w-[680px]">
                  <p className="text-[15px] leading-7 text-neutral-600 sm:text-[16px]">
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
          </section>
        )}
      </main>

      <Footer locale={locale} />
    </>
  );
}
