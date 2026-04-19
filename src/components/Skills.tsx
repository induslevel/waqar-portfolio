import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { 
  Cloud, 
  ShieldCheck, 
  Cpu, 
  Terminal, 
  Network, 
  Activity, 
  LayoutDashboard 
} from "lucide-react";

export function Skills() {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-12 text-center">Technical Arsenal</h2>
        <BentoGrid className="max-w-4xl mx-auto">
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={
                <div className={`flex flex-1 w-full h-full min-h-[8rem] rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center group-hover/bento:scale-105 transition-transform duration-300`}>
                  {item.headerIcon}
                </div>
              }
              className={i === 3 || i === 6 ? "md:col-span-2" : ""}
            />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}

const items = [
  {
    title: "Cloud Infrastructure",
    description: "Expertise in AWS, Azure, and GCP public cloud setups and hybrid environments.",
    gradient: "from-blue-500/20 to-cyan-500/20",
    headerIcon: <Cloud className="h-12 w-12 text-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]" />,
  },
  {
    title: "Virtualization",
    description: "Deep experience with Citrix Xen, VMware vSphere, RedHat KVM, and Oracle VM.",
    gradient: "from-purple-500/20 to-pink-500/20",
    headerIcon: <Cpu className="h-12 w-12 text-pink-400 drop-shadow-[0_0_15px_rgba(244,114,182,0.5)]" />,
  },
  {
    title: "Security & Compliance",
    description: "Implementation of PCI DSS, SSAE18, CIS standards, and robust firewall management.",
    gradient: "from-red-500/20 to-orange-500/20",
    headerIcon: <ShieldCheck className="h-12 w-12 text-red-400 drop-shadow-[0_0_15px_rgba(248,113,113,0.5)]" />,
  },
  {
    title: "CI/CD & Automation",
    description: "Automated deployments using Jenkins, Ansible, Puppet, Docker, and Kubernetes (k8s). Custom bash scripting for system optimization.",
    gradient: "from-emerald-500/20 to-teal-500/20",
    headerIcon: <Terminal className="h-12 w-12 text-emerald-400 drop-shadow-[0_0_15px_rgba(52,211,153,0.5)]" />,
  },
  {
    title: "Networking",
    description: "Configuring PfSense, F5 LTM, IPSec/SSL VPN, and Cloudflare DDOS protection.",
    gradient: "from-indigo-500/20 to-blue-500/20",
    headerIcon: <Network className="h-12 w-12 text-indigo-400 drop-shadow-[0_0_15px_rgba(129,140,248,0.5)]" />,
  },
  {
    title: "Monitoring",
    description: "Centralized monitoring using Nagios, Cacti, CloudWatch, Dynatrace, and Xymon.",
    gradient: "from-yellow-500/20 to-orange-500/20",
    headerIcon: <Activity className="h-12 w-12 text-yellow-400 drop-shadow-[0_0_15px_rgba(251,191,36,0.5)]" />,
  },
  {
    title: "Enterprise Storage",
    description: "Advanced configuration of Dell EMC SAN/NAS (VNX, XtremIO, PowerMax) and Brocade FC Switches.",
    gradient: "from-slate-500/20 to-neutral-500/20",
    headerIcon: <LayoutDashboard className="h-12 w-12 text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]" />,
  },
];
