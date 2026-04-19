"use client";
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

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
      "fixed top-6 left-1/2 -translate-x-1/2 z-[100] transition-all duration-300 w-[95%] max-w-fit",
      scrolled ? "top-4" : "top-6"
    )}>
      <nav className={cn(
        "flex items-center gap-1 p-1.5 rounded-full border transition-all duration-300",
        "bg-white/70 dark:bg-black/70 backdrop-blur-md border-neutral-200 dark:border-neutral-800 shadow-xl",
        scrolled ? "py-1 px-4" : "py-1.5 px-6"
      )}>
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.link}
            className="px-3 py-1.5 text-xs md:text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-all"
          >
            {item.name}
          </a>
        ))}
      </nav>
    </div>
  );
}
