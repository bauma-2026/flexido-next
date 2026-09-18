import Link from "next/link";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import { competencyIcons } from "@/components/icons/CompetencyIcons";
import type { HomeCompetenciesContent } from "@/content/home/types";
import type { Locale } from "@/i18n/config";
import { getPath } from "@/i18n/routes";
import SectionHeader from "@/components/ui/SectionHeader";

const defaultContent: HomeCompetenciesContent = {
  eyebrow: "Kompetence",
  heading: "Kaj obvladamo znotraj projekta",
  intro: "Konstrukcijo, programiranje, integracijo in zagon izvaja ista ekipa.",
  items: [
    "Izvedba študije izvedljivosti",
    "Konstruiranje",
    "Elektro projektiranje",
    "Programiranje robotov in PLC-jev",
    "Sistemi pametnega vida",
    "Projektno vodenje",
  ],
  developmentProjectsLabel: "Oglejte si reference",
};

type Props = {
  content?: HomeCompetenciesContent;
  locale?: Locale;
};

export default function Competencies({ content = defaultContent, locale = "sl" }: Props) {
  const developmentProjectsHref = getPath("references", locale);
  const showDevelopmentProjectsLink =
    content.developmentProjectsLabel && developmentProjectsHref;

  return (
    <Section className="border-b border-neutral-200 bg-white text-[#0a2540]">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
          <SectionHeader
            eyebrow={content.eyebrow}
            title={content.heading}
            desc={content.intro}
            descClassName="max-w-[28ch]"
          />

          <div>
            {content.items.map((competency, index) => {
              const Icon = competencyIcons[index];
              return (
                <div
                  key={competency}
                  className="relative flex items-center gap-4 py-6 first:pt-0 last:pb-0"
                >
                  {index !== 0 && (
                    <span
                      aria-hidden
                      className="absolute left-12 right-0 top-0 max-w-[22rem] border-t border-neutral-200"
                    />
                  )}
                  {Icon && (
                    <Icon className="h-8 w-8 shrink-0 text-[var(--color-brand)]" />
                  )}
                  <h3 className="text-[16px] font-semibold leading-6 text-[#0a2540]">
                    {competency}
                  </h3>
                </div>
              );
            })}

            {showDevelopmentProjectsLink && (
              <Link
                href={developmentProjectsHref}
                className="focus-ring mt-14 inline-flex items-center text-[14px] font-semibold text-neutral-700 transition hover:text-[var(--color-interactive)]"
              >
                {content.developmentProjectsLabel}
                <span className="link-arrow">→</span>
              </Link>
            )}
          </div>
        </div>
      </Container>
    </Section>
  );
}
