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
  title: fundingMetadata.fundingProjectSalesDigitalization.title,
  description: fundingMetadata.fundingProjectSalesDigitalization.description,
  robots: { index: false, follow: false },
  alternates: buildAlternates("fundingProjectSalesDigitalization", "sl"),
};

const details = [
  { label: "Kategorija", value: "Razvojni projekti" },
  { label: "Projekt", value: "Digitalizacija prodajnih poti" },
  { label: "Področje", value: "Promocija na tujih trgih" },
  { label: "Program", value: "Sofinanciranje digitalizacije" },
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
        routeKey="fundingProjectSalesDigitalization"
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
                Sofinanciranje stroškov digitalizacije prodajnih poti ter
                predstavitvenih in trženjskih gradiv za promocijo na tujih
                trgih.
              </h1>

              <p className="mt-3 text-[14px] text-neutral-500">2022</p>

              <p className="mt-4 max-w-[62ch] text-[16px] leading-7 text-neutral-600">
                Digitalizacija prodajnih poti in izdelava predstavitvenih
                gradiv za večjo prepoznavnost Flexida na tujih trgih.
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
                    V podjetju si v zadnjem letu prizadevamo za večjo
                    prepoznavnost tako na domačem kot na tujih trgih. Tako smo
                    se poslužili prodajnih poti in predstavitve podjetja v
                    digitalni obliki.
                  </p>

                  <p>
                    Za potrebe prepoznavnosti na tujih trgih smo v sodelovanju
                    z zunanjimi sodelavci ustvarili predstavitveni video
                    podjetja, ki prikazuje našo dejavnost. Namen vsebine je
                    pritegniti pozornost trga in prispevati k prepoznavnosti ter
                    uveljavitvi blagovne znamke.
                  </p>
                </div>

                <div className="mt-10">
                  <DevelopmentProjectNav />
                </div>

                <div className="space-y-7 text-[16px] leading-8 text-neutral-700">
                  <section className="space-y-5 pt-4">
                    <h2 className="text-[24px] font-semibold tracking-[-0.03em] text-neutral-950">
                      Digitalizacija prodajnih poti
                    </h2>

                    <p>
                      V okviru digitalizacije prodajnih poti smo optimizirali
                      spletno stran in digitalne kanale ter vzpostavili sistem
                      merjenja učinkovitosti. Namen operacije je pregled
                      aktivnosti in sledenje potencialnim kupcem na tujih trgih.
                    </p>

                    <p>
                      Merjenje odziva na digitalnih platformah izboljšuje
                      poslovne odločitve in daje jasen pregled nad
                      učinkovitostjo.
                    </p>
                  </section>

                  <section className="space-y-5 pt-4">
                    <h2 className="text-[24px] font-semibold tracking-[-0.03em] text-neutral-950">
                      Predstavitvena in trženjska gradiva
                    </h2>

                    <p>
                      V sklopu predstavitve podjetja smo izdelali predstavitveni
                      katalog za domače in tuje trge, s katerim kupcu
                      predstavimo svojo dejavnost. Katalog je dostopen v tiskani
                      in digitalni obliki za vse naprave: računalnik, telefon in
                      tablico.
                    </p>

                    <p>
                      V razvojni projekt je bilo vloženega veliko znanja, truda
                      in časa, saj smo kot podjetje z manjšo ekipo vključili
                      večino sodelavcev in projekt pripeljali od idejne zasnove
                      do končnega rezultata, ki odpira nove poslovne
                      priložnosti.
                    </p>
                  </section>

                  <p>
                    Vsem sodelavcem in partnerjem, predvsem Ministrstvu za
                    gospodarski razvoj in tehnologijo, se zahvaljujemo za
                    podporo in sodelovanje pri izvedbi projekta.
                  </p>
                </div>

                <ProjectPracticeLink
                  heading="Rezultati projekta so danes del spletne strani Flexido."
                  body="V okviru projekta so nastali predstavitveni video podjetja in nov predstavitveni katalog, ki sta danes dostopna na straneh Video in E-katalog."
                  links={[
                    { label: "Video predstavitev", routeKey: "video" },
                    { label: "E-katalog", routeKey: "standardCells" },
                  ]}
                />

                <div className="mt-10">
                  <DetailsCard mobile />
                </div>

                <ProjectFundingBlock
                  eyebrow="Sofinanciranje"
                  heading="Projekt je sofinanciran iz evropskih sredstev."
                  paragraphs={[
                    "Naložbo sofinancirata Republika Slovenija in Evropska unija iz Evropskega sklada za regionalni razvoj, in sicer v vrednosti 14.284,00 EUR.",
                  ]}
                  primaryLogos={[
                    {
                      src: "/images/funding/mgts.webp",
                      alt: "Ministrstvo za gospodarstvo, turizem in šport",
                      href: "https://www.gov.si/zbirke/delovna-mesta/ministrstvo-za-gospodarski-razvoj-in-tehnologijo/",
                    },
                    {
                      src: "/images/funding/spirit-slovenia.webp",
                      alt: "SPIRIT Slovenija",
                      href: "https://www.spiritslovenia.si/",
                    },
                  ]}
                  secondaryLogos={[
                    {
                      src: "/images/funding/eu-regionalni-sklad.webp",
                      alt: "Evropski sklad za regionalni razvoj",
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