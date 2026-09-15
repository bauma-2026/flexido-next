import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WikiNav from "@/components/wiki/WikiNav";
import { flexidoSystems } from "@/data/flexido-systems";
import type { Locale } from "@/i18n/config";
import { getPath } from "@/i18n/routes";
import type { SystemPageContent } from "@/content/systems/types";

import CatalogApplications from "./catalog/CatalogApplications";
import CatalogCta from "./catalog/CatalogCta";
import CatalogHero from "./catalog/CatalogHero";
import CatalogIdentity from "./catalog/CatalogIdentity";
import CatalogIntro from "./catalog/CatalogIntro";
import CatalogOptions from "./catalog/CatalogOptions";
import CatalogProof from "./catalog/CatalogProof";
import CatalogRelated from "./catalog/CatalogRelated";
import CatalogSpecs from "./catalog/CatalogSpecs";
import { buildCatalogSlots } from "./catalog/slots";

/**
 * The e-katalog family spine — one template for all five product pages.
 *
 * Replaces CncPageTemplate, ImmPageTemplate, TmxPageTemplate,
 * MiddlewarePageTemplate and SystemPageTemplate (2276 lines of five
 * archetypes) with a fixed slot order that every product renders in the same
 * sequence, on the same surfaces, at the same heading roles.
 *
 *   01 hero          dark, media + eyebrow + h1 + supporting copy
 *   02 intro         white, text left / visual right
 *   03 identity      white, image left / text right, product name as h2
 *   04 technical      white, ruled label/value documentation
 *   05 applications   F2, closed peer matrix
 *   06 options        white, one section, however many groups exist
 *   07 proof          E7, only where a documented project exists
 *   08 related        white, geometry follows the real peer count
 *   09 CTA            charcoal, locked
 *   10 in-page nav    the approved solution-family `index` WikiNav
 *
 * What varies is which slots a product fills and what goes in them — decided
 * in `catalog/slots.ts` from content that declares its own roles. This file
 * holds no product conditionals and no route-key sets.
 *
 * `Header` is sticky site-wide and the index nav pins directly beneath it at
 * `--header-h`, so the two read as one navigation system rather than two
 * competing bars. Nothing on this page opts out of that stack.
 */
export default function CatalogPageTemplate({
  locale,
  content,
}: {
  locale: Locale;
  content: SystemPageContent;
}) {
  const system = flexidoSystems.find((entry) => entry.slug === content.product.systemSlug);
  const hubHref = getPath("standardCells", locale) ?? "/";
  const slots = buildCatalogSlots(content, system, locale);

  return (
    <>
      <Header locale={locale} routeKey={content.routeKey} parentKey="standardCells" />

      {/*
        `overflow-x-clip`, not `overflow-x-hidden`. Both clip the same
        overflow, but `hidden` makes `main` a scroll container, which captures
        the index nav's `position: sticky` so it scrolls away with the page
        instead of pinning to the viewport. `clip` establishes no scroll box,
        so the nav sticks. The five old templates all carried `hidden`; none
        of them had a sticky child, so nothing surfaced it.
      */}
      <main className="overflow-x-clip bg-white text-neutral-950">
        <CatalogHero hero={content.hero} backLabel={content.backLabel} backHref={hubHref} />

        {slots.nav.length ? <WikiNav variant="index" items={slots.nav} /> : null}

        <CatalogIntro intro={content.intro} />

        {slots.identity ? <CatalogIdentity identity={slots.identity} /> : null}
        {slots.technical ? <CatalogSpecs technical={slots.technical} /> : null}
        {slots.applications ? <CatalogApplications applications={slots.applications} /> : null}
        {slots.options ? (
          <CatalogOptions options={slots.options} needsTopRule={!slots.applications} />
        ) : null}
        {slots.proof ? <CatalogProof proof={slots.proof} locale={locale} /> : null}
        {slots.related ? <CatalogRelated related={slots.related} locale={locale} /> : null}

        <CatalogCta kontakt={content.kontakt} />
      </main>

      <Footer locale={locale} />
    </>
  );
}
