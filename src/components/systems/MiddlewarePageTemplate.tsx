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

/**
 * Middleware-only layout. Kept separate from `SystemPageTemplate` because its
 * content flow (diagram paired with the architecture copy, then three
 * image-led evidence sections built from the newly normalized `public/raw`
 * photography) diverges from the generic system-page shape shared by
 * CNC/IMM/FLEX 25-50/TMX. Consumes the same `SystemPageContent` data as
 * before — only the arrangement changes, not the authored copy.
 */

const EVIDENCE_IMAGES = {
  transportSdv: "/raw/middleware-transport-unit-sdv-1.png",
  industrialRobot: "/raw/middleware-industrial-robot-1-1.png",
  bufferChute: "/raw/middleware-mechanical-buffer-chute-1.png",
  dropOff: "/raw/middleware-mechanical-drop-off-unit-1.png",
} as const;

/** Same clip used for the material-handling hero (`SolutionPageTemplate`) — reused here as looping evidence footage. */
const STORAGE_TRANSFER_VIDEO = "/video/flexido/hero-logistika.mp4";

/**
 * Shared technical-list grammar for every bullet list on this page (the
 * architecture section previously used native `list-disc` instead — its
 * `::marker` box doesn't reliably align with this grid-column layout, so it
 * now renders through the same component as the evidence-section lists).
 * Each `li` is its own 2-column grid: a fixed marker column and a text
 * column that wraps independently, so continuation lines stay under the
 * text, not the marker or a default browser indent. Items reliably follow
 * "Name — explanation" (verified across all SL/EN/DE items in scope, no
 * item has a second " — "), so the leading name gets a touch more weight;
 * any item without the delimiter falls back to plain text untouched.
 */
function ItemList({ items }: { items: string[] }) {
  return (
    <ul className="mt-6 grid gap-y-3">
      {items.map((item) => {
        const separatorIndex = item.indexOf(" — ");
        const name = separatorIndex === -1 ? null : item.slice(0, separatorIndex);
        const explanation = separatorIndex === -1 ? null : item.slice(separatorIndex + 3);
        return (
          <li key={item} className="grid grid-cols-[8px_1fr] items-start gap-x-3">
            <span aria-hidden className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-neutral-300" />
            <span className="max-w-[54ch] text-[15px] leading-6 text-neutral-700">
              {name !== null && explanation !== null ? (
                <>
                  <span className="font-medium text-neutral-900">{name}</span>
                  {" — "}
                  {explanation}
                </>
              ) : (
                item
              )}
            </span>
          </li>
        );
      })}
    </ul>
  );
}

export default function MiddlewarePageTemplate({ locale, content }: { locale: Locale; content: SystemPageContent }) {
  const system = flexidoSystems.find((entry) => entry.slug === content.product.systemSlug);
  const hubHref = getPath("standardCells", locale) ?? "/";

  const architectureImage = system?.image ?? (content.hero.media.kind === "image" ? content.hero.media.src : undefined);
  const galleryAlts = content.gallery?.alts ?? [];

  const [architectureGrid, transportGrid, storageGrid, mechanicalGrid] = content.itemGrids ?? [];

  const evidenceSections = [
    transportGrid
      ? {
          grid: transportGrid,
          media: { kind: "image" as const, src: EVIDENCE_IMAGES.transportSdv },
          alt: galleryAlts[3] ?? transportGrid.heading,
          imageFirst: true,
          bg: "surface-muted",
        }
      : null,
    storageGrid
      ? {
          grid: storageGrid,
          media: { kind: "video" as const, src: STORAGE_TRANSFER_VIDEO },
          alt: galleryAlts[0] ?? storageGrid.heading,
          imageFirst: false,
          bg: "bg-white",
        }
      : null,
  ].filter((entry): entry is NonNullable<typeof entry> => entry !== null);

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

        {/* Intro — image left, copy right */}
        <Section>
          <Container>
            <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
              <div className="relative aspect-[3/2] overflow-hidden rounded-[28px] bg-neutral-100">
                <Image src={content.intro.image.src} alt={content.intro.image.alt} fill sizes="(min-width: 1024px) 42vw, 100vw" className="object-cover" />
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-[0.18em] text-neutral-400">{content.intro.eyebrow}</p>
                <h2 className="mt-4 max-w-[520px] text-[34px] font-semibold leading-tight tracking-[-0.04em] text-neutral-950 sm:text-[44px]">
                  {content.intro.heading}
                </h2>
                <div className="mt-6 max-w-[58ch] space-y-6 text-[16px] leading-8 text-neutral-700">
                  {content.intro.paragraphs.map((p, i) => (
                    <p key={i} className={i === 0 ? "text-[17px] font-medium leading-8 text-neutral-800" : undefined}>
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* Architecture — diagram paired with the system-connection copy */}
        {architectureGrid ? (
          <Section className="border-y border-neutral-200 bg-white">
            <Container>
              <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-14">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius-panel)] bg-neutral-950 p-6 sm:p-8 lg:order-2">
                  {architectureImage ? (
                    <div className="relative h-full w-full">
                      <Image
                        src={architectureImage}
                        alt={content.hero.media.kind === "image" ? content.hero.media.alt : content.hero.heading}
                        fill
                        sizes="(min-width: 1024px) 50vw, 100vw"
                        className="object-contain"
                      />
                    </div>
                  ) : null}
                </div>
                <div className="lg:order-1">
                  <p className="text-[11px] uppercase tracking-[0.18em] text-neutral-400">{architectureGrid.eyebrow}</p>
                  <h2 className="mt-4 max-w-[520px] text-[34px] font-semibold leading-tight tracking-[-0.04em] text-neutral-950 sm:text-[44px]">
                    {architectureGrid.heading}
                  </h2>
                  <p className="mt-5 max-w-[58ch] text-[16px] leading-8 text-neutral-700">{content.product.description}</p>
                  <ItemList items={architectureGrid.items} />
                </div>
              </div>
            </Container>
          </Section>
        ) : null}

        {/* Evidence sections — real equipment photography (and, for storage/transfer, looping footage) paired with its documented class */}
        {evidenceSections.map(({ grid, media, alt, imageFirst, bg }) => (
          <Section key={grid.heading} className={bg}>
            <Container>
              <div className={cn("grid gap-10 lg:items-center", imageFirst ? "lg:grid-cols-[1.05fr_0.95fr]" : "lg:grid-cols-[0.95fr_1.05fr]")}>
                <div className={cn("relative aspect-[4/3] overflow-hidden rounded-[var(--radius-panel)] bg-neutral-100", imageFirst ? "lg:order-1" : "lg:order-2")}>
                  {media.kind === "video" ? (
                    <video autoPlay muted loop playsInline preload="metadata" aria-label={alt} className="absolute inset-0 h-full w-full object-cover">
                      <source src={media.src} type="video/mp4" />
                    </video>
                  ) : (
                    <Image src={media.src} alt={alt} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
                  )}
                </div>
                <div className={imageFirst ? "lg:order-2" : "lg:order-1"}>
                  <p className="text-[11px] uppercase tracking-[0.18em] text-neutral-400">{grid.eyebrow}</p>
                  <h2 className="mt-4 max-w-[520px] text-[32px] font-semibold leading-tight tracking-[-0.04em] text-neutral-950 sm:text-[40px]">
                    {grid.heading}
                  </h2>
                  <ItemList items={grid.items} />
                </div>
              </div>
            </Container>
          </Section>
        ))}

        {/* Mechanical units — paired 2-up image layout */}
        {mechanicalGrid ? (
          <Section variant="tight" className="surface-muted">
            <Container>
              <div className="max-w-[720px]">
                <p className="text-[11px] uppercase tracking-[0.18em] text-neutral-400">{mechanicalGrid.eyebrow}</p>
                <h2 className="mt-4 text-[32px] font-semibold leading-tight tracking-[-0.04em] text-neutral-950 sm:text-[40px]">
                  {mechanicalGrid.heading}
                </h2>
                {mechanicalGrid.items[0] ? (
                  <p className="mt-5 text-[16px] leading-8 text-neutral-700">{mechanicalGrid.items[0]}</p>
                ) : null}
              </div>
              <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-6">
                {[
                  { image: EVIDENCE_IMAGES.bufferChute, alt: galleryAlts[1], caption: mechanicalGrid.items[1] },
                  { image: EVIDENCE_IMAGES.dropOff, alt: galleryAlts[2], caption: mechanicalGrid.items[2] },
                ].map((item) => (
                  <div key={item.image}>
                    <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius-panel)] bg-white">
                      <Image src={item.image} alt={item.alt ?? mechanicalGrid.heading} fill sizes="46vw" className="object-cover" />
                    </div>
                    {item.caption ? <p className="mt-2 text-[13px] leading-5 text-neutral-600 sm:mt-3 sm:text-[14px] sm:leading-6">{item.caption}</p> : null}
                  </div>
                ))}
              </div>
            </Container>
          </Section>
        ) : null}

        {/* Synthesis — where the physical flow meets the related solution */}
        {content.relatedSolutions ? (
          <Section className="bg-white">
            <Container>
              <div className="max-w-[720px]">
                <p className="text-[11px] uppercase tracking-[0.18em] text-neutral-400">{content.relatedSolutions.eyebrow}</p>
                <h2 className="mt-4 text-[32px] font-semibold leading-tight tracking-[-0.04em] text-neutral-950 sm:text-[44px]">
                  {content.relatedSolutions.heading}
                </h2>
                {content.detailPanel ? (
                  <div className="mt-5 space-y-4 text-[16px] leading-8 text-neutral-700">
                    {content.detailPanel.paragraphs.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>
                ) : null}
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

        {/* CTA — dark image-backed band, matching CNC/IMM/FLEX 25-50 */}
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
