import Image from "next/image";
import Link from "next/link";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import type { HomeHeroContent } from "@/content/home/types";
import type { Locale } from "@/i18n/config";
import { cn } from "@/lib/cn";

/** One resolved row of the desktop offer rail. */
export type HeroRailItem = {
  href: string;
  title: string;
};

const defaultContent: HomeHeroContent = {
  eyebrow: "Avtomatizacija proizvodnje",
  titleLines: ["Povežemo tok med stroji.", "Ne samo robot ob stroju."],
  titleMobile: "Povežemo tok med stroji.",
  subhead:
    "Izdelujemo standardne robotske celice in celice po naročilu — ter jih povežemo v stabilen tok med stroji, z manj čakanja med posameznimi fazami.",
  subheadMobile:
    "Ne samo robot ob stroju. Standardne in namenske robotske celice, povezane v stabilen tok — z manj čakanja med fazami.",
  slogan: "V Flexidu delamo avtomatizacijo enostavno.",
  ctaPrimary: "Poglejmo vaš proces",
  ctaSecondary: "Kako poteka projekt",
};

type Props = {
  content?: HomeHeroContent;
  processHref?: string;
  contactHref?: string;
  /** Desktop offer rail. Omit to render the hero without it. */
  railItems?: HeroRailItem[];
  railLabel?: string;
  locale?: Locale;
};

export default function Hero({
  content = defaultContent,
  processHref = "/proces",
  contactHref = "/kontakt",
  railItems,
  railLabel,
  locale = "sl",
}: Props) {
  const showRail = Boolean(railItems?.length && railLabel);

  /**
   * SL lifts the rail 12px off the section floor — its two-line H1 leaves
   * ~95px of air above the hairline. EN and DE run the H1 to four lines and
   * have only ~30px there, so they keep the lower, safer position.
   */
  const railFloor = locale === "sl" ? "pb-[68px]" : "pb-14";

  return (
    <section
      className={cn(
        "relative overflow-hidden border-b border-white/10 bg-black text-white",
        showRail && "lg:flex lg:min-h-[720px] lg:flex-col 2xl:min-h-[780px]",
      )}
    >
      {/* Mobile media — a still, not the clip. `hero-production.mp4` is a
          six-shot montage; at 390px `object-cover` shows ~34% of its frame, so
          each cut lands on a different, mostly unreadable fragment. A portrait
          render of a complete cell survives the narrow crop intact and holds a
          steady luminance under the copy. */}
      <Image
        src="/images/systems/raw/robotska-celica-za-nabrizgavanje.webp"
        alt=""
        aria-hidden="true"
        fill
        priority
        /* The element is display:none from sm up, but `priority` preloads
           unconditionally. The 1px branch makes the desktop preload resolve to
           the smallest srcset candidate instead of a full-width one. */
        sizes="(min-width: 640px) 1px, 100vw"
        className="origin-bottom scale-[1.08] object-cover object-[52%_50%] sm:hidden"
      />

      {/* Tablet/desktop media — unchanged clip. No poster: the old one was a
          white studio still of a different subject in a different aspect, so
          the hand-off to the footage read as a content swap. Fading up from
          the section's own black is the calmer start, and matches CatalogHero.
          `sm:block` hides the element on mobile but does not stop the fetch —
          `autoplay` overrides `preload`, so Chromium still issues one ranged
          request and aborts it early. Dropping that last request needs a
          client-side gate, which is deliberately out of this pass. */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute inset-0 hidden h-full w-full scale-105 object-cover object-[30%_center] opacity-80 sm:block"
      >
        <source src="/video/flexido/hero-production.mp4" type="video/mp4" />
      </video>

      {/* Mobile scrim — one bottom-weighted plate under the copy stack; the
          upper half of the render stays clean so the cell is still the image. */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/92 via-black/62 to-black/10 sm:hidden" />

      <div className="absolute inset-0 hidden bg-gradient-to-b from-black/60 via-black/35 to-black/65 sm:block" />
      <div className="absolute inset-0 hidden bg-gradient-to-r from-black/78 via-black/45 to-black/20 sm:block" />

      <div className={cn("relative z-10", showRail && "lg:flex lg:flex-1 lg:items-center")}>
        <Container>
          <div
            className={cn(
              "grid min-h-[540px] items-end pb-10 pt-10 sm:min-h-[660px] sm:pb-14 sm:pt-32",
              showRail
                ? "lg:min-h-0 lg:pb-6 lg:pt-16"
                : "lg:min-h-[720px] lg:items-center lg:pb-24 lg:pt-36",
            )}
          >
            <div className="max-w-[920px]">
              {/* Mobile runs claim → explanation → action; the category label
                  is a fifth thing to read before the claim, so it starts at sm. */}
              <p className="eyebrow-on-dark hidden sm:block">{content.eyebrow}</p>

              <h1 className="text-display max-w-[15ch] text-white sm:mt-4 sm:max-w-[20ch]">
                {/* One claim on mobile. From sm up both sentences flow inline
                    inside a 20ch measure with balanced wrapping: Slovenian still
                    breaks at the sentence boundary (two lines), German and
                    English settle on three even lines instead of a forced
                    four-line stack. No <br>, no per-language geometry. */}
                <span className="block text-balance sm:hidden">
                  {content.titleMobile ?? content.titleLines[0]}
                </span>
                <span className="hidden sm:inline">
                  {content.titleLines[0]} {content.titleLines[1]}
                </span>
              </h1>

              <p className="mt-4 max-w-[46ch] text-[16px] leading-6 text-white/75 sm:mt-5 sm:text-lg sm:leading-8 sm:text-white/80">
                <span className="sm:hidden">{content.subheadMobile ?? content.subhead}</span>
                <span className="hidden sm:inline">{content.subhead}</span>
              </p>

              <div className="mt-6 sm:mt-7">
                {/* Below lg the hero ends on one next step: the compact block
                    carries the primary CTA only. `ctaSecondary` returns with the
                    lg CTA row below, which has the width to hold both. */}
                <div className="lg:hidden">
                  {/* Full-bleed white outranked the H1 on a 390px dark hero.
                      Inset on mobile, unchanged from sm up. */}
                  <Button
                    href={contactHref}
                    variant="light"
                    className="h-12 w-full max-w-[300px] sm:max-w-[420px]"
                  >
                    {content.ctaPrimary} →
                  </Button>
                </div>

                <div className="hidden lg:flex lg:gap-3">
                  <Button href={contactHref} variant="light">
                    {content.ctaPrimary} →
                  </Button>

                  <Link
                    href={processHref}
                    className="inline-flex items-center rounded-full border border-white/15 px-6 py-3 text-[14px] font-medium text-white/75 transition hover:border-white/30 hover:text-white focus:outline-none focus:ring-2 focus:ring-[var(--color-interactive)]/30 focus:ring-offset-2"
                  >
                    {content.ctaSecondary} →
                  </Link>
                </div>
              </div>

              <p className="mt-6 hidden text-[13px] text-white/45 sm:block">{content.slogan}</p>
            </div>
          </div>
        </Container>
      </div>

      {/* Offer rail — functional navigation, so it is all seven areas or none.
          The row is `whitespace-nowrap` at a fixed 16px minimum gap; its widest
          locale (DE) needs 1206.9px of content width, and the container only
          reaches that at `--layout-max-width` (1280 − 64px of `px-8` = 1216px).
          Below xl the row would overflow, so the rail starts at xl. */}
      {showRail && (
        <div className="relative z-10 hidden xl:block">
          {/* Local contrast support at the foot of the frame only, so the hero
              image above it is untouched. */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-0 h-[180px] bg-gradient-to-t from-black/45 via-black/20 to-transparent"
          />

          <Container className="relative">
            <nav
              aria-label={railLabel}
              className={cn(
                "flex items-baseline justify-between gap-x-4 whitespace-nowrap border-t border-white/10 pt-5 text-[11.5px] font-medium leading-[1.4] tracking-[0.01em] 2xl:pb-20",
                railFloor,
              )}
            >
              <span className="shrink-0 text-white/40">{railLabel}</span>

              {railItems?.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="focus-ring group shrink-0 text-white/[0.72] transition-colors duration-200 hover:text-white/[0.92]"
                >
                  <span className="mr-1.5 tabular-nums text-white/[0.52] transition-colors duration-200 group-hover:text-white/[0.72]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {item.title}
                </Link>
              ))}
            </nav>
          </Container>
        </div>
      )}
    </section>
  );
}
