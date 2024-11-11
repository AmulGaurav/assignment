"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";

const VerticalScrollableContainer = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startY, setStartY] = useState(0);
  const [scrollTop, setScrollTop] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartY(e.pageY - scrollContainerRef.current!.offsetTop);
    setScrollTop(scrollContainerRef.current!.scrollTop);
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
    const y = e.pageY - scrollContainerRef.current!.offsetTop;
    const walk = (y - startY) * 2;
    scrollContainerRef.current!.scrollTop = scrollTop - walk;
  };

  return (
    <div
      ref={scrollContainerRef}
      className="h-[378px] md:h-[450px] overflow-y-auto scrollbar-hide cursor-grab active:cursor-grabbing"
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      style={{
        scrollBehavior: "smooth",
        WebkitOverflowScrolling: "touch",
        scrollbarWidth: "none",
        msOverflowStyle: "none",
      }}
    >
      <div className="flex flex-col gap-9">
        <div className="bg-[#A94949] max-w-[320px] md:max-w-[840px] rounded-3xl p-4 md:p-9 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-16 select-none mx-auto">
          <div className="max-w-[340px] flex flex-col justify-center gap-4 md:gap-6 text-center">
            <div className="text-h4-mobile md:text-h3-desktop text-white font-bold">
              Sign Up and create your own store hassle-free.
            </div>
            <div className="font-inter md:font-urbanist text-body3-mobile md:text-body2-desktop text-white font-medium">
              Join us via google signin and verify your influencer status by
              entering you social media Id and unlock your store @ zero cost.
            </div>
          </div>

          <Image
            src="/get-started1.png"
            className="w-[155px] md:w-[212px] mx-auto md:mx-0"
            alt="get started 1"
            width={500}
            height={500}
          />
        </div>

        <div className="bg-[#5ED46A] max-w-[320px] md:max-w-[840px] rounded-3xl p-4 md:p-9 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-16 select-none mx-auto rotate-1">
          <div className="max-w-[340px] flex flex-col justify-center gap-4 md:gap-6 text-center rotate-1">
            <div className="text-h4-mobile md:text-h3-desktop text-white font-bold">
              Sign Up and create your own store hassle-free.
            </div>
            <div className="font-inter md:font-urbanist text-body3-mobile md:text-body2-desktop text-white font-medium">
              Join us via google signin and verify your influencer status by
              entering you social media Id and unlock your store @ zero cost.
            </div>
          </div>

          <Image
            src="/get-started2.png"
            className="w-[163px] md:w-[212px] rotate-0 md:rotate-1 mx-auto md:mx-0"
            alt="get started 1"
            width={500}
            height={500}
          />
        </div>

        <div className="bg-[#487FD7] max-w-[320px] md:max-w-[840px] rounded-3xl p-4 md:p-9 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-16 select-none mx-auto -rotate-[1.5deg]">
          <div className="max-w-[340px] flex flex-col justify-center gap-4 md:gap-6 text-center -rotate-[1.5deg]">
            <div className="text-h4-mobile md:text-h3-desktop text-white font-bold">
              Sign Up and create your own store hassle-free.
            </div>
            <div className="font-inter md:font-urbanist text-body3-mobile md:text-body2-desktop text-white font-medium">
              Join us via google signin and verify your influencer status by
              entering you social media Id and unlock your store @ zero cost.
            </div>
          </div>

          <Image
            src="/get-started3.png"
            className="w-[163px] md:w-[189px] -rotate-0 md:-rotate-[1.5deg] mx-auto md:mx-0"
            alt="get started 1"
            width={500}
            height={500}
          />
        </div>

        <div className="bg-[#5CAAB6] max-w-[320px] md:max-w-[840px] rounded-3xl p-4 md:p-9 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-16 select-none mx-auto rotate-[1.5deg]">
          <div className="max-w-[340px] flex flex-col justify-center gap-4 md:gap-6 text-center rotate-[1.5deg]">
            <div className="text-h4-mobile md:text-h3-desktop text-white font-bold">
              Sign Up and create your own store hassle-free.
            </div>
            <div className="font-inter md:font-urbanist text-body3-mobile md:text-body2-desktop text-white font-medium">
              Join us via google signin and verify your influencer status by
              entering you social media Id and unlock your store @ zero cost.
            </div>
          </div>

          <Image
            src="/get-started4.png"
            className="w-[212px] h-[222px] md:h-[305px] rotate-0 md:rotate-[1.5deg] mx-auto md:mx-0"
            alt="get started 1"
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  );
};

export default VerticalScrollableContainer;
