import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import Button from "@/components/ui/Button";

export default function FinalCTA() {
  return (
  
        <Section id="faq" variant="large" className="bg-gradient-to-b from-neutral-950 to-neutral-900">
      <Container>
        <div className="max-w-[720px]">
          {/* EYEBROW */}
          <p className="text-[11px] uppercase tracking-[0.16em] text-white/50">
            Kontakt
          </p>

          {/* TITLE */}
       <h2 className="mt-4 max-w-[14ch] text-4xl font-semibold leading-[0.95] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
  Poglejmo vaš proces
</h2>

          {/* DESC */}
          <p className="mt-6 max-w-[46ch] text-[15px] leading-7 text-white/70 sm:text-base">
            Skupaj pregledamo potek dela in poiščemo smiselne korake za
            avtomatizacijo — brez nepotrebnih posegov.
          </p>

          {/* CTA */}
          <div className="mt-10">
            <Button
              href="mailto:info@flexido.eu"
              variant="secondary"
              className="h-12 px-6 text-[15px] bg-white text-neutral-950 hover:bg-neutral-200"
            >
              Dogovorite se za posvet →
            </Button>
          </div>

          {/* MICRO TRUST */}
          <p className="mt-4 text-[13px] text-white/50">
            Odgovorimo običajno v 24h
          </p>
        </div>
      </Container>
    </Section>
  );
}