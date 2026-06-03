import Link from "next/link";
import { notFound } from "next/navigation";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
import ArticleNav from "@/components/blocks/editorial/ArticleNav";

const posts = {
  "flexido-na-sejmu-fakuma-2024": {
    eyebrow: "Novice",
    title:
      "Uspešna predstavitev podjetja Flexido na sejmu Fakuma 2024 v Nemčiji",
    date: "29. marec 2026",
    image: "/images/news/flexido-na-sejmu-fakuma-2024.webp",
    imageAlt: "Flexido na sejmu Fakuma 2024",
    details: [
      { label: "Kategorija", value: "Novice" },
      { label: "Dogodek", value: "Fakuma 2024" },
      { label: "Lokacija", value: "Nemčija" },
      { label: "Področje", value: "Avtomatizacija proizvodnje" },
    ],
    content: (
      <>
        <p className="text-[18px] leading-8 text-neutral-800">
          Podjetje Flexido se je uspešno predstavilo na sejmu Fakuma 2024 v
          Nemčiji, enem izmed pomembnejših mednarodnih sejmov za področje
          predelave plastike, avtomatizacije in proizvodnih tehnologij.
        </p>

        <section className="space-y-5 pt-4">
          <h2 className="text-[24px] font-semibold tracking-[-0.03em] text-neutral-950">
            Predstavitev rešitev za avtomatizacijo
          </h2>

          <p>
            Na sejmu smo predstavili naše rešitve za avtomatizacijo proizvodnje,
            robotizacijo procesov in podporo podjetjem pri optimizaciji
            proizvodnih tokov.
          </p>

          <p>
            Udeležba na sejmu je bila pomembna priložnost za predstavitev
            podjetja mednarodnim partnerjem, navezovanje novih poslovnih stikov
            in vpogled v aktualne smernice na področju industrijske
            avtomatizacije.
          </p>
        </section>

        <section className="space-y-5 pt-4">
          <h2 className="text-[24px] font-semibold tracking-[-0.03em] text-neutral-950">
            Prisotnost na tujih trgih
          </h2>

          <p>
            Projekt je bil izveden z namenom povečanja prepoznavnosti podjetja
            na tujih trgih ter krepitve izvozne usmerjenosti podjetja.
          </p>
        </section>
      </>
    ),
  },
};

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

function DetailsCard({
  details,
  mobile = false,
}: {
  details: { label: string; value: string }[];
  mobile?: boolean;
}) {
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

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const post = posts[slug as keyof typeof posts];

  if (!post) {
    notFound();
  }

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
                {post.eyebrow}
              </p>

              <h1 className="mt-5 max-w-[980px] text-[42px] font-semibold leading-[0.95] tracking-[-0.055em] text-neutral-950 sm:text-[56px] lg:text-[68px]">
                {post.title}
              </h1>

              <p className="mt-6 text-[14px] text-neutral-500">{post.date}</p>
            </div>
          </Container>
        </section>

        {/* ARTICLE BODY */}
        <section className="bg-white">
          <Container className="py-14 sm:py-16 lg:py-20">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,760px)_280px] lg:gap-14 xl:grid-cols-[minmax(0,820px)_300px]">
              <article>
                {post.image ? (
                  <img
                    src={post.image}
                    alt={post.imageAlt}
                    className="w-full rounded-[26px] border border-neutral-200 bg-neutral-100 shadow-[0_8px_30px_rgba(0,0,0,0.04)]"
                  />
                ) : null}

                <DetailsCard details={post.details} mobile />

                <div className="mt-10 space-y-7 text-[16px] leading-8 text-neutral-700">
                  {post.content}
                </div>

                {/* CTA CALLOUT */}
                <div className="mt-12 rounded-2xl border border-neutral-200 bg-neutral-50 p-6">
                  <p className="text-[11px] uppercase tracking-[0.16em] text-neutral-400">
                    Naslednji korak
                  </p>

                  <h2 className="mt-3 text-[22px] font-semibold tracking-[-0.03em] text-neutral-950">
                    Vas zanima, katera rešitev bi imela učinek v vašem procesu?
                  </h2>

                  <p className="mt-3 max-w-[58ch] text-[15px] leading-7 text-neutral-600">
                    Če se v proizvodnji pojavljajo zastoji, ročni koraki ali
                    čakanje med fazami, lahko skupaj preverimo, kateri del
                    procesa ima največ smisla za avtomatizacijo.
                  </p>

                  <a
                    href="mailto:info@flexido.eu"
                    className="mt-6 inline-flex items-center rounded-full bg-neutral-950 px-6 py-3 text-[14px] font-medium text-white transition hover:bg-neutral-800"
                  >
                    Pošljite povpraševanje →
                  </a>
                </div>

                <ArticleNav slug={slug} />
              </article>

              <DetailsCard details={post.details} />
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}