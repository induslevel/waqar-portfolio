import { 
  MoveUpRight, 
  Cloud, 
  Cpu, 
  ShieldCheck, 
  Terminal, 
  Network, 
  Activity, 
  Database, 
  Box, 
  Settings, 
  Workflow, 
  Globe, 
  Monitor,
  Lock,
  LayoutDashboard
} from "lucide-react";

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-neutral-50 dark:bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-left mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-black dark:text-white mb-4">Projects</h2>
          <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl">
            I'm a results-driven Systems Architect dedicated to designing and scaling highly available hybrid cloud infrastructures. 
            I love architecting robust solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group relative bg-white dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800 rounded-3xl p-8 hover:border-blue-500/50 transition-all duration-300 flex flex-col shadow-sm hover:shadow-md"
            >
              <div className="absolute top-6 right-6 text-neutral-400 dark:text-neutral-600 group-hover:text-blue-500 transition-colors">
                <MoveUpRight className="w-5 h-5" />
              </div>
              
              <h3 className="text-xl font-bold text-black dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-6 leading-relaxed">
                {project.description}
              </p>
              
              <div className="mt-auto">
                <p className="text-[10px] uppercase tracking-widest text-neutral-500 dark:text-neutral-500 mb-3 font-bold">Tech Stack</p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t, i) => (
                    <span 
                      key={i} 
                      className="px-2 py-1 bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 rounded-full text-blue-600 dark:text-blue-400 text-[10px] font-medium flex items-center gap-1"
                    >
                      {t.icon}
                      {t.name}
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
    tech: [
      { name: "GCP", icon: <Globe className="w-3 h-3" /> },
      { name: "AWS", icon: <Cloud className="w-3 h-3" /> },
      { name: "Azure", icon: <Server className="w-3 h-3" /> },
      { name: "VMware", icon: <Monitor className="w-3 h-3" /> }
    ],
  },
  {
    title: "Automated CI/CD Pipeline",
    description: "Infrastructure-as-code deployments and automated delivery pipelines engineered to accelerate life cycles and drastically reduce manual configuration errors.",
    tech: [
      { name: "Kubernetes", icon: <Settings className="w-3 h-3" /> },
      { name: "Docker", icon: <Box className="w-3 h-3" /> },
      { name: "Jenkins", icon: <Workflow className="w-3 h-3" /> },
      { name: "Ansible", icon: <Settings className="w-3 h-3" /> }
    ],
  },
  {
    title: "Enterprise Security System",
    description: "Implementation of security standards (PCI DSS, SSAE18, CIS) across mission-critical OLTP platforms to maintain continuous regulatory compliance.",
    tech: [
      { name: "Linux", icon: <Terminal className="w-3 h-3" /> },
      { name: "Solaris", icon: <Cpu className="w-3 h-3" /> },
      { name: "PfSense", icon: <ShieldCheck className="w-3 h-3" /> },
      { name: "IPS/IDS", icon: <Lock className="w-3 h-3" /> }
    ],
  },
  {
    title: "Global Enterprise Edge Security",
    description: "Advanced application load balancing, integrated CDN solutions, and enterprise-grade DDoS protection deployed for optimized global traffic routing.",
    tech: [
      { name: "F5 LTM", icon: <Network className="w-3 h-3" /> },
      { name: "Cloudflare", icon: <Cloud className="w-3 h-3" /> },
      { name: "AWS Route53", icon: <Globe className="w-3 h-3" /> }
    ],
  },
  {
    title: "Centralized Hybrid Observability",
    description: "Centralized network and application monitoring across distributed multi-cloud environments, significantly improving MTTR for system incidents.",
    tech: [
      { name: "Dynatrace", icon: <Activity className="w-3 h-3" /> },
      { name: "CloudWatch", icon: <Monitor className="w-3 h-3" /> },
      { name: "Nagios", icon: <Activity className="w-3 h-3" /> }
    ],
  },
  {
    title: "Tier-1 Disaster Recovery",
    description: "Comprehensive disaster recovery strategies and automated failovers executed for critical tier-1 storage and hybrid cloud computing systems.",
    tech: [
      { name: "EMC SAN", icon: <Database className="w-3 h-3" /> },
      { name: "Brocade", icon: <Network className="w-3 h-3" /> },
      { name: "GCP Anthos", icon: <Globe className="w-3 h-3" /> }
    ],
  },
];

import { Server } from "lucide-react";
