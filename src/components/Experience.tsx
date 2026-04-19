import React from "react";

export function Experience() {
  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">Professional Journey</h2>
        <div className="space-y-12">
          {experienceData.map((exp, index) => (
            <div key={index} className="relative pl-8 border-l border-neutral-800 pb-12 last:pb-0">
              <div className="absolute left-[-5px] top-0 w-[10px] h-[10px] rounded-full bg-blue-500 shadow-[0_0_10px_#3b82f6]" />
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-neutral-100">{exp.role}</h3>
                  <p className="text-blue-400 font-medium">{exp.company}</p>
                </div>
                <p className="text-neutral-500 text-sm mt-2 md:mt-0 font-mono">{exp.period}</p>
              </div>
              <ul className="space-y-3">
                {exp.points.map((point, i) => (
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

const experienceData = [
  {
    role: "Systems Architect",
    company: "i2c incorporated",
    period: "Aug 2012 – Jan 2023",
    points: [
      "Designed and administered hybrid cloud setups using RHEL/CentOS/Solaris and various virtualization platforms (Citrix, VMware, KVM).",
      "Set up public cloud infrastructure on AWS, Azure, and GCP.",
      "Managed high-availability engineered systems and handled upgrades for production appliances.",
      "Implemented PCI DSS, SSAE18, and CIS security standards.",
      "Automated deployments using Jenkins, Ansible, Puppet, and RedHat Satellite.",
      "Configured and managed F5 LTM solutions and PfSense firewalls.",
    ],
  },
  {
    role: "System Administrator",
    company: "UET Lahore",
    period: "Oct 2009 – Jul 2012",
    points: [
      "Managed complete wired and wireless local area networks.",
      "Maintained DNS, Mail, Web, FTP, Cache, and DHCP servers ensuring 100% uptime.",
      "Administered Active Directory servers.",
    ],
  },
];
