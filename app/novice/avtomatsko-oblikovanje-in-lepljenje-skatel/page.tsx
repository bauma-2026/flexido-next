import Link from "next/link";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
import ArticleNav from "@/components/blocks/editorial/ArticleNav";

const details = [
  { label: "Kategorija", value: "Novice" },
  { label: "Tip rešitve", value: "Avtomatsko oblikovanje in lepljenje" },
  { label: "Uporaba", value: "Kartonska embalaža" },
  { label: "Področje", value: "Avtomatizacija pakiranja" },
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
                Avtomatsko oblikovanje in lepljenje škatel
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
                  src="/images/news/avtomatsko-oblikovanje-in-lepljenje-skatel.webp"
                  alt="Avtomatsko oblikovanje in lepljenje škatel"
                  className="w-full rounded-[26px] border border-neutral-200 bg-neutral-100 shadow-[0_8px_30px_rgba(0,0,0,0.04)]"
                />

                <DetailsCard mobile />

                {/* CONTENT */}
                <div className="mt-10 space-y-7 text-[16px] leading-8 text-neutral-700">
                  <p className="text-[18px] leading-8 text-neutral-800">
                    Za naročnika smo pripravili rešitev za avtomatizacijo
                    oblikovanja in lepljenja kartonske embalaže.
                  </p>

                  <section className="space-y-5 pt-4">
                    <h2 className="text-[24px] font-semibold tracking-[-0.03em] text-neutral-950">
                      Avtomatizacija zahtevnega procesa
                    </h2>

                    <p>
                      Sama izdelava embalaže je bila zahtevna zaradi različnih
                      in tudi nepredvidljivih variabil, zato je bila potrebna
                      rešitev, ki omogoča bolj stabilen in nadzorovan potek
                      dela.
                    </p>

                    <p>
                      Sistem pomaga zmanjšati ročno delo, izboljšati
                      ponovljivost procesa in zagotoviti bolj predvidljivo
                      pripravo embalaže.
                    </p>
                  </section>

                  <section className="space-y-5 pt-4">
                    <h2 className="text-[24px] font-semibold tracking-[-0.03em] text-neutral-950">
                      Stabilnejši potek pakiranja
                    </h2>

                    <p>
                      Rešitev je primerna za proizvodna okolja, kjer sta
                      pomembni zanesljivost procesa in prilagodljivost pri delu
                      z embalažo.
                    </p>
                  </section>
                </div>

                {/* PROCESS CALLOUT */}
                <div className="mt-12 rounded-2xl border border-neutral-200 bg-neutral-50 p-6">
                  <p className="text-[11px] uppercase tracking-[0.16em] text-neutral-400">
                    Proces po meri
                  </p>

                  <h2 className="mt-3 text-[22px] font-semibold tracking-[-0.03em] text-neutral-950">
                    Ko standardna rešitev ne pokrije realnega toka dela.
                  </h2>

                  <p className="mt-3 max-w-[58ch] text-[15px] leading-7 text-neutral-600">
                    Primer kaže, kako je mogoče avtomatizirati tudi procese, kjer
                    se pojavljajo različne oblike, variabilnost materiala in
                    potreba po stabilnem ponavljanju.
                  </p>
                </div>

                {/* CTA CALLOUT */}
                <div className="mt-6 rounded-2xl border border-neutral-200 bg-white p-6">
                  <p className="text-[11px] uppercase tracking-[0.16em] text-neutral-400">
                    Povezana rešitev
                  </p>

                  <h2 className="mt-3 text-[22px] font-semibold tracking-[-0.03em] text-neutral-950">
                    Namenski sistemi za poseben proces
                  </h2>

                  <p className="mt-3 max-w-[58ch] text-[15px] leading-7 text-neutral-600">
                    Preverite, kako Flexido pristopa k rešitvam po meri procesa,
                    prostora, kosov, materiala in obstoječe opreme.
                  </p>

                  <a
                    href="/resitve/namenski-sistemi"
                    className="mt-6 inline-flex items-center rounded-full bg-neutral-950 px-6 py-3 text-[14px] font-medium text-white transition hover:bg-neutral-800"
                  >
                    Poglej rešitev →
                  </a>
                </div>

                <ArticleNav slug="avtomatsko-oblikovanje-in-lepljenje-skatel" />
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