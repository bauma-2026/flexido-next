import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";

export default function WhyFlexido() {
  return (
  <section className="relative overflow-hidden py-24 sm:py-28 lg:py-36">
      
      {/* BG IMAGE */}
      <img
        src="/images/flexido-process.jpg"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* GRADIENT OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

      {/* CONTENT */}
      <Container className="relative z-10">
        <div className="max-w-[560px] text-white">

          {/* EYEBROW */}
          <p className="text-[11px] uppercase tracking-[0.16em] text-white/60">
            Zakaj Flexido
          </p>

          {/* TITLE */}
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl lg:text-5xl">
            Ne začnemo z robotom.
            <br />
            Začnemo s procesom.
          </h2>

          {/* DESC */}
          <p className="mt-5 max-w-[48ch] text-[16px] leading-7 text-white/80">
            Najprej pogledamo, kje se dejansko izgublja čas in kje nastajajo napake.
            Šele potem predlagamo avtomatizacijo — tam, kjer ima smisel.
          </p>

          {/* EXTENSION */}
          <p className="mt-4 max-w-[48ch] text-[16px] leading-7 text-white/70">
            Zato sistemi delujejo stabilno in brez stalnih popravkov.
          </p>

          {/* CTA */}
          <div className="mt-8">
            <Button href="#process" variant="secondary">
              Naš pristop →
            </Button>
          </div>

        </div>
      </Container>
    </section>
  );
}