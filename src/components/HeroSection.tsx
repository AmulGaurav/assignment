import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-9 mb-6 md:mb-12">
      <div className="flex flex-col justify-center gap-4 md:gap-[45px] mb-6 md:mb-0">
        <div className="flex flex-wrap gap-2 md:gap-3">
          <div className="p-2 md:p-[10px] bg-white rounded-[8.78px] md:rounded-xl text-hero-mobile md:text-hero-desktop text-[#181818] md:text-black font-bold">
            One
          </div>
          <div className="p-2 md:p-[10px] bg-white rounded-[8.78px] md:rounded-xl text-hero-mobile md:text-hero-desktop text-[#181818] md:text-black font-bold">
            Stop
          </div>
          <div className="p-2 md:p-[10px] bg-white rounded-[8.78px] md:rounded-xl text-hero-mobile md:text-hero-desktop text-[#181818] md:text-black font-bold">
            Marketplace
          </div>
          <div className="p-2 md:p-[10px] bg-white rounded-[8.78px] md:rounded-xl text-hero-mobile md:text-hero-desktop text-[#181818] md:text-black font-bold">
            For
          </div>
          <div className="p-2 md:p-[10px] bg-[#00DC82] rounded-[8.78px] md:rounded-xl text-hero-mobile md:text-hero-desktop text-[#181818] md:text-black font-bold">
            Influencers
          </div>
        </div>

        <div className="text-h1-mobile md:text-h1-desktop font-bold text-white">
          &#34;Unleash Your Influence: Sell Itineraries, Build Your Brand,
          Create Merch, and Share Content &#45; All in One Hub.&#34;
        </div>

        <div className="space-x-6 md:space-x-[37px]">
          <button className="px-4 py-3 md:px-6 md:py-4 bg-primary rounded-xl md:rounded-[18px] text-body3-mobile md:text-cta-desktop font-semibold">
            Demo Store
          </button>

          <button className="px-4 py-3 md:px-6 md:py-4 rounded-xl md:rounded-[18px] border">
            <span className="text-body3-mobile md:text-cta-desktop font-semibold bg-gradient-to-r from-[#FF5D5D] to-[#4794FF] inline-block text-transparent bg-clip-text">
              Button Text
            </span>
          </button>
        </div>
      </div>

      <div>
        <Image
          alt="hero section"
          src={"/hero-section.png"}
          quality={100}
          sizes="100vw"
          width={100}
          height={100}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>
    </div>
  );
};

export default HeroSection;
