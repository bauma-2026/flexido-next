import Link from "next/link";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import { newsItems } from "@/data/news";

const featured = newsItems[0];
const rest = newsItems.slice(1);

export default function Page() {
  return (
    <>
      <Header />

      <main className="bg-white text-neutral-950">
        {/* HERO */}
        <section className="border-b border-neutral-200 bg-white">
          <Container className="pt-14 pb-12 sm:pt-20 sm:pb-16 lg:pt-24 lg:pb-20">
            <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
              <div className="max-w-[680px]">
                <p className="eyebrow">Novice</p>

                <h1 className="mt-4 max-w-[12ch] text-4xl font-semibold leading-[0.95] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                  Aktualno in projekti
                </h1>
              </div>

              <div className="max-w-[620px]">
                <p className="text-[16px] leading-7 text-neutral-600">
                  Pregled projektov, sejmov, razvoja rešitev in pomembnih
                  mejnikov v podjetju Flexido.
                </p>

                <p className="mt-4 text-[15px] leading-7 text-neutral-500">
                  Objave prikazujejo, kako se rešitve razvijajo, predstavljajo
                  in uporabljajo v realnem proizvodnem okolju.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* FEATURED */}
        {featured ? (
          <section className="border-b border-neutral-200 bg-white">
            <Container className="py-14 sm:py-16 lg:py-20">
              <div className="grid gap-8 lg:grid-cols-[0.95fr_0.8fr] lg:items-center lg:gap-14">
                <Link href={featured.href} className="group block">
                  <div className="overflow-hidden rounded-[28px] border border-neutral-200 bg-neutral-100 shadow-[0_20px_70px_rgba(15,23,42,0.07)]">
                    <img
                      src={featured.image}
                      alt={featured.title}
                      className="aspect-[16/10] w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                </Link>

                <div className="max-w-[520px]">
                  <p className="eyebrow">Izpostavljeno</p>

                  <h2 className="mt-4 text-3xl font-semibold leading-[1.02] tracking-[-0.04em] sm:text-4xl">
                    {featured.title}
                  </h2>

                  <p className="mt-5 text-[15px] leading-7 text-neutral-600">
                    Najnovejša objava iz pregleda aktualnih projektov,
                    sodelovanj in predstavitev podjetja Flexido.
                  </p>

                  <div className="mt-7">
                    <Link
                      href={featured.href}
                      className="inline-flex items-center rounded-full bg-neutral-950 px-6 py-3 text-[14px] font-medium text-white transition hover:bg-neutral-800"
                    >
                      Preberi več →
                    </Link>
                  </div>
                </div>
              </div>
            </Container>
          </section>
        ) : null}

        {/* GRID */}
        <Section className="bg-[#f6f9fc] py-14 sm:py-16 lg:py-20">
          <Container>
            <div className="mb-10 grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
              <div className="max-w-[620px]">
                <p className="eyebrow">Vse objave</p>

                <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                  Projekti, sejmi in razvoj
                </h2>
              </div>

              <p className="max-w-[560px] text-[15px] leading-7 text-neutral-600">
                Izbrani zapisi iz razvoja, predstavitev, sejmov in projektov,
                ki kažejo širši kontekst dela podjetja Flexido.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {rest.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group overflow-hidden rounded-[26px] border border-neutral-200 bg-white transition hover:-translate-y-0.5 hover:shadow-[0_24px_70px_rgba(15,23,42,0.08)]"
                >
                  <div className="overflow-hidden bg-neutral-100">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="aspect-[16/10] w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                    />
                  </div>

                  <div className="p-6">
                    <p className="text-[11px] uppercase tracking-[0.16em] text-neutral-400">
                      Objava
                    </p>

                    <h3 className="mt-3 text-[19px] font-semibold leading-snug tracking-[-0.03em] text-neutral-950">
                      {item.title}
                    </h3>

                    <p className="mt-5 text-[14px] font-medium text-neutral-500 transition group-hover:text-neutral-950">
                      Preberi več →
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </Container>
        </Section>

        {/* LIGHT CTA */}
        <section className="border-t border-neutral-200/60 bg-white py-16 sm:py-20 lg:py-24">
          <Container>
            <div className="rounded-[28px] border border-neutral-200 bg-neutral-50 p-8 sm:p-10 lg:p-12">
              <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
                <div>
                  <p className="eyebrow">Naslednji korak</p>

                  <h2 className="mt-3 max-w-[14ch] text-3xl font-semibold leading-[1] tracking-[-0.04em] sm:text-4xl">
                    Iščete rešitev za svoj proces?
                  </h2>
                </div>

                <div>
                  <p className="max-w-[58ch] text-[16px] leading-7 text-neutral-600">
                    Če se v vašem procesu ponavljajo zastoji, ročni koraki ali
                    čakanje med fazami, lahko skupaj preverimo, katera rešitev
                    ima največ smisla.
                  </p>

                  <div className="mt-7 flex flex-wrap gap-3">
                    <a
                      href="/resitve"
                      className="inline-flex items-center rounded-full bg-neutral-950 px-6 py-3 text-[14px] font-medium text-white transition hover:bg-neutral-800"
                    >
                      Poglej rešitve →
                    </a>

                    <a
                      href="mailto:info@flexido.eu"
                      className="inline-flex items-center rounded-full border border-neutral-200 bg-white px-6 py-3 text-[14px] font-medium text-neutral-700 transition hover:border-neutral-300 hover:text-neutral-950"
                    >
                      Pošljite povpraševanje →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}