import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/blocks/home/Hero";
import Solutions from "@/components/blocks/home/Solutions";
import Process from "@/components/blocks/home/Process";
import WhyFlexido from "@/components/blocks/home/WhyFlexido";
import FAQ from "@/components/blocks/home/FAQ";
import FinalCTA from "@/components/blocks/home/FinalCTA";
import HowToChose from "@/components/blocks/home/HowToChoose";
import Diagnostics from "@/components/blocks/home/Diagnostics";
import ProcessBand from "@/components/blocks/home/ProcessBand";
import MidCTA from "@/components/blocks/home/MidCTA";
import FlagshipCase from "@/components/blocks/reference/FlagshipCase";
import DecisionBlock from "@/components/blocks/reference/DecisionBlock";



export default function HomePage() {
  return (
    <>
      <Header />
      <main className="bg-white text-neutral-950">
    <Hero />

<Diagnostics />

<Solutions />

<FlagshipCase />

<DecisionBlock />

<HowToChose />

<ProcessBand />

<FAQ />

<FinalCTA />
      </main>
      <Footer />
    </>
  );
}