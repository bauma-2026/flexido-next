import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import ProcessBand from "@/components/blocks/home/ProcessBand";
import FinalCTA from "@/components/blocks/home/FinalCTA";
import WikiNav from "@/components/wiki/WikiNav";
import SystemBlock from "@/components/solutions/SystemBlock";
import UseCasesBlock from "@/components/solutions/UseCasesBlock";
import ForWhoBlock from "@/components/solutions/ForWhoBlock";

const pageNavItems = [
  { href: "#proces", label: "Problem" },
  { href: "#pristop", label: "Rešitev" },
  { href: "#primer", label: "Primer iz prakse" },
  { href: "#rezultat", label: "Rezultat" },
  { href: "#sistem", label: "Sistem" },
  { href: "#uporaba", label: "Primeri uporabe" },
  { href: "#za-koga", label: "Za koga" },
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

          <div className="absolute inset-0 bg-gradient-to-r from-black/76 via-black/46 to-black/15" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

          <Container className="relative z-10 py-20 sm:py-24 lg:py-28">
            <div className="max-w-[760px]">
              <a
                href="/resitve"
                className="inline-flex text-[13px] text-white/55 transition hover:text-white"
              >
                ← Vse rešitve
              </a>

              <p className="mt-6 text-[11px] uppercase tracking-[0.16em] text-white/50">
                Industrijska logistika
              </p>

              <h1 className="mt-4 text-4xl font-semibold leading-[0.95] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                <span className="block max-w-[13ch]">Material ne pride</span>
                <span className="block max-w-[13ch]">pravočasno.</span>
              </h1>

              <p className="mt-5 max-w-[56ch] text-[16px] leading-7 text-white/75">
                Uredimo tok materiala med stroji, postajami in operacijami —
                da proizvodnja ne čaka na ročni transport, improvizacijo ali
                nejasne vmesne korake.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#proces"
                  className="inline-flex items-center rounded-full bg-white px-6 py-3 text-[14px] font-medium text-neutral-950 transition hover:bg-white/90"
                >
                  Poglej problem →
                </a>

                <a
                  href="#kontakt"
                  className="inline-flex items-center rounded-full border border-white/20 px-6 py-3 text-[14px] font-medium text-white/80 transition hover:bg-white/10 hover:text-white"
                >
                  Poglejmo vaš proces →
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
                <p className="eyebrow">Problem</p>

                <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                  Proces ne stoji na enem mestu. Stoje povsod.
                </h2>

                <p className="mt-5 text-[16px] leading-7 text-neutral-600">
                  Material čaka pred strojem, med operacijami ali pred
                  pakiranjem. Stroji so pripravljeni, ljudje delajo, vendar tok
                  materiala ni dovolj jasno definiran.
                </p>

                <p className="mt-5 text-[15px] leading-7 text-neutral-500">
                  Ni problem enega stroja. Problem je, da material nima
                  stabilne poti skozi proizvodnjo.
                </p>
              </div>

              <div>
                <p className="mb-4 text-[11px] uppercase tracking-[0.16em] text-neutral-500">
                  Kje nastajajo zastoji
                </p>

                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    "Material ne pride pravočasno",
                    "Ročni transport z vozički ali paletami",
                    "Vmesni bufferji niso definirani",
                    "Nepovezan tok med postajami",
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
                  Rezultat: stroji čakajo na material, material čaka na ljudi,
                  proizvodnja pa izgublja ritem.
                </p>
              </div>
            </div>
          </Container>
        </Section>

        {/* APPROACH */}
        <Section id="pristop" className="scroll-mt-24 bg-[#f6f9fc]">
          <Container>
            <div className="max-w-[720px]">
              <p className="eyebrow">Rešitev</p>

              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                Vzpostavimo stabilen tok materiala.
              </h2>

              <p className="mt-5 text-[16px] leading-7 text-neutral-600">
                Povežemo stroje, postaje in operacije v sistem, kjer material
                potuje po jasni poti, z bolj predvidljivim ritmom in manj
                ročnega improviziranja.
              </p>

              <p className="mt-5 text-[15px] leading-7 text-neutral-500">
                Ne rešujemo samo transporta. Uredimo tok, ki omogoča bolj
                stabilno proizvodnjo.
              </p>
            </div>

            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {[
                {
                  title: "1. Analiza toka materiala",
                  desc: "Pogledamo, od kod material prihaja, kje čaka in kateri premiki povzročajo največ prekinitev.",
                },
                {
                  title: "2. Definicija poti in bufferjev",
                  desc: "Določimo, kam material potuje, kje se začasno odlaga in kako se uravnava ritem med operacijami.",
                },
                {
                  title: "3. Integracija transporta",
                  desc: "Rešitev povežemo s stroji, postajami, operaterji in obstoječim tokom proizvodnje.",
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

        {/* CASE */}
        <Section
          id="primer"
          className="scroll-mt-24 border-y border-neutral-200/60 bg-neutral-50"
        >
          <Container>
            <div className="flex flex-col gap-12 sm:gap-16 lg:gap-20">
              <div className="max-w-[58ch]">
                <p className="eyebrow text-neutral-500">Primer iz prakse</p>

                <h2 className="mt-4 max-w-[15ch] text-4xl font-semibold leading-[0.95] tracking-[-0.03em] text-neutral-950 sm:text-5xl">
                  Material čaka med stroji
                </h2>

                <p className="mt-5 max-w-[48ch] text-neutral-600">
                  Tipičen primer proizvodnje, kjer posamezne operacije delujejo,
                  vendar material med njimi potuje ročno in nepredvidljivo.
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-2xl border border-neutral-200 bg-white p-6 sm:p-8">
                  <h3 className="text-base font-semibold text-neutral-900">
                    Kontekst
                  </h3>

                  <ul className="mt-4 space-y-2 text-sm leading-relaxed text-neutral-700">
                    <li>Več strojev ali zaporednih postaj</li>
                    <li>Material se prenaša ročno</li>
                    <li>Operaterji skrbijo za premike med koraki</li>
                    <li>Vmesni bufferji niso jasno definirani</li>
                  </ul>
                </div>

                <div className="rounded-2xl border border-neutral-200 bg-white p-6 sm:p-8">
                  <h3 className="text-base font-semibold text-neutral-900">
                    Problem
                  </h3>

                  <ul className="mt-4 space-y-2 text-sm leading-relaxed text-neutral-700">
                    <li>Material ne pride pravočasno do stroja</li>
                    <li>Stroji čakajo na vhodni material</li>
                    <li>Vmesno stanje ni pregledno</li>
                    <li>Ritem proizvodnje ni stabilen</li>
                  </ul>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-neutral-200 bg-white p-6">
                  <p className="eyebrow text-neutral-400">Prej</p>
                  <p className="mt-3 text-lg font-medium leading-snug text-neutral-950">
                    Material je potoval glede na razpoložljivost operaterja.
                  </p>
                </div>

                <div className="rounded-2xl border border-neutral-200 bg-white p-6">
                  <p className="eyebrow text-neutral-400">Potem</p>
                  <p className="mt-3 text-lg font-medium leading-snug text-neutral-950">
                    Material ima definirano pot, buffer in naslednji korak.
                  </p>
                </div>
              </div>

              <div className="max-w-[62ch]">
                <h3 className="text-base font-semibold text-neutral-900">
                  Rešitev
                </h3>

                <p className="mt-4 leading-relaxed text-neutral-700">
                  Vzpostavimo sistem za premik materiala med stroji in
                  postajami. To lahko vključuje robotsko manipulacijo,
                  transportne trakove, buffer postaje ali kombinacijo več
                  elementov glede na proces.
                </p>
              </div>

              <div className="rounded-2xl border border-neutral-200 bg-white p-6 sm:p-8">
                <div className="max-w-[52ch]">
                  <h3 className="text-base font-semibold text-neutral-900">
                    Kako teče proces
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                    Material se premika po definiranem toku, zato naslednja
                    operacija ne čaka na ročni transport ali improvizacijo.
                  </p>
                </div>

                <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {[
                    "Material pride na vhod",
                    "Sistem ga razporedi",
                    "Material se dostavi do stroja",
                    "Stroj izvede operacijo",
                    "Material se prenese naprej",
                    "Buffer ali naslednja operacija",
                  ].map((item, index) => (
                    <li
                      key={item}
                      className="rounded-xl border border-neutral-200 bg-neutral-50 p-4"
                    >
                      <span className="text-xs font-medium text-neutral-400">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <p className="mt-2 text-sm font-medium leading-snug text-neutral-900">
                        {item}
                      </p>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="grid gap-6 md:grid-cols-[1.05fr_0.95fr] md:items-stretch">
                <div className="rounded-2xl bg-neutral-950 p-6 text-white sm:p-8">
                  <p className="eyebrow text-white/45">Rezultat</p>

                  <h3 className="mt-4 max-w-[15ch] text-3xl font-semibold leading-[1] tracking-[-0.03em] sm:text-4xl">
                    Material pride takrat, ko ga proces potrebuje.
                  </h3>

                  <ul className="mt-6 space-y-3 text-sm leading-relaxed text-white/75">
                    <li>Stroji manj čakajo na vhodni material</li>
                    <li>Manj ročnega transporta med postajami</li>
                    <li>Bolje definiran tok med operacijami</li>
                    <li>Proizvodnja deluje z bolj stabilnim ritmom</li>
                  </ul>
                </div>

                <div className="flex rounded-2xl border border-neutral-200 bg-white p-6 sm:p-8">
                  <p className="self-end text-2xl font-medium leading-tight tracking-[-0.02em] text-neutral-950 sm:text-3xl">
                    Proizvodnja ne stoji samo zaradi strojev.
                    <br />
                    Pogosto stoji, ker material ne pride pravočasno.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* RESULTS */}
        <Section
          id="rezultat"
          className="scroll-mt-24 border-b border-neutral-200/60 bg-white"
        >
          <Container>
            <div className="max-w-[720px]">
              <p className="eyebrow">Rezultat</p>

              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                Kaj se spremeni, ko uredimo logistiko
              </h2>

              <p className="mt-5 text-[16px] leading-7 text-neutral-600">
                Ko je tok materiala definiran, proizvodnja postane bolj
                pregledna, stabilna in manj odvisna od ročnega usklajevanja.
              </p>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {[
                "Stabilen tok materiala",
                "Manj čakanja med operacijami",
                "Boljša izkoriščenost strojev",
                "Bolj predvidljiv ritem proizvodnje",
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

            <p className="mt-6 max-w-[600px] text-[14px] leading-6 text-neutral-500">
              Proces ne temelji več na tem, da nekdo pravočasno premakne
              material. Tok postane del sistema.
            </p>
          </Container>
        </Section>

        <div id="sistem" className="scroll-mt-24">
          <SystemBlock
            title="Logistika kot sistemski tok materiala"
            desc="Rešitev poveže stroje, postaje, vmesne bufferje in transportne elemente v bolj predvidljiv tok materiala skozi proizvodnjo."
            note="Sistem se prilagodi prostoru, ritmu proizvodnje in razdaljam med operacijami."
            mainImage={{
              src: "/images/cnc/system/flex-7-cnc.webp",
              alt: "Sistemski tok materiala v proizvodnji",
            }}
            itemsLabel="Možni elementi sistema"
            itemsAspect="square"
            items={[
              {
                title: "Transportni tok",
                desc: "Premik materiala med stroji in postajami.",
                image: "/images/cnc/system/stacker-flex-7-cnc.webp",
              },
              {
                title: "Buffer postaje",
                desc: "Vmesno odlaganje za bolj stabilen ritem.",
                image: "/images/cnc/system/cleaning-station-flex-7-cnc.webp",
              },
              {
                title: "Razporejanje",
                desc: "Usmerjanje materiala glede na naslednji korak.",
                image:
                  "/images/cnc/system/infeed-vibro-sorting-station-flex-7-cnc.webp",
              },
              {
                title: "Integracija",
                desc: "Povezava s postajami, kontrolo ali označevanjem.",
                image: "/images/cnc/system/engraving-flex-7-cnc.webp",
              },
            ]}
          />
        </div>

        <UseCasesBlock
          id="uporaba"
          title="Kje ima industrijska logistika največ smisla"
          desc="Ko ročni transport ali nejasen tok materiala ustvarja čakanje med stroji, postajami ali operacijami."
          cases={[
            {
              title: "Več CNC strojev",
              desc: "Ko material potuje med več stroji in postajami.",
            },
            {
              title: "Proizvodne linije",
              desc: "Ko mora material stabilno prehajati med zaporednimi koraki.",
            },
            {
              title: "Skladišče → proizvodnja",
              desc: "Ko priprava materiala vpliva na ritem proizvodnje.",
            },
            {
              title: "Proizvodnja → pakiranje",
              desc: "Ko končni kosi čakajo na prenos v pakiranje.",
            },
            {
              title: "Vmesni bufferji",
              desc: "Ko je treba uravnavati različen tempo med operacijami.",
            },
            {
              title: "Kontrola in sortiranje",
              desc: "Ko mora material skozi kontrolo pred naslednjim korakom.",
            },
          ]}
        />

        <ForWhoBlock
          id="za-koga"
          title="Kdaj ima avtomatizacija logistike največ smisla"
          desc="Največji učinek dosežemo tam, kjer tok materiala ni dovolj jasno povezan s stroji in postajami."
          items={[
            {
              title: "Več strojev",
              desc: "Ko material potuje med več delovnimi mesti.",
            },
            {
              title: "Veliko ročnega transporta",
              desc: "Ko operaterji pogosto premikajo material z vozički ali paletami.",
            },
            {
              title: "Neenakomeren tok",
              desc: "Ko material prihaja v valovih in povzroča čakanje.",
            },
            {
              title: "Pomanjkanje prostora",
              desc: "Ko je treba bolje organizirati vmesno odlaganje.",
            },
            {
              title: "Različen tempo operacij",
              desc: "Ko ena postaja dela hitreje kot druga in nastajajo zastoji.",
            },
            {
              title: "Želja po večji preglednosti",
              desc: "Ko želite jasneje vedeti, kje je material v procesu.",
            },
          ]}
        />

        <ProcessBand />
        <FinalCTA />
      </main>

      <Footer />
    </>
  );
}