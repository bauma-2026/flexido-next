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

const tmxSystem = flexidoSystems.find((system) => system.slug === "tmx");

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
            <source src="/video/flexido/hero-cobot.mp4" type="video/mp4" />
          </video>

          <div className="absolute inset-0 bg-gradient-to-r from-black/78 via-black/50 to-black/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />

          <Container className="relative z-10 py-20 sm:py-24 lg:py-28">
            <div className="max-w-[760px]">
              <a
                href="/resitve"
                className="inline-flex text-[13px] text-white/55 transition hover:text-white"
              >
                ← Vse rešitve
              </a>

              <p className="mt-6 text-[11px] uppercase tracking-[0.16em] text-white/50">
                Kolaborativni roboti
              </p>

              <h1 className="mt-4 max-w-[13ch] text-4xl font-semibold leading-[0.95] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                Operater dela ponavljajoče naloge.
              </h1>

              <p className="mt-5 max-w-[58ch] text-[16px] leading-7 text-white/75">
                Ročno pobiranje, vstavljanje, obračanje kosov — naloge, ki
                jemljejo čas in fokus. Coboti prevzamejo ponavljanje, operater
                pa nadzor in odločanje.
                <span className="mt-3 block font-medium text-white">
                  Ne nadomestimo človeka. Odstranimo ponavljanje.
                </span>
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
                  Proces se ustavi pri ponavljajočem ročnem delu.
                </h2>

                <p className="mt-5 text-[16px] leading-7 text-neutral-600">
                  Ko operater ves dan ponavlja iste gibe, tempo procesa ni več
                  stabilen. Pojavijo se zamiki, utrujenost, napake in odvisnost
                  od razpoložljivosti človeka.
                </p>

                <p className="mt-5 text-[15px] leading-7 text-neutral-500">
                  Problem ni v človeku. Problem je v tem, da proces še vedno
                  zahteva preveč ponavljanja.
                </p>
              </div>

              <div>
                <p className="mb-4 text-[11px] uppercase tracking-[0.16em] text-neutral-500">
                  Kje nastajajo zastoji
                </p>

                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    "Ročno pobiranje kosov",
                    "Vstavljanje v stroj",
                    "Obračanje ali prestavljanje",
                    "Ponavljajoči gibi skozi izmeno",
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
                  Rezultat: operater postane ozko grlo, proces pa izgublja
                  stabilen ritem.
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
                Cobot prevzame ponavljanje, operater pa nadzor.
              </h2>

              <p className="mt-5 text-[16px] leading-7 text-neutral-600">
                Kolaborativni robot prevzame ponavljajoče premike, prijemanje,
                odlaganje ali vstavljanje kosov. Operater ostane del procesa,
                vendar ni več vezan na vsak ponavljajoč gib.
              </p>

              <p className="mt-5 text-[15px] leading-7 text-neutral-500">
                Ne nadomeščamo človeka. Odstranimo naloge, ki mu jemljejo čas,
                fokus in stabilen ritem dela.
              </p>
            </div>

            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {[
                {
                  title: "1. Pregled naloge",
                  desc: "Pogledamo, kateri gibi se ponavljajo, kje nastajajo zamiki in kako operater sodeluje s procesom.",
                },
                {
                  title: "2. Izbor naloge za cobota",
                  desc: "Določimo, kateri del dela ima največ smisla avtomatizirati brez nepotrebne kompleksnosti.",
                },
                {
                  title: "3. Integracija v delovno mesto",
                  desc: "Cobota povežemo z obstoječim procesom, varnostjo, prijemalom in realnim ritmom proizvodnje.",
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
                Stabilen proces brez nepotrebnega ponavljanja
              </h2>

              <p className="mt-5 text-[16px] leading-7 text-neutral-600">
                Ko cobot prevzame ponavljajoče naloge, se proces manj ustavlja,
                operater pa se lahko osredotoči na nadzor, pripravo in
                odločitve.
              </p>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {[
                "Manj ponavljajočega dela",
                "Stabilnejši tempo procesa",
                "Manj napak zaradi utrujenosti",
                "Več fokusa za operaterja",
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
              Proces ne temelji več na tem, da človek ves dan ponavlja isti gib.
            </p>
          </Container>
        </Section>

        {/* SYSTEM */}
        {tmxSystem ? (
          <section id="sistem" className="scroll-mt-24">
            <SystemBlock
              title={`${tmxSystem.name} kot del stabilnega procesa`}
              desc="Mobilna kolaborativna robotska platforma prevzame ponavljajoče naloge in se vključi v obstoječe delovno mesto, kjer podpira operaterja in tok proizvodnje."
              note="Sistem se prilagodi nalogi, prostoru, varnosti in ritmu dela."
              mainImage={{
                src: tmxSystem.image,
                alt: tmxSystem.name,
              }}
            />
          </section>
        ) : null}

        {/* USE CASES */}
        <UseCasesBlock
          id="primeri"
          title="Kje imajo coboti največ smisla"
          desc="Kjer se ponavljajo ročni gibi, prijemanje, vstavljanje ali odlaganje kosov."
          cases={[
            {
              title: "Pick & place",
              desc: "Pobiranje in odlaganje kosov v ponovljivem ritmu.",
            },
            {
              title: "Nalaganje strojev",
              desc: "Vstavljanje kosov v stroj ali postajo brez stalnega ročnega dela.",
            },
            {
              title: "Odvzem iz stroja",
              desc: "Odstranjevanje kosov po zaključeni operaciji.",
            },
            {
              title: "Pakiranje",
              desc: "Zlaganje kosov, priprava za pakiranje ali odlaganje v škatle.",
            },
            {
              title: "Kontrola",
              desc: "Podpora pri pregledovanju, sortiranju ali ponavljajoči kontroli.",
            },
            {
              title: "Pomoč operaterju",
              desc: "Prevzem nalog, ki so monotone, ponavljajoče ali fizično obremenjujoče.",
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
                  Poglejmo, katere naloge lahko prevzame cobot.
                </h2>

                <p className="mt-5 max-w-[58ch] text-[15px] leading-7 text-neutral-600 sm:text-[16px]">
                  Skupaj pregledamo ponavljajoče gibe, naloge operaterja,
                  prostor, varnost in ritem dela — potem ocenimo, kje ima
                  kolaborativni robot največji učinek.
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
                    alt="Kolaborativni robot v proizvodnem procesu"
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
                      Katere ponavljajoče naloge jemljejo največ časa in fokusa?
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