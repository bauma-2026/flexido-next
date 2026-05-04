import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

export default function HowToChoose() {
  const items = [
    {
      title: "Nalaganje in razlaganje kosov",
      desc: "Ročno nalaganje ustavlja cikel stroja in zmanjšuje izkoristek.",
    },
    {
      title: "Prenos materiala med fazami",
      desc: "Material čaka med operacijami in ustvarja zastoje.",
    },
    {
      title: "Odvzem izdelkov iz strojev",
      desc: "Cikel je preveč odvisen od odziva operaterja.",
    },
    {
      title: "Paletizacija in pakiranje",
      desc: "Zaključek procesa je počasen ali neenakomeren.",
    },
    {
      title: "Povezava obstoječih strojev",
      desc: "Stroji delujejo ločeno, proces pa ni dovolj povezan.",
    },
    {
      title: "Delovna mesta z veliko ročnega dela",
      desc: "Ponovljive naloge povečujejo možnost napak.",
    },
  ];

  return (
    <Section className="bg-white py-16 sm:py-20 lg:py-24">
      <Container>
        <SectionHeader
          eyebrow="Izbira rešitve"
          title="Kje lahko avtomatiziramo vaš proces"
          desc="Od nalaganja materiala do končne obdelave — avtomatizacija se lahko vključi v različne faze proizvodnje."
        />

        {/* MOBILE SUMMARY */}
        <div className="mt-7 sm:hidden">
          <p className="text-[15px] leading-7 text-[#425466]">
            Največji učinek dosežemo tam, kjer se ponavlja ročno delo, material
            čaka med fazami ali je proces preveč odvisen od operaterja.
          </p>
        </div>

        {/* CARDS */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <Card
              key={item.title}
              className={`
                group
                flex
                min-h-[210px]
                flex-col
                justify-between
                rounded-[24px]
                border border-transparent
                bg-white
                px-8
                py-8
                shadow-[0_14px_40px_rgba(15,23,42,0.04)]
                transition-all
                duration-300
                hover:-translate-y-[2px]
                hover:border-[#dbe6f1]
                hover:bg-[#f9fbfd]
                hover:shadow-[0_22px_60px_rgba(15,23,42,0.075)]
              ${i === 0 ? "sm:col-span-2 sm:px-10 sm:py-10" : ""}
              `}
            >
              <div>
                {i === 0 && (
                  <p className="mb-3 text-[11px] uppercase tracking-[0.14em] text-[#6b7a90]">
                    Najpogostejši primer
                  </p>
                )}

                <h3 className="text-[18px] font-semibold leading-tight text-[#0a2540]">
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

        {/* CTA */}
        <div className="mt-8 flex sm:mt-10">
          <Button href="#kontakt">
            Ne najdete svojega primera? Poglejmo vaš proces →
          </Button>
        </div>
      </Container>
    </Section>
  );
}