import React from "react";
import { Camera, BookOpen } from "lucide-react";

export function Interests() {
  return (
    <section id="interests" className="py-20 bg-neutral-50 dark:bg-neutral-900/30">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-black dark:text-white mb-16 text-center">Creative Portfolios</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {portfolios.map((item, index) => (
            <a 
              key={index} 
              href={item.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-3xl bg-white dark:bg-black border border-neutral-200 dark:border-neutral-800 p-8 hover:border-blue-500 transition-all duration-300 shadow-sm hover:shadow-xl"
            >
              <div className={`absolute top-0 right-0 p-8 text-neutral-100 dark:text-neutral-900 group-hover:scale-110 transition-transform`}>
                {item.icon}
              </div>
              
              <div className="relative z-10">
                <div className="mb-4 text-blue-500">{item.icon}</div>
                <h3 className="text-2xl font-bold text-black dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6">
                  {item.description}
                </p>
                <div className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold">
                  Explore Portfolio
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

const portfolios = [
  {
    title: "Photography Showcase",
    description: "Capturing moments through the lens. A curated collection of landscape, street, and architectural photography that explores light and perspective.",
    icon: <Camera className="w-12 h-12 opacity-20 group-hover:opacity-100 transition-opacity" />,
    link: "https://focus.hadiqal.com"
  },
  {
    title: "Technical Blog",
    description: "Deep dives into systems architecture, cloud computing, and DevOps automation. Sharing insights and best practices from a decade of experience.",
    icon: <BookOpen className="w-12 h-12 opacity-20 group-hover:opacity-100 transition-opacity" />,
    link: "https://induslevel.com"
  }
];
