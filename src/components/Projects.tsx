import React from "react";
import { MoveUpRight } from "lucide-react";

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">Projects</h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            I'm a results-driven Systems Architect dedicated to designing and scaling highly available hybrid cloud infrastructures. 
            I love architecting robust solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group relative bg-neutral-900/50 border border-neutral-800 rounded-3xl p-8 hover:border-blue-500/50 transition-all duration-300"
            >
              <div className="absolute top-6 right-6 text-neutral-600 group-hover:text-blue-500 transition-colors">
                <MoveUpRight className="w-5 h-5" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-neutral-400 text-sm mb-6 leading-relaxed">
                {project.description}
              </p>
              
              <div className="mt-auto">
                <p className="text-[10px] uppercase tracking-widest text-neutral-500 mb-3 font-bold">Tech Stack</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-xs font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const projects = [
  {
    title: "Multi-Cloud Hybrid Infrastructure",
    description: "A highly available architecture deployed across public clouds and on-premises virtualized environments to scale global infrastructure capacity seamlessly.",
    tech: ["GCP", "AWS", "Azure", "VMware vSphere"],
  },
  {
    title: "Automated CI/CD Pipeline",
    description: "Infrastructure-as-code deployments and automated delivery pipelines engineered to accelerate life cycles and drastically reduce manual configuration errors.",
    tech: ["Kubernetes", "Docker", "Jenkins", "Ansible"],
  },
  {
    title: "Enterprise Security System",
    description: "Implementation of security standards (PCI DSS, SSAE18, CIS) across mission-critical OLTP platforms to maintain continuous regulatory compliance.",
    tech: ["Linux", "Solaris", "PfSense", "IPS/IDS"],
  },
  {
    title: "Global Enterprise Edge Security",
    description: "Advanced application load balancing, integrated CDN solutions, and enterprise-grade DDoS protection deployed for optimized global traffic routing.",
    tech: ["F5 LTM", "Cloudflare CDN", "AWS Route53"],
  },
  {
    title: "Centralized Hybrid Observability",
    description: "Centralized network and application monitoring across distributed multi-cloud environments, significantly improving MTTR for system incidents.",
    tech: ["Dynatrace", "CloudWatch", "Nagios", "Cacti"],
  },
  {
    title: "Tier-1 Disaster Recovery",
    description: "Comprehensive disaster recovery strategies and automated failovers executed for critical tier-1 storage and hybrid cloud computing systems.",
    tech: ["Dell EMC SAN", "Brocade FC", "GCP Anthos"],
  },
];
