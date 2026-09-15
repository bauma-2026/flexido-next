import { notFound } from "next/navigation";

import Header from "@/components/layout/Header";
import TrustStrip from "@/components/blocks/home/TrustStrip";
import HeroConceptA from "@/components/lab/hero-index/HeroConceptA";
import HeroConceptB from "@/components/lab/hero-index/HeroConceptB";
import HeroConceptC from "@/components/lab/hero-index/HeroConceptC";
import { getOfferFamilies } from "@/components/lab/hero-index/offer";
import { getHomeContent } from "@/content/home";
import { locales, type Locale } from "@/i18n/config";
import { getPath } from "@/i18n/routes";

type Params = { concept: string };
type Search = { locale?: string };

export default async function ConceptFrame({
  params,
  searchParams,
}: {
  params: Promise<Params>;
  searchParams: Promise<Search>;
}) {
  const { concept } = await params;
  const { locale: localeParam } = await searchParams;

  if (!["a", "b", "c"].includes(concept)) notFound();

  const locale = (locales as readonly string[]).includes(localeParam ?? "")
    ? (localeParam as Locale)
    : "sl";

  const content = getHomeContent(locale);
  const families = getOfferFamilies(locale);

  const shared = {
    hero: content.hero,
    families,
    indexLabel: content.solutions.eyebrow,
    processHref: getPath("process", locale) ?? "/proces",
    contactHref: getPath("contact", locale) ?? "/kontakt",
  };

  return (
    <>
      <Header locale={locale} routeKey="home" />

      <main className="bg-white text-neutral-950">
        {concept === "a" && (
          /* A's legend names the set of families ("Področja"), not the site
             section ("Rešitve"). Reuses the group label already carried on
             the first area family, so EN/DE follow without a new string. */
          <HeroConceptA
            {...shared}
            indexLabel={families[0]?.groupLabel ?? shared.indexLabel}
          />
        )}
        {concept === "b" && <HeroConceptB {...shared} />}
        {concept === "c" && (
          /* C's rail leads with the same set-name as A's legend. */
          <HeroConceptC
            {...shared}
            locale={locale}
            indexLabel={families[0]?.groupLabel ?? shared.indexLabel}
          />
        )}

        <TrustStrip
          label={content.trustStrip.label}
          items={content.trustStrip.items}
        />
      </main>
    </>
  );
}
