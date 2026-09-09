import Link from "next/link";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import type { HomeHeroContent } from "@/content/home/types";

const defaultContent: HomeHeroContent = {
  eyebrow: "Avtomatizacija proizvodnje",
  titleLines: ["Povežemo tok med stroji.", "Ne samo robot ob stroju."],
  titleLinesMobile: ["Povežemo tok\nmed stroji.", "Ne samo robot\nob stroju."],
  subhead:
    "Izdelujemo standardne robotske celice in celice po naročilu — ter jih povežemo v stabilen tok med stroji, z manj čakanja med posameznimi fazami.",
  slogan: "V Flexidu delamo avtomatizacijo enostavno.",
  ctaPrimary: "Poglejmo vaš proces",
  ctaSecondary: "Kako poteka projekt",
};

type Props = {
  content?: HomeHeroContent;
  processHref?: string;
  contactHref?: string;
};

export default function Hero({
  content = defaultContent,
  processHref = "/proces",
  contactHref = "/kontakt",
}: Props) {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-black text-white">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/images/flexido/legacy/s-1.jpg.jpeg"
        className="absolute inset-0 h-full w-full scale-105 object-cover object-[30%_center] opacity-80"
      >
        <source src="/video/flexido/hero-home.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/35 to-black/65" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/78 via-black/45 to-black/20" />

      <div className="relative z-10">
        <Container>
          <div className="grid min-h-[560px] items-end pb-10 pt-24 sm:min-h-[660px] sm:pb-14 sm:pt-32 lg:min-h-[720px] lg:items-center lg:pb-24 lg:pt-36">
            <div className="max-w-[920px]">
              <p className="eyebrow text-white/50">{content.eyebrow}</p>

              <h1 className="mt-5 max-w-[17ch] text-[44px] font-semibold leading-[0.92] tracking-[-0.025em] text-white sm:mt-4 sm:max-w-[15ch] sm:text-6xl sm:leading-[0.95] sm:tracking-[-0.04em] lg:max-w-[18ch] lg:text-[68px]">
                <span className="sm:hidden">
                  <span className="block">
                    {(content.titleLinesMobile ?? content.titleLines)[0].split("\n").map((part, i, arr) => (
                      <span key={i}>
                        {part}
                        {i < arr.length - 1 && <br />}
                      </span>
                    ))}
                  </span>
                  <span className="mt-6 block">
                    {(content.titleLinesMobile ?? content.titleLines)[1].split("\n").map((part, i, arr) => (
                      <span key={i}>
                        {part}
                        {i < arr.length - 1 && <br />}
                      </span>
                    ))}
                  </span>
                </span>
                <span className="hidden sm:inline">
                  {content.titleLines[0]}
                  <br />
                  {content.titleLines[1]}
                </span>
              </h1>

              <p className="mt-7 max-w-[46ch] text-[17px] leading-6 text-white/80 sm:mt-5 sm:leading-8 sm:text-lg">
                {content.subhead}
              </p>

              <div className="mt-5 sm:mt-7">
                <div className="lg:hidden">
                  <Button href={contactHref} className="h-12 w-full max-w-[420px]">
                    {content.ctaPrimary} →
                  </Button>

                  <Link
                    href={processHref}
                    className="focus-ring mt-4 inline-flex items-center py-2.5 text-[14px] font-medium text-white/70 transition hover:text-white"
                  >
                    {content.ctaSecondary}
                    <span className="link-arrow">→</span>
                  </Link>
                </div>

                <div className="hidden lg:flex lg:gap-3">
                  <Button href={contactHref}>{content.ctaPrimary} →</Button>

                  <Button href={processHref} variant="secondary">
                    {content.ctaSecondary} →
                  </Button>
                </div>
              </div>

              <p className="mt-6 hidden text-[13px] text-white/45 sm:block">{content.slogan}</p>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
