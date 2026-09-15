import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/blocks/home/Hero";
import TrustStrip from "@/components/blocks/home/TrustStrip";
import Solutions from "@/components/blocks/home/Solutions";
import ProductProof from "@/components/blocks/home/ProductProof";
import Competencies from "@/components/blocks/home/Competencies";
import Process from "@/components/blocks/home/Process";
import FinalCTA from "@/components/blocks/home/FinalCTA";
import FundingCertification from "@/components/blocks/home/FundingCertification";
import { getHomeContent } from "@/content/home";
import { getSolutionFamilies, solutionFamiliesLabel } from "@/content/solutions/familyIndex";
import type { Locale } from "@/i18n/config";
import { getPath } from "@/i18n/routes";

export default function HomePageTemplate({ locale }: { locale: Locale }) {
  const content = getHomeContent(locale);
  const processHref = getPath("process", locale) ?? "/proces";
  const contactHref = getPath("contact", locale) ?? "/kontakt";

  const railItems = getSolutionFamilies(locale).map((family) => ({
    href: getPath(family.routeKey, locale) ?? "#",
    title: family.title,
  }));

  const compactItems = content.solutions.compactItems.map((item) => ({
    href: getPath(item.routeKey, locale) ?? "#",
    title: item.title,
    desc: item.desc,
    icon: item.icon,
  }));

  return (
    <>
      <Header locale={locale} routeKey="home" />

      <main className="bg-white text-neutral-950">
        <Hero
          content={content.hero}
          processHref={processHref}
          contactHref={contactHref}
          railItems={railItems}
          railLabel={solutionFamiliesLabel[locale]}
          locale={locale}
        />
        <TrustStrip label={content.trustStrip.label} items={content.trustStrip.items} />
        <Solutions
          compact
          title={content.solutions.title}
          desc={content.solutions.desc}
          eyebrow={content.solutions.eyebrow}
          compactItems={compactItems}
          bridge={content.solutions.bridge}
        />
        <ProductProof content={content.productProof} locale={locale} />
        <Competencies content={content.competencies} locale={locale} />
        <Process content={content.process} processHref={processHref} />
        <FinalCTA content={content.finalCta} />
        <FundingCertification content={content.fundingCertification} locale={locale} />
      </main>

      <Footer locale={locale} />
    </>
  );
}
