import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import Button from "@/components/ui/Button";

export default function FinalCTA() {
  return (
  <Section
  id="kontakt"
  variant="large"
  className="border-t border-white/10 bg-neutral-950 text-white"
>
  <Container>
   <div className="grid gap-8 lg:grid-cols-[0.95fr_0.8fr] lg:items-center">
      {/* LEFT */}
      <div className="max-w-[720px]">
        <p className="text-[11px] uppercase tracking-[0.16em] text-white/50">
          Kontakt
        </p>

       <h2 className="mt-4 max-w-[15ch] text-4xl font-semibold leading-[0.95] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
  Poglejmo vaš proces
</h2>

        <p className="mt-6 max-w-[52ch] text-[16px] leading-7 text-white/72 sm:text-[17px]">
          Skupaj pregledamo potek dela, poiščemo zastoje in ocenimo, kateri
          koraki imajo največ smisla za avtomatizacijo.
        </p>

        <div className="mt-9">
          <Button
            href="mailto:info@flexido.eu"
            variant="secondary"
            className="h-12 bg-white px-6 text-[15px] text-neutral-950 hover:bg-neutral-200"
          >
            Pošljite povpraševanje →
          </Button>
        </div>
      </div>

      {/* RIGHT VISUAL */}
      <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.04] shadow-[0_24px_80px_rgba(0,0,0,0.35)]">
        <img
          src="/images/flexido/legacy/s-3.jpg.jpeg"
          alt=""
          className="h-full min-h-[320px] w-full object-cover"
        />
<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-6">
          <p className="text-[11px] uppercase tracking-[0.16em] text-white/50">
            Prvi pregled
          </p>

          <p className="mt-2 max-w-[34ch] text-[20px] font-semibold leading-[1.15] tracking-[-0.03em] text-white">
            Kje proces izgublja čas, material ali stabilen ritem?
          </p>
        </div>
      </div>
    </div>
  </Container>
</Section>
  );
}