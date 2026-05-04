// components/solutions/SolutionPage.tsx

import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import WikiNav from "@/components/wiki/WikiNav";
import ProcessBand from "@/components/blocks/home/ProcessBand";
import FinalCTA from "@/components/blocks/home/FinalCTA";

type Bullet = string;

type Card = {
  title: string;
  desc?: string;
};

type SolutionContent = {
  hero: {
    eyebrow: string;
    title: string[];
    desc: string;
    video?: string;
  };

  problem: {
    title: string;
    desc: string;
    bullets: Bullet[];
  };

  solution: {
    title: string;
    desc: string;
    steps: Card[];
  };

  results: {
    title: string;
    desc: string;
    items: Bullet[];
  };

  useCases: {
    title: string;
    desc: string;
    items: Card[];
  };

  forWho: {
    title: string;
    desc: string;
    items: Bullet[];
  };
};

export default function SolutionPage({ content }: { content: SolutionContent }) {
  const nav = [
    { href: "#proces", label: "Problem" },
    { href: "#pristop", label: "Rešitev" },
    { href: "#rezultat", label: "Rezultat" },
    { href: "#primeri", label: "Primeri" },
    { href: "#za-koga", label: "Za koga" },
  ];

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-neutral-950 text-white">
        {content.hero.video && (
          <video
            src={content.hero.video}
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 h-full w-full object-cover opacity-50"
          />
        )}

        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        <Container className="relative z-10 py-20 sm:py-24 lg:py-28">
          <div className="max-w-[720px]">
            <p className="text-[11px] uppercase tracking-[0.16em] text-white/50">
              {content.hero.eyebrow}
            </p>

            <h1 className="mt-4 text-4xl font-semibold leading-[0.95] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              {content.hero.title.map((line, i) => (
                <span key={i} className="block max-w-[13ch]">
                  {line}
                </span>
              ))}
            </h1>

            <p className="mt-5 max-w-[56ch] text-[16px] leading-7 text-white/75">
              {content.hero.desc}
            </p>
          </div>
        </Container>
      </section>

      <WikiNav items={nav} />

      {/* PROBLEM */}
      <Section id="proces" className="scroll-mt-24 bg-white">
        <Container>
          <h2 className="text-3xl font-semibold sm:text-4xl">
            {content.problem.title}
          </h2>

          <p className="mt-4 text-neutral-600">{content.problem.desc}</p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {content.problem.bullets.map((b) => (
              <div key={b} className="rounded-[20px] border p-5">
                {b}
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* SOLUTION */}
      <Section id="pristop" className="scroll-mt-24 bg-[#f6f9fc]">
        <Container>
          <h2 className="text-3xl font-semibold sm:text-4xl">
            {content.solution.title}
          </h2>

          <p className="mt-4 text-neutral-600">{content.solution.desc}</p>

          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {content.solution.steps.map((step) => (
              <div key={step.title} className="rounded-[22px] bg-white p-6">
                <h3 className="font-semibold">{step.title}</h3>
                <p className="mt-3 text-sm text-neutral-600">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* RESULTS */}
      <Section id="rezultat" className="scroll-mt-24 bg-white">
        <Container>
          <h2 className="text-3xl font-semibold sm:text-4xl">
            {content.results.title}
          </h2>

          <p className="mt-4 text-neutral-600">{content.results.desc}</p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {content.results.items.map((r) => (
              <div key={r} className="rounded-[20px] border p-5">
                {r}
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* USE CASES */}
      <Section id="primeri" className="scroll-mt-24 bg-white">
        <Container>
          <h2 className="text-3xl font-semibold sm:text-4xl">
            {content.useCases.title}
          </h2>

          <p className="mt-4 text-neutral-600">{content.useCases.desc}</p>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {content.useCases.items.map((c) => (
              <div key={c.title} className="rounded-[20px] border p-5">
                <h3 className="font-medium">{c.title}</h3>
                <p className="mt-2 text-sm text-neutral-600">
                  {c.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* FOR WHO */}
      <Section id="za-koga" className="scroll-mt-24 bg-[#f6f9fc]">
        <Container>
          <h2 className="text-3xl font-semibold sm:text-4xl">
            {content.forWho.title}
          </h2>

          <p className="mt-4 text-neutral-600">{content.forWho.desc}</p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {content.forWho.items.map((i) => (
              <div key={i} className="rounded-[20px] bg-white p-5">
                {i}
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <ProcessBand />
      <FinalCTA />
    </>
  );
}