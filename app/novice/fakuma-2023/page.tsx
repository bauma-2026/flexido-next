import Link from "next/link";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
import ArticleNav from "@/components/blocks/editorial/ArticleNav";

const details = [
  { label: "Kategorija", value: "Novice" },
  { label: "Dogodek", value: "Fakuma 2023" },
  { label: "Lokacija", value: "Nemčija" },
  { label: "Področje", value: "Predelava plastike / avtomatizacija" },
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

            <div className="mt-10 max-w-[980px]">
              <p className="text-[11px] uppercase tracking-[0.18em] text-neutral-400">
                Novice
              </p>

              <h1 className="mt-5 max-w-[880px] text-[42px] font-semibold leading-[0.95] tracking-[-0.055em] text-neutral-950 sm:text-[56px] lg:text-[68px]">
                Fakuma 2023
              </h1>

              <p className="mt-6 text-[14px] text-neutral-500">
                25. oktober 2023
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
                  src="/images/news/fakuma-2023.webp"
                  alt="Fakuma 2023"
                  className="w-full rounded-[26px] border border-neutral-200 bg-neutral-100"
                />

                <DetailsCard mobile />

                {/* CONTENT */}
                <div className="mt-10 space-y-7 text-[16px] leading-8 text-neutral-700">
                  <p className="text-[18px] leading-8 text-neutral-800">
                    Med 17. in 21. oktobrom smo sodelovali na največjem
                    mednarodnem sejmu za predelavo plastičnih mas in gume v
                    Evropi.
                  </p>

                  <section className="space-y-5 pt-4">
                    <h2 className="text-[24px] font-semibold tracking-[-0.03em] text-neutral-950">
                      Predstavitev rešitev in produktov
                    </h2>

                    <p>
                      Na sejmu smo predstavili naše storitve in produkte, ki
                      prinašajo večjo učinkovitost, stabilnost procesov ter
                      večjo konkurenčnost v proizvodnji.
                    </p>
                  </section>

                  <section className="space-y-5 pt-4">
                    <h2 className="text-[24px] font-semibold tracking-[-0.03em] text-neutral-950">
                      Povezovanje in pregled trendov
                    </h2>

                    <p>
                      Fakuma velja za enega ključnih industrijskih dogodkov v
                      Evropi, kjer podjetja predstavljajo najnovejše tehnologije
                      in trende na področju avtomatizacije, digitalizacije in
                      predelave plastike.
                    </p>

                    <p>
                      Udeležba nam omogoča neposreden stik s partnerji,
                      izmenjavo znanja ter vpogled v prihodnje smeri razvoja
                      industrije.
                    </p>
                  </section>
                </div>

                {/* VIDEO LINK */}
                <div className="mt-12 rounded-2xl border border-neutral-200 bg-neutral-50 p-6">
                  <p className="text-[11px] uppercase tracking-[0.16em] text-neutral-400">
                    Video
                  </p>

                  <h2 className="mt-3 text-[22px] font-semibold tracking-[-0.03em] text-neutral-950">
                    Oglejte si video s sejma Fakuma 2023.
                  </h2>

                  <p className="mt-3 max-w-[58ch] text-[15px] leading-7 text-neutral-600">
                    Kratek video prikazuje dogajanje in predstavitev rešitev na
                    sejmu.
                  </p>

                  <a
                    href="https://youtu.be/-kDQjzZmMco?feature=shared"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex items-center rounded-full bg-neutral-950 px-6 py-3 text-[14px] font-medium text-white transition hover:bg-neutral-800"
                  >
                    Odpri video →
                  </a>
                </div>

                <ArticleNav slug="fakuma-2023" />
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