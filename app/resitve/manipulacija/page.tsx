import Image from "next/image";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import ProcessBand from "@/components/blocks/home/ProcessBand";
import WikiNav from "@/components/wiki/WikiNav";
import SystemBlock from "@/components/solutions/SystemBlock";
import UseCasesBlock from "@/components/solutions/UseCasesBlock";

const pageNavItems = [
  { href: "#proces", label: "Problem" },
  { href: "#pristop", label: "Rešitev" },
  { href: "#primer", label: "Primer" },
  { href: "#rezultat", label: "Rezultat" },
  { href: "#sistem", label: "Sistem" },
  { href: "#uporaba", label: "Uporaba" },
];

export default function Page() {
  return (
    <>
      <Header sticky={false} />

      <main className="bg-white text-neutral-950">
        {/* HERO */}
        <section className="relative overflow-hidden bg-neutral-950 text-white">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="absolute inset-0 h-full w-full object-cover opacity-45"
          >
            <source src="/video/flexido/hero-logistika.mp4" type="video/mp4" />
          </video>

          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/52 to-black/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/72 via-transparent to-black/20" />

          <Container className="relative z-10 py-20 sm:py-24 lg:py-28">
            <div className="max-w-[760px]">
              <a
                href="/resitve"
                className="inline-flex text-[13px] text-white/55 transition hover:text-white"
              >
                ← Vse rešitve
              </a>

              <p className="mt-6 text-[11px] uppercase tracking-[0.16em] text-white/50">
                Manipulacija materiala
              </p>

              <h1 className="mt-4 text-4xl font-semibold leading-[0.95] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                <span className="block max-w-[13ch]">Kosi se premikajo</span>
                <span className="block max-w-[13ch]">brez ročnega dela.</span>
              </h1>

              <p className="mt-5 max-w-[56ch] text-[16px] leading-7 text-white/75">
                Avtomatiziramo prijemanje, prestavljanje, obračanje in odlaganje
                kosov — da proces med operacijami teče bolj stabilno in z manj
                ročnih prekinitev.
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
                  Proces se pogosto ustavi tam, kjer je treba kos premakniti.
                </h2>

                <p className="mt-5 text-[16px] leading-7 text-neutral-600">
                  Kosi so obdelani, vendar jih je treba pobrati, obrniti,
                  prestaviti, poravnati ali odložiti na pravo mesto. Če to
                  ostane ročno, proces hitro postane odvisen od operaterja.
                </p>

                <p className="mt-5 text-[15px] leading-7 text-neutral-500">
                  Ni problem samo v stroju. Problem nastane med koraki, kjer kos
                  nima stabilne in ponovljive poti.
                </p>
              </div>

              <div>
                <p className="mb-4 text-[11px] uppercase tracking-[0.16em] text-neutral-500">
                  Kje nastajajo zastoji
                </p>

                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    "Ročno prestavljanje kosov",
                    "Obračanje ali pozicioniranje kosov",
                    "Odlaganje na vmesna mesta",
                    "Nestabilen tok med operacijami",
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
                  Rezultat: proces čaka na ročni premik, čeprav bi lahko tekel
                  bolj enakomerno.
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
                Uredimo stabilno manipulacijo kosov med koraki.
              </h2>

              <p className="mt-5 text-[16px] leading-7 text-neutral-600">
                Določimo, kako naj se kos prime, premakne, obrne, poravna ali
                odloži, da se naslednja operacija začne brez čakanja in
                improvizacije.
              </p>

              <p className="mt-5 text-[15px] leading-7 text-neutral-500">
                Ne rešujemo samo premika. Uredimo del procesa, kjer kos preide
                iz ene faze v drugo.
              </p>
            </div>

            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {[
                {
                  title: "1. Pregled rokovanja s kosi",
                  desc: "Pogledamo, kje se kosi pobirajo, obračajo, prestavljajo ali odlagajo.",
                },
                {
                  title: "2. Definicija prijema in poti",
                  desc: "Določimo način prijema, orientacijo kosa in pot do naslednje operacije.",
                },
                {
                  title: "3. Integracija v proces",
                  desc: "Manipulacijo povežemo s strojem, operaterjem in realnim tokom proizvodnje.",
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
                  Kos čaka na naslednji premik
                </h2>

                <p className="mt-5 max-w-[48ch] text-neutral-600">
                  Tipičen primer procesa, kjer stroj opravi svoje delo, vendar
                  kos po obdelavi čaka na ročni odvzem, obračanje ali
                  prestavitev v naslednjo fazo.
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-2xl border border-neutral-200 bg-white p-6 sm:p-8">
                  <h3 className="text-base font-semibold text-neutral-900">
                    Kontekst
                  </h3>

                  <ul className="mt-4 space-y-2 text-sm leading-relaxed text-neutral-700">
                    <li>Stroj ali postaja zaključi operacijo</li>
                    <li>Kos je treba odstraniti ali prestaviti</li>
                    <li>Operater skrbi za prijem, obračanje ali odlaganje</li>
                    <li>Naslednja faza čaka na pravilen položaj kosa</li>
                  </ul>
                </div>

                <div className="rounded-2xl border border-neutral-200 bg-white p-6 sm:p-8">
                  <h3 className="text-base font-semibold text-neutral-900">
                    Problem
                  </h3>

                  <ul className="mt-4 space-y-2 text-sm leading-relaxed text-neutral-700">
                    <li>Kos ni pravočasno pripravljen za naslednji korak</li>
                    <li>Proces je odvisen od ročnega premika</li>
                    <li>Položaj kosa ni vedno ponovljiv</li>
                    <li>Ritem med operacijami ni stabilen</li>
                  </ul>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-neutral-200 bg-white p-6">
                  <p className="eyebrow text-neutral-400">Prej</p>
                  <p className="mt-3 text-lg font-medium leading-snug text-neutral-950">
                    Kos se je premikal glede na razpoložljivost operaterja.
                  </p>
                </div>

                <div className="rounded-2xl border border-neutral-200 bg-white p-6">
                  <p className="eyebrow text-neutral-400">Potem</p>
                  <p className="mt-3 text-lg font-medium leading-snug text-neutral-950">
                    Premik kosa postane ponovljiv del procesa.
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
                    Kos je pripravljen takrat, ko ga naslednji korak potrebuje.
                  </h3>

                  <ul className="mt-6 space-y-3 text-sm leading-relaxed text-white/75">
                    <li>Naslednja operacija manj čaka na premik kosa</li>
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
                Kaj se spremeni, ko uredimo manipulacijo
              </h2>

              <p className="mt-5 text-[16px] leading-7 text-neutral-600">
                Ko je premik kosa med fazami definiran, proces postane bolj
                stabilen, ponovljiv in manj odvisen od ročnega dela.
              </p>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {[
                "Manj ročnega prestavljanja",
                "Bolj ponovljiv položaj kosov",
                "Manj čakanja med operacijami",
                "Stabilnejši tok procesa",
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
              Proces ne temelji več na tem, da nekdo pravočasno prestavi kos.
              Premik postane del sistema.
            </p>
          </Container>
        </Section>

        {/* SYSTEM */}
        <section id="sistem" className="scroll-mt-24">
          <SystemBlock
            title="Manipulacija kot stabilen prehod med operacijami"
            desc="Rešitev poveže prijem, premik, obračanje, pozicioniranje in odlaganje kosov v bolj predvidljiv tok med fazami procesa."
            note="Sistem se prilagodi obliki kosa, načinu prijema, prostoru in ritmu proizvodnje."
            mainImage={{
              src: "/images/cnc/system/flex-7-cnc.webp",
              alt: "Sistem za manipulacijo kosov v proizvodnji",
            }}
          />
        </section>

        {/* USE CASES */}
        <UseCasesBlock
          id="uporaba"
          title="Kje ima manipulacija materiala največ smisla"
          desc="Ko ročno prestavljanje, obračanje ali odlaganje kosov ustvarja čakanje med operacijami."
          cases={[
            {
              title: "Odvzem iz stroja",
              desc: "Ko je treba kos po obdelavi odstraniti in pripraviti za naslednji korak.",
            },
            {
              title: "Obračanje kosov",
              desc: "Ko mora kos spremeniti orientacijo pred nadaljnjo obdelavo.",
            },
            {
              title: "Prestavljanje med fazami",
              desc: "Ko kos potuje med dvema operacijama in proces čaka na ročni premik.",
            },
            {
              title: "Pozicioniranje",
              desc: "Ko mora biti kos vedno v enakem položaju za naslednjo postajo.",
            },
            {
              title: "Odlaganje kosov",
              desc: "Ko je treba kose nadzorovano odložiti na trak, voziček ali vmesno mesto.",
            },
            {
              title: "Povezava več postaj",
              desc: "Ko manipulacija poveže stroj, kontrolo, označevanje ali pakiranje.",
            },
          ]}
        />

        {/* PROCESS / POSITIONING */}
        <ProcessBand />

        {/* LIGHT FINAL CTA */}
        <section
          id="kontakt"
          className="border-t border-neutral-200/60 bg-white py-20 sm:py-24 lg:py-28"
        >
          <Container>
            <div className="grid gap-10 lg:grid-cols-[1fr_420px] lg:items-center">
              <div className="max-w-[680px]">
                <p className="text-[11px] uppercase tracking-[0.16em] text-neutral-500">
                  Kontakt
                </p>

                <h2 className="mt-3 max-w-[15ch] text-3xl font-semibold leading-[0.98] tracking-[-0.04em] text-neutral-950 sm:text-4xl lg:text-5xl">
                  Poglejmo, kje se kosi ustavljajo.
                </h2>

                <p className="mt-5 max-w-[58ch] text-[15px] leading-7 text-neutral-600 sm:text-[16px]">
                  Skupaj pregledamo prijemanje, prestavljanje, obračanje,
                  pozicioniranje in odlaganje kosov — potem ocenimo, kje ima
                  avtomatizirana manipulacija največji učinek.
                </p>

                <div className="mt-8">
                  <a
                    href="mailto:info@flexido.eu"
                    className="inline-flex items-center rounded-full bg-neutral-950 px-6 py-3 text-[14px] font-medium text-white transition hover:bg-neutral-800"
                  >
                    Pošljite povpraševanje →
                  </a>
                </div>
              </div>

              <div className="overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-100 shadow-[0_18px_60px_rgba(0,0,0,0.08)]">
                <div className="relative aspect-[4/3]">
                  <Image
                    src="/images/flexido/legacy/s-3.jpg.jpeg"
                    alt="Manipulacija materiala v proizvodnem procesu"
                    fill
                    sizes="(min-width: 1024px) 420px, 100vw"
                    className="object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <p className="text-[11px] uppercase tracking-[0.16em] text-white/55">
                      Prvi korak
                    </p>

                    <p className="mt-2 max-w-[34ch] text-[15px] font-medium leading-6 text-white">
                      Kje kos čaka na premik, orientacijo ali naslednjo fazo?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}