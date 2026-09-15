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
  title: fundingMetadata.fundingProjectFlexidoDigital.title,
  description: fundingMetadata.fundingProjectFlexidoDigital.description,
  robots: { index: false, follow: false },
  alternates: buildAlternates("fundingProjectFlexidoDigital", "sl"),
};

const details = [
  { label: "Kategorija", value: "Razvojni projekti" },
  { label: "Projekt", value: "Digitalna transformacija" },
  { label: "Program", value: "P4D ReactEU" },
  { label: "Subvencija", value: "90.904,00 EUR" },
  { label: "Vrednost", value: "151.507,00 EUR" },
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
        routeKey="fundingProjectFlexidoDigital"
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
                Digitalna transformacija podjetja Flexido d.o.o.
              </h1>

              <p className="mt-3 text-[14px] text-neutral-500">2022</p>

              <p className="mt-4 max-w-[62ch] text-[16px] leading-7 text-neutral-600">
                Subvencionirana digitalna transformacija Flexida na področjih
                izkušnje kupca, podatkovne strategije, procesov, kibernetske
                varnosti in Industrije 4.0.
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
                    V okviru Javnega razpisa Spodbude za digitalno
                    transformacijo MSP (P4D ReactEU), ki ga je objavil
                    Slovenski podjetniški sklad, smo pridobili subvencijo v
                    višini 90.904,00 EUR.
                  </p>

                  <p>
                    Razpis je v celoti financiran iz Evropskega sklada za
                    regionalni razvoj in virov ReactEU.
                  </p>
                </div>

                <div className="mt-10">
                  <DevelopmentProjectNav />
                </div>

                <div className="space-y-7 text-[16px] leading-8 text-neutral-700">
                  <section className="space-y-5 pt-4">
                    <h2 className="text-[24px] font-semibold tracking-[-0.03em] text-neutral-950">
                      Cilji digitalne transformacije
                    </h2>

                    <p>
                      Glavni cilj operacije Digitalna transformacija podjetja
                      Flexido d.o.o. je izvedba celovite digitalne
                      transformacije naslednjih področij:
                    </p>

                    <ol className="list-decimal space-y-2 pl-5 text-neutral-700">
                      <li>Izkušnja kupca</li>
                      <li>Podatkovna strategija</li>
                      <li>
                        Procesi in digitalne rešitve, digitalni poslovni modeli
                      </li>
                      <li>Kibernetska varnost</li>
                      <li>Industrija 4.0</li>
                    </ol>
                  </section>

                  <section className="space-y-5 pt-4">
                    <h2 className="text-[24px] font-semibold tracking-[-0.03em] text-neutral-950">
                      Učinki projekta
                    </h2>

                    <p>
                      Skozi izvedeno transformacijo si obetamo neposredne
                      pozitivne učinke na prodajo, varstvo okolja, razvoj
                      kadrov, proizvodnjo in inovacijske potenciale podjetja.
                    </p>

                    <p>
                      Ocenjena višina stroškov znaša 151.507,00 EUR, operacija
                      pa se izvaja v poslovni enoti v Šenčurju.
                    </p>
                  </section>
                </div>

                <ProjectPracticeLink
                  heading="O poteku transformacije smo poročali tudi v novicah."
                  body="Povzetek izvedene digitalne transformacije podjetja Flexido je objavljen v novici."
                  links={[{ label: "Preberi novico", routeKey: "newsDigitalTransformation" }]}
                />

                <div className="mt-10">
                  <DetailsCard mobile />
                </div>

                <ProjectFundingBlock
                  eyebrow="Sofinanciranje"
                  heading="Projekt je sofinanciran iz evropskih sredstev."
                  paragraphs={[
                    "Naložbo sofinancirata Republika Slovenija in Evropska unija iz Evropskega sklada za regionalni razvoj (ESSR) v okviru odziva Unije na pandemijo COVID-19.",
                  ]}
                  primaryLogos={[
                    {
                      src: "/images/funding/mgts.webp",
                      alt: "Ministrstvo za gospodarstvo, turizem in šport",
                      href: "https://www.gov.si/zbirke/delovna-mesta/ministrstvo-za-gospodarski-razvoj-in-tehnologijo/",
                    },
                    {
                      src: "/images/funding/slovenski-podjetniski-sklad.webp",
                      alt: "Slovenski podjetniški sklad",
                      href: "https://www.podjetniskisklad.si/",
                    },
                  ]}
                  secondaryLogos={[
                    {
                      src: "/images/funding/eu-regionalni-sklad.webp",
                      alt: "Evropski sklad za regionalni razvoj",
                      href: "https://www.eu-skladi.si/",
                    },
                  ]}
                  legalLine={
                    <p>
                      Več informacij je na{" "}
                      <a
                        href="https://www.eu-skladi.si/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline decoration-neutral-300 underline-offset-2 transition hover:text-neutral-800"
                      >
                        www.eu-skladi.si
                      </a>
                      .
                    </p>
                  }
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