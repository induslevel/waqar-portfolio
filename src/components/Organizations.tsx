import React from "react";
import { Users } from "lucide-react";

export function Organizations() {
  return (
    <section id="organizations" className="py-20 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-3 mb-12 justify-start">
          <Users className="w-10 h-10 text-blue-500" />
          <h2 className="text-3xl md:text-5xl font-bold text-black dark:text-white text-left">Fellowships & Organizations</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {orgs.map((org, index) => (
            <a 
              key={index} 
              href={org.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800 p-8 rounded-3xl hover:border-blue-500 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <h3 className="text-xl font-bold text-black dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {org.name}
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
                {org.description}
              </p>
              <div className="mt-4 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                View Fellowship Details
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

const orgs = [
  {
    name: "ICANN Fellow",
    description: "Participated in global internet governance and policy development as an ICANN Fellow, contributing to the security and stability of the global identifier systems.",
    link: "https://www.icann.org/resources/pages/prague44-attendees-2012-07-13-en"
  },
  {
    name: "IETF Fellow",
    description: "Engagement with the Internet Engineering Task Force (IETF) to develop and promote internet standards, focusing on network protocols and architecture.",
    link: "https://www.internetsociety.org/wp-content/uploads/2017/08/IETF208620Fellows20030713.pdf"
  }
];
