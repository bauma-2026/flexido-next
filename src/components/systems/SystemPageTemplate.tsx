import Image from "next/image";
import Link from "next/link";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import { flexidoSystems } from "@/data/flexido-systems";
import type { Locale } from "@/i18n/config";
import { getPath, type RouteKey } from "@/i18n/routes";
import { cn } from "@/lib/cn";
import type { SystemPageContent } from "@/content/systems/types";
import { TECHNICAL_LABELS } from "@/content/systems/technicalLabels";
import { SpecGrid, SpecItem } from "@/components/ui/SpecGrid";

/** Broader category pages — not Middleware (`standardCellsMiddleware`). */
const CATEGORY_PRODUCT_REVEAL_ROUTE_KEYS = new Set<RouteKey>(["standardCellsCnc", "standardCellsImm"]);

/** Pages whose "Applications" itemGrids entry lists peer application areas,
 * not sequential steps — the shared 01/02/03 index label reads as a
 * process/sequence connector there, so it's suppressed for this page only.
 * CNC/IMM keep the index label on their own itemGrids untouched. */
const PEER_ITEM_GRID_ROUTE_KEYS = new Set<RouteKey>(["standardCellsFlex2550"]);

/**
 * Product Media Frame source overrides, keyed by system slug — template-local,
 * does not touch `flexidoSystems.image` (shared with the homepage card and the
 * e-katalog hub, both out of scope for this pass).
 *
 * FLEX 25/50's `flexidoSystems.image` is a portrait studio shot (1122×1402),
 * cropped hard by this frame's landscape 3:2 `object-cover` box. The `-wide`
 * studio shot is the same machine, same asset family, already framed at
 * exactly 3:2 (1536×1024) with the full cell and clear margin on every edge
 * — so swapping to it here removes the crop with zero new asset work.
 */
const PRODUCT_STAGE_IMAGE_OVERRIDES: Partial<Record<string, string>> = {
  "flex-25-50": "/images/systems/raw/flex-25-50-studio-wide.webp",
};

/** Middleware's "product" is a system diagram, not a studio render — it needs
 * to stay fully visible (contain) on a dark stage instead of being cropped
 * to fill it like the other four systems' photography. */
const DIAGRAM_REVEAL_SLUGS = new Set(["middleware"]);

/**
 * itemGrids column count for the ruled index-label layout — picks whichever
 * of 2/3/4 divides the item count evenly, so CNC's 3-item list, IMM's 4-item
 * list, and IMM's 6-item list each land on a clean, orphan-free grid instead
 * of a hardcoded column count that only fits one of them.
 */
function pickItemGridColumns(count: number): 2 | 3 | 4 {
  if (count % 4 === 0) return 4;
  if (count % 3 === 0) return 3;
  if (count % 2 === 0) return 2;
  return 3;
}

/** Literal Tailwind class strings per column count — Tailwind's JIT scanner
 * needs the full class name present in source, so these can't be built with
 * template-string interpolation. */
const ITEM_GRID_SINGLE_ROW_COLS: Record<2 | 3 | 4, string> = {
  2: "sm:grid-cols-2 sm:divide-x sm:divide-neutral-200",
  3: "sm:grid-cols-3 sm:divide-x sm:divide-neutral-200",
  4: "sm:grid-cols-4 sm:divide-x sm:divide-neutral-200",
};
const ITEM_GRID_MULTI_ROW_COLS: Record<2 | 3 | 4, string> = {
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-3",
  4: "sm:grid-cols-4",
};

/**
 * optionGrids column count — image cards stay at 3 or 4 columns max (never
 * thinner) so thumbnails and captions stay legible; picks whichever divides
 * the group evenly. CNC/IMM's single 4-item group always resolves to 4
 * (unchanged); FLEX 25/50's 6- and 8-item groups get 3 and 4 respectively
 * instead of a hardcoded 4 that would orphan a partial row.
 */
function pickOptionGridColumns(count: number): 3 | 4 {
  if (count % 4 === 0) return 4;
  if (count % 3 === 0) return 3;
  return 4;
}
/** Divide-x only ever applies to a genuine single row — see the itemGrids
 * note above on why it breaks across wrapped rows. */
const OPTION_GRID_SINGLE_ROW_COLS: Record<2 | 3 | 4, string> = {
  2: "lg:grid-cols-2 lg:gap-x-0 lg:divide-x lg:divide-neutral-200",
  3: "lg:grid-cols-3 lg:gap-x-0 lg:divide-x lg:divide-neutral-200",
  4: "lg:grid-cols-4 lg:gap-x-0 lg:divide-x lg:divide-neutral-200",
};
const OPTION_GRID_MULTI_ROW_COLS: Record<2 | 3 | 4, string> = {
  2: "lg:grid-cols-2",
  3: "lg:grid-cols-3",
  4: "lg:grid-cols-4",
};

/**
 * Density-based group width — a 2-column group of larger tiles reads best
 * constrained; a 4-column group needs the full content measure to avoid
 * looking starved next to the section heading. `undefined` (dense) drops
 * the max-w cap entirely, so the group fills Container's own width instead
 * of a second, narrower ceiling. CNC's single group always resolves to
 * "default" and keeps its original, unrelated width untouched.
 */
const OPTION_GROUP_WIDTH: Record<"default" | "featured" | "primary" | "dense", string | undefined> = {
  default: "max-w-[920px]",
  /**
   * 608px = 2 × 292px tile + 24px (gap-x-6) gutter — the same ~292px tile
   * width the previous 640px/56px-gutter combination produced, just with the
   * gutter tightened so the two columns sit closer together instead of the
   * tiles themselves shrinking.
   */
  featured: "max-w-[608px]",
  primary: "max-w-[900px]",
  dense: undefined,
};

export default function SystemPageTemplate({ locale, content }: { locale: Locale; content: SystemPageContent }) {
  const system = flexidoSystems.find((entry) => entry.slug === content.product.systemSlug);
  const hubHref = getPath("standardCells", locale) ?? "/";
  const labels = TECHNICAL_LABELS[locale];
  const gallery = content.gallery && system ? system.gallery : undefined;
  const isCategoryProductReveal =
    !content.product.showTechnical && CATEGORY_PRODUCT_REVEAL_ROUTE_KEYS.has(content.routeKey);

  return (
    <>
      <Header sticky locale={locale} routeKey={content.routeKey} parentKey="standardCells" />

      <main className="overflow-x-hidden bg-white text-neutral-950">
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

        <Section>
          <Container>
            <div
              className={cn(
                "grid gap-10",
                content.layoutRefresh ? "lg:grid-cols-[0.95fr_1.05fr] lg:items-center" : "lg:grid-cols-[0.9fr_1.1fr]"
              )}
            >
              <div>
                <p className="text-[11px] uppercase tracking-[0.18em] text-neutral-400">{content.intro.eyebrow}</p>
                <h2 className="mt-4 max-w-[520px] text-[34px] font-semibold leading-tight tracking-[-0.04em] text-neutral-950 sm:text-[44px]">
                  {content.intro.heading}
                </h2>

                {content.layoutRefresh ? (
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
                ) : (
                  <div className="relative mt-8 aspect-[3/2] overflow-hidden rounded-[28px] bg-neutral-100">
                    <Image src={content.intro.image.src} alt={content.intro.image.alt} fill sizes="(min-width: 1024px) 42vw, 100vw" className="object-cover" />
                  </div>
                )}
              </div>

              {content.layoutRefresh ? (
                <div className="relative aspect-[3/2] overflow-hidden rounded-[28px] bg-neutral-100">
                  <Image src={content.intro.image.src} alt={content.intro.image.alt} fill sizes="(min-width: 1024px) 42vw, 100vw" className="object-cover" />
                </div>
              ) : (
                <div className="space-y-6 text-[16px] leading-8 text-neutral-700">
                  {content.intro.paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              )}
            </div>
          </Container>
        </Section>

        {system ? (() => {
          const productHeaderText = (
            <>
              <p className="text-[11px] uppercase tracking-[0.18em] text-neutral-400">{content.product.eyebrow}</p>
              <h2
                className={cn(
                  "mt-4 max-w-[520px] font-semibold leading-tight text-neutral-950",
                  isCategoryProductReveal
                    ? "text-[36px] tracking-[-0.045em] sm:text-[46px] lg:text-[48px]"
                    : "text-[34px] tracking-[-0.04em] sm:text-[44px]"
                )}
              >
                {system.name}
              </h2>
              <p className="mt-5 max-w-[58ch] text-[16px] leading-8 text-neutral-700">{content.product.description}</p>
            </>
          );

          /** FLEX 25/50 keeps only one formal structured-data block below the
           * image+identity row: the technical spec table. The four capability
           * items are secondary product signals, not hard data — they read as
           * a quiet meta layer directly under the description instead of a
           * second ruled block competing with the specs. CNC/IMM keep the
           * single image+text-column layout unchanged. */
          const isRuledSpecTable = PEER_ITEM_GRID_ROUTE_KEYS.has(content.routeKey);

          const highlightsBlock = content.product.highlights?.length ? (
            isRuledSpecTable ? (
              /* Quiet 2×2 micro-list, no rule/border/bullet — reads as a
               * supporting meta layer under the description, not a second
               * data structure standing beside the spec table. `mt-5` is
               * `lg:`-only: at mobile this block is its own reordered grid
               * row (see the product-block composition above), and the
               * grid's own `gap-10` already supplies that spacing — adding
               * `mt-5` there too would double it up. */
              <ul className="lg:mt-5 grid max-w-[58ch] grid-cols-2 gap-x-6 gap-y-2 text-[13px] leading-5 text-neutral-500">
                {content.product.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : (
              <ul
                className={cn(
                  "text-[13px] font-medium leading-5 text-neutral-600",
                  content.layoutRefresh
                    ? "grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-3"
                    : "mt-5 flex max-w-[58ch] flex-wrap gap-x-4 gap-y-1.5"
                )}
              >
                {content.product.highlights.map((item) => (
                  <li key={item} className="flex items-center gap-1.5">
                    <span aria-hidden className="h-1 w-1 shrink-0 rounded-full bg-neutral-300" />
                    {item}
                  </li>
                ))}
              </ul>
            )
          ) : null;

          const technicalFieldCount = system.technical
            ? Object.values(system.technical).filter(Boolean).length
            : 0;
          const specColumns = Math.min(Math.max(technicalFieldCount, 2), 5) as 2 | 3 | 4 | 5;

          /** FLEX 25/50's spec block is a genuine label | value table — four
           * horizontal rows, hairline between each, quiet uppercase label on
           * the left and the strong-weight value on the right — instead of a
           * multi-column ruled row. Lets the longest value (Dimenzije) sit on
           * one line instead of splitting across a narrow column. CNC/IMM's
           * SpecGrid tile layout is untouched. */
          const specGridBlock = content.product.showTechnical && system.technical ? (
            isRuledSpecTable ? (
              <dl className="border-t border-neutral-200">
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
            ) : (
              <SpecGrid
                columns={content.layoutRefresh ? specColumns : 3}
                className={content.layoutRefresh ? "border-t border-neutral-300 mt-6 pt-6" : "border-t border-neutral-200 mt-8 pt-6"}
              >
                {(Object.keys(system.technical) as (keyof typeof system.technical)[]).map((key) => {
                  const value = system.technical?.[key];
                  if (!value) return null;
                  return <SpecItem key={key} label={labels[key]} value={value} />;
                })}
              </SpecGrid>
            )
          ) : null;

          const productImage = (
            <div
              className={cn(
                "relative aspect-[3/2] overflow-hidden rounded-[var(--radius-panel)]",
                DIAGRAM_REVEAL_SLUGS.has(system.slug) ? "bg-neutral-950" : "bg-neutral-100"
              )}
            >
              <Image
                src={PRODUCT_STAGE_IMAGE_OVERRIDES[system.slug] ?? system.image}
                alt={system.name}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className={DIAGRAM_REVEAL_SLUGS.has(system.slug) ? "object-contain" : "object-cover"}
              />
            </div>
          );

          return (
            <Section
              className={cn(
                "border-y border-neutral-200",
                isCategoryProductReveal ? "surface-muted" : "bg-white"
              )}
            >
              <Container>
                {content.layoutRefresh ? (
                  <>
                    {isRuledSpecTable ? (
                      /* FLEX 25/50 mobile-only story order: title/description
                         before the product image, so it isn't preceded
                         directly by the intro image (two large images back
                         to back with no product context between them). The
                         text wrapper goes `contents` at mobile so its two
                         children (header text, capability summary) join the
                         grid as independent items that can each carry their
                         own `order` alongside the image; at `lg` the wrapper
                         is a normal block again and every `order` resets to
                         `none`, reproducing the exact approved desktop
                         composition (image column | text column) untouched. */
                      <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
                        <div className="order-2 lg:order-none">{productImage}</div>
                        <div className="contents lg:block">
                          <div className="order-1 lg:order-none">{productHeaderText}</div>
                          {highlightsBlock ? <div className="order-3 lg:order-none">{highlightsBlock}</div> : null}
                        </div>
                      </div>
                    ) : (
                      <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
                        {productImage}
                        <div>{productHeaderText}</div>
                      </div>
                    )}

                    {isRuledSpecTable
                      ? specGridBlock ? (
                          /* Constrained to the row's own technical measure —
                             128px label + gap + the longest value ("2500 ×
                             2360 mm + varnostna ograja", ~300px at this type
                             scale) — so the hairlines terminate near the data
                             instead of running the full product-content width. */
                          <div className="mt-9 max-w-[520px] sm:mt-11">{specGridBlock}</div>
                        ) : null
                      : highlightsBlock || specGridBlock ? (
                          <div className="mt-10 lg:mt-14">
                            {highlightsBlock}
                            {specGridBlock}
                          </div>
                        ) : null}
                  </>
                ) : (
                  <div
                    className={cn(
                      "grid gap-10 lg:items-start",
                      isCategoryProductReveal ? "lg:grid-cols-[0.85fr_1.15fr]" : "lg:grid-cols-[0.95fr_1.05fr]"
                    )}
                  >
                    <div>
                      {productHeaderText}
                      {highlightsBlock}
                      {specGridBlock}
                    </div>
                    {productImage}
                  </div>
                )}
              </Container>
            </Section>
          );
        })() : null}

        {/* Every itemGrids entry is the same role — an explanatory item
            list — so they all get the same quiet tone, not an alternating
            stripe keyed to array position. */}
        {content.itemGrids?.map((grid) => {
          const cols = pickItemGridColumns(grid.items.length);
          const singleRow = grid.items.length === cols;
          /** FLEX 25/50's "Applications" entry lists four peer domains, not
           * sequential steps or mini-sections — beyond dropping the 01/02/03
           * index label, its titles also drop to a lighter weight/size and a
           * tighter row so the strip reads as one quiet horizontal plane
           * instead of four bold h2-adjacent headings. CNC/IMM's itemGrids
           * keep their original title treatment untouched. */
          const isPeerStrip = PEER_ITEM_GRID_ROUTE_KEYS.has(content.routeKey);
          const showIndexLabel = !isPeerStrip;
          const itemTitleClass = isPeerStrip
            ? "text-[16px] font-normal leading-6 text-neutral-700"
            : "text-xl font-semibold tracking-[-0.02em] text-neutral-950";

          /** FLEX 25/50's "Applications" row is a closed 2×2 ruled matrix —
           * an outer hairline border plus the internal vertical/horizontal
           * dividers — so the four peer items read as one complete system
           * instead of an open-edged fragment of a larger grid. No card
           * fill/radius/shadow. CNC/IMM's single/multi-row itemGrids are
           * untouched. */
          const itemRow = isPeerStrip
            ? (() => {
                const pairs: string[][] = [];
                for (let i = 0; i < grid.items.length; i += 2) pairs.push(grid.items.slice(i, i + 2));
                return (
                  <div className="mt-8 border border-neutral-200">
                    {pairs.map((pair, rowIndex) => (
                      <div
                        key={rowIndex}
                        className={cn(
                          "grid items-start sm:grid-cols-2",
                          rowIndex > 0 ? "border-t border-neutral-200" : undefined
                        )}
                      >
                        {pair.map((item) => (
                          <div
                            key={item}
                            className="border-b border-neutral-200 px-6 py-6 last:border-b-0 sm:border-b-0 sm:border-l sm:border-neutral-200 sm:px-8 sm:py-7 sm:first:border-l-0"
                          >
                            <h3 className={itemTitleClass}>{item}</h3>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                );
              })()
            : content.layoutRefresh ? (
              singleRow ? (
                <div className={cn("mt-8 grid border-t border-neutral-200", ITEM_GRID_SINGLE_ROW_COLS[cols])}>
                  {grid.items.map((item, index) => (
                    <div
                      key={item}
                      className="border-b border-neutral-200 py-8 last:border-b-0 sm:border-b-0 sm:px-8 sm:py-10 sm:first:pl-0 sm:last:pr-0"
                    >
                      {showIndexLabel ? <p className="index-label">{String(index + 1).padStart(2, "0")}</p> : null}
                      <h3 className={cn(itemTitleClass, showIndexLabel ? "mt-3" : undefined)}>{item}</h3>
                    </div>
                  ))}
                </div>
              ) : (
                <div className={cn("mt-8 grid gap-x-8 gap-y-8 border-t border-neutral-200 pt-8", ITEM_GRID_MULTI_ROW_COLS[cols])}>
                  {grid.items.map((item, index) => (
                    <div key={item}>
                      {showIndexLabel ? <p className="index-label">{String(index + 1).padStart(2, "0")}</p> : null}
                      <h3 className={cn(itemTitleClass, showIndexLabel ? "mt-3" : undefined)}>{item}</h3>
                    </div>
                  ))}
                </div>
              )
            ) : (
              <ul className="mt-8 grid gap-px overflow-hidden border border-neutral-200 bg-neutral-200 sm:grid-cols-2">
                {grid.items.map((item) => (
                  <li key={item} className="bg-white p-5 sm:p-6 text-[15px] leading-6 text-neutral-700">
                    {item}
                  </li>
                ))}
              </ul>
            );

          return (
            <Section key={grid.heading} className="surface-muted">
              <Container>
                <div className="max-w-[760px]">
                  <p className="text-[11px] uppercase tracking-[0.18em] text-neutral-400">{grid.eyebrow}</p>
                  <h2 className="mt-4 text-[32px] font-semibold leading-tight tracking-[-0.04em] text-neutral-950 sm:text-[44px]">{grid.heading}</h2>
                  {isPeerStrip ? null : itemRow}
                </div>
                {isPeerStrip ? itemRow : null}
              </Container>
            </Section>
          );
        })}

        {content.applicationSignals ? (
          <Section variant="tight" className="bg-white">
            <Container>
              <div className="max-w-[920px]">
                <p className="text-[11px] uppercase tracking-[0.18em] text-neutral-400">{content.applicationSignals.eyebrow}</p>
                <h2 className="mt-4 text-[28px] font-semibold leading-tight tracking-[-0.04em] text-neutral-950 sm:text-[36px]">
                  {content.applicationSignals.heading}
                </h2>
                <ul className="mt-6 grid grid-cols-3 gap-x-6 gap-y-8 border-t border-neutral-200 pt-8 sm:grid-cols-4 lg:grid-cols-6">
                  {content.applicationSignals.items.map((item) => (
                    /* `mx-auto` previously centered each fixed 96/112px icon
                       inside its wider, evenly-divided grid column, so the
                       first icon's visible pixels sat ~11px right of the
                       heading's left edge above. Left-aligning icon + label
                       keeps the row's starting column flush with the H2/
                       eyebrow axis without touching column count, gap, or
                       icon size. */
                    <li key={item.label}>
                      <div className="relative h-24 w-24 sm:h-28 sm:w-28">
                        <Image
                          src={item.image.src}
                          alt={item.image.alt}
                          fill
                          sizes="112px"
                          className="object-contain"
                        />
                      </div>
                      <p className="mt-3 text-[12px] leading-snug text-neutral-500">{item.label}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </Container>
          </Section>
        ) : null}

        {content.optionGrids?.length ? (
          content.layoutRefresh ? (
            /* One shared section with each option group as an internal
               subgroup — CNC/IMM only ever have a single group, so this is
               a no-op for them; FLEX 25/50's three groups (Grippers /
               Infeed-outfeed / Preparation) no longer oscillate through
               three separate full-height, alternating-background sections
               for what is one topic (documented options).

               Those three groups don't carry equal weight in the source
               material — infeed/outfeed is the primary documented gallery,
               grippers is a short reference list, and preparation is the
               longest list — so a multi-group page (length > 1, i.e. only
               FLEX 25/50 today) gets an index-keyed size/density variant
               instead of identical treatment for every group. A single-group
               page (CNC/IMM) always resolves to "default" and renders
               exactly as before. */
            <Section className={content.benefits ? "bg-white" : "surface-muted"}>
              <Container>
                {content.optionGroupsHeading && content.optionGrids.length > 1 ? (
                  <h2 className="max-w-[760px] text-[32px] font-semibold leading-tight tracking-[-0.04em] text-neutral-950 sm:text-[44px]">
                    {content.optionGroupsHeading.heading}
                  </h2>
                ) : null}
                {content.optionGrids.map((grid, groupIndex) => {
                  const isMultiGroup = content.optionGrids!.length > 1;
                  const variant: "default" | "featured" | "primary" | "dense" =
                    isMultiGroup ? (["featured", "primary", "dense"] as const)[groupIndex] ?? "default" : "default";
                  /* "Prijemala"/Grippers is a short, equal-weight set of four
                     documented configurations — a dedicated 2x2 "featured"
                     composition gives each one materially more room than the
                     dense 4-across strip the other groups use, while keeping
                     all four directly comparable. Every other group keeps its
                     original column math untouched. */
                  const cols = variant === "featured" ? 2 : pickOptionGridColumns(grid.items.length);
                  const singleRow = grid.items.length === cols;
                  const colsClass = singleRow ? OPTION_GRID_SINGLE_ROW_COLS[cols] : OPTION_GRID_MULTI_ROW_COLS[cols];
                  const isSecondaryWeight = variant === "dense";
                  const tileVw = Math.round(88 / cols);
                  /** Subordinate to the "Dokumentirane konfiguracije" umbrella
                   * H2 above — an h3 at a visibly smaller scale than CNC/IMM's
                   * own (unchanged) single-group h2, so the three groups read
                   * as subgroups of one topic rather than sibling sections. */
                  const GroupHeading = isMultiGroup ? "h3" : "h2";

                  return (
                    <div
                      key={grid.heading}
                      className={cn(
                        OPTION_GROUP_WIDTH[variant],
                        groupIndex === 0
                          ? isMultiGroup
                            ? "mt-8 lg:mt-10"
                            : undefined
                          /* One uniform, tightened rhythm between all three
                             subgroups (was a variant-keyed mt-14/16 or
                             mt-10/12) — reads as one section with three
                             parts instead of three stacked mini-sections. */
                          : "mt-8 lg:mt-10"
                      )}
                    >
                      {/* The per-group eyebrow duplicated the now-shortened
                          category heading below it (e.g. "Prijemala" /
                          "Prijemala") — dropped for the multi-group case only;
                          CNC/IMM's single-group eyebrow is untouched. */}
                      {isMultiGroup ? null : (
                        <p className="text-[11px] uppercase tracking-[0.18em] text-neutral-400">{grid.eyebrow}</p>
                      )}
                      <GroupHeading
                        className={cn(
                          "font-semibold leading-tight tracking-[-0.04em] text-neutral-950",
                          isMultiGroup ? undefined : "mt-4",
                          isMultiGroup
                            ? isSecondaryWeight
                              ? "text-[19px] sm:text-[24px]"
                              : "text-[22px] sm:text-[28px]"
                            : isSecondaryWeight
                              ? "text-[26px] sm:text-[32px]"
                              : "text-[32px] sm:text-[40px]"
                        )}
                      >
                        {grid.heading}
                      </GroupHeading>
                      <ul
                        className={cn(
                          "grid grid-cols-2 gap-x-4 border-t border-neutral-200",
                          variant === "dense"
                            ? "mt-6 gap-y-5 pt-6"
                            : variant === "featured"
                              ? "mt-8 gap-y-8 pt-8 sm:mt-10 sm:gap-x-6 sm:gap-y-14 sm:pt-10 lg:gap-y-16 lg:pt-12"
                              : "mt-8 gap-y-6 pt-8",
                          colsClass
                        )}
                      >
                        {grid.items.map((item) => (
                          <li
                            key={`${item.title}-${item.image.src}`}
                            className={cn("flex flex-col", singleRow ? "lg:px-6 lg:first:pl-0 lg:last:pr-0" : undefined)}
                          >
                            <div
                              className={cn(
                                "relative aspect-[4/3] overflow-hidden rounded-lg",
                                isMultiGroup ? undefined : "border border-neutral-200 bg-neutral-50"
                              )}
                            >
                              <Image
                                src={item.image.src}
                                alt={item.image.alt}
                                fill
                                sizes={`(min-width: 1024px) ${tileVw}vw, (min-width: 640px) 45vw, 46vw`}
                                /* FLEX 25/50 only: these renders are exactly
                                   4:3, matching the aspect-[4/3] frame, so
                                   `object-contain` alone already fills it
                                   edge to edge with zero letterboxing. The
                                   `p-2` padding shrank the content box
                                   symmetrically, insetting the visible photo
                                   ~8px+ from the frame's true left edge — the
                                   same edge the title/body align to below —
                                   which read as the image sitting right of
                                   the text axis. CNC/IMM's tiles (whose
                                   source images aren't all exact 4:3) keep
                                   the padding unchanged. */
                                className={isMultiGroup ? "object-contain" : "object-contain p-2"}
                              />
                            </div>
                            <h3 className="mt-2.5 text-[15px] font-semibold leading-snug tracking-[-0.02em] text-neutral-950">
                              {item.title}
                            </h3>
                            <p className="mt-1 max-w-[24ch] text-[14px] leading-6 text-neutral-600">{item.description}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </Container>
            </Section>
          ) : (
            content.optionGrids.map((grid, index) => (
              <Section key={grid.heading} className={index % 2 === 0 ? "bg-white" : "surface-muted"}>
                <Container>
                  <div className="max-w-[920px]">
                    <p className="text-[11px] uppercase tracking-[0.18em] text-neutral-400">{grid.eyebrow}</p>
                    <h2 className="mt-4 text-[32px] font-semibold leading-tight tracking-[-0.04em] text-neutral-950 sm:text-[40px]">
                      {grid.heading}
                    </h2>
                    <ul className="mt-8 grid grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
                      {grid.items.map((item) => (
                        <li key={`${item.title}-${item.image.src}`}>
                          <div className="overflow-hidden rounded-lg border border-neutral-200 bg-neutral-50">
                            <div className="relative aspect-square">
                              <Image
                                src={item.image.src}
                                alt={item.image.alt}
                                fill
                                sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 46vw"
                                className="object-contain p-2"
                              />
                            </div>
                          </div>
                          <h3 className="mt-3 text-[15px] font-semibold leading-snug tracking-[-0.02em] text-neutral-950">
                            {item.title}
                          </h3>
                          <p className="mt-1 text-[14px] leading-6 text-neutral-600">{item.description}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Container>
              </Section>
            ))
          )
        ) : null}

        {content.detailPanel ? (
          <Section>
            <Container>
              <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
                <div className="space-y-6 text-[16px] leading-8 text-neutral-700">
                  {content.detailPanel.paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
                <div className="surface-muted rounded-[28px] border border-neutral-200 p-7">
                  <p className="text-[11px] uppercase tracking-[0.16em] text-neutral-400">{content.detailPanel.panelEyebrow}</p>
                  <ul className="mt-5 space-y-3 text-[15px] leading-6 text-neutral-700">
                    {content.detailPanel.panelItems.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </Container>
          </Section>
        ) : null}

        {content.benefits ? (
          <Section className="surface-muted">
            <Container>
              <div className="grid gap-8 md:grid-cols-2 md:gap-x-12">
                {content.benefits.items.map((item) => (
                  <div key={item.title}>
                    <h3 className="text-xl font-semibold tracking-[-0.02em] text-neutral-950">{item.title}</h3>
                    <p className="mt-3 text-[15px] leading-7 text-neutral-600">{item.body}</p>
                  </div>
                ))}
              </div>
            </Container>
          </Section>
        ) : null}

        {gallery && content.gallery ? (
          <Section>
            <Container>
              <div className="max-w-[760px]">
                <p className="text-[11px] uppercase tracking-[0.18em] text-neutral-400">{content.gallery.eyebrow}</p>
                <h2 className="mt-4 text-[32px] font-semibold leading-tight tracking-[-0.04em] text-neutral-950 sm:text-[44px]">
                  {content.gallery.heading}
                </h2>
              </div>
              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {gallery.map((item, index) => (
                  <div key={item.src}>
                    <div className="image-block relative aspect-[4/3]">
                      <Image
                        src={item.src}
                        alt={content.gallery?.alts[index] ?? item.alt}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover"
                      />
                    </div>
                    <p className="mt-3 text-[14px] leading-6 text-neutral-600">{content.gallery?.alts[index] ?? item.alt}</p>
                  </div>
                ))}
              </div>
            </Container>
          </Section>
        ) : null}

        {content.relatedSolutions ? (() => {
          const { eyebrow, heading, linkLabel, items } = content.relatedSolutions;
          /* A tagged item (e.g. "Referenca") is supporting proof, not an
             equal-weight related choice — it renders as a subordinate text
             link below the capability card(s) instead of a second card in
             the same grid. Pages with no tagged items (FLEX 25/50, TMX,
             Middleware) fall straight through to the original markup. */
          const hasProofItems = items.some((item) => item.tag);
          const primaryItems = hasProofItems ? items.filter((item) => !item.tag) : items;
          const proofItems = hasProofItems ? items.filter((item) => item.tag) : [];
          const singleColumn = hasProofItems && primaryItems.length === 1;

          return (
            <Section>
              <Container>
                <div className="max-w-[720px]">
                  <p className="text-[11px] uppercase tracking-[0.18em] text-neutral-400">{eyebrow}</p>
                  <h2 className="mt-4 text-[32px] font-semibold leading-tight tracking-[-0.04em] text-neutral-950 sm:text-[44px]">
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
                      {item.tag ? (
                        <p className="text-[11px] uppercase tracking-[0.16em] text-neutral-400">{item.tag}</p>
                      ) : null}
                      <h3 className={cn("text-[20px] font-semibold tracking-[-0.03em] text-neutral-950", item.tag ? "mt-2" : undefined)}>
                        {item.title}
                      </h3>
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

        {content.layoutRefresh ? (
          <Section id="kontakt" variant="large" className="relative overflow-hidden bg-[var(--color-dark-band)]">
            <div className="absolute inset-0 opacity-20">
              <img
                src={content.kontakt.imageSrc}
                alt=""
                className="h-full w-full object-cover object-center"
              />
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
        ) : (
          <section id="kontakt" className="border-t border-neutral-200/60 bg-white py-20 sm:py-24 lg:py-28">
            <Container>
              <div className="max-w-[720px]">
                <p className="text-[11px] uppercase tracking-[0.16em] text-neutral-500">{content.kontakt.eyebrow}</p>
                <h2 className="mt-3 max-w-[20ch] text-3xl font-semibold leading-[0.98] tracking-[-0.04em] text-neutral-950 sm:text-4xl lg:text-5xl">
                  {content.kontakt.heading}
                </h2>
                <p className="mt-5 max-w-[58ch] text-[15px] leading-7 text-neutral-600 sm:text-[16px]">{content.kontakt.body}</p>
                <div className="mt-8">
                  <a
                    href={`mailto:${content.kontakt.mailto}`}
                    className="inline-flex max-w-full items-center rounded-full bg-[var(--color-interactive)] px-6 py-3 text-[14px] font-medium text-white transition hover:bg-[var(--color-interactive-hover)]"
                  >
                    {content.kontakt.ctaLabel} <span className="ml-2">→</span>
                  </a>
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
