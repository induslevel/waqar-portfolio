import React from "react";

export function Experience() {
  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">Professional Journey</h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 border-l border-neutral-800 pb-12 last:pb-0">
              <div className="absolute left-[-5px] top-0 w-[10px] h-[10px] rounded-full bg-blue-500 shadow-[0_0_10px_#3b82f6]" />
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-neutral-100">{exp.role}</h3>
                  <a href={exp.link} target="_blank" rel="noopener noreferrer" className="text-blue-400 font-medium hover:underline">
                    {exp.company}
                  </a>
                </div>
                <p className="text-neutral-500 text-sm mt-2 md:mt-0 font-mono">{exp.period}</p>
              </div>
              <ul className="space-y-3">
                {exp.description.map((point, i) => (
                  <li key={i} className="text-neutral-400 flex items-start gap-2">
                    <span className="text-blue-500 mt-1.5 shrink-0">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const experiences = [
  {
    company: "i2c incorporated",
    link: "https://www.i2cinc.com/",
    role: "Systems Architect",
    period: "August 2012 – January 2023",
    description: [
      "Scaled global infrastructure capacity and achieved high availability by designing and deploying multi-cloud architectures across GCP, AWS, and Azure.",
      "Spearheaded the implementation of PCI DSS, SSAE18, and CIS standards across all Linux and Solaris environments.",
      "Accelerated deployment life cycles by engineering automated CI/CD pipelines and infrastructure-as-code for containerized microservices.",
      "Optimized global traffic routing by architecting advanced application load balancing and enterprise-grade DDoS protection.",
      "Ensured organizational business continuity by executing comprehensive disaster recovery strategies for tier-1 storage and computing systems.",
      "Improved MTTR for system incidents by centralizing observability across distributed hybrid environments.",
      "Administered secure Virtual Desktop Infrastructure (VDI) for remote access in North American support centers."
    ],
  },
  {
    company: "University of Engineering and Technology (UET), Lahore",
    link: "https://www.uet.edu.pk/",
    role: "System Administrator",
    period: "October 2009 – July 2012",
    description: [
      "Enhanced campus-wide connectivity for thousands of users by managing complex wired and wireless local area networks.",
      "Achieved 100% historical uptime for critical academic and administrative services including DNS, Active Directory, and Mail."
    ],
  },
];
