import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";

const whatWeDo = [
  {
    title: "Robotske celice",
    desc: "Razvoj in integracija celic za različne proizvodne procese.",
  },
  {
    title: "Povezava procesov",
    desc: "Povežemo nalaganje, odvzem in premik materiala med operacijami.",
  },
  {
    title: "Celovit pristop",
    desc: "Od ideje do izvedbe — projekt, konstrukcija, programiranje in zagon.",
  },
];

const approach = [
  {
    title: "Razumemo proces",
    desc: "Najprej pogledamo, kje nastajajo zastoji in ročno delo.",
  },
  {
    title: "Predlagamo rešitev",
    desc: "Načrtujemo tok materiala in vlogo robotske celice.",
  },
  {
    title: "Izvedemo in zaženemo",
    desc: "Postavimo sistem in ga pripeljemo do stabilnega delovanja.",
  },
];

const impact = [
  {
    title: "CNC obdelava",
    desc: "Nalagalno-odvzemni sistemi in povezava med stroji.",
  },
  {
    title: "Brizganje plastike",
    desc: "Avtomatizacija odvzema, sortiranja in prenosa kosov.",
  },
  {
    title: "Interna logistika",
    desc: "Premik materiala med fazami brez zastojev.",
  },
];

const why = [
  {
    title: "Ne rešujemo samo stroja",
    desc: "Rešujemo celoten proces.",
  },
  {
    title: "Enostavne rešitve",
    desc: "Sistemi so razumljivi, stabilni in uporabni v praksi.",
  },
  {
    title: "Izkušnje iz realne proizvodnje",
    desc: "Rešitve temeljijo na dejanskih problemih, ne teoriji.",
  },
];

export default function ONasPage() {
  return (
    <>
      <Header />

      <main className="bg-white text-neutral-950">
        {/* HERO */}
        <section className="border-b border-neutral-200 bg-neutral-950 py-20 text-white sm:py-24 lg:py-28">
          <Container>
            <div className="max-w-[760px]">
              <p className="text-[11px] uppercase tracking-[0.18em] text-white/45">
                O nas
              </p>

              <h1 className="mt-4 max-w-[13ch] text-5xl font-semibold leading-[0.96] tracking-[-0.045em] sm:text-6xl lg:text-[66px]">
                Avtomatizacija proizvodnje brez kompliciranja.
              </h1>

              <p className="mt-6 max-w-[62ch] text-base leading-7 text-white/70 sm:text-lg">
                V Flexidu razvijamo in integriramo robotske celice za CNC in
                brizganje plastike. Fokus je na stabilnem procesu, manj ročnega
                dela in jasnem toku med operacijami.
              </p>
            </div>
          </Container>
        </section>

        {/* KAJ DELAMO */}
        <section className="py-20 sm:py-24 lg:py-28">
          <Container>
            <div className="max-w-[620px]">
              <p className="text-[11px] uppercase tracking-[0.18em] text-neutral-500">
                Kaj delamo
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">
                Rešitve za stabilnejši proizvodni proces.
              </h2>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {whatWeDo.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[1.5rem] border border-neutral-200 bg-white p-6 shadow-sm"
                >
                  <h3 className="text-lg font-semibold tracking-[-0.02em]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-neutral-600">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* KAKO PRISTOPIMO */}
        <section className="bg-neutral-50 py-20 sm:py-24 lg:py-28">
          <Container>
            <div className="max-w-[620px]">
              <p className="text-[11px] uppercase tracking-[0.18em] text-neutral-500">
                Kako pristopimo
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">
                Najprej proces. Potem rešitev.
              </h2>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {approach.map((item, index) => (
                <div
                  key={item.title}
                  className="rounded-[1.5rem] border border-neutral-200 bg-white p-6 shadow-sm"
                >
                  <span className="text-xs font-medium text-neutral-400">
                    0{index + 1}
                  </span>
                  <h3 className="mt-4 text-lg font-semibold tracking-[-0.02em]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-neutral-600">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* KJE IMAMO UČINEK */}
        <section className="py-20 sm:py-24 lg:py-28">
          <Container>
            <div className="max-w-[620px]">
              <p className="text-[11px] uppercase tracking-[0.18em] text-neutral-500">
                Kje imamo največ učinka
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">
                Tam, kjer ročno delo ustavlja ritem proizvodnje.
              </h2>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {impact.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[1.5rem] border border-neutral-200 bg-white p-6 shadow-sm"
                >
                  <h3 className="text-lg font-semibold tracking-[-0.02em]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-neutral-600">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* ZAKAJ FLEXIDO */}
        <section className="bg-neutral-950 py-20 text-white sm:py-24 lg:py-28">
          <Container>
            <div className="max-w-[620px]">
              <p className="text-[11px] uppercase tracking-[0.18em] text-white/45">
                Zakaj Flexido
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">
                Rešitve morajo delovati v praksi.
              </h2>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {why.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-6"
                >
                  <h3 className="text-lg font-semibold tracking-[-0.02em]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-white/65">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* CTA */}
        <section className="bg-neutral-950 pb-20 text-white sm:pb-24 lg:pb-28">
          <Container>
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 sm:p-9 lg:p-12">
              <p className="text-[11px] uppercase tracking-[0.18em] text-white/45">
                Kontakt
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">
                Poglejmo vaš proces
              </h2>

              <p className="mt-4 max-w-[52ch] text-sm leading-6 text-white/65">
                Če razmišljate o avtomatizaciji, ima smisel najprej pogledati,
                kje proces izgublja ritem.
              </p>

              <a
                href="/#kontakt"
                className="mt-7 inline-flex rounded-full bg-white px-6 py-3 text-sm font-medium text-neutral-950 transition hover:bg-white/90"
              >
                Poglejmo vaš proces
              </a>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}