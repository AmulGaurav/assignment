import * as Avatar from "@radix-ui/react-avatar";

const InfluencersSection = () => {
  const avatars = [
    { src: "/influencer3.png", alt: "Samira" },
    { src: "/influencer4.png", alt: "Jay" },
    { src: "/influencer1.png", alt: "Samira" },
    { src: "/influencer5.png", alt: "Samira" },
  ];

  return (
    <div className="flex flex-col gap-4 md:gap-9 mb-6 md:mb-12">
      <div className="text-h1-mobile md:text-h2-desktop font-bold text-center text-primary">
        Our Influencers
      </div>

      <div className="flex flex-wrap justify-around gap-[12.79px] md:gap-9">
        {avatars.map((avatar, index) => (
          <div key={index}>
            <Avatar.Root className="inline-flex size-[95.18px] md:size-[268px] select-none items-center justify-center overflow-hidden rounded-[130.7px] md:rounded-[237.5px] align-middle">
              <Avatar.Image
                className="size-full rounded-[inherit] object-cover grayscale hover:grayscale-0 transition duration-300 ease-in-out"
                src={`${avatar.src}?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80`}
                alt={avatar.alt}
              />

              <Avatar.Fallback
                className="flex size-full items-center justify-center bg-white text-[15px] font-medium text-violet11"
                delayMs={600}
              >
                {avatar.alt}
              </Avatar.Fallback>
            </Avatar.Root>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfluencersSection;
