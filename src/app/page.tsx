import FAQ from "@/components/FAQ";
import GetStartedSection from "@/components/GetStartedSection";
import HeroSection from "@/components/HeroSection";
import InfluencersSection from "@/components/InfluencersSection";
import Navbar from "@/components/Navbar";
import OfferingSection from "@/components/OfferingSection";
import TravelSection from "@/components/TravelSection";

export default function Home() {
  return (
    <div className="px-screen-320 md:px-screen-768 lg:px-screen-992 xl:px-screen-1200 2xl:px-screen-1440">
      <Navbar />
      <main className="mt-6 md:mt-12 mb-6 md:mb-12">
        <HeroSection />
        <TravelSection />
        <OfferingSection />
        <InfluencersSection />
        <GetStartedSection />
      </main>
      <footer>
        <FAQ />
      </footer>
    </div>
  );
}
