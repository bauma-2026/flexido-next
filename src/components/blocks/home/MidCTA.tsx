import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";

export default function MidCTA() {
  return (
     <section className="relative overflow-hidden py-20 sm:py-24 lg:py-32">
      {/* BG IMAGE */}
      <img
        src="/images/flexido-process.jpg" // ← tvoja nova slika
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/55" />

      {/* CONTENT */}
      <Container className="relative z-10 flex min-h-[420px] items-center lg:min-h-[520px]">
        <div className="max-w-[560px]">
          <p className="text-[11px] uppercase tracking-[0.16em] text-white/60">
            Naslednji korak
          </p>

          <h2 className="mt-3 text-3xl font-semibold leading-[1.05] tracking-[-0.03em] text-white sm:text-4xl lg:text-5xl">
            Ne najdete svojega primera?
          </h2>

          <p className="mt-4 max-w-[46ch] text-[15px] leading-7 text-white/80">
            Poglejmo vaš proces in ocenimo, kje bi avtomatizacija imela največji učinek.
          </p>

          <div className="mt-6">
            <Button href="/kontakt" variant="secondary">
            Kako poteka sodelovanje →
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}