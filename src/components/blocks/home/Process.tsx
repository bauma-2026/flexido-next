import Link from "next/link";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import type { HomeProcessContent } from "@/content/home/types";

const defaultContent: HomeProcessContent = {
  eyebrow: "Proces",
  title: "Od pregleda procesa do podpore po zagonu",
  desc: "Začnemo pri procesu in rešitev vodimo do zagona ter podpore v proizvodnji.",
  steps: [
    {
      step: "01",
      title: "Pregled procesa",
      desc: "Pregledamo stroj, kos, tok materiala, prostor in mesta, kjer proces izgublja ritem.",
    },
    {
      step: "02",
      title: "Določitev rešitve",
      desc: "Določimo rešitev, ki ustreza konkretnemu stroju, kosu, prostoru in dodatnim operacijam.",
    },
    {
      step: "03",
      title: "Izvedba in integracija",
      desc: "Rešitev povežemo z obstoječimi stroji, operaterji, prostorom in realnim ritmom dela.",
    },
    {
      step: "04",
      title: "Zagon in podpora",
      desc: "Sistem zaženemo, stabiliziramo v realni proizvodnji ter nudimo servisno in poprodajno podporo.",
    },
  ],
  fullProcessLabel: "Celoten proces",
};

type Props = {
  content?: HomeProcessContent;
  processHref?: string;
};

export default function Process({ content = defaultContent, processHref = "/proces" }: Props) {
  return (
    <Section id="process" variant="default" className="bg-white text-[#0a2540]">
      <Container>
        <SectionHeader
          className="max-w-[760px]"
          eyebrow={content.eyebrow}
          title={content.title}
          desc={content.desc}
        />

        <ol className="mt-10 divide-y divide-neutral-200 lg:mt-14 lg:grid lg:grid-cols-4 lg:gap-x-8 lg:divide-y-0 lg:divide-x">
          {content.steps.map((item) => (
            <li key={item.step} className="py-6 first:pt-0 last:pb-0 lg:py-0">
              <h3 className="flex max-w-[18ch] items-baseline gap-2 text-[18px] font-semibold leading-[1.15] tracking-[-0.02em] text-[#0a2540] sm:text-[19px]">
                <span className="tabular-nums text-[13px] font-normal text-[var(--color-brand)]">
                  {item.step}
                </span>
                {item.title}
              </h3>

              <p className="mt-3 max-w-[32ch] text-[14px] leading-[22px] text-neutral-600 lg:pr-8">
                {item.desc}
              </p>
            </li>
          ))}
        </ol>

        <Link
          href={processHref}
          className="focus-ring mt-8 inline-flex items-center text-[14px] font-medium text-neutral-500 transition hover:text-[#0b8fdc] lg:mt-10"
        >
          {content.fullProcessLabel}
          <span className="link-arrow">→</span>
        </Link>
      </Container>
    </Section>
  );
}
