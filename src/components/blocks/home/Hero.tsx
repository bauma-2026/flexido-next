import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-black text-white">
      {/* VIDEO */}
      <video
        className="absolute inset-0 h-full w-full scale-105 object-cover object-[30%_center]"
        src="/video/hero-2-1.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        poster="/images/hero-poster.jpg"
      />

      {/* OVERLAYS */}
      {/* TOP → bolj lahek */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-black/50" />

      {/* LEFT → fokus za tekst */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/20" />

      {/* CONTENT */}
      <div className="relative">
        <Container>
        <div className="grid min-h-[620px] items-end pb-12 pt-28 sm:min-h-[660px] sm:pb-14 sm:pt-32 lg:min-h-[720px] lg:items-center lg:pb-24 lg:pt-36">
  <div className="max-w-[920px]">
    <p className="eyebrow text-white/50">Zanesljivi procesi</p>

    <h1 className="mt-4 text-5xl font-semibold leading-[0.95] tracking-[-0.04em] text-white sm:text-6xl lg:text-[68px]">
      <span className="block">Povežemo tok med stroji.</span>
      <span className="block">Ne samo robot ob stroju.</span>
    </h1>

    <p className="mt-5 max-w-[44ch] text-[17px] leading-8 text-white/80 sm:text-lg">
      Uredimo nalaganje, odvzem in tok materiala med stroji — 
da proizvodnja teče stabilno, brez čakanja med fazami.
    </p>

    <div className="mt-7">
      <div className="lg:hidden">
        <Button href="#kontakt" className="h-12 w-full max-w-[420px]">
          Dogovorite se za posvet →
        </Button>
      </div>

      <div className="hidden lg:flex lg:gap-3">
        <Button href="#kontakt">Dogovorite se za posvet →</Button>

        <Button href="#process" variant="secondary">
          Poglejte, kako poteka projekt
        </Button>
      </div>
    </div>
  </div>
</div>
        </Container>
      </div>
    </section>
  );
}