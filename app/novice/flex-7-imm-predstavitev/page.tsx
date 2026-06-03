import Link from "next/link";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
import ArticleNav from "@/components/blocks/editorial/ArticleNav";

const details = [
  { label: "Kategorija", value: "Novice" },
  { label: "Produkt", value: "FLEX 7 IMM" },
  { label: "Tip rešitve", value: "Robotska celica za IMM stroje" },
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
                FLEX 7 IMM predstavitev
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
                  src="/images/news/flex-7-imm-predstavitev.webp"
                  alt="FLEX 7 IMM"
                  className="w-full rounded-[26px] border border-neutral-200 bg-neutral-100 shadow-[0_8px_30px_rgba(0,0,0,0.04)]"
                />

                <DetailsCard mobile />

                {/* CONTENT */}
                <div className="mt-10 space-y-7 text-[16px] leading-8 text-neutral-700">
                  <p className="text-[18px] leading-8 text-neutral-800">
                    FLEX 7 IMM je alternativa tradicionalnim rešitvam
                    avtomatizacije z linearnimi manipulatorji, saj omogoča
                    večjo fleksibilnost in širši nabor operacij.
                  </p>

                  <section className="space-y-5 pt-4">
                    <h2 className="text-[24px] font-semibold tracking-[-0.03em] text-neutral-950">
                      Več kot samo odvzem kosov
                    </h2>

                    <p>
                      Rešitev vključuje integrirane 6-osne robote, ki poleg
                      osnovne funkcije odvzemanja kosov omogočajo tudi dodatne
                      operacije.
                    </p>

                    <p>
                      Med njimi so odstranjevanje odlivka, preverjanje zalitosti
                      kosov, kontrola prisotnosti srha ter pregled prelitij na
                      brizgancih.
                    </p>
                  </section>

                  <section className="space-y-5 pt-4">
                    <h2 className="text-[24px] font-semibold tracking-[-0.03em] text-neutral-950">
                      Nadzor kakovosti in procesov
                    </h2>

                    <p>
                      Sistem omogoča zaznavanje površinskih napak ter zagotavlja
                      bolj stabilen in ponovljiv proizvodni proces.
                    </p>

                    <p>
                      Zaradi fleksibilnosti robotske celice je rešitev primerna
                      za podjetja, ki želijo nadgraditi obstoječe procese brez
                      kompleksnih posegov v proizvodnjo.
                    </p>
                  </section>
                </div>

                {/* CTA CALLOUT */}
                <div className="mt-12 rounded-2xl border border-neutral-200 bg-neutral-50 p-6">
                  <p className="text-[11px] uppercase tracking-[0.16em] text-neutral-400">
                    Povezana rešitev
                  </p>

                  <h2 className="mt-3 text-[22px] font-semibold tracking-[-0.03em] text-neutral-950">
                    Avtomatizacija procesa brizganja plastike
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

                <ArticleNav slug="flex-7-imm-predstavitev" />
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