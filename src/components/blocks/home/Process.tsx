import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";

export default function Process() {
  const steps = [
    {
      step: "01",
      title: "Pregled procesa",
      desc: "Pogledamo obstoječi potek dela, ozka grla in ponavljajoče operacije.",
    },
    {
      step: "02",
      title: "Določitev rešitve",
      desc: "Na podlagi procesa določimo, kje ima avtomatizacija največji učinek.",
    },
    {
      step: "03",
      title: "Izvedba in integracija",
      desc: "Rešitev vključimo v obstoječe okolje, opremo in način dela.",
    },
    {
      step: "04",
      title: "Zagon in optimizacija",
      desc: "Po zagonu preverimo delovanje in prilagodimo proces za stabilen rezultat.",
    },
  ];

  return (
 
      <Section id="process" variant="default" className="bg-[#f6f9fc] py-16 text-[#0a2540] py-16 sm:py-20 lg:py-24">
      <Container>
        <SectionHeader
          eyebrow="Proces"
          title="Kako poteka ocena in izvedba"
          desc="Jasen potek od prvega pregleda do stabilnega delovanja v proizvodnji."
        />

        {/* MOBILE SUMMARY */}
        <div className="mt-7 sm:hidden">
          <p className="text-[15px] leading-7 text-[#425466]">
            Najprej pregledamo proces, nato določimo rešitev, jo vključimo v
            obstoječe okolje in optimiziramo za stabilno delovanje.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((item) => (
            <Card
              key={item.step}
              className="
                group
                flex
                min-h-[220px]
                flex-col
                justify-between
                rounded-[24px]
                border border-transparent
                bg-white
                px-7
                py-8
                shadow-[0_14px_40px_rgba(15,23,42,0.04)]
                transition-all
                duration-300
                hover:-translate-y-[2px]
                hover:border-[#dbe6f1]
                hover:bg-[#f9fbfd]
                hover:shadow-[0_22px_60px_rgba(15,23,42,0.075)]
              "
            >
              <div>
                <p className="text-[11px] font-medium tracking-[0.14em] text-[#6b7a90]">
                  {item.step}
                </p>

                <h3 className="mt-4 text-[17px] font-semibold leading-tight text-[#0a2540]">
                  {item.title}
                </h3>

                <div className="mt-5 h-px w-8 bg-[#e9eff5] transition-all duration-300 group-hover:w-12" />

                <p className="mt-5 text-[15px] leading-6 text-[#425466]">
                  {item.desc}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}