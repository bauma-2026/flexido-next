import Image from "next/image";
import Link from "next/link";

import Solutions from "@/components/blocks/home/Solutions";
import Container from "@/components/layout/Container";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Button from "@/components/ui/Button";
import type { Locale } from "@/i18n/config";
import { getPath } from "@/i18n/routes";
import type { HubContent } from "@/content/solutions/types";
import { ResolvedFamilyLink, isRouteLink, renderTemplate } from "./links";

export default function SolutionsHubTemplate({ locale, content }: { locale: Locale; content: HubContent }) {
  return (
    <>
      <Header locale={locale} routeKey="solutions" />

      <main className="overflow-x-hidden">
        <section className="relative overflow-hidden bg-[var(--color-dark-band)] pb-20 pt-32 text-white sm:pb-24 sm:pt-40">
          <div className="absolute inset-0">
            <img
              src="/images/standardne-celice/hero.webp"
              alt=""
              className="h-full w-full object-cover object-[70%_center] lg:object-[42%_center]"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-dark-band)] via-[var(--color-dark-band)]/75 to-[var(--color-dark-band)]/40" />

          <Container className="relative">
            <p className="eyebrow-on-dark mb-5">{content.hero.eyebrow}</p>
            <div className="max-w-3xl">
              <h1 className="text-4xl font-semibold leading-[0.95] tracking-[-0.04em] sm:text-5xl lg:text-6xl">{content.hero.heading}</h1>
              <p className="mt-6 max-w-2xl text-[17px] leading-8 text-white/72 sm:text-lg">{content.hero.subhead}</p>
              <Button href="#resitve-grid" variant="light" className="mt-9">
                {content.hero.ctaLabel} <span className="ml-2">→</span>
              </Button>
            </div>
          </Container>
        </section>

        <div id="resitve-grid">
          <Solutions
            compact
            title={content.gridHeading}
            desc={content.gridBody}
            eyebrow={content.hero.eyebrow}
            compactItems={content.gridItems.map((item) => ({
              href: getPath(item.routeKey, locale) ?? "#",
              title: item.title,
              desc: item.desc,
              label: item.label,
              icon: item.icon,
            }))}
          />
        </div>

        <section className="border-y border-neutral-200 bg-white py-16 sm:py-20">
          <Container>
            <div className="max-w-2xl">
              <p className="eyebrow">{content.widerApproach.eyebrow}</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-neutral-950 sm:text-4xl">{content.widerApproach.heading}</h2>
            </div>

            <div className="mt-10 grid border-t border-neutral-200 sm:grid-cols-2 sm:divide-x sm:divide-neutral-200">
              {content.widerApproach.paths.map((path) => (
                <Link
                  key={path.routeKey}
                  href={getPath(path.routeKey, locale) ?? "#"}
                  className="focus-ring group flex h-full flex-col border-b border-neutral-200 py-8 transition-colors duration-300 last:border-b-0 sm:border-b-0 sm:py-10 sm:first:pr-10 sm:last:pl-10 lg:first:pr-14 lg:last:pl-14"
                >
                  <h3 className="text-xl font-semibold tracking-[-0.02em] text-neutral-950 sm:text-[22px]">{path.title}</h3>
                  <p className="mt-3 max-w-[42ch] leading-7 text-neutral-600">{path.body}</p>
                  <span className="mt-auto inline-flex items-center pt-7 text-[14px] font-medium text-neutral-700 transition-colors duration-300 group-hover:text-neutral-950">
                    {content.widerApproach.linkLabel}
                    <span className="link-arrow">→</span>
                  </span>
                </Link>
              ))}
            </div>

            <p className="mt-10 max-w-2xl border-t border-neutral-200 pt-6 text-[13.5px] leading-6 text-neutral-500">
              {renderTemplate(
                content.widerApproach.footNote.template,
                [content.widerApproach.footNote.link],
                locale,
                "font-medium text-neutral-700 underline decoration-neutral-300 underline-offset-4 transition hover:decoration-neutral-950 hover:text-neutral-950"
              )}
            </p>
          </Container>
        </section>

        <section className="surface-soft py-16 sm:py-20">
          <Container>
            <div className="max-w-2xl">
              <p className="eyebrow">{content.proof.eyebrow}</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-neutral-950 sm:text-4xl">{content.proof.heading}</h2>
              <p className="mt-4 text-lg leading-8 text-neutral-600">{content.proof.body}</p>
            </div>

            <div className="mt-10 grid gap-9 lg:grid-cols-2 lg:gap-x-11 xl:gap-x-14">
              {content.proof.items.map((proof) => {
                const inner = (
                  <>
                    <div className="aspect-[16/10] overflow-hidden bg-neutral-100">
                      <Image
                        src={proof.image.src}
                        alt={proof.title}
                        width={proof.image.width}
                        height={proof.image.height}
                        className={`h-full w-full object-cover transition-transform duration-500 ${proof.image.objectPosition ?? "group-hover:scale-[1.02]"}`}
                      />
                    </div>
                    <div className="flex flex-1 flex-col border-t border-neutral-200 px-5 pb-5 pt-6 sm:px-6 sm:pb-6 sm:pt-7">
                      <p className="text-[11px] uppercase tracking-[0.16em] text-neutral-400">{proof.area}</p>
                      <h3 className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-neutral-950">{proof.title}</h3>
                      <p className="mt-3 leading-7 text-neutral-600">{proof.body}</p>
                      {proof.routeKey && getPath(proof.routeKey, locale) ? (
                        <span className="mt-auto inline-flex items-center pt-7 text-[14px] font-medium text-neutral-700 transition-colors duration-300 group-hover:text-neutral-950">
                          {content.proof.readMoreLabel}
                          <span className="link-arrow">→</span>
                        </span>
                      ) : null}
                    </div>
                  </>
                );

                return (
                  <article key={proof.title} className="flex h-full flex-col bg-white">
                    {proof.routeKey && getPath(proof.routeKey, locale) ? (
                      <Link href={getPath(proof.routeKey, locale)!} className="focus-ring group flex flex-1 flex-col">
                        {inner}
                      </Link>
                    ) : (
                      <div className="flex flex-1 flex-col">{inner}</div>
                    )}
                  </article>
                );
              })}
            </div>
          </Container>
        </section>

        <section className="border-t border-neutral-200 bg-white py-7 sm:py-9">
          <Container>
            <div className="grid items-end gap-4 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-10">
              <div className="max-w-xl">
                <p className="eyebrow">{content.unsure.eyebrow}</p>
                <h2 className="mt-2 text-xl font-semibold tracking-[-0.03em] text-neutral-950 sm:text-2xl">{content.unsure.heading}</h2>
                <p className="mt-1.5 text-[15px] leading-6 text-neutral-600">{content.unsure.body}</p>
              </div>
              {isRouteLink(content.unsure.cta) ? (
                <Link
                  href={getPath(content.unsure.cta.routeKey, locale) ?? "#"}
                  className="focus-ring group inline-flex items-center text-[14px] font-medium text-neutral-700 transition-colors duration-300 hover:text-neutral-950"
                >
                  {content.unsure.cta.label}
                  <span className="link-arrow">→</span>
                </Link>
              ) : (
                <ResolvedFamilyLink
                  link={content.unsure.cta}
                  locale={locale}
                  className="focus-ring inline-flex items-center text-[14px] font-medium text-neutral-700 transition-colors duration-300 hover:text-neutral-950"
                />
              )}
            </div>
          </Container>
        </section>

        <section className="relative overflow-hidden bg-[var(--color-dark-band)] py-20 sm:py-28">
          <div className="absolute inset-0 opacity-20">
            <img src="/images/flexido/legacy/s-3.jpg.jpeg" alt="" className="h-full w-full object-cover" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
          <Container className="relative">
            <div className="max-w-3xl">
              <p className="eyebrow-on-dark">{content.finalCta.eyebrow}</p>
              <h2 className="mt-4 text-4xl font-semibold leading-[0.95] tracking-[-0.04em] text-white sm:text-5xl">{content.finalCta.heading}</h2>
              <p className="mt-6 max-w-2xl text-[16px] leading-7 text-white/72 sm:text-lg">{content.finalCta.body}</p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href={`mailto:${content.finalCta.mailto}`}
                  className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-[14px] font-medium text-neutral-950 transition hover:bg-white/90"
                >
                  {content.finalCta.ctaLabel} <span className="ml-2">→</span>
                </a>
                <a
                  href={`mailto:${content.finalCta.mailto}`}
                  className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-[14px] font-medium text-white/75 transition hover:border-white/30 hover:text-white"
                >
                  {content.finalCta.mailto}
                </a>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <Footer locale={locale} />
    </>
  );
}
