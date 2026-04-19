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
        <p className="mt-4 font-normal text-base text-neutral-300 max-w-2xl text-center mx-auto">
          Results-driven Systems Architect with over a decade of experience designing and scaling highly available hybrid cloud infrastructures. Specialized expertise in <a href="https://cloud.google.com/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Google Cloud Platform (GCP)</a>—leveraging its global VPC networks, Anthos, and advanced analytics to build resilient, cost-effective, and globally scalable systems.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-neutral-400 font-mono">
          <a href="mailto:waqarazeem_kpsi@hotmail.com" className="flex items-center gap-1 border border-neutral-800 px-3 py-1 rounded-full hover:border-blue-500 hover:text-blue-400 transition-colors">Email</a>
          <a href="https://www.linkedin.com/in/wazeem-sysadmin" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 border border-neutral-800 px-3 py-1 rounded-full hover:border-blue-500 hover:text-blue-400 transition-colors">LinkedIn</a>
          <a href="https://github.com/induslevel" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 border border-neutral-800 px-3 py-1 rounded-full hover:border-blue-500 hover:text-blue-400 transition-colors">GitHub</a>
          <a href="https://induslevel.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 border border-neutral-800 px-3 py-1 rounded-full hover:border-blue-500 hover:text-blue-400 transition-colors">Blog</a>
          <a href="https://focus.hadiqal.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 border border-neutral-800 px-3 py-1 rounded-full hover:border-blue-500 hover:text-blue-400 transition-colors">Photography</a>
        </div>
        <div className="mt-8 flex justify-center gap-4">
          <a href="#projects" className="px-8 py-3 rounded-full bg-white text-black font-bold hover:bg-neutral-200 transition-colors flex items-center gap-2">
            View Projects <MoveRight className="w-4 h-4" />
          </a>
          <a href="#contact" className="px-8 py-3 rounded-full border border-white text-white font-bold hover:bg-white/10 transition-colors">
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
}
