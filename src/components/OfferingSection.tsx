import Image from "next/image";

const OfferingSection = () => {
  return (
    <div className="text-center grid grid-cols-5 gap-4 md:gap-9 mb-6 md:mb-12">
      <div className="col-span-5 md:col-span-2 text-h2-mobile md:text-h1-desktop font-bold text-primary flex justify-center items-center">
        From Creation to Monetization: Vyb Store Has It All
      </div>

      <div className="col-span-5 md:col-span-3">
        <div className="grid grid-cols-2 gap-2 md:gap-4 min-w-[328px] md:min-w-[360px]">
          <div className="flex flex-col gap-2 md:gap-4 min-w-40">
            <div className="bg-black flex flex-col gap-4 md:gap-6 rounded-2xl md:rounded-3xl p-4 md:p-6">
              <div className="flex flex-col items-center gap-2">
                <div className="text-white text-h4-mobile md:text-h2-desktop font-bold">
                  Trusted By Influencers
                </div>
                <div className="font-inter md:font-urbanist text-white text-body3-mobile md:text-body1-desktop font-medium md:font-bold">
                  A trusted platform for influencers to grow and earn.
                </div>
              </div>

              <div className="flex justify-center">
                <Image
                  src="/offerings1.png"
                  className="w-[135px] md:w-[190px]"
                  alt="offerings 1"
                  width={500}
                  height={500}
                />
              </div>
            </div>

            <div className="bg-black flex flex-col gap-4 md:gap-6 rounded-2xl md:rounded-3xl p-4 md:p-6">
              <div className="flex flex-col items-center gap-2">
                <div className="text-white text-h4-mobile md:text-h2-desktop font-bold">
                  Authentic Payment Partner
                </div>
                <div className="font-inter md:font-urbanist text-white text-body3-mobile md:text-body1-desktop font-medium md:font-bold">
                  Reliable, fast, and secure payments you can trust
                </div>
              </div>

              <div className="flex justify-center">
                <Image
                  src="/offerings2.png"
                  className="w-[100px] md:w-[149px]"
                  alt="offerings 1"
                  width={500}
                  height={500}
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2 md:gap-4 min-w-40">
            <div className="bg-black flex flex-col ggap-4 md:ap-6 rounded-2xl md:rounded-3xl p-4 md:p-6">
              <div className="flex flex-col items-center gap-2">
                <div className="text-white text-h4-mobile md:text-h2-desktop font-bold">
                  Secured Data
                </div>
                <div className="font-inter md:font-urbanist text-white text-body3-mobile md:text-body1-desktop font-medium md:font-bold">
                  Advanced security measures to protect your valuable data
                </div>
              </div>

              <div className="flex justify-center">
                <Image
                  src="/offerings3.png"
                  className="w-[120px] md:w-[190px]"
                  alt="offerings 1"
                  width={500}
                  height={500}
                />
              </div>
            </div>

            <div className="bg-black flex flex-col gap-4 md:gap-6 rounded-2xl md:rounded-3xl p-4 md:p-6">
              <div className="flex flex-col items-center gap-2">
                <div className="text-white text-h4-mobile md:text-h2-desktop font-bold">
                  Monetize Your Influence
                </div>
                <div className="font-inter md:font-urbanist text-white text-body3-mobile md:text-body1-desktop font-medium md:font-bold">
                  Seamlessly turn your influence into consistent revenue
                </div>
              </div>

              <div className="flex justify-center">
                <Image
                  src="/offerings4.png"
                  className="w-[146px] md:w-[190px]"
                  alt="offerings 1"
                  width={500}
                  height={500}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferingSection;
