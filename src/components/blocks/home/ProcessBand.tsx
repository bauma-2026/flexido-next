import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";

export default function ProcessBand() {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-black py-16 sm:py-20 lg:py-24">
      {/* BG IMAGE */}
      <img
        src="/images/robot.jpg"
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-[65%_75%]"
      />

      {/* OVERLAYS */}
      <div className="absolute inset-0 bg-black/35" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/10" />

      {/* CONTENT */}
      <Container className="relative z-10">
        <div className="max-w-[560px] text-white">
         <p className="text-[11px] uppercase tracking-[0.16em] text-white/60">
  Način dela
</p>

<h2 className="mt-3 text-4xl font-semibold leading-[0.95] tracking-[-0.04em] sm:text-5xl">
  Ne dodamo samo robota.
  <br />
  Uredimo tok dela.
</h2>

<p className="mt-5 max-w-[48ch] text-[16px] leading-7 text-white/75">
  Pri avtomatizaciji upoštevamo stroj, prostor, operaterja, material in
  obstoječo opremo — da rešitev ne deluje samo tehnično, ampak tudi v praksi.
</p>

<div className="mt-8">
  <Button href="/proces" variant="secondary">
    Kako poteka projekt →
  </Button>
</div>
        </div>
      </Container>
    </section>
  );
}