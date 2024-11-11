"use client";

import React from "react";

import Image from "next/image";
import AnimatedPopover from "./AnimatedPopover";
import PopoverComponent from "./PopoverComponent";
import SearcBox from "./SearcBox";

export default function Navbar() {
  return (
    <nav className="py-2 sm:py-3 md:py-5 xl:py-7 2xl:py-9">
      <div className="w-full flex flex-wrap items-center justify-between gap-x-6 lg:gap-x-0 xl:gap-x-12">
        <div className="flex gap-x-[22px] lg:gap-x-2 xl:gap-x-[22px] py-1">
          <div>
            <Image
              className="h-[39px] sm:h-12 w-[65px] sm:w-[105px]"
              src="/logo.png"
              quality={100}
              width={105}
              height={500}
              alt="logo"
            />
          </div>

          <SearcBox />
        </div>

        <div className="hidden w-full lg:block lg:w-auto">
          <ul className="text-white font-bold text-h4-desktop flex flex-shrink gap-x-9">
            <li>
              <a href="#" className="block" aria-current="page">
                Fav Creators
              </a>
            </li>
            <li>
              <a href="#" className="block">
                Merchandise
              </a>
            </li>
            <li>
              <a href="#" className="block">
                Brand
              </a>
            </li>
            <li>
              <a href="#" className="block">
                Digital
              </a>
            </li>
          </ul>
        </div>

        <div className="hidden lg:block w-24 h-[41px] px-4 py-2 bg-white rounded-2xl">
          <PopoverComponent />
        </div>

        <div className="lg:hidden">
          <AnimatedPopover />
        </div>
      </div>
    </nav>
  );
}
