import React from "react";
import { Award, GraduationCap } from "lucide-react";

export function Credentials() {
  return (
    <section className="py-20 bg-neutral-50 dark:bg-neutral-900/30">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Certifications */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <Award className="w-8 h-8 text-blue-500" />
            <h2 className="text-3xl font-bold text-black dark:text-white">Certifications</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <a 
                key={index} 
                href={cert.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white dark:bg-black/50 border border-neutral-200 dark:border-neutral-800 p-4 rounded-xl hover:border-blue-500/50 transition-colors group block shadow-sm"
              >
                <p className="text-sm font-bold text-neutral-800 dark:text-neutral-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{cert.name}</p>
                <p className="text-[10px] text-neutral-500 dark:text-neutral-500 font-mono mt-1">Verify Certification</p>
              </a>
            ))}
          </div>
        </div>

        {/* Education & Organizations */}
        <div className="space-y-12">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="w-8 h-8 text-blue-500" />
              <h2 className="text-3xl font-bold text-black dark:text-white">Education</h2>
            </div>
            <a href="https://www.uet.edu.pk/" target="_blank" rel="noopener noreferrer" className="bg-white dark:bg-black/50 border border-neutral-200 dark:border-neutral-800 p-6 rounded-2xl block hover:border-blue-500/30 transition-colors group shadow-sm">
              <h3 className="text-xl font-bold text-black dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Bachelor of Electrical Engineering</h3>
              <p className="text-blue-600 dark:text-blue-400 font-medium">University of Engineering and Technology, Lahore</p>
              <p className="text-neutral-500 dark:text-neutral-500 text-sm mt-1">July 2005 – July 2009</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

const certifications = [
  { name: "Google Cloud Certified - Professional Cloud DevOps Engineer", link: "https://google.credential.net/33fed8b33c7b437eb7edd864c410ed9f" },
  { name: "Google Cloud Platform - Associate Cloud Engineer", link: "https://google.credential.net/fecd1e6eb15044ff8c6775b07cd3759b" },
  { name: "AWS Solutions Architect - Associate", link: "https://www.credly.com/badges/GXY9BG1KCN11Q19N" },
  { name: "AWS Developer - Associate", link: "https://www.credly.com/badges/7BF18YYK2E111V31" },
  { name: "AWS SysOps Administrator - Associate", link: "https://www.credly.com/badges/B6W11R8CCJ4EQPK3" },
  { name: "Red Hat Certified System Administrator (RHCSA)", link: "https://rhtapps.redhat.com/certifications/badge/verify/170-249-726" },
  { name: "VMware Certified Professional 6 - DCV", link: "https://www.credly.com/badges/VMW-01779369Z-00542834" },
  { name: "Server Virtualization with Hyper-V Specialist", link: "https://learn.microsoft.com/en-us/users/waqar-azeem/transcript/73451fgwy4122ee" },
  { name: "Oracle Certified Associate (Solaris 11 & 10)", link: "https://education.oracle.com/certification" },
  { name: "VNX Solutions Specialist & ISM v2", link: "https://education.dellemc.com/" },
  { name: "Cisco Certified Network Associate (CCNA)", link: "https://www.cisco.com/c/en/us/training-events/training-certifications/verify.html" },
  { name: "Microsoft Certified Technology Specialist", link: "https://learn.microsoft.com/en-us/users/waqar-azeem/transcript/73451fgwy4122ee" },
];
