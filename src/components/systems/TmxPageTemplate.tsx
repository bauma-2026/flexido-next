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
 * TMX-only layout. Kept separate from `SystemPageTemplate` (shared with
 * CNC/IMM/FLEX 25-50) so this visual-system transfer pass can't touch those
 * pages. Section-by-section, this now reuses the same `layoutRefresh` visual
 * grammar those three pages share (intro image pairing, product identity
 * spec table, peer-strip applications, technical-family image tiles) —
 * re-implemented locally with TMX's own content shape rather than by
 * threading TMX into the shared template's route-keyed branches.
 * "Kje TMX vstopi v širši proces" and the CTA are still ported verbatim.
 */

/**
 * Technical-data band eyebrow — no existing equivalent label lives in
 * `content/systems` or `technicalLabels.ts` (both are shared with CNC/IMM/
 * FLEX 25-50, which still keep their spec table inside the product-identity
 * section rather than a standalone band), so this is TMX-local rather than
 * added to either shared file.
 */
const TECHNICAL_DATA_EYEBROW: Record<Locale, string> = {
  sl: "Tehnični podatki",
  en: "Technical data",
  de: "Technische Daten",
};

export default function TmxPageTemplate({ locale, content }: { locale: Locale; content: SystemPageContent }) {
  const system = flexidoSystems.find((entry) => entry.slug === content.product.systemSlug);
  const hubHref = getPath("standardCells", locale) ?? "/";
  const labels = TECHNICAL_LABELS[locale];
  const gallery = content.gallery && system ? system.gallery : undefined;

  const [applicationsGrid, whyGrid] = content.itemGrids ?? [];

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

        {/* Intro — same text-left/image-right composition, column ratio, and paragraph rhythm as FLEX/CNC/IMM's layoutRefresh intro. Text stacks above the image on mobile, so the intro image is the first of the two product images, not a lead-in before any identity/context. */}
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
                <Image
                  src={content.intro.image.src}
                  alt={content.intro.image.alt}
                  fill
                  sizes="(min-width: 1024px) 42vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </Container>
        </Section>

        {/* Product identity — image column wider than text (1.05fr/0.95fr, mirrored from the intro's 0.95fr/1.05fr) and reordered so identity text renders before the image on mobile: intro image → identity text → product image, never two images back to back. Technical data is its own band directly below (not nested here) so it reads as a formal specification, not leftover copy attached to the image column. */}
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
                </div>
              </div>
            </Container>
          </Section>
        ) : null}

        {/* Technical data band — own formal-specification layer, not media-column leftovers: separate Section (tight padding, own top rule) directly after product identity, before Applications. Width capped at 520px — the same measure already proven to fit every TMX value on one line without spanning uselessly wide. */}
        {system && content.product.showTechnical && system.technical ? (
          <Section variant="tight" className="border-t border-neutral-200 bg-white">
            <Container>
              <div className="max-w-[520px]">
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

        {/* Applications — FLEX's peer-strip grammar: a closed ruled box (outer border, internal dividers), calm/normal-weight titles, no numbering, full container width so the three peer items get the same room FLEX's application matrix gets rather than being capped under the heading's measure. */}
        {applicationsGrid ? (
          <Section className="surface-muted">
            <Container>
              <div className="max-w-[760px]">
                <p className="text-[11px] uppercase tracking-[0.18em] text-neutral-400">{applicationsGrid.eyebrow}</p>
                <h2 className="mt-4 text-[32px] font-semibold leading-tight tracking-[-0.04em] text-neutral-950 sm:text-[44px]">
                  {applicationsGrid.heading}
                </h2>
              </div>
              <div className="mt-8 grid border border-neutral-200 sm:grid-cols-3">
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

        {/* Zakaj izbrati TMX — closed compact matrix: same family as Applications (outer border closing the group, no numbering, no icons) but higher density and lower weight so the two read as related, not identical. Applications = "where TMX is used" (3 peer items, roomier padding); Advantages = "what TMX contains" (7 items, denser padding, 2 columns). Border classes are computed per-cell from index/row/column instead of `divide-x`/`divide-y` — those utilities have been unreliable in this project (computing to 0px) — and verified as actual rendered border widths, not just applied classes. */}
        {whyGrid ? (() => {
          const totalRows = Math.ceil(whyGrid.items.length / 2);
          return (
            <Section className="bg-white">
              <Container>
                <div className="max-w-[760px]">
                  <p className="text-[11px] uppercase tracking-[0.18em] text-neutral-400">{whyGrid.eyebrow}</p>
                  <h2 className="mt-4 text-[32px] font-semibold leading-tight tracking-[-0.04em] text-neutral-950 sm:text-[44px]">{whyGrid.heading}</h2>
                  <div className="mt-8 grid border border-neutral-200 sm:grid-cols-2">
                    {whyGrid.items.map((item, index) => {
                      const row = Math.floor(index / 2);
                      const isLeftColumn = index % 2 === 0;
                      const hasRowPartner = isLeftColumn && index + 1 < whyGrid.items.length;
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

        {/* Prijemalo, vmesniki in varnost — compact technical image group, deliberately narrower than the product identity image above it: max-w-[880px] instead of the full container so three photographs read as subordinate documented evidence, not a hero/media showcase. Borderless rounded-lg chrome unchanged; object-cover stays correct since these are full studio photographs, not isolated exact-fit renders. */}
        {gallery && content.gallery ? (
          <Section className="surface-muted">
            <Container>
              <div className="max-w-[760px]">
                <p className="text-[11px] uppercase tracking-[0.18em] text-neutral-400">{content.gallery.eyebrow}</p>
                <h2 className="mt-4 text-[32px] font-semibold leading-tight tracking-[-0.04em] text-neutral-950 sm:text-[44px]">
                  {content.gallery.heading}
                </h2>
              </div>
              <div className="mt-8 grid max-w-[880px] gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {gallery.map((item, index) => (
                  <div key={item.src}>
                    <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                      <Image
                        src={item.src}
                        alt={content.gallery?.alts[index] ?? item.alt}
                        fill
                        sizes="(min-width: 1024px) 293px, (min-width: 640px) 50vw, 100vw"
                        className="object-cover"
                      />
                    </div>
                    <p className="mt-2.5 text-[14px] leading-6 text-neutral-600">{content.gallery?.alts[index] ?? item.alt}</p>
                  </div>
                ))}
              </div>
            </Container>
          </Section>
        ) : null}

        {/* Kje TMX vstopi v širši proces — untouched, ported verbatim */}
        {content.relatedSolutions ? (
          <Section>
            <Container>
              <div className="max-w-[720px]">
                <p className="text-[11px] uppercase tracking-[0.18em] text-neutral-400">{content.relatedSolutions.eyebrow}</p>
                <h2 className="mt-4 text-[32px] font-semibold leading-tight tracking-[-0.04em] text-neutral-950 sm:text-[44px]">
                  {content.relatedSolutions.heading}
                </h2>
              </div>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {content.relatedSolutions.items.map((item) => (
                  <Link
                    key={item.routeKey}
                    href={getPath(item.routeKey, locale) ?? "#"}
                    className="group block rounded-[24px] border border-neutral-200 bg-white p-6 transition hover:border-neutral-300"
                  >
                    <h3 className="text-[20px] font-semibold tracking-[-0.03em] text-neutral-950">{item.title}</h3>
                    <p className="mt-3 text-[15px] leading-7 text-neutral-600">{item.body}</p>
                    <span className="mt-5 inline-flex items-center text-[14px] font-medium text-neutral-700 transition group-hover:text-neutral-950">
                      {content.relatedSolutions!.linkLabel}
                      <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
                    </span>
                  </Link>
                ))}
              </div>
            </Container>
          </Section>
        ) : null}

        {/* CTA — dark image-backed band, matching Middleware/IMM/FLEX 25-50 */}
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
