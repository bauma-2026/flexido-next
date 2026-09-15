import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import { fundingMetadata } from "@/content/funding/metadata";
import { buildAlternates } from "@/i18n/metadata";
import { getPath } from "@/i18n/routes";
import type { RouteKey } from "@/i18n/routes";
import DarkBand from "@/components/ui/DarkBand";
import SectionHeader from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: fundingMetadata.fundingProjects.title,
  description: fundingMetadata.fundingProjects.description,
  robots: { index: false, follow: false },
  alternates: buildAlternates("fundingProjects", "sl"),
};

const projects = [
  {
    shortName: "Digitalizacija prodajnih poti",
    title:
      "Sofinanciranje stroškov digitalizacije prodajnih poti ter predstavitvenih in trženjskih gradiv",
    desc: "Projekt digitalizacije prodajnih poti, predstavitvenih gradiv in promocije podjetja na tujih trgih.",
    year: "2022",
    category: "Promocija na tujih trgih",
    href: "/razvojni-projekti/sofinanciranje-stroskov-digitalizacije-prodajnih-poti",
  },
  {
    shortName: "Poly Digit",
    title: "Digitalna preobrazba ključnih funkcij podjetja",
    desc: "Razvoj in uvedba digitalnih rešitev za izboljšanje ključnih poslovnih in proizvodnih funkcij podjetja.",
    year: "2022",
    category: "Digitalna preobrazba",
    href: "/razvojni-projekti/digitalna-preobrazba-kljucnih-funkcij-podjetja-polycom",
  },
  {
    shortName: "Digitalna transformacija",
    title: "Digitalna transformacija podjetja Flexido d.o.o.",
    desc: "Projekt celovite digitalne transformacije podjetja v okviru programa P4D ReactEU.",
    year: "2022",
    category: "Digitalizacija podjetja",
    href: "/razvojni-projekti/digitalna-transformacija-podjetja-flexido-d-o-o",
  },
  {
    shortName: "SmartIM",
    title: "SMARTIM — pametna tovarna",
    desc: "Razvojni projekt na področju pametne tovarne, digitalizacije proizvodnje in povezanih procesov.",
    year: "2022",
    category: "Pametna tovarna",
    href: "/razvojni-projekti/naziv-projekta-smartim-pametna-tovarna-iskra-mehanizmi",
  },
  {
    shortName: "SAFEGUARD",
    title: "Spodbude za raziskovalno-razvojni projekt",
    desc: "Raziskovalno-razvojni projekt za razvoj novih rešitev, procesov in tehnoloških izboljšav.",
    year: "2022",
    category: "Raziskave in razvoj",
    href: "/razvojni-projekti/spodbude-za-raziskovalno-razvojni-projekt",
  },
];

const interpretiveFramework = [
  {
    number: "01",
    title: "Razvoj tehnologij",
    body: "SAFEGUARD in SmartIM razvijata nove izdelke in metode robotizacije proizvodnje.",
  },
  {
    number: "02",
    title: "Digitalizacija procesov",
    body: "Poly Digit in digitalna transformacija Flexida digitalizirata poslovne in proizvodne funkcije.",
  },
  {
    number: "03",
    title: "Prenos v realne rešitve",
    body: "Digitalizacija prodajnih poti prenaša razvite rešitve v predstavitev in prodajo na trgu.",
  },
];

const practiceConnections: {
  label: string;
  source: string;
  routeKey: RouteKey;
}[] = [
  {
    label: "Kolaborativni roboti",
    source: "SAFEGUARD",
    routeKey: "solutionCobots",
  },
  {
    label: "Avtomatizacija proizvodnje",
    source: "SmartIM",
    routeKey: "solutionProductionAutomation",
  },
  {
    label: "Video predstavitev podjetja",
    source: "Digitalizacija prodajnih poti",
    routeKey: "video",
  },
  {
    label: "E-katalog",
    source: "Digitalizacija prodajnih poti",
    routeKey: "standardCells",
  },
  {
    label: "Novica: zaključek projekta Poly Digit",
    source: "Poly Digit",
    routeKey: "newsPolydigit",
  },
  {
    label: "Novica: digitalna transformacija Flexido",
    source: "Digitalna transformacija",
    routeKey: "newsDigitalTransformation",
  },
];

export default function Page() {
  return (
    <>
      <Header routeKey="fundingProjects" parentKey="aboutUs" />

      <main className="bg-white text-neutral-950">
        {/* HERO */}
        <section className="relative overflow-hidden bg-[var(--color-dark-band)] text-white">
          <div className="absolute inset-0">
            <Image
              src="/images/news/koncan-projekt-digitalne-preobrazbe-polydigit.webp"
              alt="Razvoj in digitalizacija proizvodnih procesov Flexido"
              fill
              priority
              sizes="100vw"
              className="object-cover opacity-45"
            />
          </div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(14,165,233,0.16),transparent_28%)]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-dark-band)]/90 via-[var(--color-dark-band)]/70 to-[var(--color-dark-band)]/35" />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-dark-band)]/70 via-transparent to-black/20" />

          <Container className="relative z-10 py-20 sm:py-24 lg:py-28">
            <div className="max-w-[820px]">
              <p className="eyebrow-on-dark">
                Razvojni projekti
              </p>

              <h1 className="text-display mt-4 max-w-[13ch]">
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

                <Link
                  href="/o-nas"
                  className="inline-flex items-center rounded-full border border-white/20 px-6 py-3 text-[14px] font-medium text-white transition hover:bg-white/10"
                >
                  O podjetju →
                </Link>
              </div>
            </div>
          </Container>
        </section>

        {/* INTRO — what these projects enable for Flexido in practice */}
        <Section className="border-b border-neutral-200 bg-white">
          <Container>
            <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-16">
              <SectionHeader
                eyebrow="V praksi"
                title="Kaj razvojni projekti pomenijo za delo Flexida."
              />

              <div className="max-w-[760px]">
                <p className="text-body measure-prose">
                  Vsak projekt sodi v eno od treh vlog: razvija novo tehnologijo,
                  digitalizira poslovni proces, ali prenaša razvito rešitev v
                  realno uporabo na trgu.
                </p>

                <div className="mt-8 grid gap-5 sm:grid-cols-3">
                  {interpretiveFramework.map((item) => (
                    <div key={item.number}>
                      <p className="text-[13px] font-semibold tracking-[-0.01em] text-[#0089d6]">
                        {item.number}
                      </p>
                      <p className="mt-2 text-[15px] font-semibold text-neutral-950">
                        {item.title}
                      </p>
                      <p className="mt-2 text-[14px] leading-6 text-neutral-600">
                        {item.body}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* PROJECTS */}
        <Section id="projekti" className="scroll-mt-24 surface-muted">
          <Container>
            <div className="mb-10 grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
              <SectionHeader
                eyebrow="Projekti"
                title="Pregled razvojnih projektov"
              />

              <p className="text-body measure-prose">
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
                  className="group rounded-[var(--radius-structural)] border border-neutral-200 bg-white p-7 transition hover:-translate-y-0.5 hover:border-neutral-300 sm:p-8"
                >
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-[12px] font-medium text-neutral-600">
                      {project.category}
                    </span>
                  </div>

                  <p className="mt-5 text-[19px] font-semibold tracking-[-0.03em] text-[#0078bd]">
                    {project.shortName}
                  </p>

                  <h3 className="mt-1.5 max-w-[34ch] text-[15px] font-medium leading-6 text-neutral-500">
                    {project.title}
                  </h3>

                  <p className="text-body mt-4 measure-prose">
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

        {/* CONNECTIONS TO PRACTICE */}
        <Section className="border-b border-neutral-200 bg-white">
          <Container>
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-16">
              <SectionHeader
                eyebrow="Povezave"
                title="Kje se razvojni projekti povezujejo s prakso."
                desc="Vsaka povezava vodi na rešitev, stran ali novico, ki je neposreden rezultat enega od projektov."
                descClassName="max-w-[42ch]"
              />

              <div className="grid gap-3 sm:grid-cols-2">
                {practiceConnections.map((item) => {
                  const href = getPath(item.routeKey, "sl");
                  if (!href) return null;

                  return (
                    <Link
                      key={item.label}
                      href={href}
                      className="group flex items-center justify-between gap-3 rounded-[var(--radius-structural)] border border-neutral-200 bg-white px-5 py-4 transition hover:border-neutral-300"
                    >
                      <span>
                        <span className="block text-[14px] font-medium text-neutral-900">
                          {item.label}
                        </span>
                        <span className="mt-0.5 block text-[12px] text-neutral-400">
                          Iz projekta: {item.source}
                        </span>
                      </span>
                      <span className="text-neutral-400 transition group-hover:translate-x-0.5 group-hover:text-neutral-950">
                        →
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </Container>
        </Section>

        {/* FUNDING NOTE */}
        <DarkBand
          tone="brand"
          eyebrow="Sofinanciranje"
          title="Projekti so delno podprti z razvojnimi in evropskimi sredstvi."
          body="Posamezne projektne strani vsebujejo pripadajoče informacije o programu, sofinanciranju in logotipih institucij, kadar so ti del projektne dokumentacije."
          primaryAction={{ href: "/kontakt", label: "Kontakt →" }}
          backgroundImage={{
            src: "/images/news/koncan-projekt-digitalne-preobrazbe-polydigit.webp",
            alt: "Razvoj in proizvodni procesi Flexido",
          }}
        />
      </main>

      <Footer />
    </>
  );
}