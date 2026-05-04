import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";

export default function ProcessBand() {
  return (
   <section className="relative overflow-hidden py-20 sm:py-24 lg:py-32">
      
      {/* BG IMAGE */}
      <img
        src="/images/robot.jpg"
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-[65%_75%]"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/30 to-transparent" />

      {/* CONTENT */}
      <Container className="relative z-10">
        <div className="max-w-[560px] text-white">

          {/* EYEBROW */}
          <p className="text-[11px] uppercase tracking-[0.16em] text-white/60">
            Način dela
          </p>

          {/* TITLE */}
          <h2 className="mt-3 text-4xl font-semibold leading-[0.95] tracking-[-0.04em] sm:text-5xl">
            Stroji, podatki in ljudje.
            <br />
            Povezani v enoten proces.
          </h2>

          {/* DESC */}
          <p className="mt-5 max-w-[48ch] text-[16px] leading-7 text-white/75">
            Avtomatizacijo postavimo tam, kjer dejansko izboljša potek dela — ne kot dodatek,
            ampak kot del procesa.
          </p>

          {/* CTA */}
          <div className="mt-10">
            <Button href="/proces" variant="secondary">
              Naš pristop →
            </Button>
          </div>

        </div>
      </Container>
    </section>
  );
}