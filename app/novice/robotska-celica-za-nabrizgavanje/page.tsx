import Link from "next/link";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
import ArticleNav from "@/components/blocks/editorial/ArticleNav";

const details = [
  { label: "Kategorija", value: "Novice" },
  { label: "Tip rešitve", value: "Robotska celica" },
  { label: "Uporaba", value: "Nabrizgavanje kosov" },
  { label: "Področje", value: "Avtomatizacija brizganja plastike" },
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
                Robotska celica za nabrizgavanje
              </h1>

              <p className="mt-6 text-[14px] text-neutral-500">
                08. marec 2022
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
                  src="/images/news/robotska-celica-za-nabrizgavanje.webp"
                  alt="Robotska celica za nabrizgavanje"
                  className="w-full rounded-[26px] border border-neutral-200 bg-neutral-100"
                />

                <DetailsCard mobile />

                {/* CONTENT */}
                <div className="mt-10 space-y-7 text-[16px] leading-8 text-neutral-700">
                  <p className="text-[18px] leading-8 text-neutral-800">
                    Za naročnika smo uspešno avtomatizirali nabrizgavanje kosov
                    in optimizirali zahtevano količino kosov v proizvodnem
                    procesu.
                  </p>

                  <section className="space-y-5 pt-4">
                    <h2 className="text-[24px] font-semibold tracking-[-0.03em] text-neutral-950">
                      Večja proizvodna zmogljivost
                    </h2>

                    <p>
                      Z uvedeno rešitvijo naročnik danes izdeluje skoraj
                      tretjino več kosov, kot je bilo prvotno predvideno.
                    </p>

                    <p>
                      Robotska celica omogoča bolj stabilen potek dela, manj
                      odvisnosti od ročnega poseganja v proces in bolj
                      predvidljivo proizvodnjo.
                    </p>
                  </section>

                  <section className="space-y-5 pt-4">
                    <h2 className="text-[24px] font-semibold tracking-[-0.03em] text-neutral-950">
                      Avtomatizacija procesa nabrizgavanja
                    </h2>

                    <p>
                      Rešitev je zasnovana za učinkovito manipulacijo kosov v
                      procesu brizganja plastike, kjer so pomembni ponovljivost,
                      hitrost in nadzor kakovosti.
                    </p>
                  </section>
                </div>

                {/* RESULT CALLOUT */}
                <div className="mt-12 rounded-2xl border border-neutral-200 bg-neutral-50 p-6">
                  <p className="text-[11px] uppercase tracking-[0.16em] text-neutral-400">
                    Rezultat
                  </p>

                  <h2 className="mt-3 text-[22px] font-semibold tracking-[-0.03em] text-neutral-950">
                    Skoraj tretjina več kosov od prvotno predvidene količine.
                  </h2>

                  <p className="mt-3 max-w-[58ch] text-[15px] leading-7 text-neutral-600">
                    Primer pokaže, kako lahko pravilno zasnovana robotska celica
                    izboljša stabilnost procesa, zmanjša ročno poseganje in
                    poveča proizvodno zmogljivost.
                  </p>
                </div>

                {/* CTA CALLOUT */}
                <div className="mt-6 rounded-2xl border border-neutral-200 bg-white p-6">
                  <p className="text-[11px] uppercase tracking-[0.16em] text-neutral-400">
                    Povezana rešitev
                  </p>

                  <h2 className="mt-3 text-[22px] font-semibold tracking-[-0.03em] text-neutral-950">
                    Avtomatizacija brizganja plastike
                  </h2>

                  <p className="mt-3 max-w-[58ch] text-[15px] leading-7 text-neutral-600">
                    Preverite, kako Flexido pristopa k odvzemu, odlaganju,
                    kontroli in stabilnemu toku kosov po ciklu brizganja.
                  </p>

                  <a
                    href="/resitve/brizganje-plastike"
                    className="mt-6 inline-flex items-center rounded-full bg-neutral-950 px-6 py-3 text-[14px] font-medium text-white transition hover:bg-neutral-800"
                  >
                    Poglej rešitev →
                  </a>
                </div>

                <ArticleNav slug="robotska-celica-za-nabrizgavanje" />
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