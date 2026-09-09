import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
import type { Locale } from "@/i18n/config";
import type { RouteKey } from "@/i18n/routes";

type DetailItem = {
  label: string;
  value: string;
};

type Props = {
  locale?: Locale;
  routeKey?: RouteKey;
  parentKey?: RouteKey;
  eyebrow?: string;
  title: string;
  date?: string;
  details?: DetailItem[];
  detailsLabel?: string;
  backHref?: string;
  backLabel?: string;
  heroImage?: { src: string; alt: string };
  children: React.ReactNode;
};

export default function EditorialPage({
  locale = "sl",
  routeKey = "home",
  parentKey,
  eyebrow,
  title,
  date,
  details = [],
  detailsLabel = "Podrobnosti",
  backHref = "/novice",
  backLabel = "Nazaj na novice",
  heroImage,
  children,
}: Props) {
  return (
    <>
      <Header locale={locale} routeKey={routeKey} parentKey={parentKey} />

      <main className="bg-white text-neutral-950">
        {heroImage ? (
          <section className="relative overflow-hidden bg-[var(--color-dark-band)] pb-8 pt-16 text-white sm:pb-10 sm:pt-20 lg:pt-24">
            <div className="absolute inset-0">
              <img
                src={heroImage.src}
                alt={heroImage.alt}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-dark-band)] via-[var(--color-dark-band)]/75 to-[var(--color-dark-band)]/40" />

            <Container className="relative">
              <a
                href={backHref}
                className="text-[13px] text-white/60 transition hover:text-white"
              >
                ← {backLabel}
              </a>

              <div className="mt-8 max-w-[760px]">
                {eyebrow && <p className="eyebrow-on-dark">{eyebrow}</p>}

                <h1 className="mt-3 max-w-[18ch] text-4xl font-semibold leading-[0.95] tracking-[-0.04em] sm:text-5xl lg:text-[52px]">
                  {title}
                </h1>

                {date && <p className="mt-4 text-[14px] text-white/60">{date}</p>}
              </div>
            </Container>
          </section>
        ) : (
          <section className="relative border-b border-neutral-200/60 bg-white">
            {/* subtle bg layer */}
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.02),transparent)]" />

            <Container className="relative py-10 sm:py-12">
              <a
                href={backHref}
                className="text-[13px] text-neutral-500 transition hover:text-neutral-950"
              >
                ← {backLabel}
              </a>

              <div className="mt-8 max-w-[760px]">
                {eyebrow && (
                  <p className="text-[11px] uppercase tracking-[0.16em] text-neutral-500">
                    {eyebrow}
                  </p>
                )}

                <h1 className="mt-3 max-w-[18ch] text-4xl font-semibold leading-[0.95] tracking-[-0.04em] sm:text-5xl lg:text-[52px]">
                  {title}
                </h1>

                {date && (
                  <p className="mt-4 text-[14px] text-neutral-500">{date}</p>
                )}
              </div>
            </Container>
          </section>
        )}

        <section className="bg-white pb-10 pt-6 sm:pb-14 sm:pt-8 lg:pb-16 lg:pt-10">
          <Container>
            <div className="grid gap-10 lg:grid-cols-[minmax(0,760px)_minmax(56px,1fr)_240px] lg:items-start lg:gap-x-0">
              <article
                className="prose prose-neutral max-w-none lg:col-start-1
                prose-p:leading-7
                prose-p:text-neutral-700
                prose-h2:mt-10 prose-h2:text-2xl prose-h2:font-semibold
                prose-h3:mt-8 prose-h3:text-xl prose-h3:font-semibold
                prose-img:rounded-2xl
                prose-strong:text-neutral-950"
              >
                {children}
              </article>

              {details.length > 0 && (
                <aside className="hidden lg:sticky lg:top-24 lg:col-start-3 lg:block">
                  <p className="text-[11px] uppercase tracking-[0.16em] text-neutral-500">
                    {detailsLabel}
                  </p>

                  <div className="mt-5 divide-y divide-neutral-200 border-t border-neutral-200">
                    {details.map((item) => (
                      <div key={item.label} className="py-4">
                        <p className="text-[11px] uppercase tracking-[0.12em] text-neutral-400">
                          {item.label}
                        </p>
                        <p className="mt-1.5 text-[15px] font-medium leading-6 text-neutral-950">
                          {item.value}
                        </p>
                      </div>
                    ))}
                  </div>
                </aside>
              )}
            </div>
          </Container>
        </section>
      </main>

      <Footer locale={locale} />
    </>
  );
}