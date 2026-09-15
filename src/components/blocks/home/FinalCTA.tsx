import Image from "next/image";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import Button from "@/components/ui/Button";
import type { HomeFinalCtaContent } from "@/content/home/types";

const defaultContent: HomeFinalCtaContent = {
  eyebrow: "Kontakt",
  heading: "Poglejmo vaš proces",
  body:
    "Pošljite kratek opis procesa, stroja in kosa. Ocenimo izgube časa in stabilnosti, obseg ročnega dela ter ali je avtomatizacija smiselna.",
  ctaLabel: "Pošljite opis procesa",
  imageCaptionEyebrow: "Prvi pregled",
  imageCaption: "Kje proces izgublja čas, material ali stabilen ritem?",
};

type Props = {
  content?: HomeFinalCtaContent;
};

export default function FinalCTA({ content = defaultContent }: Props) {
  return (
    <Section
      id="kontakt"
      variant="large"
      className="relative overflow-hidden border-t border-white/10 bg-[var(--color-dark-band)] text-white"
    >
      <Image
        src="/images/flexido-process.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[var(--color-dark-band)]/80" />

      <Container className="relative z-10">
        <div className="max-w-[560px]">
          <p className="eyebrow-on-dark">
            {content.eyebrow}
          </p>

          <h2 className="text-section-title mt-3 text-white">
            {content.heading}
          </h2>

          <p className="mt-6 max-w-[52ch] text-[16px] leading-7 text-white/72 sm:text-[17px]">
            {content.body}
          </p>

          <div className="mt-7">
            <Button href="mailto:info@flexido.eu" variant="light" className="h-12">
              {content.ctaLabel} →
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
