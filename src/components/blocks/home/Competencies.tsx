import Link from "next/link";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import type { HomeCompetenciesContent } from "@/content/home/types";
import type { Locale } from "@/i18n/config";
import { getPath } from "@/i18n/routes";

const defaultContent: HomeCompetenciesContent = {
  eyebrow: "Kompetence",
  heading: "Kaj obvladamo znotraj projekta",
  items: [
    "Izvedba študije izvedljivosti",
    "Konstruiranje",
    "Elektro projektiranje",
    "Programiranje robotov in PLC-jev",
    "Sistemi pametnega vida",
    "Projektno vodenje",
  ],
  developmentProjectsLabel: "Razvojne kompetence v praksi",
};

type Props = {
  content?: HomeCompetenciesContent;
  locale?: Locale;
};

export default function Competencies({ content = defaultContent, locale = "sl" }: Props) {
  const developmentProjectsHref = getPath("fundingProjects", locale);
  const showDevelopmentProjectsLink =
    content.developmentProjectsLabel && developmentProjectsHref;

  return (
    <Section className="border-b border-neutral-200 surface-muted text-[#0a2540]">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
          <div>
            <p className="eyebrow">{content.eyebrow}</p>
            <h2 className="mt-3 max-w-[14ch] text-3xl font-semibold leading-[1] tracking-[-0.04em] sm:text-4xl lg:text-5xl">
              {content.heading}
            </h2>
          </div>

          <div>
            {content.items.map((competency) => (
              <div
                key={competency}
                className="border-neutral-200 py-5 first:pt-0 last:pb-0 [&:not(:first-child)]:border-t"
              >
                <h3 className="text-[16px] font-semibold leading-6 text-[#0a2540]">
                  {competency}
                </h3>
              </div>
            ))}

            {showDevelopmentProjectsLink && (
              <Link
                href={developmentProjectsHref}
                className="focus-ring mt-6 inline-flex items-center text-[14px] font-medium text-neutral-500 transition hover:text-[#0b8fdc]"
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
