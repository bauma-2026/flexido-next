import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";


export default function Hero() {
  return (
 <section className="relative overflow-hidden border-b border-white/10 bg-black text-white">
  {/* VIDEO */}
  <video
    autoPlay
    muted
    loop
    playsInline
    preload="metadata"
    poster="/images/hero-poster.jpg"
    className="absolute inset-0 h-full w-full scale-105 object-cover object-[30%_center] opacity-80"
  >
    <source src="/video/flexido/hero-home.mp4" type="video/mp4" />
  </video>

  {/* OVERLAYS */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/35 to-black/65" />
  <div className="absolute inset-0 bg-gradient-to-r from-black/78 via-black/45 to-black/20" />

  {/* CONTENT */}
  <div className="relative z-10">
    <Container>
      <div className="grid min-h-[620px] items-end pb-12 pt-28 sm:min-h-[660px] sm:pb-14 sm:pt-32 lg:min-h-[720px] lg:items-center lg:pb-24 lg:pt-36">
        <div className="max-w-[920px]">
          <p className="eyebrow text-white/50">
            Industrijska avtomatizacija
          </p>

          <h1 className="mt-4 max-w-[15ch] text-5xl font-semibold leading-[0.95] tracking-[-0.04em] text-white sm:text-6xl lg:max-w-[18ch] lg:text-[68px]">
            Povežemo tok med stroji.
            <br />
            Ne samo robot ob stroju.
          </h1>

          <p className="mt-5 max-w-[46ch] text-[17px] leading-8 text-white/80 sm:text-lg">
            Uredimo nalaganje, odvzem in tok materiala med stroji — da proizvodnja
            teče bolj stabilno, z manj čakanja med posameznimi fazami.
          </p>

          <div className="mt-7">
            <div className="lg:hidden">
              <Button href="#kontakt" className="h-12 w-full max-w-[420px]">
                Poglejmo vaš proces →
              </Button>
            </div>

            <div className="hidden lg:flex lg:gap-3">
              <Button href="#kontakt">Poglejmo vaš proces →</Button>

              <Button href="/proces" variant="secondary">
                Kako poteka projekt →
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
