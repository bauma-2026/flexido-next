import Link from "next/link";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";

const projects = [
  {
    title:
      "Sofinanciranje stroškov digitalizacije prodajnih poti ter predstavitvenih in trženjskih gradiv",
    desc: "Projekt digitalizacije prodajnih poti, predstavitvenih gradiv in promocije podjetja na tujih trgih.",
    year: "2022",
    category: "Promocija na tujih trgih",
    href: "/razvojni-projekti/sofinanciranje-stroskov-digitalizacije-prodajnih-poti",
  },
  {
    title: "Digitalna preobrazba ključnih funkcij podjetja",
    desc: "Razvoj in uvedba digitalnih rešitev za izboljšanje ključnih poslovnih in proizvodnih funkcij podjetja.",
    year: "2022",
    category: "Digitalna preobrazba",
    href: "/razvojni-projekti/digitalna-preobrazba-kljucnih-funkcij-podjetja-polycom",
  },
  {
    title: "Digitalna transformacija podjetja Flexido d.o.o.",
    desc: "Projekt celovite digitalne transformacije podjetja v okviru programa P4D ReactEU.",
    year: "2022",
    category: "Digitalizacija podjetja",
    href: "/razvojni-projekti/digitalna-transformacija-podjetja-flexido-d-o-o",
  },
  {
    title: "SMARTIM — pametna tovarna",
    desc: "Razvojni projekt na področju pametne tovarne, digitalizacije proizvodnje in povezanih procesov.",
    year: "2022",
    category: "Pametna tovarna",
    href: "/razvojni-projekti/naziv-projekta-smartim-pametna-tovarna-iskra-mehanizmi",
  },
  {
    title: "Spodbude za raziskovalno-razvojni projekt",
    desc: "Raziskovalno-razvojni projekt za razvoj novih rešitev, procesov in tehnoloških izboljšav.",
    year: "2022",
    category: "Raziskave in razvoj",
    href: "/razvojni-projekti/spodbude-za-raziskovalno-razvojni-projekt",
  },
];

const focusAreas = [
  "Digitalizacija prodajnih poti",
  "Razvoj proizvodnih sistemov",
  "Pametna tovarna",
  "Industrija 4.0",
  "Promocija na tujih trgih",
  "Raziskave in razvoj",
];

export default function Page() {
  return (
    <>
      <Header sticky={false} />

      <main className="bg-white text-neutral-950">
        {/* HERO */}
        <section className="relative overflow-hidden bg-neutral-950 text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(14,165,233,0.16),transparent_28%)]" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/88 via-black/72 to-black/35" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />

          <Container className="relative z-10 py-20 sm:py-24 lg:py-28">
            <div className="max-w-[820px]">
              <p className="text-[11px] uppercase tracking-[0.16em] text-white/50">
                Razvojni projekti
              </p>

              <h1 className="mt-4 max-w-[13ch] text-5xl font-semibold leading-[0.95] tracking-[-0.04em] sm:text-6xl lg:text-[68px]">
                Razvoj, digitalizacija in podpora inovacijam.
              </h1>

              <p className="mt-6 max-w-[62ch] text-[16px] leading-7 text-white/75 sm:text-lg">
                Pregled razvojnih projektov, digitalnih preobrazb in
                sofinanciranih aktivnosti, s katerimi Flexido razvija nove
                rešitve, procese in nastop na trgu.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#projekti"
                  className="inline-flex items-center rounded-full bg-white px-6 py-3 text-[14px] font-medium text-neutral-950 transition hover:bg-white/90"
                >
                  Poglej projekte →
                </a>

                <a
                  href="/o-nas"
                  className="inline-flex items-center rounded-full border border-white/20 px-6 py-3 text-[14px] font-medium text-white transition hover:bg-white/10"
                >
                  O podjetju →
                </a>
              </div>
            </div>
          </Container>
        </section>

        {/* INTRO */}
        <Section className="border-b border-neutral-200 bg-white">
          <Container>
            <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-16">
              <div>
                <p className="eyebrow">Pregled</p>

                <h2 className="mt-3 max-w-[15ch] text-3xl font-semibold leading-[1] tracking-[-0.04em] sm:text-4xl">
                  Projekti, ki podpirajo razvoj podjetja in proizvodnih rešitev.
                </h2>
              </div>

              <div className="max-w-[720px]">
                <p className="text-[16px] leading-7 text-neutral-600">
                  Razvojni projekti vključujejo digitalizacijo poslovnih in
                  prodajnih poti, razvoj proizvodnih rešitev, uvajanje novih
                  tehnologij ter aktivnosti za večjo prepoznavnost podjetja na
                  domačem in tujih trgih.
                </p>

                <p className="mt-5 text-[16px] leading-7 text-neutral-600">
                  Na tej strani so zbrani projekti, ki so pomembni za razvoj
                  podjetja Flexido, njegovih sistemov, procesov in tehnološke
                  usmeritve.
                </p>
              </div>
            </div>
          </Container>
        </Section>

        {/* PROJECTS */}
        <Section id="projekti" className="scroll-mt-24 bg-[#f6f9fc]">
          <Container>
            <div className="mb-10 grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
              <div>
                <p className="eyebrow">Projekti</p>

                <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                  Pregled razvojnih projektov
                </h2>
              </div>

              <p className="max-w-[620px] text-[15px] leading-7 text-neutral-600">
                Posamezen projekt ima svojo stran z opisom aktivnosti,
                področjem, programom in pripadajočimi informacijami o
                sofinanciranju.
              </p>
            </div>

            <div className="grid gap-5 lg:grid-cols-2">
              {projects.map((project) => (
                <Link
                  key={project.href}
                  href={project.href}
                  className="group rounded-[28px] border border-neutral-200 bg-white p-7 transition hover:-translate-y-0.5 hover:shadow-[0_24px_70px_rgba(15,23,42,0.08)] sm:p-8"
                >
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full bg-neutral-950 px-3 py-1 text-[12px] font-medium text-white">
                      {project.year}
                    </span>

                    <span className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-[12px] font-medium text-neutral-600">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="mt-6 max-w-[18ch] text-2xl font-semibold leading-[1.05] tracking-[-0.04em] text-neutral-950 sm:text-3xl">
                    {project.title}
                  </h3>

                  <p className="mt-5 max-w-[62ch] text-[15px] leading-7 text-neutral-600">
                    {project.desc}
                  </p>

                  <p className="mt-7 text-[14px] font-medium text-neutral-500 transition group-hover:text-neutral-950">
                    Preberi projekt →
                  </p>
                </Link>
              ))}
            </div>
          </Container>
        </Section>

        {/* FOCUS AREAS */}
        <Section className="border-b border-neutral-200 bg-white">
          <Container>
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-16">
              <div>
                <p className="eyebrow">Področja</p>

                <h2 className="mt-3 max-w-[14ch] text-3xl font-semibold leading-[1] tracking-[-0.04em] sm:text-4xl">
                  Kje se razvojni projekti povezujejo s prakso.
                </h2>
              </div>

              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {focusAreas.map((area) => (
                  <div
                    key={area}
                    className="rounded-full border border-neutral-200 bg-white px-5 py-3 text-[14px] font-medium text-neutral-700"
                  >
                    {area}
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </Section>

        {/* FUNDING NOTE */}
        <section className="bg-white py-16 sm:py-20 lg:py-24">
          <Container>
            <div className="rounded-[28px] border border-neutral-200 bg-neutral-50 p-8 sm:p-10 lg:p-12">
              <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
                <div>
                  <p className="eyebrow">Sofinanciranje</p>

                  <h2 className="mt-3 max-w-[15ch] text-3xl font-semibold leading-[1] tracking-[-0.04em] sm:text-4xl">
                    Projekti so delno podprti z razvojnimi in evropskimi
                    sredstvi.
                  </h2>
                </div>

                <div>
                  <p className="max-w-[62ch] text-[16px] leading-7 text-neutral-600">
                    Posamezne projektne strani vsebujejo pripadajoče informacije
                    o programu, sofinanciranju in logotipih institucij, kadar so
                    ti del projektne dokumentacije.
                  </p>

                  <div className="mt-7">
                    <a
                      href="/kontakt"
                      className="inline-flex items-center rounded-full bg-neutral-950 px-6 py-3 text-[14px] font-medium text-white transition hover:bg-neutral-800"
                    >
                      Kontakt →
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