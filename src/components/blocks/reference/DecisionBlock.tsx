import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import Button from "@/components/ui/Button";

export default function DecisionBlock() {
  return (
    <Section className="border-b border-neutral-200 bg-white">
      <Container>
        <div className="rounded-[var(--radius-structural)] border border-neutral-200 bg-neutral-50/60 p-6 sm:p-8 lg:p-10">
          {/* HEADER */}
          <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div>
              <p className="eyebrow">
                Je to za vas
              </p>

              <h3 className="mt-3 max-w-[14ch] text-3xl font-semibold leading-[1.02] tracking-[-0.04em] text-neutral-950 sm:text-4xl">
                Prepoznate ta scenarij?
              </h3>
            </div>

            <p className="max-w-[56ch] text-base leading-7 text-neutral-600">
              Ta tip avtomatizacije ima največji učinek v specifičnih situacijah.
              Če se najdete spodaj, ima smisel iti naprej.
            </p>
          </div>

          {/* BINARY GRID */}
          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            {/* YES */}
            <div className="group rounded-[var(--radius-structural)] border border-neutral-200 bg-white p-6 transition duration-300 hover:-translate-y-0.5 hover:border-neutral-300 sm:p-7">
              <p className="eyebrow transition group-hover:text-neutral-950">
                ✔ To je za vas
              </p>

              <ul className="mt-5 space-y-3">
                {[
                  "Operaterji ročno prenašajo kose med stroji",
                  "Material čaka med fazami",
                  "Proces ni stabilen skozi cel dan",
                  "Imate več strojev brez povezanega toka",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm leading-6 text-neutral-700"
                  >
                    <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-900 transition group-hover:scale-125" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* NO */}
            <div className="group rounded-[var(--radius-structural)] border border-neutral-200 bg-white p-6 transition duration-300 hover:-translate-y-0.5 hover:border-neutral-300 sm:p-7">
              <p className="eyebrow">
                ✖ Verjetno še ne
              </p>

              <ul className="mt-5 space-y-3">
                {[
                  "Proces že teče stabilno brez večjih zastojev",
                  "Ni ročnih prenosov med operacijami",
                  "Proizvodnja je enostavna in linearna",
                  "Ni potrebe po večji fleksibilnosti",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm leading-6 text-neutral-600"
                  >
                    <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-300" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-8 flex flex-wrap items-center justify-between gap-6 border-t border-neutral-200 pt-7">
            <p className="max-w-[52ch] text-sm leading-6 text-neutral-600">
              Če ste bližje levi strani, je smiselno pogledati proces kot celoto
              in preveriti, kje avtomatizacija dejansko prinese največ učinka.
            </p>

            <Button href="#kontakt">Poglejmo vaš proces</Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}