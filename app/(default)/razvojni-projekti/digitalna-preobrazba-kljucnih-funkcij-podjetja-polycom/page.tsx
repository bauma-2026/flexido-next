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
  title: fundingMetadata.fundingProjectPolyDigit.title,
  description: fundingMetadata.fundingProjectPolyDigit.description,
  robots: { index: false, follow: false },
  alternates: buildAlternates("fundingProjectPolyDigit", "sl"),
};

const details = [
  { label: "Kategorija", value: "Razvojni projekti" },
  { label: "Projekt", value: "Poly Digit" },
  { label: "Program", value: "Načrt za okrevanje in odpornost" },
  { label: "Trajanje", value: "marec 2022 – marec 2024" },
  { label: "Vrednost", value: "3.344.675,70 EUR" },
  { label: "Sofinanciranje", value: "1.375.706,40 EUR" },
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
        routeKey="fundingProjectPolyDigit"
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
                Poly Digit — digitalna preobrazba ključnih funkcij podjetja
                Polycom
              </h1>

              <p className="mt-3 text-[14px] text-neutral-500">2022–2024</p>

              <p className="mt-4 max-w-[62ch] text-[16px] leading-7 text-neutral-600">
                Digitalna preobrazba šestih ključnih poslovnih funkcij podjetja
                Polycom, izvedena v konzorciju s Flexidom in Lotrič Meroslovje.
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
                    Naše podjetje je skupaj s konzorcijskima partnerjema POLYCOM
                    d.o.o. in LOTRIČ Meroslovje d.o.o. uspešno zaključilo
                    sodelovanje na projektu digitalne preobrazbe pod imenom Poly
                    Digit.
                  </p>

                  <p>
                    V okviru projekta je podjetje Polycom vpeljalo nove
                    tehnologije in pristope v šestih poslovnih funkcijah, skupaj
                    pa smo izboljšali stopnjo digitaliziranosti pri
                    konzorcijskih partnerjih.
                  </p>

                  <p>
                    Vse vpeljane digitalne tehnologije se medsebojno
                    dopolnjujejo in tvorijo celovit sistem.
                  </p>
                </div>

                <div className="mt-10">
                  <DevelopmentProjectNav />
                </div>

                <div className="space-y-7 text-[16px] leading-8 text-neutral-700">
                  <section className="space-y-5 pt-4">
                    <h2 className="text-[24px] font-semibold tracking-[-0.03em] text-neutral-950">
                      Konzorcij
                    </h2>

                    <p>
                      Polycom Škofja Loka d.o.o. nastopa kot koordinator
                      projekta, Lotrič Meroslovje d.o.o. in Flexido d.o.o. pa
                      kot konzorcijska partnerja.
                    </p>
                  </section>

                  <section className="space-y-5 pt-4">
                    <h2 className="text-[24px] font-semibold tracking-[-0.03em] text-neutral-950">
                      Namen in cilji projekta
                    </h2>

                    <p>
                      V okviru projekta bo veliko podjetje Polycom v tesnem
                      partnerskem sodelovanju z dvema tehnološko vrhunskima MSP
                      digitalno preobrazilo šest ključnih poslovnih funkcij:
                      razvoj, proizvodnjo, logistiko, nabavo, prodajo in upravo
                      s poslovnim načrtovanjem.
                    </p>

                    <p>
                      Pričakovani rezultati digitalne preobrazbe so povečanje
                      učinkovitosti in produktivnosti poslovanja, znižanje
                      proizvodnih stroškov in stroškov poslovanja ter izboljšanje
                      učinkovitosti obstoječih digitalnih izdelkov, storitev in
                      razvojno-proizvodnih aktivnosti pri partnerjih.
                    </p>

                    <p>
                      Z uporabo razvitih in uvedenih tehnologij bomo dosegli
                      zastavljene cilje projekta, izboljšali raven digitalizacije
                      ter dvignili stopnjo digitalne pismenosti zaposlenih pri
                      vseh konzorcijskih partnerjih.
                    </p>
                  </section>

                  <section className="space-y-5 pt-4">
                    <h2 className="text-[24px] font-semibold tracking-[-0.03em] text-neutral-950">
                      Cilji Strategije digitalne transformacije gospodarstva
                    </h2>

                    <ol className="list-decimal space-y-3 pl-5 text-neutral-700">
                      <li>
                        Povečanje učinkovitosti, produktivnosti in
                        konkurenčnosti velikih podjetij z uvedbo digitalnih
                        inovacij, avtomatizacije, robotizacije ter tehnologij
                        4IR in 5IR.
                      </li>
                      <li>
                        Povečanje uporabe naprednih digitalnih tehnologij v
                        mikro, malih in srednje velikih podjetjih.
                      </li>
                      <li>
                        Spremenjeni poslovni modeli, procesne inovacije ter
                        razvoj novih inovacijskih platform v podjetjih.
                      </li>
                      <li>
                        Razvoj in uvajanje standardov na področju razvoja in
                        uporabe novih naprednih digitalnih tehnologij.
                      </li>
                      <li>
                        Dvig uporabe digitalnih javnih storitev za podjetja,
                        pametna mesta, skupnosti in prebivalce.
                      </li>
                    </ol>

                    <p>
                      S projektom partnerji prispevamo k doseganju ciljev
                      Strategije digitalne transformacije gospodarstva in k cilju
                      Slovenije, da se uvrsti med vodilne države na področju
                      uporabe naprednih digitalnih tehnologij po indeksu DESI.
                    </p>
                  </section>
                </div>

                <ProjectPracticeLink
                  heading="O zaključku projekta smo poročali tudi v novicah."
                  body="Povzetek rezultatov sodelovanja na projektu Poly Digit je objavljen v novici o zaključku projekta digitalne preobrazbe."
                  links={[{ label: "Preberi novico", routeKey: "newsPolydigit" }]}
                />

                {/* PROJECT VALUE CALLOUT */}
                <div className="mt-12 rounded-2xl border border-neutral-200 bg-neutral-50 p-6">
                  <p className="text-[11px] uppercase tracking-[0.16em] text-neutral-400">
                    Vrednost projekta
                  </p>

                  <h2 className="mt-3 text-[22px] font-semibold tracking-[-0.03em] text-neutral-950">
                    Skupna vrednost projekta znaša 3.344.675,70 EUR.
                  </h2>

                  <p className="mt-3 max-w-[62ch] text-[15px] leading-7 text-neutral-600">
                    Vrednost sofinanciranja znaša 1.375.706,40 EUR. Projekt je
                    sofinanciran iz Načrta za okrevanje in odpornost.
                  </p>
                </div>

                <div className="mt-10">
                  <DetailsCard mobile />
                </div>

                <ProjectFundingBlock
                  eyebrow="Sofinanciranje"
                  heading="Financira Evropska unija — NextGenerationEU."
                  paragraphs={[
                    "Projekt je del ukrepov Načrta za okrevanje in odpornost. Dodatne informacije so dostopne na uradnih straneh programa.",
                  ]}
                  links={[
                    {
                      href: "https://www.gov.si/zbirke/projekti-in-programi/nacrt-za-okrevanje-in-odpornost",
                      label: "Načrt za okrevanje in odpornost",
                    },
                    {
                      href: "https://www.evropskasredstva.si/",
                      label: "Evropska sredstva",
                    },
                  ]}
                  primaryLogos={[
                    {
                      src: "/images/funding/mgts.webp",
                      alt: "Ministrstvo za gospodarstvo, turizem in šport",
                      href: "https://www.gov.si/drzavni-organi/ministrstva/ministrstvo-za-gospodarstvo-turizem-in-sport/",
                    },
                    {
                      src: "/images/funding/noo.webp",
                      alt: "Načrt za okrevanje in odpornost",
                      href: "https://www.gov.si/zbirke/projekti-in-programi/nacrt-za-okrevanje-in-odpornost",
                    },
                    {
                      src: "/images/funding/polycom.webp",
                      alt: "Polycom",
                      href: "https://www.polycom.si/en/",
                    },
                    {
                      src: "/images/funding/lotric.webp",
                      alt: "Lotrič Meroslovje",
                      href: "https://www.lotric.si/",
                    },
                    {
                      src: "/images/funding/flexido-logo.webp",
                      alt: "Flexido",
                      href: "https://www.flexido.eu/",
                    },
                  ]}
                  secondaryLogos={[
                    {
                      src: "/images/funding/nextgenerationeu.webp",
                      alt: "NextGenerationEU",
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