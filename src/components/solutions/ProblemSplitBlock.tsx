import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import type { ProblemSplitBlock as ProblemSplitContent } from "@/content/solutions/types";

export default function ProblemSplitBlock({ section }: { section: ProblemSplitContent }) {
  const paragraphs = Array.isArray(section.body) ? section.body : [section.body];

  return (
    <Section id={section.id} variant="tight" className="scroll-mt-24 border-b border-neutral-200 bg-white">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-start lg:gap-16">
          <div>
            <p className="eyebrow">{section.eyebrow}</p>
            <h2 className="mt-3 text-3xl font-semibold leading-[1.05] tracking-[-0.04em] text-neutral-950 sm:text-4xl">
              {section.heading}
            </h2>
            {paragraphs.map((paragraph) => (
              <p key={paragraph} className="mt-4 max-w-[52ch] text-[16px] leading-7 text-neutral-600">
                {paragraph}
              </p>
            ))}
          </div>

          <div>
            <p className="eyebrow">{section.itemsEyebrow}</p>
            <div className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              {section.items.map((item) => (
                <div key={item} className="border border-neutral-200 bg-white px-4 py-3.5">
                  <p className="text-[15px] leading-6 text-neutral-950">{item}</p>
                </div>
              ))}
            </div>
            <p className="mt-5 border-t border-neutral-200 pt-4 text-[13.5px] leading-6 text-neutral-500">{section.result}</p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
