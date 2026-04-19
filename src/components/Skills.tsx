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
              header={item.header}
              icon={item.icon}
              className={i === 3 || i === 6 ? "md:col-span-2" : ""}
            />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}

const Skeleton = ({ className }: { className?: string }) => (
  <div className={`flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 ${className}`}></div>
);

const items = [
  {
    title: "Cloud Infrastructure",
    description: "Expertise in AWS, Azure, and GCP public cloud setups and hybrid environments.",
    header: <Skeleton className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20" />,
    icon: <Cloud className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Virtualization",
    description: "Deep experience with Citrix Xen, VMware vSphere, RedHat KVM, and Oracle VM.",
    header: <Skeleton className="bg-gradient-to-br from-purple-500/20 to-pink-500/20" />,
    icon: <Cpu className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Security & Compliance",
    description: "Implementation of PCI DSS, SSAE18, CIS standards, and robust firewall management.",
    header: <Skeleton className="bg-gradient-to-br from-red-500/20 to-orange-500/20" />,
    icon: <ShieldCheck className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "CI/CD & Automation",
    description: "Automated deployments using Jenkins, Ansible, Puppet, Docker, and Kubernetes (k8s). Custom bash scripting for system optimization.",
    header: <Skeleton className="bg-gradient-to-br from-emerald-500/20 to-teal-500/20" />,
    icon: <Terminal className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Networking",
    description: "Configuring PfSense, F5 LTM, IPSec/SSL VPN, and Cloudflare DDOS protection.",
    header: <Skeleton className="bg-gradient-to-br from-indigo-500/20 to-blue-500/20" />,
    icon: <Network className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Monitoring",
    description: "Centralized monitoring using Nagios, Cacti, CloudWatch, Dynatrace, and Xymon.",
    header: <Skeleton className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20" />,
    icon: <Activity className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Enterprise Storage",
    description: "Advanced configuration of Dell EMC SAN/NAS (VNX, XtremIO, PowerMax) and Brocade FC Switches.",
    header: <Skeleton className="bg-gradient-to-br from-slate-500/20 to-neutral-500/20" />,
    icon: <LayoutDashboard className="h-4 w-4 text-neutral-500" />,
  },
];
