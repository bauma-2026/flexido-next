import Image from "next/image";
import Link from "next/link";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import Button from "@/components/ui/Button";
import { flexidoSystems } from "@/data/flexido-systems";
import type { Locale } from "@/i18n/config";
import { getPath } from "@/i18n/routes";
import type { HomeProductProofContent } from "@/content/home/types";

const defaultContent: HomeProductProofContent = {
  eyebrow: "Sistemi",
  heading: "Sistemi, ki jih prilagodimo procesu.",
  body:
    "Standardne robotske celice so osnova za rešitve, ki jih prilagodimo proizvodnji, kosom, prostoru in obstoječi opremi.",
  viewAllLabel: "Poglej vse sisteme",
  viewAllRouteKey: "standardCells",
  viewSystemLabel: "Poglej sistem",
  systems: [
    {
      slug: "flex-7-cnc",
      category: "CNC avtomatizacija",
      shortDescription:
        "Kompaktna robotska celica za strego CNC strojev, nalaganje, odvzem in stabilen tok kosov.",
      routeKey: "standardCellsCnc",
    },
    {
      slug: "flex-7-imm",
      category: "Avtomatizacija brizganja plastike",
      shortDescription:
        "Kompaktna robotska celica za strego strojev za brizganje plastike, odvzem kosov, insert moulding in kontrolo.",
      routeKey: "standardCellsImm",
    },
  ],
};

type Props = {
  content?: HomeProductProofContent;
  locale?: Locale;
};

export default function ProductProof({
  content = defaultContent,
  locale = "sl",
}: Props) {
  const viewAllHref =
    getPath(content.viewAllRouteKey, locale) ?? getPath("standardCells", locale) ?? "#";

  const systems = content.systems
    .map((entry) => {
      const system = flexidoSystems.find((s) => s.slug === entry.slug);
      if (!system) return null;
      return {
        system,
        category: entry.category,
        shortDescription: entry.shortDescription,
        href: getPath(entry.routeKey, locale) ?? "#",
      };
    })
    .filter(Boolean) as Array<{
    system: (typeof flexidoSystems)[number];
    category: string;
    shortDescription: string;
    href: string;
  }>;

  return (
    <Section className="bg-white">
      <Container>
        <div>
          <p className="eyebrow">{content.eyebrow}</p>

          <h2 className="mt-3 max-w-[16ch] text-3xl font-semibold leading-[1] tracking-[-0.04em] sm:text-4xl lg:text-5xl">
            {content.heading}
          </h2>
        </div>

        <div className="mt-10 grid gap-10 border-t border-neutral-200 pt-12 sm:grid-cols-2 lg:mt-12 lg:gap-14 lg:pt-14">
          {systems.map(({ system, category, shortDescription, href }) => (
            <Link
              key={system.slug}
              href={href}
              className="focus-ring group flex h-full flex-col"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius-panel)] border border-neutral-200 bg-neutral-100 transition-colors duration-300 group-hover:border-neutral-400">
                <Image
                  src={system.image}
                  alt={system.name}
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className={
                    system.slug === "flex-7-cnc"
                      ? "scale-[1.035] object-cover object-[51%_51%] transition duration-500 group-hover:scale-[1.065]"
                      : "object-cover object-[50%_48%] transition duration-500 group-hover:scale-[1.03]"
                  }
                />
              </div>

              <div className="flex flex-1 flex-col pt-5">
                <h3 className="text-[20px] font-semibold tracking-[-0.03em] text-neutral-950 sm:text-[22px]">
                  {category}
                </h3>

                <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#1693e6]">
                  {system.name}
                </p>

                <p className="mt-3 max-w-[44ch] text-[13px] leading-5 text-neutral-500">
                  {shortDescription}
                </p>

                <p className="mt-4 inline-flex items-center text-[13px] font-medium text-neutral-400 transition group-hover:text-[#0b8fdc]">
                  {content.viewSystemLabel}
                  <span className="link-arrow">→</span>
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-6 border-t border-neutral-200 pt-8 sm:flex-row sm:items-center sm:justify-between lg:mt-12 lg:pt-10">
          <p className="max-w-[52ch] text-[15px] leading-7 text-neutral-500 sm:text-[16px]">
            {content.body}
          </p>

          <Button href={viewAllHref} variant="secondary" className="shrink-0">
            {content.viewAllLabel} →
          </Button>
        </div>
      </Container>
    </Section>
  );
}
