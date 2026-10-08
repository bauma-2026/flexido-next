import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import type { Locale } from "@/i18n/config";

type NotFoundViewProps = {
  locale: Locale;
  eyebrow: string;
  title: string;
  desc: string;
  cta: string;
  homeHref: string;
};

/**
 * Shared 404 body — same Header/Footer/Container/eyebrow/title pattern as
 * `LegalPage`, with a single primary-button way back in place of the prose
 * section. Used by both `app/global-not-found.tsx` (SL) and
 * `app/[locale]/not-found.tsx` (EN/DE) so the three locale variants render
 * identically apart from copy and links.
 */
export default function NotFoundView({
  locale,
  eyebrow,
  title,
  desc,
  cta,
  homeHref,
}: NotFoundViewProps) {
  return (
    <>
      <Header locale={locale} />

      <main className="bg-white text-neutral-950">
        <section className="bg-white">
          <Container className="pt-12 pb-16 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-24">
            <div className="max-w-[920px]">
              <p className="eyebrow">{eyebrow}</p>

              <h1 className="text-document-title mt-5">{title}</h1>

              <p className="mt-6 max-w-[64ch] text-[16px] leading-7 text-neutral-600">
                {desc}
              </p>

              <div className="mt-8">
                <Button href={homeHref} variant="primary">
                  {cta}
                </Button>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <Footer locale={locale} />
    </>
  );
}
