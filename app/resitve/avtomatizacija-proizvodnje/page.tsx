"use client";

import Image from "next/image";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import ProcessBand from "@/components/blocks/home/ProcessBand";
import WikiNav from "@/components/wiki/WikiNav";

const pageNavItems = [
  { href: "#kaj-pomeni", label: "Kaj pomeni" },
  { href: "#proces", label: "Kje nastajajo izgube" },
  { href: "#pristop", label: "Pristop" },
  { href: "#smisel", label: "Kdaj ima smisel" },
  { href: "#primeri", label: "Področja avtomatizacije" },
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
            <source src="/video/flexido/hero-home.mp4" type="video/mp4" />
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
                Sistemski pristop
              </p>

              <h1 className="mt-4 text-4xl font-semibold leading-[0.95] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                <span className="block max-w-[13ch]">Avtomatizacija</span>
                <span className="block max-w-[13ch]">proizvodnje</span>
              </h1>

              <p className="mt-5 max-w-[54ch] text-[16px] leading-7 text-white/75">
                Ne začnemo z robotom ali strojem. Najprej razumemo proces —
                šele nato določimo, kaj ima smisel avtomatizirati.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#pristop"
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

        {/* DEFINITION */}
        <Section id="kaj-pomeni" className="scroll-mt-24 bg-white">
          <Container>
            <div className="max-w-[720px]">
              <p className="eyebrow">Kaj pomeni</p>

              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                Avtomatizacija proizvodnje ni robot. Je urejen proces.
              </h2>

              <p className="mt-5 text-[16px] leading-7 text-neutral-600">
                Avtomatizacija pomeni, da delo v proizvodnji poteka brez
                nepotrebnih prekinitev, čakanja ali ročnih vmesnih korakov.
                Stroji, ljudje in material so povezani v logičen tok, kjer vsak
                korak sledi naslednjemu.
              </p>

              <p className="mt-4 text-[16px] leading-7 text-neutral-600">
                Robot ali celica sta samo del rešitve. Ključ je v tem, kako je
                proces zasnovan — in ali omogoča stabilno, ponovljivo in
                predvidljivo delo.
              </p>
            </div>
          </Container>
        </Section>

        {/* PROBLEM */}
        <Section id="proces" className="scroll-mt-24 bg-white">
          <Container>
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-16">
              <div className="max-w-[560px]">
                <p className="eyebrow">Kje nastajajo izgube</p>

                <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                  Proizvodnja redko izgublja čas samo na enem mestu.
                </h2>

                <p className="mt-5 text-[16px] leading-7 text-neutral-600">
                  Zastoji pogosto nastajajo med fazami — pri nalaganju,
                  odvzemu, transportu, čakanju, ročnih korakih ali nepovezanem
                  toku materiala.
                </p>
              </div>

              <div>
                <p className="mb-4 text-[11px] uppercase tracking-[0.16em] text-neutral-500">
                  Najpogostejši razlogi
                </p>

                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    "Nepovezani koraki v procesu",
                    "Ročno prelaganje in čakanje",
                    "Slab izkoristek strojev",
                    "Nestabilen tok materiala",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-[22px] border border-neutral-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.045)]"
                    >
                      <p className="text-[15px] font-medium text-neutral-950">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>

                <p className="mt-5 text-[14px] leading-6 text-neutral-500">
                  Rezultat: proces deluje, ampak ni dovolj stabilen, ponovljiv
                  ali učinkovit.
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
                Najprej uredimo proces. Nato izberemo tehnologijo.
              </h2>

              <p className="mt-5 text-[16px] leading-7 text-neutral-600">
                Avtomatizacija ni samo izbira robota, stroja ali celice.
                Pomembno je razumeti, kako delo poteka danes, kje nastajajo
                izgube in kateri del procesa ima največji učinek.
              </p>
            </div>

            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {[
                {
                  title: "1. Pregled procesa",
                  desc: "Pogledamo tok dela, ročne korake, ozka grla in mesta, kjer nastaja čakanje.",
                },
                {
                  title: "2. Izbor prave rešitve",
                  desc: "Določimo, ali je smiselna avtomatizacija stroja, manipulacije, logistike ali širšega procesa.",
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

        {/* WHEN IT MAKES SENSE */}
        <Section
          id="smisel"
          className="scroll-mt-24 border-t border-neutral-200 bg-white"
        >
          <Container>
            <div className="grid gap-10 lg:grid-cols-2">
              <div>
                <p className="eyebrow">Kdaj ima smisel</p>

                <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                  Avtomatizacija ima največji učinek, ko proces že obstaja.
                </h2>

                <p className="mt-5 text-[16px] leading-7 text-neutral-600">
                  Če proces deluje, ampak ima izgube — takrat avtomatizacija
                  prinese največ. Ne rešuje pa slabega sistema brez strukture.
                </p>
              </div>

              <div className="grid gap-4">
                {[
                  "Ponavljajoči se ročni koraki",
                  "Čakanje med fazami",
                  "Neizkoriščeni stroji",
                  "Težave s stabilnostjo procesa",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-[20px] border border-neutral-200 p-5"
                  >
                    <p className="text-[15px] font-medium text-neutral-950">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </Section>

        {/* USE CASES */}
        <Section id="primeri" className="scroll-mt-24 bg-white">
          <Container>
            <div className="max-w-[720px]">
              <p className="eyebrow">Področja avtomatizacije</p>

              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                Kje lahko avtomatizacija največ pomaga
              </h2>

              <p className="mt-5 text-[16px] leading-7 text-neutral-600">
                Pravo izhodišče je odvisno od vašega procesa — zato rešitev
                vedno izberemo glede na tok dela, stroje, material in cilj.
              </p>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {[
                "Avtomatizacija CNC strojev",
                "Brizganje plastike",
                "Manipulacija materiala",
                "Interna logistika",
                "Kolaborativni roboti",
                "Namenski sistemi",
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
                Poglejmo, kje ima avtomatizacija največji učinek →
              </a>
            </div>
          </Container>
        </Section>

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
                  Poglejmo, kje ima avtomatizacija največji učinek.
                </h2>

                <p className="mt-5 max-w-[58ch] text-[15px] leading-7 text-neutral-600 sm:text-[16px]">
                  Skupaj pregledamo vaš proces, poiščemo zastoje in ocenimo,
                  kateri koraki so najbolj smiselni za avtomatizacijo.
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
                    alt="Avtomatiziran proizvodni proces"
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
                      Kje proces izgublja čas, material ali stabilen ritem?
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