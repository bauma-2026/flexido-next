import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ServiceSupportBand from "@/components/blocks/ServiceSupportBand";
import Hero from "@/components/blocks/home/Hero";
import Solutions from "@/components/blocks/home/Solutions";
import FAQ from "@/components/blocks/home/FAQ";
import FinalCTA from "@/components/blocks/home/FinalCTA";
import HowToChose from "@/components/blocks/home/HowToChoose";
import Diagnostics from "@/components/blocks/home/Diagnostics";
import ProcessBand from "@/components/blocks/home/ProcessBand";
import FlagshipCase from "@/components/blocks/reference/FlagshipCase";
import ProductProof from "@/components/blocks/home/ProductProof";
import TrustStrip from "@/components/blocks/home/TrustStrip";


export default function HomePage() {
  return (
    <>
      <Header />

      <main className="bg-white text-neutral-950">
        <Hero />
        <TrustStrip />

        <Diagnostics />

        <Solutions />
        <ProductProof />
        <FlagshipCase />

        <HowToChose />

        <ProcessBand />
<ServiceSupportBand />
        <FAQ />

        <FinalCTA />
      </main>

      <Footer />
    </>
  );
}