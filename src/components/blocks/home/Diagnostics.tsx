import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";

export default function Diagnostics() {
  return (
     <Section variant="tight" className="bg-white">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          {/* LEFT */}
          <div>
            <p className="eyebrow">Kaj rešujemo</p>

            <h2 className="mt-3 max-w-[12ch] text-3xl font-semibold leading-[1] tracking-[-0.04em] text-[#0a2540] sm:text-4xl lg:text-5xl">
              Kje proces izgublja ritem
            </h2>

            <p className="mt-5 max-w-[46ch] text-[16px] leading-7 text-[#425466]">
             Procesi se upočasnijo tam, kjer ni jasnega poteka,
pregleda ali ponovljivosti.
            </p>
          </div>

          {/* RIGHT */}
         <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
  {[
    {
      title: "Ročno delo zavira proces",
      desc: "Ponavljajoče naloge jemljejo čas in povečujejo možnost napak.",
    },
    {
      title: "Zastoji med fazami",
      desc: "Material ne teče dovolj gladko med stroji in delovnimi mesti.",
    },
    {
      title: "Nepredvidljiv potek",
      desc: "Rezultat je preveč odvisen od ljudi, menjav in improvizacije.",
    },
  ].map((item) => (
    <div
      key={item.title}
      className="rounded-2xl border border-neutral-200 bg-white p-5 transition duration-200 hover:-translate-y-[2px] hover:shadow-sm"
    >
      <h3 className="text-[16px] font-semibold leading-tight text-[#0a2540]">
        {item.title}
      </h3>

      <p className="mt-3 text-[15px] leading-6 text-[#425466]">
        {item.desc}
      </p>
    </div>
  ))}
</div>
        </div>
      </Container>
    </Section>
  );
}