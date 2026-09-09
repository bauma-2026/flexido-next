import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";

type FundingLogo = {
  href: string;
  src: string;
  alt: string;
  heightClass: string;
};

/**
 * Voucher / certification funding — Slovenian homepage only. Do not add
 * SPIRIT Slovenija or the EU/Kohezijski sklad mark here; those belong to
 * the separate global subpage strip (InstitutionalFundingStrip).
 */
const voucherLogos: FundingLogo[] = [
  {
    href: "https://podjetniskisklad.si/sl/",
    src: "/logos/trust/slovenski-podjetniski-sklad.jpg",
    alt: "Slovenski podjetniški sklad",
    heightClass: "h-11 sm:h-12",
  },
  {
    // "compact-hero" crop drops the full asset's large trailing margin and
    // its baseline tagline row — same mark, far less baked-in whitespace.
    href: "https://www.eu-skladi.si/",
    src: "/logos/trust/eu-regional-development-fund-compact-hero.png",
    alt: "EU skladi",
    heightClass: "h-10 sm:h-11",
  },
  {
    href: "https://www.gov.si/drzavni-organi/ministrstva/ministrstvo-za-gospodarski-razvoj-in-tehnologijo/",
    src: "/logos/trust/ministrstvo-gospodarski-razvoj-tehnologijo.jpg",
    alt: "Ministrstvo za gospodarski razvoj in tehnologijo",
    heightClass: "h-11 sm:h-12",
  },
];

function FundingLogoLink({ logo }: { logo: FundingLogo }) {
  return (
    <a
      href={logo.href}
      target="_blank"
      rel="noopener noreferrer"
      className="opacity-90 transition hover:opacity-100"
    >
      <img src={logo.src} alt={logo.alt} className={`w-auto object-contain ${logo.heightClass}`} />
    </a>
  );
}

export default function FundingTrust() {
  return (
    <Section variant="tight" className="border-t border-neutral-200 surface-muted text-neutral-900">
      <Container>
        <div className="max-w-[920px]">
          <p className="text-[11px] uppercase tracking-[0.16em] text-neutral-400">Certifikati in sofinanciranje</p>

          <blockquote className="mt-5 max-w-[62ch] text-[15px] leading-7 text-neutral-700 sm:mt-6 sm:text-[16px]">
            »Podjetje Flexido d.o.o. je pridobilo sofinanciranje upravičenih stroškov preko Vavčerja za
            pridobitev certifikatov. Naložbo sofinancirata Republika Slovenija in Evropska unija iz
            Evropskega sklada za regionalni razvoj.«
          </blockquote>

          <div className="mt-6 border-y border-neutral-200 py-5 sm:mt-7 sm:py-6">
            <div className="grid grid-cols-2 gap-x-10 gap-y-7 sm:flex sm:flex-wrap sm:items-center sm:gap-x-8">
              {voucherLogos.map((logo) => (
                <FundingLogoLink key={logo.src} logo={logo} />
              ))}
            </div>
          </div>

          <div className="mt-7 max-w-[70ch] border-t border-neutral-200 pt-6 text-[13px] leading-6 text-neutral-500 sm:mt-8 sm:pt-7">
            <p>
              Naložbo sofinancira Republika Slovenija in Evropska unija iz Evropskega sklada za regionalni
              razvoj. Več lahko najdete na{" "}
              <a
                href="https://www.eu-skladi.si"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-neutral-300 underline-offset-2 transition hover:text-neutral-800"
              >
                www.eu-skladi.si
              </a>
              .
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
