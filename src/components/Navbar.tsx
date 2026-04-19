"use client";
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Intro", link: "#home" },
    { name: "Projects", link: "#projects" },
    { name: "Arsenal", link: "#arsenal" },
    { name: "Experience", link: "#experience" },
    { name: "Certifications", link: "#certifications" },
    { name: "Education", link: "#education" },
    { name: "Organizations", link: "#organizations" },
    { name: "Portfolios", link: "#interests" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <div className={cn(
      "fixed right-6 z-[100] transition-all duration-300",
      scrolled ? "top-4" : "top-6 md:top-8 md:right-8"
    )}>
      {/* Burger Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "p-3 rounded-full border transition-all duration-300 shadow-xl flex items-center justify-center relative z-20",
          "bg-white/80 dark:bg-black/80 backdrop-blur-md border-neutral-200 dark:border-neutral-800 text-black dark:text-white hover:scale-105"
        )}
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Overlay for mobile (optional, but good for closing) */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-10" 
          onClick={() => setIsOpen(false)} 
        />
      )}

      {/* Dropdown Menu */}
      <div 
        className={cn(
          "absolute top-full right-0 mt-4 w-56 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/90 dark:bg-black/90 backdrop-blur-xl shadow-2xl transition-all duration-300 overflow-hidden origin-top-right z-20",
          isOpen ? "scale-100 opacity-100 pointer-events-auto translate-y-0" : "scale-95 opacity-0 pointer-events-none -translate-y-4"
        )}
      >
        <div className="flex flex-col py-2">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.link}
              onClick={() => setIsOpen(false)}
              className="px-6 py-3 text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-neutral-100 dark:hover:bg-neutral-900/50 transition-all"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
