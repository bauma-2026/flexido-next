import Image from "next/image";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";

import { flexidoSystems } from "@/data/flexido-systems";

const systemLinks: Record<string, string> = {
  "flex-7-cnc": "/resitve/avtomatizacija-cnc-strojev",
  "flex-7-imm": "/resitve/brizganje-plastike",
  "flex-25-50": "/resitve/namenski-sistemi",
  tmx: "/resitve/kolaborativni-roboti",
  middleware: "/resitve/logistika",
};

const modules = [
  "Vision system",
  "Bowl feeder",
  "Stacker",
  "Cleaning station",
  "Engraving",
  "Infeed sorting station",
  "Gripper",
  "3D safety scanner",
  "Conveyor",
  "Buffer",
  "Storage lift",
  "Interfaces",
];

const applications = [
  {
    title: "Nalaganje in odvzem",
    desc: "Ponavljajoči vnos in odvzem kosov iz strojev ali postaj.",
  },
  {
    title: "Prijem in premik kosov",
    desc: "Stabilen prijem, prestavljanje, obračanje in pozicioniranje.",
  },
  {
    title: "Kontrola kakovosti",
    desc: "Vključitev vision sistema, senzorike ali preverjanja pred naslednjo fazo.",
  },
  {
    title: "Sortiranje in odlaganje",
    desc: "Usmerjanje kosov na pravo mesto, trak, voziček ali vmesno postajo.",
  },
  {
    title: "Transport materiala",
    desc: "Povezava materialnega toka med fazami, stroji in delovnimi mesti.",
  },
  {
    title: "Povezava z obstoječo opremo",
    desc: "Integracija nove ali obstoječe opreme v bolj povezan proces.",
  },
];

export default function Page() {
  return (
    <>
      <Header sticky={false} />

      <main className="bg-white text-neutral-950">
        {/* HERO */}
        <section className="relative overflow-hidden bg-neutral-950 text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(14,165,233,0.16),transparent_28%)]" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/88 via-black/70 to-black/35" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />

          <Container className="relative z-10 grid min-h-[560px] items-end gap-12 py-16 sm:min-h-[620px] sm:py-20 lg:min-h-[660px] lg:grid-cols-[0.95fr_1.05fr] lg:py-24">
            <div className="max-w-[760px]">
              <p className="text-[11px] uppercase tracking-[0.16em] text-white/50">
                E-katalog
              </p>

              <h1 className="mt-4 max-w-[12ch] text-5xl font-semibold leading-[0.95] tracking-[-0.04em] sm:text-6xl lg:text-[68px]">
                Sistemi, moduli in tehnični elementi.
              </h1>

              <p className="mt-6 max-w-[60ch] text-[16px] leading-7 text-white/75 sm:text-lg">
                Pregled standardnih celic, robotskih platform, transportnih
                rešitev in dodatnih modulov, ki jih vključujemo v
                avtomatizacijo proizvodnih procesov.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#naslednji-korak"
                  className="inline-flex items-center rounded-full bg-white px-6 py-3 text-[14px] font-medium text-neutral-950 transition hover:bg-white/90"
                >
                  Poglejmo vaš proces →
                </a>

                <a
                  href="/resitve"
                  className="inline-flex items-center rounded-full border border-white/20 px-6 py-3 text-[14px] font-medium text-white transition hover:bg-white/10"
                >
                  Poglej rešitve →
                </a>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="relative ml-auto max-w-[560px] overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] shadow-2xl">
                <div className="relative aspect-[4/3]">
                  <Image
                    src="/images/flexido/raw/flexido-25-50.webp"
                    alt="Flexido sistemska robotska celica"
                    fill
                    priority
                    sizes="(min-width: 1024px) 46vw, 100vw"
                    className="object-cover opacity-90"
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-[11px] uppercase tracking-[0.16em] text-white/45">
                    Sistemi
                  </p>

                  <p className="mt-2 max-w-[34ch] text-[18px] font-medium leading-6 text-white">
                    Standardne celice, platforme in moduli.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* SYSTEMS */}
        <Section className="border-b border-neutral-200 bg-white">
          <Container>
            <div className="max-w-[720px]">
              <p className="eyebrow">Sistemi</p>

              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                Standardne celice in platforme kot osnova rešitve.
              </h2>

              <p className="mt-5 text-[16px] leading-7 text-neutral-600">
                Vsak sistem je izhodišče. Končna rešitev se prilagodi procesu,
                prostoru, kosom, ciklu in obstoječi opremi.
              </p>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {flexidoSystems.map((item) => (
                <a
                  key={item.slug}
                  href={systemLinks[item.slug] ?? "/kontakt"}
                  className="group overflow-hidden rounded-[26px] border border-neutral-200 bg-white transition hover:-translate-y-0.5 hover:shadow-[0_24px_70px_rgba(15,23,42,0.08)]"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition duration-500 group-hover:scale-[1.03]"
                    />
                  </div>

                  <div className="p-7">
                    <p className="text-[11px] uppercase tracking-[0.16em] text-neutral-400">
                      {item.category}
                    </p>

                    <h3 className="mt-4 text-[25px] font-semibold tracking-[-0.04em] text-neutral-950">
                      {item.name}
                    </h3>

                    <p className="mt-4 text-[15px] leading-7 text-neutral-600">
                      {item.shortDescription}
                    </p>

                    <p className="mt-8 text-[14px] font-medium text-neutral-500 transition group-hover:text-neutral-950">
                      Povezana rešitev →
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </Container>
        </Section>

        {/* APPLICATIONS */}
        <Section className="bg-[#f6f9fc]">
          <Container>
            <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
              <div>
                <p className="eyebrow">Aplikacije</p>

                <h2 className="mt-3 max-w-[14ch] text-3xl font-semibold leading-[1] tracking-[-0.04em] sm:text-4xl">
                  Kje se sistemi uporabljajo v procesu.
                </h2>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {applications.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-[22px] bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.045)]"
                  >
                    <h3 className="text-[16px] font-semibold text-neutral-950">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-[14px] leading-6 text-neutral-600">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </Section>

        {/* MODULES */}
        <Section className="border-b border-neutral-200 bg-white">
          <Container>
            <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-16">
              <div>
                <p className="eyebrow">Moduli in opcije</p>

                <h2 className="mt-3 max-w-[15ch] text-3xl font-semibold leading-[1] tracking-[-0.04em] sm:text-4xl">
                  Sistem sestavimo iz pravih elementov.
                </h2>

                <p className="mt-5 max-w-[50ch] text-[16px] leading-7 text-neutral-600">
                  Glede na proces vključimo prijemala, senzoriko, transport,
                  vmesne postaje, kontrolo, odlaganje ali povezave z obstoječo
                  opremo.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {modules.map((item) => (
                  <div
                    key={item}
                    className="rounded-full border border-neutral-200 bg-white px-5 py-3 text-[14px] font-medium text-neutral-700"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </Section>

        {/* MIDDLEWARE */}
        <Section className="bg-neutral-950 text-white">
          <Container>
            <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-16">
              <div>
                <p className="text-[11px] uppercase tracking-[0.16em] text-white/45">
                  Middleware
                </p>

                <h2 className="mt-3 max-w-[15ch] text-4xl font-semibold leading-[0.95] tracking-[-0.04em] sm:text-5xl">
                  Povezava med opremo in procesom.
                </h2>
              </div>

              <div>
                <p className="max-w-[62ch] text-[16px] leading-7 text-white/65">
                  Avtomatizacija ni samo mehanski premik. Pri zahtevnejših
                  procesih je treba povezati novo opremo, obstoječe stroje,
                  transportne enote, vmesnike in podatke.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {[
                    "Povezava z novo opremo",
                    "Povezava z obstoječo opremo",
                    "Transport order service",
                    "ERP / proizvodni sistem",
                    "API / JSON komunikacija",
                    "Podpora za dodatne postaje",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-[18px] border border-white/10 bg-white/[0.04] px-5 py-4 text-[14px] font-medium text-white/75"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* CTA */}
        <section id="naslednji-korak" className="bg-white">
          <Container className="py-16 sm:py-20 lg:py-24">
            <div className="rounded-[28px] border border-neutral-200 bg-neutral-50 p-8 sm:p-10 lg:p-12">
              <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
                <div>
                  <p className="eyebrow">Naslednji korak</p>

                  <h2 className="mt-3 max-w-[14ch] text-3xl font-semibold leading-[1] tracking-[-0.04em] sm:text-4xl">
                    Ne iščete kataloga. Iščete pravo rešitev za proces.
                  </h2>
                </div>

                <div>
                  <p className="max-w-[58ch] text-[16px] leading-7 text-neutral-600">
                    Če že veste, kje se proces ustavlja, lahko skupaj preverimo,
                    kateri sistem, modul ali kombinacija rešitev ima največ
                    smisla.
                  </p>

                  <div className="mt-7">
                    <a
                      href="/kontakt"
                      className="inline-flex items-center rounded-full bg-[#0089d6] px-6 py-3 text-[14px] font-medium text-white transition hover:bg-[#0078bd]"
                    >
                      Poglejmo vaš proces →
                    </a>
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