import Image from "next/image";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import type { Locale } from "@/i18n/config";
import type { CompanyVideoContent } from "@/content/company/types";
import { cn } from "@/lib/cn";
import SectionHeader from "@/components/ui/SectionHeader";

export default function VideoPageTemplate({
  locale,
  content,
}: {
  locale: Locale;
  content: CompanyVideoContent;
}) {
  return (
    <>
      <Header locale={locale} routeKey={content.routeKey} parentKey="aboutUs" />

      <main className="bg-white text-neutral-950">
        <section className="relative overflow-hidden text-white">
          <div className="absolute inset-0">
            <Image
              src="/images/flexido/legacy/home-slide-v2-2.jpg.jpeg"
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(14,165,233,0.22),transparent_28%)]" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/78 via-black/52 to-black/18" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/12 to-transparent" />

          <Container className="relative z-10 py-20 sm:py-24 lg:py-28">
            <div className="max-w-[760px]">
              <p className="eyebrow-on-dark">
                {content.hero.eyebrow}
              </p>

              <h1 className="text-display mt-4 max-w-[13ch]">
                {content.hero.heading}
              </h1>

              <p className="mt-6 max-w-[58ch] text-[16px] leading-7 text-white/75 sm:text-lg">
                {content.hero.subhead}
              </p>
            </div>
          </Container>
        </section>

        <Section className="bg-white">
          <Container>
            <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
              <div>
                <SectionHeader
                  eyebrow={content.intro.eyebrow}
                  title={content.intro.heading}
                />

                {content.intro.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="text-body mt-5 max-w-[46ch]">
                    {paragraph}
                  </p>
                ))}
              </div>

              <div>
                {content.player.bridgeLead ? (
                  <p className="max-w-[46ch] text-[16px] font-medium leading-7 text-neutral-800">
                    {content.player.bridgeLead}
                  </p>
                ) : null}

                {content.player.bridgeBody ? (
                  <p className="mt-2 max-w-[52ch] text-[15px] leading-6 text-neutral-600">
                    {content.player.bridgeBody}
                  </p>
                ) : null}

                <div
                  className={cn(
                    "overflow-hidden rounded-[var(--radius-panel)] border border-neutral-200 bg-black",
                    (content.player.bridgeLead || content.player.bridgeBody) && "mt-6"
                  )}
                >
                  <video
                    controls
                    playsInline
                    preload="metadata"
                    poster={content.player.poster}
                    className="aspect-video w-full bg-neutral-950 object-cover"
                  >
                    <source src={content.player.src} type="video/mp4" />
                    {content.player.fallback}
                  </video>
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-4">
                  <a
                    href={`mailto:${content.cta.mailto}`}
                    className="inline-flex items-center rounded-full bg-[#0089d6] px-6 py-3 text-[14px] font-medium text-white transition hover:bg-[#0078bd]"
                  >
                    {content.cta.label}
                  </a>

                  {content.cta.aside ? (
                    <p className="text-sm leading-6 text-neutral-500">{content.cta.aside}</p>
                  ) : null}
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
