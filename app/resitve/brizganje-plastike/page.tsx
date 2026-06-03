import Image from "next/image";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import ProcessBand from "@/components/blocks/home/ProcessBand";
import WikiNav from "@/components/wiki/WikiNav";
import SystemBlock from "@/components/solutions/SystemBlock";
import UseCasesBlock from "@/components/solutions/UseCasesBlock";
import { flexidoSystems } from "@/data/flexido-systems";

const pageNavItems = [
  { href: "#proces", label: "Problem" },
  { href: "#pristop", label: "Rešitev" },
  { href: "#rezultat", label: "Rezultat" },
  { href: "#sistem", label: "Sistem" },
  { href: "#primeri", label: "Uporaba" },
];

const immSystem = flexidoSystems.find((system) => system.slug === "flex-7-imm");


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
            <source src="/video/flexido/hero-imm.mp4" type="video/mp4" />
          </video>

          <div className="absolute inset-0 bg-gradient-to-r from-black/78 via-black/50 to-black/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />

          <Container className="relative z-10 py-20 sm:py-24 lg:py-28">
            <div className="max-w-[720px]">
              <a
                href="/resitve"
                className="inline-flex text-[13px] text-white/55 transition hover:text-white"
              >
                ← Vse rešitve
              </a>

              <p className="mt-6 text-[11px] uppercase tracking-[0.16em] text-white/50">
                Brizganje plastike
              </p>

              <h1 className="mt-4 text-4xl font-semibold leading-[0.95] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                <span className="block max-w-[13ch]">Stabilen cikel</span>
                <span className="block max-w-[13ch]">po vsakem brizgu.</span>
              </h1>

              <p className="mt-5 max-w-[56ch] text-[16px] leading-7 text-white/75">
                Avtomatiziramo odvzem, odlaganje, kontrolo in tok kosov po
                ciklu — da proizvodnja teče bolj stabilno, z manj ročnega dela
                in manj zastojev.
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
                  Cikel je hiter. Izgube nastanejo po njem.
                </h2>

                <p className="mt-5 text-[16px] leading-7 text-neutral-600">
                  Pri brizganju plastike stroj dela stabilno — ampak proces se
                  ustavlja pri odvzemu, odlaganju ali prenosu kosov.
                </p>

                <p className="mt-5 text-[15px] leading-7 text-neutral-500">
                  To niso posamezni problemi. To je tok, ki ni povezan.
                </p>
              </div>

              <div>
                <p className="mb-4 text-[11px] uppercase tracking-[0.16em] text-neutral-500">
                  Kje nastajajo zastoji
                </p>

                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    "Ročni odvzem kosov",
                    "Nestabilno odlaganje",
                    "Čakanje po ciklu",
                    "Odvisnost od operaterja",
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
                  Rezultat: takt ni stabilen, čeprav bi lahko bil.
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
                Uredimo tok kosov po ciklu.
              </h2>

              <p className="mt-5 text-[16px] leading-7 text-neutral-600">
                Robot prevzame odvzem, kos se pravilno odloži ali pripravi za
                naslednji korak, proces pa postane stabilen in predvidljiv.
              </p>

              <p className="mt-5 text-[15px] leading-7 text-neutral-500">
                Ne optimiziramo enega koraka. Uredimo celoten tok.
              </p>
            </div>

            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {[
                {
                  title: "1. Pregled cikla",
                  desc: "Pogledamo tok po brizgu, ročne korake in mesta, kjer proces stoji.",
                },
                {
                  title: "2. Stabilizacija toka",
                  desc: "Določimo, kje avtomatizacija prinese največji učinek za stabilen takt.",
                },
                {
                  title: "3. Integracija v proces",
                  desc: "Rešitev povežemo s strojem, operaterjem in nadaljnjim tokom kosov.",
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

        {/* RESULTS */}
        <Section
          id="rezultat"
          className="scroll-mt-24 border-b border-neutral-200/60 bg-white"
        >
          <Container>
            <div className="max-w-[720px]">
              <p className="eyebrow">Rezultat</p>

              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                Stabilen cikel brez ročnih prekinitev
              </h2>

              <p className="mt-5 text-[16px] leading-7 text-neutral-600">
                Ko povežemo tok kosov po ciklu, proces deluje bolj enakomerno,
                predvidljivo in z manj napakami.
              </p>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {[
                "Stabilen takt",
                "Manj čakanja",
                "Manj napak in izmeta",
                "Manj odvisnosti od operaterja",
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
              Proces ne temelji več na improvizaciji, ampak na stabilnem
              sistemu.
            </p>
          </Container>
        </Section>

       {/* SYSTEM */}
{immSystem ? (
  <section id="sistem" className="scroll-mt-24">
    <SystemBlock
      title="IMM celice za stabilen tok po ciklu"
      desc="Robotska celica prevzame odvzem, odlaganje, sortiranje ali pripravo kosov po brizganju — da se proces ne ustavlja pri ročnih korakih."
      note="Izvedba se prilagodi tipu stroja, kosom, ciklu in zahtevnosti aplikacije."
      mainImage={{
        src: immSystem.image,
        alt: immSystem.name,
      }}
    />
  </section>
) : null}

        {/* USE CASES */}
        <UseCasesBlock
          id="primeri"
          title="Kje ima avtomatizacija pri brizganju največ smisla"
          desc="Ko ročni odvzem ali manipulacija omejuje hitrost ali stabilnost cikla."
          cases={[
            {
              title: "Visok ciklus",
              desc: "Ročni odvzem ne dohaja hitrosti stroja.",
            },
            {
              title: "Občutljivi kosi",
              desc: "Potrebna je konsistentna manipulacija brez poškodb.",
            },
            {
              title: "Sortiranje kosov",
              desc: "Ločevanje OK / NOK ali več variant.",
            },
            {
              title: "Pakiranje",
              desc: "Direktno zlaganje ali priprava za nadaljnjo obdelavo.",
            },
            {
              title: "Čistoča procesa",
              desc: "Manj kontaminacije zaradi ročnega dela.",
            },
            {
              title: "Stabilnost proizvodnje",
              desc: "Manj odvisnosti od operaterja.",
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
                  Poglejmo vaš proces brizganja.
                </h2>

                <p className="mt-5 max-w-[58ch] text-[15px] leading-7 text-neutral-600 sm:text-[16px]">
                  Skupaj pregledamo cikel, odvzem, odlaganje, tok kosov in
                  mesta, kjer se proces ustavlja — potem ocenimo, kje ima
                  avtomatizacija največji učinek.
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
                    alt="Avtomatizacija procesa brizganja plastike"
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
                      Kje po ciklu izgubljate čas, stabilnost ali ponovljivost
                      procesa?
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