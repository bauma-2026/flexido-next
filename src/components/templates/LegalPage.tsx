import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
import type { Locale } from "@/i18n/config";
import type { RouteKey } from "@/i18n/routes";

type LegalPageProps = {
  locale?: Locale;
  routeKey?: RouteKey;
  eyebrow?: string;
  title: string;
  desc?: string;
  children: React.ReactNode;
};

export default function LegalPage({
  locale = "sl",
  routeKey = "legalNotice",
  eyebrow = "Pravno",
  title,
  desc,
  children,
}: LegalPageProps) {
  return (
    <>
      <Header locale={locale} routeKey={routeKey} />

      <main className="bg-white text-neutral-950">
        <section className="border-b border-neutral-200 bg-white">
          <Container className="pt-12 pb-10 sm:pt-16 sm:pb-12 lg:pt-20 lg:pb-14">
            <div className="max-w-[920px]">
              <p className="eyebrow">
                {eyebrow}
              </p>

              <h1 className="text-document-title mt-5">
                {title}
              </h1>

              {desc ? (
                <p className="mt-6 max-w-[64ch] text-[16px] leading-7 text-neutral-600">
                  {desc}
                </p>
              ) : null}
            </div>
          </Container>
        </section>

        <section className="bg-white">
          <Container className="pt-8 pb-12 sm:pt-10 sm:pb-16 lg:pt-12 lg:pb-20">
            <article className="legal-content max-w-[920px] text-[15px] leading-7 text-neutral-700">
              {children}
            </article>
          </Container>
        </section>
      </main>

      <Footer locale={locale} />
    </>
  );
}