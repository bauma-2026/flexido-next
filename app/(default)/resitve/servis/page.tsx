import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import ProcessBand from "@/components/blocks/home/ProcessBand";
import FinalCTA from "@/components/blocks/home/FinalCTA";
import WikiNav from "@/components/wiki/WikiNav";

const pageNavItems = [
  { href: "#proces", label: "Kje nastanejo problemi" },
  { href: "#pristop", label: "Pristop" },
  { href: "#primeri", label: "Primeri podpore" },
];

export default function Page() {
  return (
    <>
      <Header sticky={false} />

      <main className="bg-white text-neutral-950">
        {/* HERO */}
        <section className="relative overflow-hidden bg-neutral-950 text-white">
          <video
            src="/video/hero-manipulacija.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 h-full w-full object-cover opacity-50"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/72 via-black/42 to-black/15" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />

          <Container className="relative z-10 py-20 sm:py-24 lg:py-28">
            <div className="max-w-[720px]">
              <a
                href="/resitve"
                className="inline-flex text-[13px] text-white/55 transition hover:text-white"
              >
                ← Vse rešitve
              </a>

              <p className="mt-6 text-[11px] uppercase tracking-[0.16em] text-white/50">
                Podpora po zagonu
              </p>

              <h1 className="mt-4 text-4xl font-semibold leading-[0.95] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                <span className="block max-w-[12ch]">Servis in</span>
                <span className="block max-w-[12ch]">podpora</span>
              </h1>

              <p className="mt-5 max-w-[54ch] text-[16px] leading-7 text-white/75">
                Poskrbimo, da sistem po zagonu dejansko deluje v proizvodnji —
                ne samo na dan prevzema.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#proces"
                  className="inline-flex items-center rounded-full bg-white px-6 py-3 text-[14px] font-medium text-neutral-950 transition hover:bg-white/90"
                >
                  Poglej pristop →
                </a>

                <a
                  href="#kontakt"
                  className="inline-flex items-center rounded-full border border-white/20 px-6 py-3 text-[14px] font-medium text-white/80 transition hover:bg-white/10 hover:text-white"
                >
                  Pogovorimo se →
                </a>
              </div>
            </div>
          </Container>
        </section>

        <WikiNav items={pageNavItems} />

        {/* PROBLEM */}
        <Section id="proces" className="scroll-mt-24 bg-white">
          <Container>
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
              <div className="max-w-[560px]">
                <p className="eyebrow">Kje nastanejo problemi</p>

                <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                  Sistem lahko deluje ob zagonu — in se ustavi čez dva tedna.
                </h2>

                <p className="mt-5 text-[16px] leading-7 text-neutral-600">
                  Pravi izzivi se pokažejo šele v realni proizvodnji: spremembe
                  v procesu, novi operaterji, drugačni kosi ali nepričakovane
                  situacije.
                </p>
              </div>

              <div>
                <p className="mb-4 text-[11px] uppercase tracking-[0.16em] text-neutral-500">
                  Najpogostejši razlogi
                </p>

                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    "Sistem se ustavi pri spremembi procesa",
                    "Operaterji ne uporabljajo sistema pravilno",
                    "Napake se ponavljajo brez jasnega razloga",
                    "Ni hitre podpore ob težavah",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-[22px] border border-neutral-200 bg-white p-6"
                    >
                      <p className="text-[15px] font-medium text-neutral-950">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>

                <p className="mt-5 text-[14px] leading-6 text-neutral-500">
                  Rezultat: sistem obstaja, ampak ne deluje stabilno v praksi.
                </p>
              </div>
            </div>
          </Container>
        </Section>

        {/* APPROACH */}
        <Section id="pristop" className="scroll-mt-24 bg-[#f6f9fc]">
          <Container>
            <div className="max-w-[720px]">
              <p className="eyebrow">Naš pristop</p>

              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                Podpora je del sistema, ne dodatna storitev.
              </h2>

              <p className="mt-5 text-[16px] leading-7 text-neutral-600">
                Že pri načrtovanju razmišljamo, kako se bo sistem uporabljal,
                prilagajal in vzdrževal. Cilj je, da ostane stabilen tudi, ko se
                proizvodnja spremeni.
              </p>
            </div>

            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {[
                {
                  title: "1. Zagon in predaja",
                  desc: "Sistem predamo tako, da je jasno, kako se uporablja, spremlja in vzdržuje.",
                },
                {
                  title: "2. Stabilizacija po zagonu",
                  desc: "V prvih tednih odpravimo težave, ki se pokažejo šele v realnem delu.",
                },
                {
                  title: "3. Prilagoditve in podpora",
                  desc: "Ko se proces spremeni, sistem prilagodimo, da ostane uporaben.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-[24px] bg-white p-7 shadow-[0_18px_50px_rgba(15,23,42,0.045)]"
                >
                  <h3 className="text-[17px] font-semibold text-neutral-950">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-[15px] leading-7 text-neutral-600">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* USE CASES */}
        <Section id="primeri" className="scroll-mt-24 bg-white">
          <Container>
            <div className="max-w-[720px]">
              <p className="eyebrow">Primeri podpore</p>

              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                Kjer se pokaže realna vrednost podpore
              </h2>

              <p className="mt-5 text-[16px] leading-7 text-neutral-600">
                Podpora ni samo za napake — ključna je pri spremembah, uvajanju in
                stabilizaciji sistema v realni proizvodnji.
              </p>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {[
                "Zagon in uvajanje sistema",
                "Usposabljanje operaterjev",
                "Odprava ponavljajočih napak",
                "Prilagoditve pri novih kosih",
                "Optimizacija delovanja sistema",
                "Dolgoročna stabilnost procesa",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-[22px] border border-neutral-200 bg-white p-6"
                >
                  <p className="text-[15px] font-medium text-neutral-950">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <a
                href="#kontakt"
                className="inline-flex items-center rounded-full bg-neutral-950 px-6 py-3 text-[14px] font-medium text-white transition hover:bg-neutral-800"
              >
                Poglejmo, kako zagotoviti stabilno delovanje →
              </a>
            </div>
          </Container>
        </Section>

        <ProcessBand />
        <FinalCTA />
      </main>

      <Footer />
    </>
  );
}