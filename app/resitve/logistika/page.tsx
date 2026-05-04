import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import ProcessBand from "@/components/blocks/home/ProcessBand";
import FinalCTA from "@/components/blocks/home/FinalCTA";
import WikiNav from "@/components/wiki/WikiNav";

const pageNavItems = [
  { href: "#proces", label: "Kje se izgublja čas" },
  { href: "#pristop", label: "Pristop" },
  { href: "#primeri", label: "Primeri uporabe" },
];

export default function Page() {
  return (
    <>
      <Header sticky={false} />

      <main className="bg-white text-neutral-950">
        {/* HERO */}
        <section className="relative overflow-hidden bg-neutral-950 text-white">
          <video
            src="/video/hero-logistika.mp4"
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
                Tok materiala
              </p>

              <h1 className="mt-4 text-4xl font-semibold leading-[0.95] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                <span className="block max-w-[12ch]">Interna</span>
                <span className="block max-w-[12ch]">logistika</span>
              </h1>

              <p className="mt-5 max-w-[54ch] text-[16px] leading-7 text-white/75">
                Uredimo notranji tok materiala med fazami proizvodnje — da so pravi
                kosi pravočasno na pravem mestu in da naslednja operacija ne čaka.
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
                <p className="eyebrow">Kje se izgublja čas</p>

                <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                  Proizvodnja se pogosto ne ustavi zaradi stroja, ampak zaradi toka med fazami.
                </h2>

                <p className="mt-5 text-[16px] leading-7 text-neutral-600">
                  Material mora priti do naslednje operacije pravočasno, v pravi
                  količini in na pravo mesto. Ko ta tok ni urejen, nastanejo čakanje,
                  zaloge med fazami in nepotrebni premiki po proizvodnji.
                </p>
              </div>

              <div>
                <p className="mb-4 text-[11px] uppercase tracking-[0.16em] text-neutral-500">
                  Najpogostejši razlogi
                </p>

                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    "Material ni pravočasno pri naslednji operaciji",
                    "Preveč vmesnega odlaganja med fazami",
                    "Ročni transport ustvarja zamude",
                    "Tok skozi proizvodnjo ni pregleden",
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
                  Rezultat: posamezne operacije delujejo, celoten proizvodni tok pa izgublja predvidljivost.
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
                Najprej uredimo pot materiala skozi proizvodnjo.
              </h2>

              <p className="mt-5 text-[16px] leading-7 text-neutral-600">
                Interna logistika ni samo transport iz ene točke v drugo. Pomembno
                je, kdaj material pride do naslednje faze, koliko ga čaka vmes in
                kako se tok prilagodi dejanskemu ritmu proizvodnje.
              </p>
            </div>

            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {[
                {
                  title: "1. Pregled poti materiala",
                  desc: "Pogledamo, kako material potuje med conami, stroji in naslednjimi operacijami.",
                },
                {
                  title: "2. Ureditev vmesnega toka",
                  desc: "Določimo, kje nastajajo čakanje, nepotrebni premiki ali preveč zaloge med fazami.",
                },
                {
                  title: "3. Stabilna dobava do faz",
                  desc: "Rešitev vključimo v obstoječ proces, da material pride do naslednje operacije bolj predvidljivo.",
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
              <p className="eyebrow">Primeri uporabe</p>

              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                Kjer mora material pravočasno priti do naslednje faze
              </h2>

              <p className="mt-5 text-[16px] leading-7 text-neutral-600">
                Interna logistika ima največji učinek tam, kjer čakanje, vmesno
                odlaganje ali ročni transport začnejo omejevati ritem proizvodnje.
              </p>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {[
                "Transport materiala med proizvodnimi fazami",
                "Dovod kosov do naslednje operacije",
                "Odvoz izdelkov po zaključeni fazi",
                "Vmesno odlaganje in zbiranje materiala",
                "Zmanjšanje nepotrebnih premikov po proizvodnji",
                "Stabilnejši tok med stroji, conami in operaterji",
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
                Poglejmo, kje logistika ustavlja proces →
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