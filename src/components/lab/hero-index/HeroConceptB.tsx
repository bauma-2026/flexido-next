import Link from "next/link";
import Container from "@/components/layout/Container";
import { cn } from "@/lib/cn";
import { HeroMedia, HeroStatement, HoverArrow } from "./HeroShell";
import type { OfferFamily } from "./offer";
import type { HomeHeroContent } from "@/content/home/types";

type Props = {
  hero: HomeHeroContent;
  families: OfferFamily[];
  processHref: string;
  contactHref: string;
  indexLabel: string;
};

type Group = { label?: string; items: OfferFamily[] };

function groupByTier(families: OfferFamily[]): Group[] {
  const order: OfferFamily["tier"][] = ["area", "wider", "quiet"];

  return order
    .map((tier) => {
      const items = families.filter((family) => family.tier === tier);
      return { label: items[0]?.groupLabel, items };
    })
    .filter((group) => group.items.length > 0);
}

/**
 * CONCEPT B — "Two-column register".
 * Right 5 of 12 (493px), two 230px columns split by a vertical hairline,
 * three labelled tiers, one-line descriptor per family. Heaviest right scrim
 * of the three because the field is widest over the bright part of the frame.
 */
export default function HeroConceptB({
  hero,
  families,
  processHref,
  contactHref,
  indexLabel,
}: Props) {
  const groups = groupByTier(families);

  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-black text-white">
      <HeroMedia horizontalScrim="bg-gradient-to-r from-black/80 via-black/40 to-black/62" />

      <div className="relative z-10">
        <Container>
          <div className="grid min-h-[720px] grid-cols-12 items-center gap-x-6 pb-24 pt-36">
            <div className="col-span-6">
              <HeroStatement
                content={hero}
                processHref={processHref}
                contactHref={contactHref}
                titleClassName="max-w-[12ch] text-[52px] leading-[0.97] tracking-[-0.035em]"
              />
            </div>

            <nav aria-label={indexLabel} className="col-span-5 col-start-8">
              {groups.map((group, groupIndex) => (
                <div
                  key={group.label ?? `tier-${groupIndex}`}
                  className={groupIndex === 0 ? undefined : "mt-6"}
                >
                  {group.label ? (
                    <p className="border-b border-white/10 pb-2 text-[10.5px] uppercase tracking-[0.18em] text-white/40">
                      {group.label}
                    </p>
                  ) : (
                    <div className="border-t border-white/10" />
                  )}

                  <div className="grid grid-cols-2">
                    {group.items.map((family, itemIndex) => {
                      const oddColumn = itemIndex % 2 === 1;
                      const solo = group.items.length === 1;

                      return (
                        <Link
                          key={family.href}
                          href={family.href}
                          className={cn(
                            "focus-ring group block py-3",
                            solo && "col-span-2",
                            !solo && !oddColumn && "pr-4",
                            !solo && oddColumn && "border-l border-white/10 pl-4",
                          )}
                        >
                          <span className="flex items-baseline gap-2">
                            <span className="text-[15px] font-medium leading-tight text-white/85 transition-colors duration-200 group-hover:text-white">
                              {family.title}
                            </span>
                            <HoverArrow className="text-[13px] text-white/70" />
                          </span>

                          <span className="mt-1 block truncate text-[12px] leading-5 text-white/50">
                            {family.desc}
                          </span>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              ))}
            </nav>
          </div>
        </Container>
      </div>
    </section>
  );
}
