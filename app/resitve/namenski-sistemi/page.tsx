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

const flexSystem = flexidoSystems.find((system) => system.slug === "flex-25-50");

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
            <source src="/video/flexido/hero-home.mp4" type="video/mp4" />
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
                Po meri procesa
              </p>

              <h1 className="mt-4 text-4xl font-semibold leading-[0.95] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                <span className="block max-w-[13ch]">Namenski sistemi</span>
                <span className="block max-w-[13ch]">za vaš proces.</span>
              </h1>

              <p className="mt-5 max-w-[56ch] text-[16px] leading-7 text-white/75">
                Ko standardna rešitev ni dovolj, sistem prilagodimo proizvodnji,
                prostoru, obstoječim strojem in dejanskemu toku dela.
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
                  Vsak proces ne paše v standardno rešitev.
                </h2>

                <p className="mt-5 text-[16px] leading-7 text-neutral-600">
                  Proizvodnja ima pogosto posebne prostorske omejitve, obstoječe
                  stroje, specifične kose ali tok dela, ki ga ni mogoče rešiti z
                  eno univerzalno celico.
                </p>

                <p className="mt-5 text-[15px] leading-7 text-neutral-500">
                  Takrat ni dovolj dodati robota. Treba je zasnovati sistem, ki
                  se ujema z realnim procesom.
                </p>
              </div>

              <div>
                <p className="mb-4 text-[11px] uppercase tracking-[0.16em] text-neutral-500">
                  Kdaj standard ni dovolj
                </p>

                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    "Posebna oblika ali velikost kosov",
                    "Omejen prostor v proizvodnji",
                    "Več strojev ali faz v enem procesu",
                    "Potreba po povezavi z obstoječo opremo",
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
                  Rezultat: rešitev mora slediti procesu, ne obratno.
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
                Sistem zasnujemo okoli dejanskega toka dela.
              </h2>

              <p className="mt-5 text-[16px] leading-7 text-neutral-600">
                Najprej razumemo proces, omejitve in cilj avtomatizacije. Nato
                določimo, kateri elementi so potrebni: robot, prijemalo, postaje,
                transport, kontrola, odlaganje ali povezava z obstoječimi stroji.
              </p>

              <p className="mt-5 text-[15px] leading-7 text-neutral-500">
                Namen ni narediti kompleksnega sistema. Namen je narediti
                sistem, ki v praksi stabilno podpira proizvodnjo.
              </p>
            </div>

            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {[
                {
                  title: "1. Pregled procesa",
                  desc: "Pogledamo potek dela, prostor, kose, stroje in mesta, kjer nastajajo omejitve.",
                },
                {
                  title: "2. Zasnova sistema",
                  desc: "Določimo, kateri elementi so potrebni za stabilen tok med fazami.",
                },
                {
                  title: "3. Integracija v proizvodnjo",
                  desc: "Rešitev povežemo z obstoječimi stroji, operaterji in realnim načinom dela.",
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

        {/* RESULT */}
        <Section
          id="rezultat"
          className="scroll-mt-24 border-b border-neutral-200/60 bg-white"
        >
          <Container>
            <div className="max-w-[720px]">
              <p className="eyebrow">Rezultat</p>

              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                Sistem podpira proces, namesto da ga proces omejuje.
              </h2>

              <p className="mt-5 text-[16px] leading-7 text-neutral-600">
                Ko je rešitev zasnovana okoli realnega toka dela, se lahko
                povežejo stroj, manipulacija, kontrola, odlaganje in transport v
                bolj stabilen proizvodni sistem.
              </p>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {[
                "Boljša prilagoditev procesu",
                "Manj improvizacije v izvedbi",
                "Povezava več faz dela",
                "Stabilnejši tok proizvodnje",
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
              Rešitev ni izbrana vnaprej. Nastane iz procesa, omejitev in cilja
              avtomatizacije.
            </p>
          </Container>
        </Section>

        {/* SYSTEM */}
        {flexSystem ? (
          <section id="sistem" className="scroll-mt-24">
            <SystemBlock
              title={`${flexSystem.name} kot osnova zahtevnejšega sistema`}
              desc="Fleksibilna robotska celica za zahtevnejše aplikacije, večje kose, večjo nosilnost in procese, kjer je treba povezati več faz dela."
              note="Sistem se prilagodi kosom, prostoru, prijemalom, kontroli, transportu in obstoječi opremi."
              mainImage={{
                src: flexSystem.image,
                alt: flexSystem.name,
              }}
            />
          </section>
        ) : null}

        {/* USE CASES */}
        <UseCasesBlock
          id="primeri"
          title="Kje imajo namenski sistemi največ smisla"
          desc="Ko proces zahteva kombinacijo več elementov in standardna rešitev ne pokrije realnega toka dela."
          cases={[
            {
              title: "Posebni kosi",
              desc: "Ko oblika, teža ali pozicija kosa zahteva prilagojen prijem in premik.",
            },
            {
              title: "Omejen prostor",
              desc: "Ko se mora rešitev prilagoditi obstoječi postavitvi proizvodnje.",
            },
            {
              title: "Več faz procesa",
              desc: "Ko je treba povezati stroj, manipulacijo, kontrolo in odlaganje.",
            },
            {
              title: "Obstoječi stroji",
              desc: "Ko avtomatizacija dopolni že obstoječo opremo in način dela.",
            },
            {
              title: "Kontrola ali označevanje",
              desc: "Ko mora sistem vključiti dodatno preverjanje, čiščenje ali označevanje kosa.",
            },
            {
              title: "Poseben tok materiala",
              desc: "Ko je treba proces urediti drugače kot s standardno celico.",
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
                  Poglejmo vaš namenski proces.
                </h2>

                <p className="mt-5 max-w-[58ch] text-[15px] leading-7 text-neutral-600 sm:text-[16px]">
                  Skupaj pregledamo prostor, stroje, kose, tok dela in omejitve
                  — potem ocenimo, ali je smiselna standardna rešitev ali
                  namenski sistem po meri procesa.
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
                    alt="Namenski avtomatiziran proizvodni sistem"
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
                      Kje standardna rešitev ne pokrije realnega toka dela?
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