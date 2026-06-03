import Link from "next/link";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
import FundingLogos from "@/components/blocks/editorial/FundingLogos";
import ArticleNav from "@/components/blocks/editorial/ArticleNav";

const details = [
  { label: "Kategorija", value: "Novice" },
  { label: "Projekt", value: "Digitalna transformacija" },
  { label: "Program", value: "P4D ReactEU" },
  { label: "Področje", value: "Digitalizacija podjetja" },
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

              <h1 className="mt-5 max-w-[900px] text-[42px] font-semibold leading-[0.95] tracking-[-0.055em] text-neutral-950 sm:text-[56px] lg:text-[68px]">
                Digitalna transformacija podjetja Flexido d.o.o.
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
                <DetailsCard mobile />

                {/* CONTENT */}
                <div className="space-y-7 text-[16px] leading-8 text-neutral-700">
                  <p className="text-[18px] leading-8 text-neutral-800">
                    V okviru javnega razpisa Spodbude za digitalno
                    transformacijo MSP (P4D ReactEU), ki ga je objavil
                    Slovenski podjetniški sklad, smo pridobili subvencijo za
                    izvedbo digitalne transformacije podjetja.
                  </p>

                  <p>
                    Operacija je v celoti financirana iz Evropskega sklada za
                    regionalni razvoj in virov ReactEU, skupna vrednost projekta
                    pa znaša 151.507,00 EUR.
                  </p>

                  <section className="space-y-5 pt-4">
                    <h2 className="text-[24px] font-semibold tracking-[-0.03em] text-neutral-950">
                      Cilji digitalne transformacije
                    </h2>

                    <p>
                      Glavni cilj operacije je izvedba celovite digitalne
                      transformacije podjetja na naslednjih področjih:
                    </p>

                    <ul className="list-disc space-y-2 pl-5 text-neutral-700">
                      <li>Izkušnja kupca</li>
                      <li>Podatkovna strategija</li>
                      <li>Procesi in digitalni poslovni modeli</li>
                      <li>Kibernetska varnost</li>
                      <li>Industrija 4.0</li>
                    </ul>
                  </section>

                  <section className="space-y-5 pt-4">
                    <h2 className="text-[24px] font-semibold tracking-[-0.03em] text-neutral-950">
                      Učinki projekta
                    </h2>

                    <p>
                      Skozi izvedeno transformacijo pričakujemo pozitivne učinke
                      na prodajo, razvoj kadrov, optimizacijo procesov ter večjo
                      inovacijsko sposobnost podjetja.
                    </p>

                    <p>Projekt se izvaja v poslovni enoti v Šenčurju.</p>
                  </section>
                </div>

                {/* INFO CALLOUT */}
                <div className="mt-12 rounded-2xl border border-neutral-200 bg-neutral-50 p-6">
                  <p className="text-[11px] uppercase tracking-[0.16em] text-neutral-400">
                    Sofinanciranje
                  </p>

                  <h2 className="mt-3 text-[22px] font-semibold tracking-[-0.03em] text-neutral-950">
                    Projekt je sofinanciran iz evropskih sredstev.
                  </h2>

                  <p className="mt-3 max-w-[62ch] text-[15px] leading-7 text-neutral-600">
                    Naložbo sofinancirata Republika Slovenija in Evropska unija
                    iz Evropskega sklada za regionalni razvoj (ESSR) v okviru
                    odziva Unije na pandemijo COVID-19.
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

                {/* FUNDING LOGOS */}
                <FundingLogos
                  logos={[
                    {
                      src: "/images/funding/mgrt.webp",
                      alt: "Republika Slovenija, Ministrstvo za gospodarski razvoj in tehnologijo",
                      href: "https://www.gov.si/",
                    },
                    {
                      src: "/images/funding/slovenski-podjetniski-sklad.webp",
                      alt: "Slovenski podjetniški sklad",
                      href: "https://www.podjetniskisklad.si/",
                    },
                    {
                      src: "/images/funding/eu-skladi.webp",
                      alt: "Evropska unija, Evropski sklad za regionalni razvoj",
                      href: "https://www.eu-skladi.si/",
                    },
                  ]}
                />

                <ArticleNav slug="digitalna-transformacija-podjetja-flexido-d-o-o" />
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