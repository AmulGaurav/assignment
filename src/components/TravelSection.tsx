import Image from "next/image";
import ScrollableGallery from "./ScrollableGallery";

const TravelSection = () => {
  return (
    <div className="flex flex-col gap-4 md:gap-9 mb-6 md:mb-12">
      <div className="bg-black text-white flex justify-between gap-6 md:gap-0 p-4 md:p-6 rounded-2xl md:rounded-3xl">
        <div className="text-h2-mobile md:text-h2-desktop font-bold pb-2 border-b border-[#00DC82]">
          Travel
        </div>
        <div className="text-h2-mobile md:text-h2-desktop font-bold">
          Digital
        </div>
        <div className="text-h2-mobile md:text-h2-desktop font-bold">Brand</div>
        <div className="text-h2-mobile md:text-h2-desktop font-bold">Merch</div>
      </div>

      <div className="flex flex-col gap-8 md:gap-16 rounded-[18px] bg-black">
        <div className="p-6 text-white relative w-full h-[700px] min-w-[328px]">
          <Image
            alt="Mountains"
            src="/travel-mountains1.png"
            fill
            sizes="100vw"
            className="rounded-xl md:rounded-3xl object-cover"
            priority
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 md:gap-8 text-white font-bold">
            <div className="text-h1-desktop md:text-header-desktop text-center">
              TRAVEL
            </div>
            <div className="text-h5-mobile md:text-h2-desktop max-w-[280px] md:max-w-[700px] text-center">
              Turn your travel experience into itinerary, travel package with
              VYB Store and share it with your true followers.
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 md:gap-14">
          <div className="text-white text-h2-mobile md:text-h2-desktop font-bold text-center">
            Explore Our Curated Travel Itineraries
          </div>

          <ScrollableGallery />
        </div>

        <div className="text-h2-mobile md:text-h2-desktop text-white text-center font-bold">
          How to list?
        </div>

        <div className="relative w-full h-[330px] md:h-[550px]">
          <Image
            alt="Mountains"
            src="/travel-mountains2.png"
            fill
            sizes="100vw"
            className="rounded-xl md:rounded-[30px] object-contain"
            priority
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center md:justify-end text-white font-normal md:pb-5">
            <div className="text-h3-mobile md:text-h2-desktop font-bold md:font-normal max-w-[184px] md:max-w-[636px] text-center">
              You Curate Experience,We Make It Happen
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelSection;
