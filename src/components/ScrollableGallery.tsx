"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import * as Avatar from "@radix-ui/react-avatar";

const ScrollableGallery = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current!.offsetLeft);
    setScrollLeft(scrollContainerRef.current!.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current!.offsetLeft;
    const walk = (x - startX) * 2; // Scroll speed multiplier
    scrollContainerRef.current!.scrollLeft = scrollLeft - walk;
  };

  return (
    <div
      ref={scrollContainerRef}
      className="px-4 flex gap-6 overflow-x-auto cursor-grab active:cursor-grabbing"
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      style={{
        WebkitOverflowScrolling: "touch",
        scrollBehavior: "smooth",
        scrollbarWidth: "none",
        msOverflowStyle: "none",
      }}
    >
      <div className="pl-3 md:px-4 flex gap-[29px] md:gap-6">
        <div className="relative w-[153px] md:w-[270px] rounded-2xl pb-3 select-none">
          <Image
            src="/travel1.png"
            alt="travel 1"
            quality={100}
            width={500}
            height={500}
          />
          <div className="absolute inset-0 flex flex-col items-center justify-end gap-1 pb-7 text-white font-bold">
            <div className="text-h4-mobile md:text-h4-desktop font-bold">
              Darjeeling Itinerary
            </div>
            <div className="text-body2-mobile md:text-body1-desktop font-medium md:font-bold">
              West Bengal
            </div>
            <div className="hidden md:inline-flex w-48 rounded-2xl justify-around bg-white px-2 py-1">
              <div className="text-black text-body1-desktop font-bold">
                Samira Hadid
              </div>

              <Avatar.Root className="inline-flex size-[23px] select-none items-center justify-center overflow-hidden rounded-[141.25px] bg-blackA1 align-middle">
                <Avatar.Image
                  className="size-full rounded-[inherit] object-cover"
                  src="/influencer2.png?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80"
                  alt="Pedro Duarte"
                />
                <Avatar.Fallback
                  className="leading-1 flex size-full items-center justify-center bg-white text-[15px] font-medium text-violet11"
                  delayMs={600}
                >
                  Minka Kelly
                </Avatar.Fallback>
              </Avatar.Root>
            </div>
          </div>
        </div>

        <div className="relative w-[153px] md:w-[270px] pb-3 select-none">
          <Image
            src="/travel2.png"
            alt="travel 2"
            quality={100}
            width={500}
            height={500}
          />
          <div className="absolute inset-0 flex flex-col items-center justify-end gap-1 pb-7 text-white font-bold">
            <div className="text-h4-mobile md:text-h4-desktop font-bold">
              Munnar Itinerary
            </div>
            <div className="text-body2-mobile md:text-body1-desktop font-bold">
              Kerala
            </div>
            <div className="hidden md:inline-flex w-48 rounded-2xl justify-around bg-white px-2 py-1">
              <div className="text-black text-body1-desktop font-bold">
                Samira Hadid
              </div>

              <Avatar.Root className="inline-flex size-[23px] select-none items-center justify-center overflow-hidden rounded-[141.25px] bg-blackA1 align-middle">
                <Avatar.Image
                  className="size-full rounded-[inherit] object-cover"
                  src="/influencer2.png?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80"
                  alt="Pedro Duarte"
                />
                <Avatar.Fallback
                  className="leading-1 flex size-full items-center justify-center bg-white text-[15px] font-medium text-violet11"
                  delayMs={600}
                >
                  Minka Kelly
                </Avatar.Fallback>
              </Avatar.Root>
            </div>
          </div>
        </div>

        <div className="relative w-[153px] md:w-[270px] pb-3 select-none">
          <Image
            src="/travel3.png"
            alt="travel 3"
            quality={100}
            width={500}
            height={500}
          />
          <div className="absolute inset-0 flex flex-col items-center justify-end gap-1 pb-7 text-white font-bold">
            <div className="text-h4-mobile md:text-h4-desktop font-bold">
              Delhi Itinerary
            </div>
            <div className="text-body2-mobile md:text-body1-desktop font-bold">
              Delhi
            </div>
            <div className="hidden md:inline-flex w-48 rounded-2xl justify-around bg-white px-2 py-1">
              <div className="text-black text-body1-desktop font-bold">
                Samira Hadid
              </div>

              <Avatar.Root className="inline-flex size-[23px] select-none items-center justify-center overflow-hidden rounded-[141.25px] bg-blackA1 align-middle">
                <Avatar.Image
                  className="size-full rounded-[inherit] object-cover"
                  src="/influencer2.png?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80"
                  alt="Pedro Duarte"
                />
                <Avatar.Fallback
                  className="leading-1 flex size-full items-center justify-center bg-white text-[15px] font-medium text-violet11"
                  delayMs={600}
                >
                  Minka Kelly
                </Avatar.Fallback>
              </Avatar.Root>
            </div>
          </div>
        </div>

        <div className="relative w-[153px] md:w-[270px] pb-3 select-none">
          <Image
            src="/travel3.png"
            alt="travel 4"
            quality={100}
            width={500}
            height={500}
          />
          <div className="absolute inset-0 flex flex-col items-center justify-end gap-1 pb-7 text-white font-bold">
            <div className="text-h4-mobile md:text-h4-desktop font-bold">
              Delhi Itinerary
            </div>
            <div className="text-body2-mobile md:text-body1-desktop font-bold">
              Delhi
            </div>
            <div className="hidden md:inline-flex w-48 rounded-2xl justify-around bg-white px-2 py-1">
              <div className="text-black text-body1-desktop font-bold">
                Samira Hadid
              </div>

              <Avatar.Root className="inline-flex size-[23px] select-none items-center justify-center overflow-hidden rounded-[141.25px] bg-blackA1 align-middle">
                <Avatar.Image
                  className="size-full rounded-[inherit] object-cover"
                  src="/influencer2.png?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80"
                  alt="Pedro Duarte"
                />
                <Avatar.Fallback
                  className="leading-1 flex size-full items-center justify-center bg-white text-[15px] font-medium text-violet11"
                  delayMs={600}
                >
                  Minka Kelly
                </Avatar.Fallback>
              </Avatar.Root>
            </div>
          </div>
        </div>

        <div className="relative w-[153px] md:w-[270px] pb-3 select-none">
          <Image
            src="/travel3.png"
            alt="travel 5"
            quality={100}
            width={500}
            height={500}
          />
          <div className="absolute inset-0 flex flex-col items-center justify-end gap-1 pb-7 text-white font-bold">
            <div className="text-h4-mobile md:text-h4-desktop font-bold">
              Delhi Itinerary
            </div>
            <div className="text-body2-mobile md:text-body1-desktop font-bold">
              Delhi
            </div>
            <div className="hidden md:inline-flex w-48 rounded-2xl justify-around bg-white px-2 py-1">
              <div className="text-black text-body1-desktop font-bold">
                Samira Hadid
              </div>

              <Avatar.Root className="inline-flex size-[23px] select-none items-center justify-center overflow-hidden rounded-[141.25px] bg-blackA1 align-middle">
                <Avatar.Image
                  className="size-full rounded-[inherit] object-cover"
                  src="/influencer2.png?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80"
                  alt="Pedro Duarte"
                />
                <Avatar.Fallback
                  className="leading-1 flex size-full items-center justify-center bg-white text-[15px] font-medium text-violet11"
                  delayMs={600}
                >
                  Minka Kelly
                </Avatar.Fallback>
              </Avatar.Root>
            </div>
          </div>
        </div>

        <div className="relative w-[153px] md:w-[270px] pb-3 select-none">
          <Image
            src="/travel3.png"
            alt="travel 6"
            quality={100}
            width={500}
            height={500}
          />
          <div className="absolute inset-0 flex flex-col items-center justify-end gap-1 pb-7 text-white font-bold">
            <div className="text-h4-mobile md:text-h4-desktop font-bold">
              Delhi Itinerary
            </div>
            <div className="text-body2-mobile md:text-body1-desktop font-bold">
              Delhi
            </div>
            <div className="hidden md:inline-flex w-48 rounded-2xl justify-around bg-white px-2 py-1">
              <div className="text-black text-body1-desktop font-bold">
                Samira Hadid
              </div>

              <Avatar.Root className="inline-flex size-[23px] select-none items-center justify-center overflow-hidden rounded-[141.25px] bg-blackA1 align-middle">
                <Avatar.Image
                  className="size-full rounded-[inherit] object-cover"
                  src="/influencer2.png?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80"
                  alt="Pedro Duarte"
                />
                <Avatar.Fallback
                  className="leading-1 flex size-full items-center justify-center bg-white text-[15px] font-medium text-violet11"
                  delayMs={600}
                >
                  Minka Kelly
                </Avatar.Fallback>
              </Avatar.Root>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollableGallery;
