"use client";
import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { MoveRight } from "lucide-react";

export function Hero() {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full flex flex-col items-center justify-center">
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Waqar Azeem <br /> Systems Architect.
        </h1>
        <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
          Hybrid cloud architect specializing in Linux, Virtualization, and Public Cloud infrastructure (AWS, Azure, GCP). Designing highly available mission-critical systems with a focus on security, compliance, and CI/CD automation.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <button className="px-8 py-3 rounded-full bg-white text-black font-bold hover:bg-neutral-200 transition-colors flex items-center gap-2">
            View Projects <MoveRight className="w-4 h-4" />
          </button>
          <button className="px-8 py-3 rounded-full border border-white text-white font-bold hover:bg-white/10 transition-colors">
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
}
