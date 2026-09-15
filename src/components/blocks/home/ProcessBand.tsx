import Link from "next/link";
import Container from "@/components/layout/Container";

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
        <div className="grid gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-end">
          <div className="max-w-[560px] text-white">
            <p className="text-[11px] uppercase tracking-[0.16em] text-white/60">
              Kako Flexido pomaga
            </p>

            <h2 className="text-section-title mt-3 text-white">
              Ne dodamo samo robota.
              <br />
              Uredimo tok dela.
            </h2>

            <p className="mt-5 max-w-[48ch] text-[16px] leading-7 text-white/75">
              Pri avtomatizaciji upoštevamo stroj, prostor, operaterja, material in
              obstoječo opremo — da rešitev ne deluje samo tehnično, ampak tudi v praksi.
            </p>

            <div className="mt-8">
              <Link
                href="/proces"
                className="focus-ring inline-flex items-center text-[14px] font-medium text-white/70 transition hover:text-white"
              >
                Kako poteka projekt
                <span className="link-arrow">→</span>
              </Link>
            </div>
          </div>

          <div className="grid overflow-hidden border border-white/15 bg-white/[0.07] sm:grid-cols-3 lg:grid-cols-1">
            {[
              "Stroj in oprema",
              "Material in tok",
              "Operater in prostor",
            ].map((item) => (
              <div
                key={item}
                className="border-b border-white/15 px-5 py-4 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0 lg:border-b lg:border-r-0 lg:last:border-b-0"
              >
                <p className="text-[11px] uppercase tracking-[0.16em] text-white/45">
                  Upoštevamo
                </p>
                <p className="mt-2 text-[16px] font-medium leading-5 text-white">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
