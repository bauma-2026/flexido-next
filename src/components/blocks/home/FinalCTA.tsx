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
      className="relative overflow-hidden border-t border-white/10 bg-neutral-950 text-white"
    >
      <Image
        src="/images/flexido-process.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-neutral-950/80" />

      <Container className="relative z-10">
        <div className="max-w-[560px]">
          <p className="text-[11px] uppercase tracking-[0.16em] text-white/50">
            {content.eyebrow}
          </p>

          <h2 className="mt-4 max-w-[15ch] text-4xl font-semibold leading-[0.95] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
            {content.heading}
          </h2>

          <p className="mt-6 max-w-[52ch] text-[16px] leading-7 text-white/72 sm:text-[17px]">
            {content.body}
          </p>

          <div className="mt-7">
            <Button
              href="mailto:info@flexido.eu"
              variant="secondary"
              className="h-12 bg-white px-6 text-[15px] text-neutral-950 hover:bg-neutral-200"
            >
              {content.ctaLabel} →
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
