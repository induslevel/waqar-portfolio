import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { 
  Cloud, 
  ShieldCheck, 
  Cpu, 
  Terminal, 
  Network, 
  Activity, 
  LayoutDashboard,
  Server,
  Database,
  Lock,
  Workflow,
  Globe,
  Settings,
  Monitor
} from "lucide-react";

export function Skills() {
  return (
    <section id="arsenal" className="py-20 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-3 mb-12 justify-center">
          <Cpu className="w-10 h-10 text-blue-500" />
          <h2 className="text-3xl md:text-5xl font-bold text-black dark:text-white text-center">Technical Arsenal</h2>
        </div>
        <BentoGrid className="max-w-7xl mx-auto">
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={
                <div className="space-y-4 mt-2">
                  <p className="text-neutral-600 dark:text-neutral-400 text-xs leading-relaxed">{item.descriptionText}</p>
                  <div className="flex flex-wrap gap-1">
                    {item.tools.map((tool, idx) => (
                      <div key={idx} className="flex items-center gap-1 px-1 py-1 bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-white/10 rounded-md">
                        {tool.icon}
                        <span className="text-[9px] text-neutral-700 dark:text-neutral-300 whitespace-nowrap">{tool.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              }
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
    title: "Cloud Platforms",
    descriptionText: "Designing multi-cloud infrastructures with global VPCs and edge performance.",
    gradient: "from-blue-500/20 to-cyan-500/20",
    headerIcon: <Cloud className="h-12 w-12 text-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]" />,
    tools: [
      { name: "GCP", icon: <Globe className="w-2.5 h-2.5 text-blue-400" /> },
      { name: "AWS", icon: <Cloud className="w-2.5 h-2.5 text-orange-400" /> },
      { name: "Azure", icon: <Server className="w-2.5 h-2.5 text-blue-500" /> }
    ]
  },
  {
    title: "Virtualization & Containers",
    descriptionText: "Enterprise virtualization and container orchestration for scalable microservices.",
    gradient: "from-purple-500/20 to-pink-500/20",
    headerIcon: <Cpu className="h-12 w-12 text-pink-400 drop-shadow-[0_0_15px_rgba(244,114,182,0.5)]" />,
    tools: [
      { name: "K8s", icon: <Settings className="w-2.5 h-2.5 text-blue-400" /> },
      { name: "Docker", icon: <Box className="w-2.5 h-2.5 text-cyan-400" /> },
      { name: "VMware", icon: <Monitor className="w-2.5 h-2.5 text-blue-300" /> },
      { name: "Citrix", icon: <Server className="w-2.5 h-2.5 text-neutral-400" /> }
    ]
  },
  {
    title: "Automation & CI/CD",
    descriptionText: "Infrastructure-as-code and automated delivery pipelines for rapid deployment.",
    gradient: "from-emerald-500/20 to-teal-500/20",
    headerIcon: <Terminal className="h-12 w-12 text-emerald-400 drop-shadow-[0_0_15px_rgba(52,211,153,0.5)]" />,
    tools: [
      { name: "Ansible", icon: <Workflow className="w-2.5 h-2.5 text-red-400" /> },
      { name: "Jenkins", icon: <Settings className="w-2.5 h-2.5 text-neutral-300" /> },
      { name: "Puppet", icon: <Settings className="w-2.5 h-2.5 text-yellow-400" /> },
      { name: "Git", icon: <Workflow className="w-2.5 h-2.5 text-orange-600" /> }
    ]
  },
  {
    title: "Networking & Security",
    descriptionText: "Securing OLTP platforms and maintaining multi-region connectivity and DDoS protection.",
    gradient: "from-red-500/20 to-orange-500/20",
    headerIcon: <ShieldCheck className="h-12 w-12 text-red-400 drop-shadow-[0_0_15px_rgba(248,113,113,0.5)]" />,
    tools: [
      { name: "PfSense", icon: <ShieldCheck className="w-2.5 h-2.5 text-emerald-400" /> },
      { name: "F5 LTM", icon: <Network className="w-2.5 h-2.5 text-red-500" /> },
      { name: "Cloudflare", icon: <Cloud className="w-2.5 h-2.5 text-orange-400" /> },
      { name: "VPN", icon: <Lock className="w-2.5 h-2.5 text-neutral-400" /> }
    ]
  },
  {
    title: "Storage Solutions",
    descriptionText: "High-performance SAN/NAS architecture for mission-critical enterprise data.",
    gradient: "from-slate-500/20 to-neutral-500/20",
    headerIcon: <LayoutDashboard className="h-12 w-12 text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]" />,
    tools: [
      { name: "EMC SAN", icon: <Database className="w-2.5 h-2.5 text-blue-400" /> },
      { name: "Brocade", icon: <Network className="w-2.5 h-2.5 text-neutral-300" /> },
      { name: "Unity", icon: <Database className="w-2.5 h-2.5 text-cyan-300" /> }
    ]
  },
  {
    title: "Monitoring & Observability",
    descriptionText: "Centralized monitoring and alerting across complex hybrid environments.",
    gradient: "from-yellow-500/20 to-orange-500/20",
    headerIcon: <Activity className="h-12 w-12 text-yellow-400 drop-shadow-[0_0_15px_rgba(251,191,36,0.5)]" />,
    tools: [
      { name: "Dynatrace", icon: <Activity className="w-2.5 h-2.5 text-green-400" /> },
      { name: "CloudWatch", icon: <Monitor className="w-2.5 h-2.5 text-orange-300" /> },
      { name: "Nagios", icon: <Activity className="w-2.5 h-2.5 text-red-400" /> }
    ]
  },
  {
    title: "Enterprise Systems",
    descriptionText: "Core infrastructure services and enterprise-grade collaboration platforms.",
    gradient: "from-indigo-500/20 to-blue-500/20",
    headerIcon: <Network className="h-12 w-12 text-indigo-400 drop-shadow-[0_0_15px_rgba(129,140,248,0.5)]" />,
    tools: [
      { name: "AD/DNS", icon: <Server className="w-2.5 h-2.5 text-blue-400" /> },
      { name: "Office365", icon: <Mail className="w-2.5 h-2.5 text-red-400" /> },
      { name: "Zimbra", icon: <Mail className="w-2.5 h-2.5 text-neutral-300" /> }
    ]
  },
];

// Re-importing Box since I used it but forgot to import
import { Box, Mail } from "lucide-react";
