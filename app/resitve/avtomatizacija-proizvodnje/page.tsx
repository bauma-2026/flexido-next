"use client";
import { useEffect, useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import ProcessBand from "@/components/blocks/home/ProcessBand";
import FinalCTA from "@/components/blocks/home/FinalCTA";
import WikiNav from "@/components/wiki/WikiNav";


const pageNavItems = [
  { href: "#kaj-pomeni", label: "Kaj pomeni" },
  { href: "#proces", label: "Kje nastajajo izgube" },
  { href: "#pristop", label: "Pristop" },
  { href: "#smisel", label: "Kdaj ima smisel" },
  { href: "#primeri", label: "Področja avtomatizacije" },
];

export default function Page() {
  const [active, setActive] = useState<string | null>(null);
  useEffect(() => {
  const sections = pageNavItems.map((item) =>
    document.querySelector(item.href)
  );

  const handleScroll = () => {
    let current = null;

    sections.forEach((section, index) => {
      if (!section) return;

      const rect = section.getBoundingClientRect();

      if (rect.top <= 120) {
        current = pageNavItems[index].href;
      }
    });

    setActive(current);
  };

  handleScroll();
  window.addEventListener("scroll", handleScroll);

  return () => window.removeEventListener("scroll", handleScroll);
}, []);
  return (
    <>
    
   <Header sticky={false} />

      <main className="bg-white text-neutral-950">
        {/* HERO */}
        <section className="relative overflow-hidden bg-neutral-950 text-white">
          <video
            src="/video/hero-process.mp4"
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
{/* DEFINITION */}
<Section id="kaj-pomeni" className="scroll-mt-24 bg-white">
  <Container>
    <div className="max-w-[720px]">
      <p className="eyebrow">Kaj pomeni</p>

      <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
        Avtomatizacija proizvodnje ni robot. Je urejen proces.
      </h2>

      <p className="mt-5 text-[16px] leading-7 text-neutral-600">
        Avtomatizacija pomeni, da delo v proizvodnji poteka brez nepotrebnih
        prekinitev, čakanja ali ročnih vmesnih korakov. Stroji, ljudje in
        material so povezani v logičen tok, kjer vsak korak sledi naslednjemu.
      </p>

      <p className="mt-4 text-[16px] leading-7 text-neutral-600">
        Robot ali celica sta samo del rešitve. Ključ je v tem, kako je proces
        zasnovan — in ali omogoča stabilno, ponovljivo in predvidljivo delo.
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
                  Zastoji pogosto nastajajo med fazami — pri nalaganju, odvzemu,
                  transportu, čakanju, ročnih korakih ali nepovezanem toku
                  materiala.
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
<Section id="smisel" className="scroll-mt-24 bg-white border-t border-neutral-200">
  <Container>
    <div className="grid gap-10 lg:grid-cols-2">
      {/* LEFT */}
      <div>
        <p className="eyebrow">Kdaj ima smisel</p>

        <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
          Avtomatizacija ima največji učinek, ko proces že obstaja.
        </h2>

        <p className="mt-5 text-[16px] leading-7 text-neutral-600">
          Če proces deluje, ampak ima izgube — takrat avtomatizacija prinese
          največ. Ne rešuje pa slabega sistema brez strukture.
        </p>
      </div>

      {/* RIGHT */}
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
                "Servis in podpora",
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

        <ProcessBand />
        <FinalCTA />
      </main>

      <Footer />
    </>
  );
}