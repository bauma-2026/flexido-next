import Link from "next/link";
import Container from "@/components/layout/Container";
import { cn } from "@/lib/cn";
import { HeroMedia, HeroStatement } from "./HeroShell";
import type { OfferFamily } from "./offer";
import type { HomeHeroContent } from "@/content/home/types";
import type { Locale } from "@/i18n/config";

type Props = {
  hero: HomeHeroContent;
  families: OfferFamily[];
  indexLabel: string;
  processHref: string;
  contactHref: string;
  locale: Locale;
};

/**
 * CONCEPT C — "Baseline rail", single-run refinement.
 *
 * Fixed 720px hero (780px at 2xl): no svh, no height media queries, no
 * viewport arithmetic. 720 is production's current hero height, so the rail
 * is absorbed at laptop widths rather than making the hero taller; only large
 * monitors get the extra 60px.
 *
 * The rail is framed rather than anchored: ~90px of air above the hairline
 * (from the statement's flex centring) against 56px below it, so it reads as
 * the hero's last band instead of a strip welded to the section edge. Sizing
 * targets the tightest laptop case (1440x900, ~810px of real viewport after
 * browser chrome); taller screens simply reveal more of the next section,
 * which is the safe direction to be wrong in.
 *
 * The rail is now ONE continuous horizontal run: leading label, then seven
 * "NN Title" pairs at one even gap. No legend block, no 01—07 counter, no
 * tier grouping, no per-item ticks, no separators, no arrows. Every token in
 * the row shares one size, one weight and one tracking; only opacity
 * separates label from numeral from title, and only slightly.
 *
 * Spacing is `justify-between` over a `gap-x-4` floor rather than a fixed
 * gap. Items are content-sized and wildly unequal (33-206px), so only the
 * gaps are even — this is justified type, not tab cells. The floor exists
 * because German is the long case: its eight tokens measure 1097px against a
 * 1216px container, leaving exactly 17px per gap. A fixed 28px gap overflowed
 * DE by 75px; this fits every locale at full size instead of shrinking type
 * to suit the worst one.
 */
export default function HeroConceptC({
  hero,
  families,
  indexLabel,
  processHref,
  contactHref,
  locale,
}: Props) {
  /**
   * SL lifts the rail 12px off the section floor. Its two-line H1 leaves ~95px
   * of slack above the hairline, so the band can sit further inside the
   * composition. EN and DE run the H1 to four lines and have only ~30px there
   * — lifting them too would tighten an already tight gap, so they keep 56px.
   */
  const railFloor = locale === "sl" ? "pb-[68px]" : "pb-14";

  return (
    <section className="relative flex flex-col overflow-hidden border-b border-white/10 bg-black text-white lg:min-h-[720px] 2xl:min-h-[780px]">
      <HeroMedia horizontalScrim="bg-gradient-to-r from-black/78 via-black/45 to-black/20" />

      <div className="relative z-10 flex flex-1 items-center pb-6 pt-16">
        <Container>
          <div className="max-w-[920px]">
            <HeroStatement
              content={hero}
              processHref={processHref}
              contactHref={contactHref}
              titleClassName="max-w-[18ch] text-[68px] leading-[0.95] tracking-[-0.04em]"
            />
          </div>
        </Container>
      </div>

      {/* Rail — desktop only; mobile keeps the linear homepage structure. */}
      <div className="relative z-10 hidden lg:block">
        {/* Local contrast support: a 180px lift at the foot of the frame only,
            so the hero image above it is untouched. */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-[180px] bg-gradient-to-t from-black/45 via-black/20 to-transparent"
        />

        <Container className="relative">
          <nav
            aria-label={indexLabel}
            className={cn(
              "flex items-baseline justify-between gap-x-4 whitespace-nowrap border-t border-white/10 pt-5 text-[11.5px] font-medium leading-[1.4] tracking-[0.01em] 2xl:pb-20",
              railFloor,
            )}
          >
            <span className="shrink-0 text-white/40">{indexLabel}</span>

            {families.map((family, index) => (
              <Link
                key={family.href}
                href={family.href}
                className="focus-ring group shrink-0 text-white/[0.72] transition-colors duration-200 hover:text-white/[0.92]"
              >
                <span className="mr-1.5 tabular-nums text-white/[0.52] transition-colors duration-200 group-hover:text-white/[0.72]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {family.title}
              </Link>
            ))}
          </nav>
        </Container>
      </div>
    </section>
  );
}
