import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import SectionHeader from "@/components/ui/SectionHeader";

export default function FAQ() {
  const items = [
    {
      q: "Za kakšne procese je avtomatizacija smiselna?",
      a: "Največji učinek ima pri ponovljivih operacijah, ročnem delu ali nestabilnem poteku — tam, kjer proces ni dovolj predvidljiv.",
    },
    {
      q: "Ali moramo prilagoditi obstoječo proizvodnjo?",
      a: "Ne nujno. Rešitev prilagodimo obstoječim strojem in procesu — z minimalnimi posegi.",
    },
    {
      q: "Ali je rešitev uporabna za več različnih izdelkov?",
      a: "Da. Sistem prilagodimo tako, da omogoča fleksibilno uporabo glede na tip izdelkov in serije.",
    },
    {
      q: "Kako hitro lahko začnemo?",
      a: "Začnemo s pregledom procesa. Na tej osnovi hitro ocenimo možnosti in naslednje korake.",
    },
  ];

  return (
 
       <Section id="faq" variant="default" className="border-b border-neutral-200 bg-white py-16 sm:py-20 lg:py-24">
      <Container>
        <SectionHeader
          eyebrow="FAQ"
          title="Najpogostejša vprašanja"
          desc="Odgovori na ključna vprašanja pred začetkom projekta."
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          {items.map((item) => (
            <div key={item.q} className="max-w-[56ch]">
              <h3 className="text-[18px] font-semibold leading-tight text-neutral-950">
                {item.q}
              </h3>

              <div className="mt-5 h-px w-10 bg-neutral-200" />

              <p className="mt-5 text-[15px] leading-7 text-neutral-600">
                {item.a}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}