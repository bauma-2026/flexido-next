import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import FinalCTA from "@/components/blocks/home/FinalCTA";

export default function Page() {
  return (
    <>
      <Header />

      <main className="bg-white text-neutral-950">
        <section className="relative overflow-hidden bg-neutral-950 text-white">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 h-full w-full object-cover opacity-55"
          >
            <source src="/video/cnc-tending-3.mp4" type="video/mp4" />
          </video>

          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/10" />

          <Container className="relative z-10 flex min-h-[520px] items-end pb-16 pt-32 sm:min-h-[620px] lg:pb-20">
            <div className="max-w-[720px]">
              <p className="text-[11px] uppercase tracking-[0.18em] text-white/55">
                Standardne robotske celice
              </p>

              <h1 className="mt-5 text-[48px] font-semibold leading-[0.95] tracking-[-0.055em] sm:text-[72px]">
                CNC stroji
              </h1>

              <p className="mt-6 max-w-[560px] text-[17px] leading-8 text-white/70">
                Robotske celice za posluževanje CNC strojev — za nalaganje,
                odvzemanje, fleksibilno menjavo kosov in dodatne operacije v
                proizvodnem procesu.
              </p>
            </div>
          </Container>
        </section>

        <Section>
          <Container>
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <p className="text-[11px] uppercase tracking-[0.18em] text-neutral-400">
                  CNC avtomatizacija
                </p>
                <h2 className="mt-4 max-w-[520px] text-[34px] font-semibold leading-tight tracking-[-0.04em] text-neutral-950 sm:text-[44px]">
                  Fleksibilno posluževanje CNC strojev z robotom.
                </h2>
              </div>

              <div className="space-y-6 text-[16px] leading-8 text-neutral-700">
                <p>
                  Flexido celice ponujajo bogat nabor opcij. Pri posluževanju
                  CNC strojev z robotom se za nalaganje in odvzemanje največkrat
                  uporabi drsni paletni sistem, sistem z vrtljivo mizo ali
                  vrtljivi paletni sistem.
                </p>

                <p>
                  Vedno bolj se uporablja tudi odvzem kosov z robotom z uporabo
                  sistema pametnega vida Vision, ki omogoča višjo stopnjo
                  fleksibilnosti robotske celice.
                </p>

                <p>
                  Robot lahko pri integrirani opciji Pick &amp; Place z vhodnega
                  traku pobira različne kose različnih oblik.
                </p>
              </div>
            </div>
          </Container>
        </Section>

        <Section className="bg-neutral-50">
          <Container>
            <div className="max-w-[760px]">
              <p className="text-[11px] uppercase tracking-[0.18em] text-neutral-400">
                Dodatne operacije
              </p>

              <h2 className="mt-4 text-[32px] font-semibold leading-tight tracking-[-0.04em] text-neutral-950 sm:text-[44px]">
                Standardna celica lahko vključuje dodatne postaje v procesu.
              </h2>

              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  "postaja za pranje kosov",
                  "postaja za graviranje kosov",
                  "postaja za raziglevanje srha",
                  "postaja za dimenzijsko kontrolo kosov",
                ].map((item) => (
                  <li
                    key={item}
                    className="rounded-2xl border border-neutral-200 bg-white p-5 text-[15px] text-neutral-700"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Container>
        </Section>

        <Section>
          <Container>
            <div className="grid gap-10 lg:grid-cols-3">
              {[
                {
                  title: "Modularna zasnova",
                  desc: "Zaradi modularne zasnove so standardne robotske celice cenovno dostopne tudi manjšim podjetjem.",
                },
                {
                  title: "Nizek ROI",
                  desc: "Standardne robotske celice so prvi korak k optimizaciji proizvodnje z robotom in imajo izjemno nizek ROI.",
                },
                {
                  title: "Višja razpoložljivost",
                  desc: "Integracija robotske celice pomaga zvišati kakovost proizvodnje in razpoložljivost CNC strojev.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-[28px] border border-neutral-200 bg-white p-7"
                >
                  <h3 className="text-[22px] font-semibold tracking-[-0.03em] text-neutral-950">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-[15px] leading-7 text-neutral-600">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-10 max-w-[720px] text-[16px] leading-8 text-neutral-700">
              Standardne robotske celice omogočajo nižanje proizvodnih stroškov
              na hiter in enostaven način.
            </p>
          </Container>
        </Section>

        <FinalCTA
          eyebrow="Imate vprašanje?"
          title="Pogovorimo se o posluževanju vaših CNC strojev."
          desc="Smo izdelovalec standardnih celic in celic po naročilu za različne industrije."
          primaryLabel="Kontakt"
          primaryHref="/kontakt"
        />
      </main>

      <Footer />
    </>
  );
}