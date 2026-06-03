import Image from "next/image";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";

const whatWeDo = [
  {
    title: "Robotske celice",
    desc: "Razvoj in integracija celic za različne proizvodne procese.",
  },
  {
    title: "Povezava procesov",
    desc: "Povežemo nalaganje, odvzem in premik materiala med operacijami.",
  },
  {
    title: "Celovit pristop",
    desc: "Od ideje do izvedbe — projekt, konstrukcija, programiranje in zagon.",
  },
];

const approach = [
  {
    title: "Razumemo proces",
    desc: "Najprej pogledamo, kje nastajajo zastoji in ročno delo.",
  },
  {
    title: "Predlagamo rešitev",
    desc: "Načrtujemo tok materiala in vlogo robotske celice.",
  },
  {
    title: "Izvedemo in zaženemo",
    desc: "Postavimo sistem in ga pripeljemo do stabilnega delovanja.",
  },
];

export default function ONasPage() {
  return (
    <>
      <Header />

      <main className="bg-white text-neutral-950">
        {/* HERO */}
        <section className="relative overflow-hidden border-b border-neutral-200 bg-neutral-950 text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(14,165,233,0.16),transparent_32%)]" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/92 via-black/80 to-black/45" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/20" />

          <Container className="relative z-10 py-16 sm:py-20 lg:py-24">
            <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,520px)] lg:gap-14">
              <div className="max-w-[760px]">
                <p className="text-[11px] uppercase tracking-[0.18em] text-white/45">
                  O nas
                </p>

                <h1 className="mt-4 max-w-[12ch] text-5xl font-semibold leading-[0.96] tracking-[-0.045em] sm:text-6xl lg:text-[66px]">
                  Avtomatizacija proizvodnje brez kompliciranja.
                </h1>

                <p className="mt-6 max-w-[62ch] text-base leading-7 text-white/70 sm:text-lg">
                  V Flexidu razvijamo in integriramo robotske celice za CNC in
                  brizganje plastike. Fokus je na stabilnem procesu, manj
                  ročnega dela in jasnem toku med operacijami.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="#kontakt"
                    className="inline-flex items-center rounded-full bg-white px-6 py-3 text-[14px] font-medium text-neutral-950 transition hover:bg-white/90"
                  >
                    Poglejmo vaš proces →
                  </a>

                  <a
                    href="/proces"
                    className="inline-flex items-center rounded-full border border-white/20 px-6 py-3 text-[14px] font-medium text-white transition hover:bg-white/10"
                  >
                    Kako delamo →
                  </a>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] shadow-[0_24px_80px_rgba(0,0,0,0.45)]">
                <div className="relative aspect-[4/3]">
                  <Image
                    src="/images/robot.jpg"
                    alt="Flexido robotska celica v proizvodnji"
                    fill
                    priority
                    sizes="(min-width: 1024px) 42vw, 100vw"
                    className="object-cover object-[32%_42%] opacity-90"
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/72 via-black/16 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                  <p className="text-[10px] uppercase tracking-[0.18em] text-white/55">
                    V praksi
                  </p>

                  <p className="mt-2 max-w-[34ch] text-sm leading-6 text-white/88 sm:text-[15px]">
                    Razvoj, integracija in podpora za celice ter proizvodne
                    procese.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* KAJ DELAMO */}
        <section className="py-20 sm:py-24 lg:py-28">
          <Container>
            <div className="max-w-[620px]">
              <p className="text-[11px] uppercase tracking-[0.18em] text-neutral-500">
                Kaj delamo
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">
                Rešitve za stabilnejši proizvodni proces.
              </h2>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {whatWeDo.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[1.5rem] border border-neutral-200 bg-white p-6 shadow-sm"
                >
                  <h3 className="text-lg font-semibold tracking-[-0.02em]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-neutral-600">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* TEAM / TRUST */}
        <section className="border-y border-neutral-200 bg-[#f6f9fc] py-20 sm:py-24 lg:py-28">
          <Container>
            <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
              <div>
                <p className="text-[11px] uppercase tracking-[0.18em] text-neutral-500">
                  Ekipa
                </p>

                <h2 className="mt-3 max-w-[13ch] text-3xl font-semibold leading-[1] tracking-[-0.04em] sm:text-4xl lg:text-5xl">
                  Ekipa, ki razvija in integrira rešitve v praksi.
                </h2>
              </div>

              <div>
                <p className="max-w-[64ch] text-[16px] leading-7 text-neutral-600">
                  Flexido ni samo ponudnik robotskih celic. Za rešitvami stoji
                  ekipa, ki povezuje konstrukcijo, programiranje, integracijo in
                  zagon v realnem proizvodnem okolju.
                </p>
              </div>
            </div>

            <div className="mt-12 overflow-hidden rounded-[2rem] border border-neutral-200 bg-white shadow-[0_24px_80px_rgba(15,23,42,0.08)]">
              <div className="relative aspect-[16/9] bg-neutral-100">
                <Image
                  src="/images/flexido/about/flexido-team.jpg"
                  alt="Ekipa Flexido"
                  fill
                  sizes="(min-width: 1024px) 1100px, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </Container>
        </section>

        {/* VIDEO */}
        <section className="py-20 sm:py-24 lg:py-28">
          <Container>
            <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
              <div>
                <p className="text-[11px] uppercase tracking-[0.18em] text-neutral-500">
                  Video
                </p>

                <h2 className="mt-3 max-w-[14ch] text-3xl font-semibold leading-[1] tracking-[-0.04em] sm:text-4xl lg:text-5xl">
                  Kako Flexido deluje v praksi.
                </h2>
              </div>

              <div>
                <p className="max-w-[64ch] text-[16px] leading-7 text-neutral-600">
                  Predstavitveni video pokaže realno okolje, sisteme in način
                  dela — od standardnih celic do rešitev, ki se prilagodijo
                  proizvodnemu procesu.
                </p>

                <div className="mt-8 overflow-hidden rounded-[2rem] border border-neutral-200 bg-black shadow-[0_24px_80px_rgba(15,23,42,0.08)]">
                  <video
                    controls
                    playsInline
                    preload="metadata"
                    poster="/images/flexido/video/flexido-company-video-poster.jpg"
                    className="aspect-video w-full bg-black"
                  >
                    <source
                      src="/video/flexido-company-video.mp4"
                      type="video/mp4"
                    />
                  </video>
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-4">
                  <a
                    href="/video"
                    className="inline-flex items-center rounded-full bg-neutral-950 px-6 py-3 text-sm font-medium text-white transition hover:bg-neutral-800"
                  >
                    Poglej še predstavitveni video →
                  </a>

                  <p className="text-sm leading-6 text-neutral-500">
                    Dodaten video prikazuje Flexido sisteme in avtomatizacijo v
                    gibanju.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* KAKO PRISTOPIMO */}
        <section className="bg-neutral-50 py-20 sm:py-24 lg:py-28">
          <Container>
            <div className="max-w-[620px]">
              <p className="text-[11px] uppercase tracking-[0.18em] text-neutral-500">
                Kako pristopimo
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">
                Najprej proces. Potem rešitev.
              </h2>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {approach.map((item, index) => (
                <div
                  key={item.title}
                  className="rounded-[1.5rem] border border-neutral-200 bg-white p-6 shadow-sm"
                >
                  <span className="text-xs font-medium text-neutral-400">
                    0{index + 1}
                  </span>

                  <h3 className="mt-4 text-lg font-semibold tracking-[-0.02em]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-neutral-600">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* LIGHT FINAL CTA */}
        <section
          id="kontakt"
          className="border-t border-neutral-200/60 bg-white py-20 sm:py-24 lg:py-28"
        >
          <Container>
            <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
              <div className="max-w-[620px]">
                <p className="text-[11px] uppercase tracking-[0.16em] text-neutral-500">
                  Kontakt
                </p>

                <h2 className="mt-3 max-w-[13ch] text-3xl font-semibold leading-[0.98] tracking-[-0.04em] text-neutral-950 sm:text-4xl lg:text-5xl">
                  Poglejmo vaš proces
                </h2>
              </div>

              <div className="max-w-[680px]">
                <p className="text-[15px] leading-7 text-neutral-600 sm:text-[16px]">
                  Če razmišljate o avtomatizaciji, ima smisel najprej pogledati,
                  kje proces izgublja ritem.
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
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}