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
import type { SystemsHubCard, SystemsHubContent } from "@/content/systems/types";

/**
 * Hub-card-only image overrides, keyed by route — used where `system.image`
 * (shared with the detail page's product section, the homepage card, and
 * the e-katalog hub) isn't the right crop for this grid specifically:
 * - CNC / IMM: machine + cell context, matching their detail-page intros.
 * - FLEX 25/50: `system.image` is a tall portrait studio shot (0.8 aspect)
 *   that gets cropped into the light tower and base when forced into this
 *   grid's 4:3 card frame. This "wide" variant (1.5 aspect, same framing
 *   convention as the CNC/IMM shots above) shows the complete cell with
 *   headroom and footroom to spare, matching the other cards' optical
 *   weight instead of reading as a cropped detail shot.
 * Every other card falls back to its plain product studio shot. This is
 * the one deliberate content nuance; everything else about a card (padding,
 * image ratio/fit, heading size, eyebrow treatment) is identical across all
 * five so the grid reads as one calm set of options, not a two-tier layout.
 */
const HUB_CARD_IMAGE_OVERRIDES: Partial<Record<RouteKey, string>> = {
  standardCellsCnc: "/images/systems/raw/flexido-cnc-machine-studio.png",
  standardCellsImm: "/images/systems/raw/flexido-imm-machine-studio.png",
  standardCellsFlex2550: "/images/systems/raw/flex-25-50-studio-wide-v3.png",
};

function HubSystemCard({ card, locale, cardLinkLabel }: { card: SystemsHubCard; locale: Locale; cardLinkLabel: string }) {
  const system = flexidoSystems.find((entry) => entry.slug === card.systemSlug);
  const href = getPath(card.routeKey, locale) ?? "#";
  const imageSrc = HUB_CARD_IMAGE_OVERRIDES[card.routeKey] ?? system?.image;

  return (
    <Link
      href={href}
      className="group flex h-full flex-col overflow-hidden rounded-[var(--radius-panel)] border border-neutral-200 bg-white transition-colors duration-300 hover:border-neutral-400"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={card.title}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          />
        ) : null}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-[11px] uppercase tracking-[0.16em] text-neutral-400">{card.eyebrow}</p>
        <h3 className="text-card-title mt-2.5">{card.title}</h3>
        <p className="mt-2 text-[14px] leading-[22px] text-neutral-600">{card.desc}</p>
        <p className="mt-auto inline-flex items-center pt-4 text-[14px] font-medium text-neutral-500 transition group-hover:text-neutral-950">{cardLinkLabel}<span className="link-arrow">→</span></p>
      </div>
    </Link>
  );
}

export default function SystemsHubTemplate({ locale, content }: { locale: Locale; content: SystemsHubContent }) {
  return (
    <>
      <Header locale={locale} routeKey="standardCells" />

      <main className="overflow-x-hidden bg-white text-neutral-950">
        <section className="relative overflow-hidden bg-neutral-950 text-white">
          <div className="absolute inset-0">
            {content.hero.media.kind === "image" ? (
              <Image src={content.hero.media.src} alt={content.hero.media.alt} fill priority sizes="100vw" className="object-cover object-center opacity-55" />
            ) : null}
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/82 via-black/55 to-black/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/72 via-transparent to-black/15" />

          <Container className="relative z-10 flex min-h-[520px] items-end pb-16 pt-32 sm:min-h-[620px] lg:pb-20">
            <div className="max-w-[720px]">
              <p className="eyebrow-on-dark">{content.hero.eyebrow}</p>
              <h1 className="text-display mt-5 max-w-[18ch]">
                {content.hero.heading}
              </h1>
              <p className="mt-6 max-w-[560px] text-[17px] leading-8 text-white/70">{content.hero.subhead}</p>
            </div>
          </Container>
        </section>

        {/* Ponudba — split statement / rationale, the approved primitive from /proces: short thesis on a narrower left column, explanation on the right behind a vertical hairline (desktop only, no divider chrome on mobile). */}
        <Section>
          <Container>
            <div className="grid gap-8 lg:grid-cols-[0.7fr_1fr] lg:gap-12">
              <div>
                <p className="text-[11px] uppercase tracking-[0.18em] text-neutral-400">{content.intro.eyebrow}</p>
                <h2 className="mt-3 text-[30px] font-semibold leading-[1.1] tracking-[-0.04em] text-neutral-950 sm:text-[36px]">
                  {content.intro.heading}
                </h2>
              </div>
              <div className="max-w-[560px] lg:border-l lg:border-neutral-200 lg:pl-10">
                {content.intro.paragraphs.map((p, i) => (
                  <p key={i} className={i === 0 ? "text-[16px] leading-8 text-neutral-800" : "mt-4 text-[15px] leading-7 text-neutral-600"}>
                    {p}
                  </p>
                ))}
              </div>
            </div>
          </Container>
        </Section>

        {/* Vrste sistemov — heading and grid now share one tighter measure (mb-6/7 instead of mb-10) so the cards read as the heading's direct continuation, not a separately floating gallery. */}
        <Section className="surface-muted">
          <Container>
            <div className="mb-6 max-w-[620px] lg:mb-7">
              <p className="text-[11px] uppercase tracking-[0.18em] text-neutral-400">{content.cardsHeading.eyebrow}</p>
              <h2 className="mt-4 text-[34px] font-semibold tracking-[-0.04em] text-neutral-950 sm:text-[44px]">{content.cardsHeading.heading}</h2>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {content.cards.map((card) => (
                <HubSystemCard key={card.routeKey} card={card} locale={locale} cardLinkLabel={content.cardLinkLabel} />
              ))}
            </div>
          </Container>
        </Section>

        {content.modules ? (
          <Section className="border-t border-neutral-200 bg-white">
            <Container>
              <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start lg:gap-16">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.18em] text-neutral-400">{content.modules.eyebrow}</p>
                  <h2 className="mt-4 max-w-[15ch] text-[34px] font-semibold leading-tight tracking-[-0.04em] text-neutral-950 sm:text-[44px]">
                    {content.modules.heading}
                  </h2>
                  {content.modules.paragraphs?.map((p, i) => (
                    <p key={i} className="mt-5 max-w-[50ch] text-[16px] leading-7 text-neutral-600">
                      {p}
                    </p>
                  ))}
                </div>

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                  {content.modules.groups.map((group) => (
                    <div key={group.title}>
                      <h3 className="text-[13px] font-semibold tracking-[-0.01em] text-neutral-950">{group.title}</h3>
                      <div
                        className={cn(
                          "mt-3 grid border border-neutral-200",
                          columns === 2 && "sm:grid-cols-2"
                        )}
                      >
                        {group.items.map((item, index) => {
                          const row = Math.floor(index / columns);
                          const isLeft = columns === 1 || index % 2 === 0;
                          const hasPartner = isLeft && index + 1 < group.items.length;

                          return (
                            <div
                              key={item}
                              className={cn(
                                "px-5 py-3.5",
                                index < group.items.length - 1 && "border-b border-neutral-200 sm:border-b-0",
                                row < totalRows - 1 && "sm:border-b sm:border-neutral-200",
                                hasPartner && "sm:border-r sm:border-neutral-200"
                              )}
                            >
                              <p className="text-[15px] font-normal leading-6 text-neutral-800">{item}</p>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </Container>
          </Section>
        ) : null}

        {/* CTA — dark image-backed band, matching Middleware/IMM/TMX/CNC/FLEX 25-50 */}
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
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={`mailto:${content.kontakt.mailto}`}
                  className="inline-flex items-center rounded-full bg-white px-6 py-3 text-[14px] font-medium text-neutral-950 transition hover:bg-white/90"
                >
                  {content.kontakt.ctaLabel} <span className="ml-2">→</span>
                </a>

                {content.kontakt.secondaryCta ? (
                  <Link
                    href={getPath(content.kontakt.secondaryCta.routeKey, locale) ?? "#"}
                    className="inline-flex items-center rounded-full border border-white/20 px-6 py-3 text-[14px] font-medium text-white transition hover:bg-white/10"
                  >
                    {content.kontakt.secondaryCta.label}
                  </Link>
                ) : null}
              </div>
            </div>
          </Container>
        </Section>
      </main>

      <Footer locale={locale} />
    </>
  );
}
