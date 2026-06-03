import Link from "next/link";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
import FundingLogos from "@/components/blocks/editorial/FundingLogos";
import ArticleNav from "@/components/blocks/editorial/ArticleNav";

const details = [
  { label: "Kategorija", value: "Novice" },
  { label: "Dogodek", value: "Fakuma 2024" },
  { label: "Lokacija", value: "Nemčija" },
  { label: "Področje", value: "Avtomatizacija proizvodnje" },
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
              href="/novice"
              className="inline-flex text-[14px] text-neutral-500 transition hover:text-neutral-950"
            >
              ← Nazaj na novice
            </Link>

            <div className="mt-10 max-w-[1080px]">
              <p className="text-[11px] uppercase tracking-[0.18em] text-neutral-400">
                Novice
              </p>

              <h1 className="mt-5 max-w-[980px] text-[42px] font-semibold leading-[0.95] tracking-[-0.055em] text-neutral-950 sm:text-[56px] lg:text-[68px]">
                Uspešna predstavitev podjetja Flexido na sejmu Fakuma 2024 v
                Nemčiji
              </h1>

              <p className="mt-6 text-[14px] text-neutral-500">
                29. marec 2026
              </p>
            </div>
          </Container>
        </section>

        {/* ARTICLE BODY */}
        <section className="bg-white">
          <Container className="py-14 sm:py-16 lg:py-20">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,760px)_280px] lg:gap-14 xl:grid-cols-[minmax(0,820px)_300px]">
              <article>
                {/* HERO IMAGE */}
                <img
                  src="/images/news/flexido-na-sejmu-fakuma-2024.webp"
                  alt="Flexido na sejmu Fakuma 2024"
                  className="w-full rounded-[26px] border border-neutral-200 bg-neutral-100"
                />

                <DetailsCard mobile />

                {/* CONTENT */}
                <div className="mt-10 space-y-7 text-[16px] leading-8 text-neutral-700">
                  <p className="text-[18px] leading-8 text-neutral-800">
                    Podjetje Flexido se je predstavilo na sejmu Fakuma 2024 v
                    Nemčiji, enem pomembnejših dogodkov na področju predelave
                    plastike in industrijske avtomatizacije.
                  </p>

                  <section className="space-y-5 pt-4">
                    <h2 className="text-[24px] font-semibold tracking-[-0.03em] text-neutral-950">
                      Predstavitev rešitev za avtomatizacijo
                    </h2>

                    <p>
                      Na sejmu smo predstavili rešitve za avtomatizacijo
                      proizvodnje, robotizacijo procesov ter optimizacijo
                      proizvodnih tokov.
                    </p>

                    <p>
                      Poudarek je bil na stabilnosti procesa, ponovljivosti
                      proizvodnje in praktičnih rešitvah za podjetja, ki želijo
                      zmanjšati ročno delo ter izboljšati pretočnost proizvodnje.
                    </p>
                  </section>

                  <section className="space-y-5 pt-4">
                    <h2 className="text-[24px] font-semibold tracking-[-0.03em] text-neutral-950">
                      Prisotnost na tujih trgih
                    </h2>

                    <p>
                      Udeležba na sejmu je bila pomembna priložnost za krepitev
                      prisotnosti podjetja na tujih trgih, vzpostavljanje novih
                      poslovnih povezav ter spremljanje aktualnih trendov v
                      industriji.
                    </p>
                  </section>
                </div>

                {/* CALLOUT */}
                <div className="mt-12 rounded-2xl border border-neutral-200 bg-neutral-50 p-5 text-[14px] leading-6 text-neutral-600">
                  Udeležbo na sejmu sofinancira Evropska unija v okviru podpore
                  internacionalizaciji podjetij.
                </div>

                <FundingLogos
                  logos={[
                    {
                      src: "/images/funding/mgts.webp",
                      alt: "Ministrstvo za gospodarstvo, turizem in šport",
                      href: "https://www.gov.si/drzavni-organi/ministrstva/ministrstvo-za-gospodarstvo-turizem-in-sport/",
                    },
                    {
                      src: "/images/funding/spirit-slovenia.webp",
                      alt: "SPIRIT Slovenija",
                      href: "https://www.spiritslovenia.si",
                    },
                    {
                      src: "/images/funding/i-feel-slovenia.webp",
                      alt: "I feel Slovenia",
                      href: "https://www.slovenia.info",
                    },
                    {
                      src: "/images/funding/eu-financing.webp",
                      alt: "Financira Evropska unija",
                      href: "https://evropskasredstva.si/",
                    },
                  ]}
                />

                <ArticleNav slug="flexido-na-sejmu-fakuma-2024" />
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