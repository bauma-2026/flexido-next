import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";

type InstitutionalLogo = {
  href: string;
  src: string;
  alt: string;
  heightClass: string;
};

/**
 * Global institutional strip — SPIRIT Slovenija + EU/Kohezijski sklad.
 * Homepage-only (all locales), rendered after FundingTrust in
 * HomePageTemplate. Kept separate from the SL-only voucher/certification
 * block (FundingTrust) — do not merge the two.
 */
const institutionalLogos: InstitutionalLogo[] = [
  {
    href: "https://www.spiritslovenia.si/",
    src: "/logos/trust/spirit-slovenija.png",
    alt: "SPIRIT Slovenija",
    heightClass: "h-11 sm:h-12",
  },
  {
    href: "https://www.eu-skladi.si/?set_language=sl",
    src: "/logos/trust/eu-kohezijski-sklad-cohesion-fund.png",
    alt: "Evropska unija — Kohezijski sklad",
    heightClass: "h-10 sm:h-11",
  },
];

export default function InstitutionalFundingStrip() {
  return (
    <Section className="border-t border-neutral-200 bg-white pt-12 pb-8 sm:pt-14 sm:pb-10 lg:pt-16 lg:pb-12">
      <Container>
        <div className="flex flex-wrap items-center gap-x-8 gap-y-5">
          {institutionalLogos.map((logo) => (
            <a
              key={logo.src}
              href={logo.href}
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-75 transition hover:opacity-90"
            >
              <img src={logo.src} alt={logo.alt} className={`w-auto object-contain ${logo.heightClass}`} />
            </a>
          ))}
        </div>
      </Container>
    </Section>
  );
}
