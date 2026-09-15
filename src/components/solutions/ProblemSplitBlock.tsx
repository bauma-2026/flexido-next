import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import type { ProblemSplitBlock as ProblemSplitContent } from "@/content/solutions/types";

export default function ProblemSplitBlock({ section }: { section: ProblemSplitContent }) {
  const paragraphs = Array.isArray(section.body) ? section.body : [section.body];

  return (
    <Section id={section.id} className="scroll-mt-24 border-b border-neutral-200 bg-white">
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

          <div className="lg:mt-4">
            <p className="eyebrow">{section.itemsEyebrow}</p>
            <div className="mt-4">
              {section.items.map((item, index) => (
                <div key={item} className="flex items-start gap-2 py-6 first:pt-0 last:pb-0 lg:gap-3">
                  <div className="flex h-[1.375em] w-4 shrink-0 items-center text-[17px] leading-snug lg:w-6">
                    <span
                      aria-hidden
                      className="block h-[5px] w-[5px] translate-y-px border border-[var(--color-brand)]/50"
                    />
                  </div>
                  <div className="relative w-full max-w-[400px]">
                    {index !== 0 && (
                      <span
                        aria-hidden
                        className="absolute inset-x-0 -top-6 border-t border-neutral-200"
                      />
                    )}
                    <p className="text-[17px] font-medium leading-snug text-neutral-950">{item}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 flex items-start gap-2 lg:gap-3">
              <div aria-hidden className="w-4 shrink-0 lg:w-6" />
              <div className="relative w-full max-w-[400px] pt-5">
                <span
                  aria-hidden
                  className="absolute inset-x-0 top-0 border-t border-[var(--color-brand)]/30"
                />
                <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-neutral-400">
                  {section.resultLabel}
                </p>
                <p className="mt-2 text-[15px] leading-6 text-neutral-800">{section.result}</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
