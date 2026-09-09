import Link from "next/link";
import type { Metadata } from "next";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
import ProjectFundingBlock from "@/components/blocks/editorial/ProjectFundingBlock";
import ProjectPracticeLink from "@/components/blocks/editorial/ProjectPracticeLink";
import DevelopmentProjectNav from "@/components/blocks/editorial/DevelopmentProjectNav";
import { fundingMetadata } from "@/content/funding/metadata";
import { buildAlternates } from "@/i18n/metadata";

export const metadata: Metadata = {
  title: fundingMetadata.fundingProjectSafeguard.title,
  description: fundingMetadata.fundingProjectSafeguard.description,
  robots: { index: false, follow: false },
  alternates: buildAlternates("fundingProjectSafeguard", "sl"),
};

const details = [
  { label: "Kategorija", value: "Razvojni projekti" },
  { label: "Projekt", value: "SAFEGUARD" },
  { label: "Tip", value: "Raziskovalno-razvojni projekt" },
  { label: "Vrednost", value: "372.930,00 EUR" },
  { label: "Sofinanciranje", value: "160.231,49 EUR" },
];

function DetailsCard({ mobile = false }: { mobile?: boolean }) {
  return (
    <aside
      className={[
        "rounded-[24px] border border-neutral-200 bg-white p-6",
        mobile ? "lg:hidden" : "hidden lg:block lg:sticky lg:top-24",
      ].join(" ")}
    >
      <p className="text-[11px] uppercase tracking-[0.16em] text-neutral-500">
        Podrobnosti
      </p>

      <div className="mt-5 divide-y divide-neutral-200">
        {details.map((item) => (
          <div key={item.label} className="py-4 first:pt-0 last:pb-0">
            <p className="text-[13px] font-medium text-neutral-950">
              {item.label}
            </p>

            <p className="mt-1 text-[14px] leading-6 text-neutral-600">
              {item.value}
            </p>
          </div>
        ))}
      </div>
    </aside>
  );
}

export default function Page() {
  return (
    <>
      <Header
        sticky={false}
        routeKey="fundingProjectSafeguard"
        parentKey="aboutUs"
      />

      <main className="bg-white text-neutral-950">
        {/* ARTICLE HEADER */}
        <section className="border-b border-neutral-200 bg-white">
          <Container className="pt-8 pb-8 sm:pt-10 sm:pb-9 lg:pt-12 lg:pb-10">
            <Link
              href="/razvojni-projekti"
              className="inline-flex text-[14px] text-neutral-500 transition hover:text-neutral-950"
            >
              ← Nazaj na razvojne projekte
            </Link>

            <div className="mt-6 max-w-[820px]">
              <p className="text-[11px] uppercase tracking-[0.18em] text-neutral-400">
                Razvojni projekti
              </p>

              <h1 className="mt-4 text-[32px] font-semibold leading-[1.04] tracking-[-0.045em] text-neutral-950 sm:text-[40px] lg:text-[48px]">
                SAFEGUARD — pametna zaščitna komora
              </h1>

              <p className="mt-3 text-[14px] text-neutral-500">2022</p>

              <p className="mt-4 max-w-[62ch] text-[16px] leading-7 text-neutral-600">
                Razvoj pametne zaščitne komore za varno sodelovanje ljudi in
                kolaborativnih robotov v proizvodnji.
              </p>
            </div>
          </Container>
        </section>

        {/* ARTICLE BODY */}
        <section className="bg-white">
          <Container className="py-14 sm:py-16 lg:py-20">
            <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,760px)_280px] lg:gap-14 xl:grid-cols-[minmax(0,820px)_300px]">
              <article>
                {/* CONTENT */}
                <div className="space-y-7 text-[16px] leading-8 text-neutral-700">
                  <p className="text-[18px] leading-8 text-neutral-800">
                    V okviru javnega razpisa »Spodbude za raziskovalno razvojne
                    projekte 2« in subvencioniranega projekta razvijamo rešitev,
                    ki je primerna za podjetja, ki želijo avtomatizirati
                    proizvodnjo.
                  </p>

                  <p>
                    S projektom se lotevamo tehnološkega prestrukturiranja
                    orodjarstva, obenem pa uvajamo višji nivo avtomatizacije in
                    robotizacije proizvodnje v predelovalnih dejavnostih.
                  </p>
                </div>

                <div className="mt-10">
                  <DevelopmentProjectNav />
                </div>

                <div className="space-y-7 text-[16px] leading-8 text-neutral-700">
                  <section className="space-y-5 pt-4">
                    <h2 className="text-[24px] font-semibold tracking-[-0.03em] text-neutral-950">
                      Pametna zaščitna komora SAFEGUARD
                    </h2>

                    <p>
                      SAFEGUARD je pametna zaščitna komora za kooperativne
                      oziroma kolaborativne robote. Izdelek deluje kot pametno
                      prijemalo, ki omogoča varno delo in nenehno kontrolira
                      proces.
                    </p>

                    <p>
                      Z našimi tehnologijami uporabnikom omogočamo polno
                      robotsko avtomatizacijo procesa na preprost in prilagodljiv
                      način, vključno z razreševanjem aspekta varne proizvodnje.
                    </p>
                  </section>

                  <section className="space-y-5 pt-4">
                    <h2 className="text-[24px] font-semibold tracking-[-0.03em] text-neutral-950">
                      Funkcionalnost rešitve
                    </h2>

                    <p>
                      Iz vidika funkcionalnosti je cilj razviti uporabniku
                      prijazen in privlačen izdelek, ki omogoča enostavno
                      montažo, kompaktnost in cenovno dostopnost.
                    </p>

                    <p>Rešitev zaščiti kos iz vseh strani in zagotavlja:</p>

                    <ul className="list-disc space-y-2 pl-5 text-neutral-700">
                      <li>tvorjenje kompaktne mehanske zaščite nad izdelkom,</li>
                      <li>
                        nemoteno sočasno delo kooperativnih robotov in človeka,
                        razen v primeru trka, ko se delovanje robota ustavi,
                      </li>
                      <li>hitrejše delovanje robota oziroma krajši cikel.</li>
                    </ul>
                  </section>

                  <section className="space-y-5 pt-4">
                    <h2 className="text-[24px] font-semibold tracking-[-0.03em] text-neutral-950">
                      Prednosti uporabe
                    </h2>

                    <p>
                      Uporaba pametne zaščite SAFEGUARD v industriji omogoča še
                      več avtomatizacije procesov s kooperativnimi roboti.
                    </p>

                    <ul className="list-disc space-y-2 pl-5 text-neutral-700">
                      <li>varno delo,</li>
                      <li>hitrejše cikle tudi ob prisotnosti delavca,</li>
                      <li>
                        minimalni poseg v obstoječi layout — razporeditev
                        strojev in delovnih mest lahko ostane nespremenjena.
                      </li>
                    </ul>
                  </section>
                </div>

                <ProjectPracticeLink
                  heading="SAFEGUARD naslavlja isto področje kot Flexidova rešitev za kolaborativne robote."
                  body="Zaščita in varno sodelovanje s kolaborativnimi roboti sta del Flexidove rešitve za kolaborativne robote."
                  links={[{ label: "Kolaborativni roboti", routeKey: "solutionCobots" }]}
                />

                {/* PROJECT VALUE CALLOUT */}
                <div className="mt-12 rounded-2xl border border-neutral-200 bg-neutral-50 p-6">
                  <p className="text-[11px] uppercase tracking-[0.16em] text-neutral-400">
                    Vrednost projekta
                  </p>

                  <h2 className="mt-3 text-[22px] font-semibold tracking-[-0.03em] text-neutral-950">
                    Skupna vrednost projekta znaša 372.930,00 EUR.
                  </h2>

                  <p className="mt-3 max-w-[62ch] text-[15px] leading-7 text-neutral-600">
                    Pričakovana vrednost sofinanciranja znaša 160.231,49 EUR.
                    Naložbo sofinancira Republika Slovenija in Evropska unija iz
                    Evropskega sklada za regionalni razvoj.
                  </p>

                  <a
                    href="https://www.eu-skladi.si/"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex items-center rounded-full bg-neutral-950 px-6 py-3 text-[14px] font-medium text-white transition hover:bg-neutral-800"
                  >
                    Več informacij →
                  </a>
                </div>

                <div className="mt-10">
                  <DetailsCard mobile />
                </div>

                <ProjectFundingBlock
                  eyebrow="Sofinanciranje"
                  primaryLogos={[
                    {
                      src: "/images/funding/mgrt.webp",
                      alt: "Ministrstvo za gospodarski razvoj in tehnologijo",
                      href: "https://www.gov.si/",
                    },
                    {
                      src: "/images/funding/kameleon.webp",
                      alt: "Kameleon",
                      href: "#",
                    },
                  ]}
                  secondaryLogos={[
                    {
                      src: "/images/funding/eu-skladi.webp",
                      alt: "EU skladi",
                      href: "https://www.eu-skladi.si/",
                    },
                  ]}
                />
              </article>

              <DetailsCard />
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}