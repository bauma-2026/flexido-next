import Link from "next/link";
import Container from "@/components/layout/Container";
import { cn } from "@/lib/cn";
import { HeroMedia, HeroStatement } from "./HeroShell";
import type { OfferFamily } from "./offer";
import type { HomeHeroContent } from "@/content/home/types";

type Props = {
  hero: HomeHeroContent;
  families: OfferFamily[];
  indexLabel: string;
  processHref: string;
  contactHref: string;
};

/**
 * CONCEPT A — "Contents page", refined to read as a secondary technical
 * legend rather than a second content column.
 *
 * The block is 300px wide and pinned to the container's right edge (cols
 * 9–12 with `ml-auto`), which leaves ~217px of empty hero between it and the
 * statement column. Rows stay left-aligned internally; only the block is
 * right-aligned. An 80px `translate-y` drops the index below the H1's
 * cap-height without re-centring the cell, so the legend starts level with
 * the second line of the statement rather than the first.
 *
 * Everything else is weight reduction: 14px titles at 78% instead of 16px at
 * 88%, 9.5px numerals at 22% instead of 12px at 35%, 8% hairlines instead of
 * 12%, and 39px rows instead of 51px. 78% is the floor that still clears
 * 4.5:1 against a pure-white video frame at the index's top row, where the
 * stacked scrims are thinnest.
 */
export default function HeroConceptA({
  hero,
  families,
  indexLabel,
  processHref,
  contactHref,
}: Props) {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-black text-white">
      <HeroMedia horizontalScrim="bg-gradient-to-r from-black/80 via-black/36 to-black/55" />

      <div className="relative z-10">
        <Container>
          <div className="grid min-h-[720px] grid-cols-12 items-center gap-x-6 pb-24 pt-36">
            <div className="col-span-7">
              <HeroStatement
                content={hero}
                processHref={processHref}
                contactHref={contactHref}
                titleClassName="max-w-[17ch] text-[56px] leading-[0.95] tracking-[-0.035em]"
              />
            </div>

            {/* Desktop only — mobile keeps the linear homepage structure. */}
            <nav
              aria-label={indexLabel}
              className="col-span-4 col-start-9 ml-auto hidden w-[300px] translate-y-20 lg:block"
            >
              <p className="text-[10.5px] uppercase tracking-[0.18em] text-white/[0.35]">
                {indexLabel}
              </p>

              <ul className="mt-3.5 border-t border-white/[0.08]">
                {families.map((family, index) => {
                  const quiet = family.tier === "quiet";

                  return (
                    <li
                      key={family.href}
                      className={
                        index === 4 || index === 6
                          ? "mt-2 border-t border-white/[0.08]"
                          : undefined
                      }
                    >
                      <Link
                        href={family.href}
                        className="focus-ring group flex items-baseline gap-3 border-b border-white/[0.08] py-2.5 transition-colors duration-200 hover:border-white/[0.16]"
                      >
                        <span
                          className={cn(
                            "shrink-0 text-[9.5px] tabular-nums tracking-[0.2em] transition-colors duration-200 group-hover:text-white/45",
                            quiet ? "text-white/[0.16]" : "text-white/[0.22]",
                          )}
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <span
                          className={cn(
                            "text-[14px] font-medium leading-[1.3] tracking-[-0.01em] transition-colors duration-200 group-hover:text-white/95",
                            quiet ? "text-white/[0.62]" : "text-white/[0.78]",
                          )}
                        >
                          {family.title}
                          <span
                            aria-hidden="true"
                            className="ml-1.5 inline-block text-[10px] opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:opacity-100"
                          >
                            →
                          </span>
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        </Container>
      </div>
    </section>
  );
}
