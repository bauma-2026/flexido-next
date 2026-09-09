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
          eyebrow={content.eyebrow}
          title={content.title}
          desc={content.desc}
        />

        <ol className="relative mt-10 lg:mt-14 lg:grid lg:grid-cols-4 lg:gap-x-8 lg:border-t lg:border-neutral-200">
          <span
            aria-hidden
            className="absolute left-0 top-1 bottom-1 w-px bg-neutral-200 lg:hidden"
          />

          {content.steps.map((item) => (
            <li key={item.step} className="relative pb-8 pl-8 last:pb-0 lg:pb-0 lg:pl-0 lg:pt-7">
              {/* mobile: node on the shared vertical line */}
              <span
                aria-hidden
                className="absolute left-0 top-[5px] h-[7px] w-[7px] -translate-x-1/2 rounded-full border-[1.5px] border-[#1693e6] bg-white lg:hidden"
              />

              {/* desktop: stem dropping from the shared top path */}
              <span
                aria-hidden
                className="absolute left-0 top-0 hidden h-7 w-px bg-[#1693e6]/50 lg:block"
              />
              {/* desktop: node centered on the shared top path */}
              <span
                aria-hidden
                className="absolute left-0 top-0 hidden h-[7px] w-[7px] -translate-x-1/2 -translate-y-1/2 rounded-full border-[1.5px] border-[#1693e6] bg-white lg:block"
              />

              <p className="index-label">{item.step}</p>

              <h3 className="mt-2 max-w-[16ch] text-[18px] font-semibold leading-[1.15] tracking-[-0.02em] text-[#0a2540] sm:text-[19px]">
                {item.title}
              </h3>

              <p className="mt-3 max-w-[32ch] text-[13px] leading-5 text-neutral-500 sm:text-[14px] sm:leading-6 lg:pr-8">
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
