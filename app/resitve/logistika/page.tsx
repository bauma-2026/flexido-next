import Image from "next/image";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import ProcessBand from "@/components/blocks/home/ProcessBand";
import WikiNav from "@/components/wiki/WikiNav";
import SystemBlock from "@/components/solutions/SystemBlock";
import { flexidoSystems } from "@/data/flexido-systems";

const pageNavItems = [
  { href: "#proces", label: "Kje se izgublja čas" },
  { href: "#pristop", label: "Pristop" },
  { href: "#rezultat", label: "Rezultat" },
  { href: "#sistem", label: "Sistem" },
  { href: "#primeri", label: "Primeri uporabe" },
];

const middlewareSystem = flexidoSystems.find(
  (system) => system.slug === "middleware"
);

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
                Tok materiala
              </p>

              <h1 className="mt-4 text-4xl font-semibold leading-[0.95] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                <span className="block max-w-[12ch]">Interna</span>
                <span className="block max-w-[12ch]">logistika</span>
              </h1>

              <p className="mt-5 max-w-[54ch] text-[16px] leading-7 text-white/75">
                Uredimo notranji tok materiala med fazami proizvodnje — da so
                pravi kosi pravočasno na pravem mestu in da naslednja operacija
                ne čaka.
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

        {/* PROBLEM */}
        <Section id="proces" className="scroll-mt-24 bg-white">
          <Container>
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
              <div className="max-w-[560px]">
                <p className="eyebrow">Kje se izgublja čas</p>

                <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                  Proizvodnja se pogosto ne ustavi zaradi stroja, ampak zaradi
                  toka med fazami.
                </h2>

                <p className="mt-5 text-[16px] leading-7 text-neutral-600">
                  Material mora priti do naslednje operacije pravočasno, v
                  pravi količini in na pravo mesto. Ko ta tok ni urejen,
                  nastanejo čakanje, zaloge med fazami in nepotrebni premiki po
                  proizvodnji.
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
                  Rezultat: posamezne operacije delujejo, celoten proizvodni
                  tok pa izgublja predvidljivost.
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
                Interna logistika ni samo transport iz ene točke v drugo.
                Pomembno je, kdaj material pride do naslednje faze, koliko ga
                čaka vmes in kako se tok prilagodi dejanskemu ritmu proizvodnje.
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

        {/* RESULT */}
        <Section
          id="rezultat"
          className="scroll-mt-24 border-b border-neutral-200/60 bg-white"
        >
          <Container>
            <div className="max-w-[720px]">
              <p className="eyebrow">Rezultat</p>

              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                Material pride do naslednje faze takrat, ko ga proces potrebuje.
              </h2>

              <p className="mt-5 text-[16px] leading-7 text-neutral-600">
                Ko je notranji tok materiala urejen, posamezne operacije manj
                čakajo, proizvodnja pa deluje z bolj predvidljivim ritmom.
              </p>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {[
                "Manj čakanja med fazami",
                "Manj ročnega transporta",
                "Bolj pregleden tok materiala",
                "Stabilnejši ritem proizvodnje",
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
              Proces ne temelji več na tem, da nekdo pravočasno prestavi
              material. Tok postane del sistema.
            </p>
          </Container>
        </Section>

        {/* SYSTEM */}
        {middlewareSystem ? (
          <section id="sistem" className="scroll-mt-24">
            <SystemBlock
              title="Middleware kot povezava toka materiala, opreme in podatkov"
              desc="Middleware povezuje proizvodno opremo, transportne enote, postaje in ERP oziroma proizvodne sisteme v bolj pregleden in predvidljiv tok."
              note="Sistem se prilagodi obstoječi opremi, novim postajam, transportnim enotam in načinu izmenjave podatkov."
              mainImage={{
                src: middlewareSystem.image,
                alt: middlewareSystem.name,
              }}
            />
          </section>
        ) : null}

        {/* USE CASES */}
        <Section id="primeri" className="scroll-mt-24 bg-white">
          <Container>
            <div className="max-w-[720px]">
              <p className="eyebrow">Primeri uporabe</p>

              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                Kjer mora material pravočasno priti do naslednje faze
              </h2>

              <p className="mt-5 text-[16px] leading-7 text-neutral-600">
                Interna logistika ima največji učinek tam, kjer čakanje,
                vmesno odlaganje ali ročni transport začnejo omejevati ritem
                proizvodnje.
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
                  Poglejmo, kje se material ustavlja.
                </h2>

                <p className="mt-5 max-w-[58ch] text-[15px] leading-7 text-neutral-600 sm:text-[16px]">
                  Skupaj pregledamo poti materiala, čakanje med fazami,
                  vmesna odlaganja in ročne premike — potem ocenimo, kje ima
                  interna logistika največji učinek.
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
                    alt="Interna logistika in tok materiala v proizvodnji"
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
                      Kje material čaka, zastaja ali potuje brez jasnega toka?
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