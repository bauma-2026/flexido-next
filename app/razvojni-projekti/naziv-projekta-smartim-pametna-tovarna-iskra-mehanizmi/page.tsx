import Link from "next/link";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
import FundingLogos from "@/components/blocks/editorial/FundingLogos";
import DevelopmentProjectNav from "@/components/blocks/editorial/DevelopmentProjectNav";

const details = [
  { label: "Kategorija", value: "Razvojni projekti" },
  { label: "Projekt", value: "SmartIM" },
  { label: "Program", value: "JR Digit NOO" },
  { label: "Vrednost", value: "5.306.454,00 EUR" },
  { label: "Sofinanciranje", value: "2.199.300,98 EUR" },
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
      <Header sticky={false} />

      <main className="bg-white text-neutral-950">
        {/* ARTICLE HEADER */}
        <section className="border-b border-neutral-200 bg-white">
          <Container className="pt-12 pb-12 sm:pt-16 sm:pb-14 lg:pt-20 lg:pb-16">
            <Link
              href="/razvojni-projekti"
              className="inline-flex text-[14px] text-neutral-500 transition hover:text-neutral-950"
            >
              ← Nazaj na razvojne projekte
            </Link>

            <div className="mt-10 max-w-[1080px]">
              <p className="text-[11px] uppercase tracking-[0.18em] text-neutral-400">
                Razvojni projekti
              </p>

              <h1 className="mt-5 max-w-[980px] text-[40px] font-semibold leading-[0.98] tracking-[-0.055em] text-neutral-950 sm:text-[54px] lg:text-[64px]">
                SmartIM — pametna tovarna Iskra Mehanizmi
              </h1>

              <p className="mt-6 text-[14px] text-neutral-500">2022</p>
            </div>
          </Container>
        </section>

        {/* ARTICLE BODY */}
        <section className="bg-white">
          <Container className="py-14 sm:py-16 lg:py-20">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,760px)_280px] lg:gap-14 xl:grid-cols-[minmax(0,820px)_300px]">
              <article>
                <DevelopmentProjectNav />

                <DetailsCard mobile />

                {/* CONTENT */}
                <div className="mt-10 space-y-7 text-[16px] leading-8 text-neutral-700">
                  <p className="text-[18px] leading-8 text-neutral-800">
                    Namen projekta je razviti in implementirati koncept pametne
                    tovarne Iskra Mehanizmi.
                  </p>

                  <p>
                    Za vzpostavitev pametne tovarne bomo digitalno preobrazili
                    procese od nabave do proizvodnje in logistike ter vpeljali
                    napredne metode in tehnologije robotizacije, umetne
                    inteligence, komunikacije stroj-stroj ter izobrazili kadre
                    za rokovanje s programsko opremo.
                  </p>

                  <p>
                    Končni cilj projekta je razvijati pametne izdelke s pametno
                    opremo ter pametnim vodenjem.
                  </p>

                  <section className="space-y-5 pt-4">
                    <h2 className="text-[24px] font-semibold tracking-[-0.03em] text-neutral-950">
                      Rezultat projekta
                    </h2>

                    <p>
                      Rezultat projekta bo vzpostavljena pametna tovarna SmartIM
                      z digitalnimi procesi vodenja, upravljanja proizvodnje in
                      logistike ter novimi metodami prodaje.
                    </p>

                    <p>
                      Projektne aktivnosti vključujejo razvoj digitalne
                      strategije, ki bo naslovila celotno verigo vrednosti in
                      procese pametne tovarne, tehnološko krepitev za razvoj
                      rešitev nad stanjem trenutne tehnike ter implementacijo
                      rešitev v realno okolje.
                    </p>

                    <p>
                      V sklopu projekta bodo izvedena usposabljanja zaposlenih,
                      ki bodo pridobivali ustrezne digitalne kompetence in
                      delovali kot osrednji člen pametne tovarne.
                    </p>
                  </section>

                  <section className="space-y-5 pt-4">
                    <h2 className="text-[24px] font-semibold tracking-[-0.03em] text-neutral-950">
                      Konzorcijski partnerji
                    </h2>

                    <ul className="list-disc space-y-2 pl-5 text-neutral-700">
                      <li>ISKRA MEHANIZMI d.o.o.</li>
                      <li>GENIS d.o.o.</li>
                      <li>COMCOM d.o.o.</li>
                      <li>Pareto d.o.o.</li>
                      <li>FLEXIDO d.o.o.</li>
                    </ul>

                    <p>
                      Operacija je bila za sofinanciranje izbrana na Javnem
                      razpisu »Digitalna preobrazba gospodarstva« (JR Digit
                      NOO).
                    </p>
                  </section>
                </div>

                {/* PROJECT VALUE CALLOUT */}
                <div className="mt-12 rounded-2xl border border-neutral-200 bg-neutral-50 p-6">
                  <p className="text-[11px] uppercase tracking-[0.16em] text-neutral-400">
                    Vrednost projekta
                  </p>

                  <h2 className="mt-3 text-[22px] font-semibold tracking-[-0.03em] text-neutral-950">
                    Skupna vrednost projekta znaša 5.306.454,00 EUR.
                  </h2>

                  <p className="mt-3 max-w-[62ch] text-[15px] leading-7 text-neutral-600">
                    Vrednost sofinanciranja znaša 2.199.300,98 EUR. Naložba je
                    del ukrepov Načrta za okrevanje in odpornost in jo
                    sofinancira Evropska unija iz naslova Sklada za okrevanje in
                    odpornost — NextGenerationEU.
                  </p>
                </div>

                {/* FUNDING LOGOS */}
             <FundingLogos
  logos={[
    {
      src: "/images/funding/mgts.webp",
      alt: "Ministrstvo za gospodarstvo, turizem in šport",
      href: "https://www.gov.si/zbirke/delovna-mesta/ministrstvo-za-gospodarski-razvoj-in-tehnologijo/",
    },
    {
      src: "/images/funding/nextgenerationeu.webp",
      alt: "Financira Evropska unija — NextGenerationEU",
      href: "https://www.eu-skladi.si/",
    },
    {
      src: "/images/funding/noo.webp",
      alt: "Načrt za okrevanje in odpornost",
      href: "https://www.gov.si/zbirke/projekti-in-programi/nacrt-za-okrevanje-in-odpornost/",
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