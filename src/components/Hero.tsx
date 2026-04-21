"use client";
import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { MoveRight } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <div id="home" className="min-h-[100dvh] md:h-[50rem] md:min-h-[50rem] w-full rounded-md flex flex-col md:flex-row md:items-center md:justify-center bg-white dark:bg-black/[0.96] antialiased bg-grid-black/[0.02] dark:bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="rgba(59, 130, 246, 0.2)"
      />
      
      {/* Background Image Integration */}
      <div className="absolute right-0 top-0 h-full w-full md:w-1/2 opacity-[0.35] md:opacity-80 dark:opacity-[0.35] md:dark:opacity-90 pointer-events-none transition-opacity duration-500">
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent md:via-white/10 dark:from-black dark:via-black/80 md:dark:via-black/10 dark:to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent via-[45%] md:via-[90%] to-white dark:to-black z-10" />
        <Image 
          src="/profile.jpg" 
          alt="Waqar Azeem"
          fill
          className="object-cover object-[center_0%] md:object-center grayscale hover:grayscale-0 transition-all duration-1000"
          priority
        />
      </div>

      <div className="px-6 pt-24 pb-8 md:p-4 max-w-7xl mx-auto relative z-20 w-full flex-1 flex flex-col justify-between md:justify-center items-start md:pl-20 md:py-0">
        {/* Top Text on Mobile */}
        <div className="w-full">
          <h1 className="text-6xl md:text-8xl font-bold text-left bg-clip-text text-transparent bg-gradient-to-b from-black to-neutral-500 dark:from-neutral-50 dark:to-neutral-400 leading-tight">
            Waqar<br /> Azeem
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-500 mt-20 md:mt-2 text-left leading-tight">
            Systems<br /> Architect
          </h2>
        </div>

        {/* Bottom Text on Mobile */}
        <div className="w-full pb-8 md:pb-0 md:mt-8">
          <p className="font-normal text-base text-neutral-700 dark:text-neutral-300 max-w-xl text-left">
            Results-driven Systems Architect with over a decade of experience designing and scaling highly available hybrid cloud infrastructures.
          </p>
        </div>
      </div>
    </div>
  );
}
