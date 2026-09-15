import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

export default function HowToChoose() {
  return (
   <Section variant="default" className="border-b border-neutral-200 bg-white">
  <Container>
    <div className="max-w-[980px]">
      <p className="eyebrow">Izbira rešitve</p>

      <h2 className="mt-3 max-w-[16ch] text-4xl font-semibold leading-[0.96] tracking-[-0.045em] text-neutral-950 sm:text-5xl lg:text-[60px]">
        Kje avtomatizacija najprej prinese učinek
      </h2>

      <p className="mt-6 max-w-[64ch] text-[18px] leading-8 text-neutral-600">
        Največji učinek nastane tam, kjer se ponavlja ročno delo, material čaka
        med fazami ali je proces preveč odvisen od operaterja.
      </p>
    </div>

    <div className="mt-12 grid gap-5 lg:grid-cols-12">
      {/* FEATURED */}
      <div className="lg:col-span-6">
        <Card className="flex h-full flex-col justify-between rounded-[var(--radius-structural)] border border-[#d7e3f0] bg-[#f4f8fc] p-7 sm:p-8">
          <div>
            <p className="text-[11px] uppercase tracking-[0.16em] text-[#5b6b82]">
              Najpogostejši primer
            </p>

            <h3 className="mt-4 max-w-[16ch] text-[30px] font-semibold leading-[1.05] tracking-[-0.035em] text-[#0a2540] sm:text-[34px]">
              Nalaganje in razlaganje kosov
            </h3>

            <p className="mt-5 max-w-[34ch] text-[17px] leading-7 text-[#425466]">
              Ko ročno delo ustavlja cikel stroja, zmanjšuje izkoristek in
              ustvarja odvisnost od operaterja.
            </p>
          </div>

         <ul className="mt-8 space-y-3 border-t border-[#dbe6f1] pt-6">
  {[
    "Ročno nalaganje in odlaganje kosov.",
    "Operater določa tempo cikla.",
    "Najhitrejši prvi korak do bolj stabilnega toka.",
  ].map((item) => (
    <li
      key={item}
      className="flex items-start gap-3 text-[14px] leading-6 text-[#425466]"
    >
      <span
        aria-hidden="true"
        className="mt-[7px] h-2 w-2 shrink-0 rounded-full bg-[#1b8fe4]"
      />
      <span>{item}</span>
    </li>
  ))}
</ul>
        </Card>
      </div>

      {/* RIGHT COLUMN */}
      <div className="grid gap-5 sm:grid-cols-2 lg:col-span-6">
        {[
          {
            eyebrow: "Prenos med fazami",
            title: "Material čaka med operacijami",
            desc: "Ko material ne pride pravočasno do naslednje faze in nastajajo zastoji.",
          },
          {
            eyebrow: "Odvzem izdelkov",
            title: "Odvzem izdelkov iz strojev",
            desc: "Ko je cikel preveč odvisen od odziva operaterja.",
          },
          {
            eyebrow: "Povezava opreme",
            title: "Povezava obstoječih strojev",
            desc: "Ko stroji delujejo ločeno, proces pa ni dovolj povezan.",
          },
          {
            eyebrow: "Ponavljajoče delo",
            title: "Ročni premiki med postajami",
            desc: "Ko prestavljanje kosov jemlje čas in ustvarja nepotrebne prekinitve.",
          },
        ].map((item) => (
          <Card
            key={item.title}
            className="group rounded-[var(--radius-structural)] border border-neutral-200 bg-white p-6 transition-all duration-300 hover:-translate-y-[2px] hover:border-[#dbe6f1]"
          >
            <p className="text-[11px] uppercase tracking-[0.14em] text-[#6b7a90]">
              {item.eyebrow}
            </p>

            <h3 className="mt-4 text-[22px] font-semibold leading-[1.12] tracking-[-0.03em] text-[#0a2540]">
              {item.title}
            </h3>

            <div className="mt-4 h-px w-10 bg-[#e7eef5] transition-all duration-300 group-hover:w-14" />

            <p className="mt-4 text-[15px] leading-6 text-[#425466]">
              {item.desc}
            </p>
          </Card>
        ))}
      </div>
    </div>

    {/* CTA BAR */}
    <div className="mt-8 rounded-[var(--radius-structural)] border border-neutral-200 bg-neutral-50 px-6 py-5 sm:px-7">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[15px] leading-6 text-neutral-600">
          Ne najdete svojega primera? Pogledamo lahko vaš konkreten proces in
          predlagamo najbolj smiseln prvi korak avtomatizacije.
        </p>

        <Button href="#kontakt">Poglejmo vaš proces →</Button>
      </div>
    </div>
  </Container>
</Section>
  );
}
