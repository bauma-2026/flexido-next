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
            <source src="/video/imm-tending-3.mp4" type="video/mp4" />
          </video>

          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/10" />

          <Container className="relative z-10 flex min-h-[520px] items-end pb-16 pt-32 sm:min-h-[620px] lg:pb-20">
            <div className="max-w-[720px]">
              <p className="text-[11px] uppercase tracking-[0.18em] text-white/55">
                Standardne robotske celice
              </p>

              <h1 className="mt-5 text-[48px] font-semibold leading-[0.95] tracking-[-0.055em] sm:text-[72px]">
                IMM stroji
              </h1>

              <p className="mt-6 max-w-[560px] text-[17px] leading-8 text-white/70">
                Standardne robotske celice za posluževanje strojev za brizganje
                plastike — z industrijskimi 6-osnimi roboti, dodatnimi
                operacijami in modularnimi postajami.
              </p>
            </div>
          </Container>
        </section>

        <Section>
          <Container>
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <p className="text-[11px] uppercase tracking-[0.18em] text-neutral-400">
                  IMM avtomatizacija
                </p>
                <h2 className="mt-4 max-w-[520px] text-[34px] font-semibold leading-tight tracking-[-0.04em] text-neutral-950 sm:text-[44px]">
                  Alternativa tradicionalnim linearnim manipulatorjem.
                </h2>
              </div>

              <div className="space-y-6 text-[16px] leading-8 text-neutral-700">
                <p>
                  Standardne celice Flexido so pri robotskem posluževanju strojev
                  za plastiko odlična alternativa tradicionalnim rešitvam
                  avtomatizacije z linearnimi manipulatorji.
                </p>

                <p>
                  V standardnih robotskih celicah so integrirani 6-osni roboti,
                  ki poleg osnovne funkcije odvzemanja kosov iz orodja nudijo
                  tudi dodatne operacije.
                </p>

                <p>
                  Standardne robotske celice se uporabijo tudi v primerih, ko so
                  stroji inštalirani v proizvodnih prostorih z nizko višino.
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
                Več kot samo odvzem kosa iz orodja.
              </h2>

              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  "odstranjevanje dolivka",
                  "preverjanje zalitosti kosov",
                  "preverjanje prisotnosti srha ali prelitij",
                  "zaznavanje površinskih napak",
                  "montaža brizganega kosa v celici",
                  "naknadna obdelava brizganega kosa",
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
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="space-y-6 text-[16px] leading-8 text-neutral-700">
                <p>
                  V primerih nizke višine proizvodnih prostorov 6-osni roboti
                  poslužujejo stroj za brizganje plastike s strani pri odprtih
                  vratih stroja.
                </p>

                <p>
                  Vmesniki, ki morajo biti predhodno nameščeni na strojih za
                  brizganje plastike, so Euromap 67 in Euromap 63 oziroma
                  Euromap 77.
                </p>

                <p>
                  Standardne robotske celice se pogosto uporabljajo tudi pri
                  vstavljanju insertov v orodje pri procesu nabrizgavanja.
                </p>
              </div>

              <div className="rounded-[28px] border border-neutral-200 bg-neutral-50 p-7">
                <p className="text-[11px] uppercase tracking-[0.16em] text-neutral-400">
                  Modulne postaje
                </p>

                <ul className="mt-5 space-y-3 text-[15px] leading-6 text-neutral-700">
                  <li>vhodna vibrirna postaja</li>
                  <li>drsni paletni sistem</li>
                  <li>sistem vrtljive mize</li>
                  <li>Pick &amp; Place Vision sistem</li>
                </ul>
              </div>
            </div>
          </Container>
        </Section>

        <Section className="bg-neutral-50">
          <Container>
            <div className="grid gap-5 md:grid-cols-3">
              {[
                {
                  title: "Cenovna dostopnost",
                  desc: "Zaradi modularne zasnove so standardne robotske celice cenovno dostopnejše.",
                },
                {
                  title: "Nizek ROI",
                  desc: "Standardne robotske celice so prvi korak k optimizaciji proizvodnje in imajo izjemno nizek ROI.",
                },
                {
                  title: "Višja kakovost",
                  desc: "Celica pomaga zvišati kakovost proizvodnje in razpoložljivost strojev ter proizvodnih sredstev.",
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
              na zelo hiter in enostaven način.
            </p>
          </Container>
        </Section>
<FinalCTA />
      </main>

      <Footer />
    </>
  );
}