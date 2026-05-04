import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";

export default function VideoPage() {
  return (
    <>
      <Header />

      <main className="bg-white text-neutral-950">
        {/* HERO */}
        <section className="border-b border-neutral-200 bg-neutral-950 py-20 text-white sm:py-24 lg:py-28">
          <Container>
            <div className="max-w-[720px]">
              <p className="text-[11px] uppercase tracking-[0.18em] text-white/45">
                Video
              </p>

              <h1 className="mt-4 text-5xl font-semibold leading-[0.96] tracking-[-0.045em] sm:text-6xl lg:text-[66px]">
                Flexido v praksi.
              </h1>

              <p className="mt-6 max-w-[58ch] text-base leading-7 text-white/70 sm:text-lg">
                Kratek prikaz rešitev, pristopa in tehnologij, s katerimi
                avtomatiziramo proizvodne procese.
              </p>
            </div>
          </Container>
        </section>

        {/* VIDEO */}
        <section className="py-20 sm:py-24 lg:py-28">
          <Container>
            <div className="mx-auto max-w-[960px]">
              <div className="overflow-hidden rounded-[2rem] border border-neutral-200 bg-neutral-100 shadow-sm">
                <video
                  controls
                  preload="metadata"
                  poster="/images/video-poster.png"
                  className="aspect-video w-full bg-neutral-100 object-cover"
                >
                  <source src="/video/flexido.mp4" type="video/mp4" />
                  Vaš brskalnik ne podpira predvajanja videa.
                </video>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}