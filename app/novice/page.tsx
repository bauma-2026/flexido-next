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
          <Container className="pt-14 pb-10 sm:pt-20 sm:pb-12 lg:pt-20 lg:pb-14">
            <div className="max-w-[680px]">
              <p className="eyebrow">Novice</p>

              <h1 className="mt-4 max-w-[12ch] text-4xl font-semibold leading-[0.95] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                Aktualno in projekti
              </h1>

              <p className="mt-4 max-w-[54ch] text-[16px] leading-7 text-neutral-600">
                Pregled projektov, sejmov, razvoja rešitev in pomembnih
                mejnikov v podjetju Flexido.
              </p>
            </div>
          </Container>
        </section>

        {/* FEATURED */}
<section className="border-b border-neutral-200 bg-white">
  <Container className="py-14 sm:py-16 lg:py-20">
    <div className="grid gap-8 lg:grid-cols-[0.95fr_0.8fr] lg:items-center lg:gap-14">
      <Link href={featured.href} className="group block">
        <div className="overflow-hidden rounded-[26px] bg-neutral-100">
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
          Najnovejša objava iz pregleda aktualnih projektov, sodelovanj in
          predstavitev podjetja Flexido.
        </p>

        <Link
          href={featured.href}
          className="mt-7 inline-flex items-center rounded-full bg-neutral-950 px-6 py-3 text-[14px] font-medium text-white transition hover:bg-neutral-800"
        >
          Preberi več →
        </Link>
      </div>
    </div>
  </Container>
</section>

        {/* GRID */}
        <Section className="bg-white py-14 sm:py-16 lg:py-20">
          <Container>
            <div className="mb-10 max-w-[620px]">
              <p className="eyebrow">Vse objave</p>

              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                Projekti, sejmi in razvoj
              </h2>
            </div>

            <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
              {rest.map((item) => (
                <Link key={item.href} href={item.href} className="group block">
                  <div className="overflow-hidden rounded-[22px] bg-neutral-100">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="aspect-[16/10] w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                    />
                  </div>

                  <h3 className="mt-5 text-[18px] font-semibold leading-snug tracking-[-0.03em] text-neutral-950">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-[14px] font-medium text-neutral-500 transition group-hover:text-neutral-950">
                    Preberi več →
                  </p>
                </Link>
              ))}
            </div>
          </Container>
        </Section>
      </main>

      <Footer />
    </>
  );
}