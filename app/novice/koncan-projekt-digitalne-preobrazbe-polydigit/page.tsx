import Link from "next/link";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
import ArticleNav from "@/components/blocks/editorial/ArticleNav";

const details = [
  { label: "Kategorija", value: "Novice" },
  { label: "Projekt", value: "Poly Digit" },
  {
    label: "Partnerji",
    value: "POLYCOM d.o.o. / LOTRIČ Meroslovje d.o.o.",
  },
  { label: "Področje", value: "Digitalna preobrazba" },
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
                Končan projekt digitalne preobrazbe Poly Digit
              </h1>

              <p className="mt-6 text-[14px] text-neutral-500">
                20. junij 2024
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
                  src="/images/news/digitalna-transformacija-podjetja-flexido.webp"
                  alt="Digitalna transformacija podjetja Flexido"
                  className="w-full rounded-[26px] border border-neutral-200 bg-neutral-100"
                />

                <DetailsCard mobile />

                {/* CONTENT */}
                <div className="mt-10 space-y-7 text-[16px] leading-8 text-neutral-700">
                  <p className="text-[18px] leading-8 text-neutral-800">
                    Podjetje Flexido je skupaj s konzorcijskima partnerjema
                    POLYCOM d.o.o. in LOTRIČ Meroslovje d.o.o. uspešno
                    zaključilo sodelovanje na projektu digitalne preobrazbe Poly
                    Digit.
                  </p>

                  <section className="space-y-5 pt-4">
                    <h2 className="text-[24px] font-semibold tracking-[-0.03em] text-neutral-950">
                      Izboljšanje digitaliziranosti procesov
                    </h2>

                    <p>
                      V okviru projekta je podjetje Polycom vpeljalo nove
                      tehnologije in pristope v šestih poslovnih funkcijah,
                      skupaj pa smo izboljšali stopnjo digitaliziranosti pri
                      konzorcijskih partnerjih.
                    </p>

                    <p>
                      Vpeljane digitalne tehnologije se medsebojno dopolnjujejo
                      in tvorijo celovit sistem za bolj pregledno, učinkovito in
                      povezano delovanje.
                    </p>
                  </section>

                  <section className="space-y-5 pt-4">
                    <h2 className="text-[24px] font-semibold tracking-[-0.03em] text-neutral-950">
                      Večja digitalna pismenost in boljši procesi
                    </h2>

                    <p>
                      Z uporabo razvitih in uvedenih tehnologij smo dosegli
                      zastavljene cilje projekta, izboljšali raven digitalizacije
                      ter dvignili stopnjo digitalne pismenosti zaposlenih pri
                      vseh konzorcijskih partnerjih.
                    </p>
                  </section>
                </div>

                {/* CALLOUT */}
                <div className="mt-12 rounded-2xl border border-neutral-200 bg-neutral-50 p-5 text-[14px] leading-6 text-neutral-600">
                  Projekt je sofinanciran iz Načrta za okrevanje in odpornost.
                </div>

                <ArticleNav slug="koncan-projekt-digitalne-preobrazbe-polydigit" />
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