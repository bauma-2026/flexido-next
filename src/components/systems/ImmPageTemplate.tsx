import Image from "next/image";
import Link from "next/link";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import { flexidoSystems } from "@/data/flexido-systems";
import type { Locale } from "@/i18n/config";
import { getPath } from "@/i18n/routes";
import { cn } from "@/lib/cn";
import type { SystemPageContent } from "@/content/systems/types";
import { TECHNICAL_LABELS } from "@/content/systems/technicalLabels";

/**
 * FLEX 7 IMM Slim-only layout. Kept separate from `SystemPageTemplate` (shared
 * with CNC/FLEX 25-50/TMX) because the insert-preparation section needs a
 * bespoke evidence-led process story (feeding → preparation/vision →
 * robotic handling) instead of the generic 4-up thumbnail option grid, and
 * the lower explanatory/value area needed consolidating. Product identity
 * now separates from technical data (own band, same grammar as TMX), and
 * Applications/capabilities use the same closed-matrix primitives validated
 * on FLEX 25-50 and TMX. Consumes the same `SystemPageContent` data as
 * before.
 */

/**
 * Technical-data band eyebrow — mirrors TMX's local-only label (no existing
 * equivalent lives in `content/systems` or `technicalLabels.ts`, both shared
 * with CNC/FLEX 25-50, which still keep their spec table inside the
 * product-identity section rather than a standalone band).
 */
const TECHNICAL_DATA_EYEBROW: Record<Locale, string> = {
  sl: "Tehnični podatki",
  en: "Technical data",
  de: "Technische Daten",
};

export default function ImmPageTemplate({ locale, content }: { locale: Locale; content: SystemPageContent }) {
  const system = flexidoSystems.find((entry) => entry.slug === content.product.systemSlug);
  const hubHref = getPath("standardCells", locale) ?? "/";
  const labels = TECHNICAL_LABELS[locale];

  const [applicationsGrid, moreThanRemovalGrid] = content.itemGrids ?? [];
  const insertGrid = content.optionGrids?.[0];

  return (
    <>
      <Header sticky locale={locale} routeKey={content.routeKey} parentKey="standardCells" />

      <main className="overflow-x-hidden bg-white text-neutral-950">
        {/* Hero — unchanged */}
        <section className="relative overflow-hidden bg-neutral-950 text-white">
          {content.hero.media.kind === "video" ? (
            <video autoPlay muted loop playsInline preload="metadata" className="absolute inset-0 h-full w-full object-cover opacity-45">
              <source src={content.hero.media.src} type="video/mp4" />
            </video>
          ) : (
            <div className="absolute inset-0">
              <Image src={content.hero.media.src} alt={content.hero.media.alt} fill priority sizes="100vw" className="object-cover object-center opacity-55" />
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />

          <Container className="relative z-10 flex min-h-[520px] items-end pb-16 pt-32 sm:min-h-[620px] lg:pb-20">
            <div className="max-w-[720px]">
              {content.backLabel ? (
                <Link href={hubHref} className="mb-5 inline-flex text-[13px] text-white/55 transition hover:text-white">
                  {content.backLabel}
                </Link>
              ) : null}
              <p className="text-[11px] uppercase tracking-[0.18em] text-white/55">{content.hero.eyebrow}</p>
              <h1 className="mt-5 text-[48px] font-semibold leading-[0.95] tracking-[-0.055em] sm:text-[72px]">{content.hero.heading}</h1>
              <p className="mt-6 max-w-[560px] text-[17px] leading-8 text-white/70">{content.hero.subhead}</p>
            </div>
          </Container>
        </section>

        {/* Intro — why IMM Slim over a linear manipulator (unchanged) */}
        <Section>
          <Container>
            <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
              <div>
                <p className="text-[11px] uppercase tracking-[0.18em] text-neutral-400">{content.intro.eyebrow}</p>
                <h2 className="mt-4 max-w-[520px] text-[34px] font-semibold leading-tight tracking-[-0.04em] text-neutral-950 sm:text-[44px]">
                  {content.intro.heading}
                </h2>
                <div className="mt-6 max-w-[58ch]">
                  {content.intro.paragraphs.map((p, i) => (
                    <p
                      key={i}
                      className={
                        i === 0
                          ? "text-[17px] font-medium leading-8 text-neutral-800"
                          : cn("text-[16px] leading-8 text-neutral-600", i === 1 ? "mt-4" : "mt-2")
                      }
                    >
                      {p}
                    </p>
                  ))}
                </div>
              </div>
              <div className="relative aspect-[3/2] overflow-hidden rounded-[28px] bg-neutral-100">
                <Image src={content.intro.image.src} alt={content.intro.image.alt} fill sizes="(min-width: 1024px) 42vw, 100vw" className="object-cover" />
              </div>
            </div>
          </Container>
        </Section>

        {/* FLEX 7 IMM Slim product identity — image + eyebrow/title/description + the quiet highlights meta layer only. Reordered so identity text renders before the image on mobile (same trick as TMX/FLEX): intro image → identity text → product image, never two images back to back. Technical data moved out into its own band directly below, so it no longer reads as leftover copy hanging under the image. */}
        {system ? (
          <Section className="border-y border-neutral-200 bg-white">
            <Container>
              <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
                <div className="order-2 lg:order-none relative aspect-[3/2] overflow-hidden rounded-[var(--radius-panel)] bg-neutral-100">
                  <Image src={system.image} alt={system.name} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
                </div>
                <div className="order-1 lg:order-none">
                  <p className="text-[11px] uppercase tracking-[0.18em] text-neutral-400">{content.product.eyebrow}</p>
                  <h2 className="mt-4 max-w-[520px] text-[34px] font-semibold leading-tight tracking-[-0.04em] text-neutral-950 sm:text-[44px]">
                    {system.name}
                  </h2>
                  <p className="mt-5 max-w-[58ch] text-[16px] leading-8 text-neutral-700">{content.product.description}</p>
                  {content.product.highlights?.length ? (
                    <ul className="mt-6 grid max-w-[58ch] grid-cols-2 gap-x-6 gap-y-3 text-[13px] font-medium leading-5 text-neutral-600">
                      {content.product.highlights.map((item) => (
                        <li key={item} className="flex items-center gap-1.5">
                          <span aria-hidden className="h-1 w-1 shrink-0 rounded-full bg-neutral-300" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </div>
            </Container>
          </Section>
        ) : null}

        {/* Technical data band — separate formal-specification layer directly after product identity, before Applications: own top rule, own compact (tight) padding, width chosen for IMM's actual 5-row values (interface's "E67, E78 / E73" is the longest) rather than reusing TMX's narrower measure verbatim. */}
        {system && content.product.showTechnical && system.technical ? (
          <Section variant="tight" className="border-t border-neutral-200 bg-white">
            <Container>
              <div className="max-w-[560px]">
                <p className="text-[11px] uppercase tracking-[0.18em] text-neutral-400">{TECHNICAL_DATA_EYEBROW[locale]}</p>
                <dl className="mt-6 border-t border-neutral-200">
                  {(Object.keys(system.technical) as (keyof typeof system.technical)[]).map((key) => {
                    const value = system.technical?.[key];
                    if (!value) return null;
                    return (
                      <div
                        key={key}
                        className="flex flex-col gap-1 border-b border-neutral-200 py-4 last:border-b-0 sm:flex-row sm:items-baseline sm:gap-8 sm:py-5"
                      >
                        <dt className="shrink-0 text-[11px] font-medium uppercase tracking-[0.14em] text-neutral-400 sm:w-[128px]">
                          {labels[key]}
                        </dt>
                        <dd className="text-[18px] font-medium leading-6 text-neutral-900">{value}</dd>
                      </div>
                    );
                  })}
                </dl>
              </div>
            </Container>
          </Section>
        ) : null}

        {/* Documented applications — peer use-case set, not a sequence: closed matrix (outer border, explicit dividers) matching FLEX/TMX Applications grammar, no numbering. Explicit border classes instead of `divide-x` — that utility has been unreliable in this project (computing to 0px) — full container width like FLEX/TMX so the four peer items get the same room instead of being capped under the heading's measure. */}
        {applicationsGrid ? (
          <Section className="surface-muted">
            <Container>
              <div className="max-w-[760px]">
                <p className="text-[11px] uppercase tracking-[0.18em] text-neutral-400">{applicationsGrid.eyebrow}</p>
                <h2 className="mt-4 text-[32px] font-semibold leading-tight tracking-[-0.04em] text-neutral-950 sm:text-[44px]">
                  {applicationsGrid.heading}
                </h2>
              </div>
              <div className="mt-8 grid border border-neutral-200 sm:grid-cols-4">
                {applicationsGrid.items.map((item) => (
                  <div
                    key={item}
                    className="border-b border-neutral-200 px-6 py-6 last:border-b-0 sm:border-b-0 sm:border-l sm:border-neutral-200 sm:px-8 sm:py-7 sm:first:border-l-0"
                  >
                    <h3 className="text-[16px] font-normal leading-6 text-neutral-700">{item}</h3>
                  </div>
                ))}
              </div>
            </Container>
          </Section>
        ) : null}

        {/* More than part removal — technical-capability inventory, not a sequence and not a second Applications: closed compact matrix (same family as TMX's Advantages), higher density and lower weight than Applications above so the two read as related, not identical. 6 items divide evenly into 2 columns × 3 rows, no orphan row. */}
        {moreThanRemovalGrid ? (() => {
          const totalRows = Math.ceil(moreThanRemovalGrid.items.length / 2);
          return (
            <Section className="bg-white">
              <Container>
                <div className="max-w-[760px]">
                  <p className="text-[11px] uppercase tracking-[0.18em] text-neutral-400">{moreThanRemovalGrid.eyebrow}</p>
                  <h2 className="mt-4 text-[32px] font-semibold leading-tight tracking-[-0.04em] text-neutral-950 sm:text-[44px]">
                    {moreThanRemovalGrid.heading}
                  </h2>
                  <div className="mt-8 grid border border-neutral-200 sm:grid-cols-2">
                    {moreThanRemovalGrid.items.map((item, index) => {
                      const row = Math.floor(index / 2);
                      const isLeftColumn = index % 2 === 0;
                      const hasRowPartner = isLeftColumn && index + 1 < moreThanRemovalGrid.items.length;
                      return (
                        <div
                          key={item}
                          className={cn(
                            "px-5 py-3.5",
                            row < totalRows - 1 && "border-b border-neutral-200",
                            hasRowPartner && "sm:border-r sm:border-neutral-200"
                          )}
                        >
                          <p className="text-[15px] font-normal leading-6 text-neutral-800">{item}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </Container>
            </Section>
          );
        })() : null}

        {/* Insert preparation and feeding — evidence-led process story instead of a 4-up thumbnail gallery */}
        {insertGrid ? (
          <Section className="bg-white">
            <Container>
              <div className="max-w-[760px]">
                <p className="text-[11px] uppercase tracking-[0.18em] text-neutral-400">{insertGrid.eyebrow}</p>
                <h2 className="mt-4 text-[32px] font-semibold leading-tight tracking-[-0.04em] text-neutral-950 sm:text-[44px]">
                  {insertGrid.heading}
                </h2>
              </div>

              {/* Four documented options at equal peer weight — no primary/secondary hierarchy. Bowl feeder, prep table, SCARA and vision are documented, independently configurable options ("kadar je konfiguriran"), not a sequence — so no numbering. One row of 4 at desktop, same aspect-[4/3]/rounded-lg/borderless image family and same title/body scale for every item, in the order authored in content. */}
              {insertGrid?.items?.length ? (
                <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-6 lg:mt-10 lg:grid-cols-4 lg:gap-5">
                  {insertGrid.items.map((item) => (
                    <div key={item.image.src}>
                      <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-neutral-50">
                        <Image
                          src={item.image.src}
                          alt={item.image.alt}
                          fill
                          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 45vw, 92vw"
                          className="object-cover"
                        />
                      </div>
                      <h3 className="mt-2.5 text-[15px] font-semibold leading-snug tracking-[-0.02em] text-neutral-950">{item.title}</h3>
                      <p className="mt-1 max-w-[30ch] text-[13px] leading-5 text-neutral-600">{item.description}</p>
                    </div>
                  ))}
                </div>
              ) : null}
            </Container>
          </Section>
        ) : null}

        {/* Explanatory / value section — three distinct layers instead of one blended surface: split-statement (thesis left, rationale right, approved primitive already used on /proces) → technical panel (its own bordered object, not a narrative column) → benefits pairs (subordinate, hairline-separated). */}
        {content.detailPanel ? (
          <Section className="surface-muted">
            <Container>
              {content.detailPanel.eyebrow || content.detailPanel.heading ? (
                <div className="grid gap-8 lg:grid-cols-[0.7fr_1fr] lg:gap-12">
                  <div>
                    {content.detailPanel.eyebrow ? (
                      <p className="text-[11px] uppercase tracking-[0.18em] text-neutral-400">{content.detailPanel.eyebrow}</p>
                    ) : null}
                    {content.detailPanel.heading ? (
                      <h2 className="mt-3 text-[26px] font-semibold leading-[1.15] tracking-[-0.03em] text-neutral-950 sm:text-[32px]">
                        {content.detailPanel.heading}
                      </h2>
                    ) : null}
                  </div>
                  <div className="max-w-[560px] lg:border-l lg:border-neutral-200 lg:pl-10">
                    {content.detailPanel.paragraphs.map((p, i) => (
                      <p key={i} className={i === 0 ? "text-[16px] leading-8 text-neutral-800" : "mt-4 text-[15px] leading-7 text-neutral-600"}>
                        {p}
                      </p>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="max-w-[720px] space-y-6 text-[16px] leading-8 text-neutral-700">
                  {content.detailPanel.paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              )}

              {/* Technical panel — its own bordered object below the statement, not folded into the narrative columns. */}
              <div className="mt-10 max-w-[520px] rounded-[28px] border border-neutral-200 bg-neutral-50 p-7 lg:mt-12">
                <p className="text-[11px] uppercase tracking-[0.16em] text-neutral-400">{content.detailPanel.panelEyebrow}</p>
                <ul className="mt-5 space-y-3 text-[15px] leading-6 text-neutral-700">
                  {content.detailPanel.panelItems.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              {/* Benefits — subordinate supporting notes, unchanged weight/treatment from before this pass. */}
              {content.benefits ? (
                <div className="mt-12 grid gap-6 border-t border-neutral-200 pt-10 sm:grid-cols-2 lg:mt-16">
                  {content.benefits.items.map((item) => (
                    <div key={item.title}>
                      <h3 className="text-[15px] font-semibold tracking-[-0.01em] text-neutral-950">{item.title}</h3>
                      <p className="mt-1.5 max-w-[46ch] text-[14px] leading-6 text-neutral-600">{item.body}</p>
                    </div>
                  ))}
                </div>
              ) : null}
            </Container>
          </Section>
        ) : null}

        {/* Related solution / continuation — promoted from plain underlined links to the same navigation-card pattern used elsewhere (bordered/radius primary card; a tagged proof item renders as a subordinate text link below it, not a second card), so this reads as "where to go next" rather than more explanation. */}
        {content.relatedSolutions ? (() => {
          const { eyebrow, heading, linkLabel, items } = content.relatedSolutions;
          const hasProofItems = items.some((item) => item.tag);
          const primaryItems = hasProofItems ? items.filter((item) => !item.tag) : items;
          const proofItems = hasProofItems ? items.filter((item) => item.tag) : [];
          const singleColumn = hasProofItems && primaryItems.length === 1;

          return (
            <Section variant="tight" className="bg-white">
              <Container>
                <div className="max-w-[640px]">
                  <p className="text-[11px] uppercase tracking-[0.18em] text-neutral-400">{eyebrow}</p>
                  <h2 className="mt-4 text-[32px] font-semibold leading-tight tracking-[-0.04em] text-neutral-950 sm:text-[40px]">
                    {heading}
                  </h2>
                </div>
                <div className={cn("mt-8 grid gap-4", singleColumn ? undefined : "sm:grid-cols-2")}>
                  {primaryItems.map((item) => (
                    <Link
                      key={item.routeKey}
                      href={getPath(item.routeKey, locale) ?? "#"}
                      className={cn(
                        "group block rounded-[24px] border border-neutral-200 bg-white p-6 transition hover:border-neutral-300",
                        singleColumn ? "sm:max-w-[420px]" : undefined
                      )}
                    >
                      <h3 className="text-[20px] font-semibold tracking-[-0.03em] text-neutral-950">{item.title}</h3>
                      <p className="mt-3 text-[15px] leading-7 text-neutral-600">{item.body}</p>
                      <span className="mt-5 inline-flex items-center text-[14px] font-medium text-neutral-700 transition group-hover:text-neutral-950">
                        {item.linkLabel ?? linkLabel}
                        <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
                      </span>
                    </Link>
                  ))}
                </div>

                {proofItems.length ? (
                  <div className="mt-6 flex flex-col gap-3">
                    {proofItems.map((item) => (
                      <Link
                        key={item.routeKey}
                        href={getPath(item.routeKey, locale) ?? "#"}
                        className="group inline-flex items-center text-[14px] font-medium text-neutral-950"
                      >
                        {item.tag ? (
                          <span className="mr-3 text-[11px] uppercase tracking-[0.16em] text-neutral-400">{item.tag}</span>
                        ) : null}
                        <span className="underline decoration-neutral-300 underline-offset-4 group-hover:decoration-neutral-950">
                          {item.title} — {item.linkLabel ?? linkLabel}
                        </span>
                        <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
                      </Link>
                    ))}
                  </div>
                ) : null}
              </Container>
            </Section>
          );
        })() : null}

        {/* CTA — dark image-backed band, unchanged */}
        <Section id="kontakt" variant="large" className="relative overflow-hidden bg-[var(--color-dark-band)]">
          <div className="absolute inset-0 opacity-20">
            <img src={content.kontakt.imageSrc} alt="" className="h-full w-full object-cover object-center" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-dark-band)] via-[var(--color-dark-band)]/55 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

          <Container className="relative">
            <div className="max-w-[720px]">
              <p className="eyebrow-on-dark">{content.kontakt.eyebrow}</p>
              <h2 className="mt-4 max-w-[20ch] text-3xl font-semibold leading-[0.98] tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl">
                {content.kontakt.heading}
              </h2>
              <p className="mt-5 max-w-[58ch] text-[15px] leading-7 text-white/72 sm:text-[16px]">{content.kontakt.body}</p>
              <div className="mt-8">
                <a
                  href={`mailto:${content.kontakt.mailto}`}
                  className="inline-flex items-center rounded-full bg-white px-6 py-3 text-[14px] font-medium text-neutral-950 transition hover:bg-white/90"
                >
                  {content.kontakt.ctaLabel} <span className="ml-2">→</span>
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
