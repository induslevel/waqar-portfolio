import React from "react";
import { Award, GraduationCap } from "lucide-react";

export function Credentials() {
  return (
    <section className="py-20 bg-neutral-900/30">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Certifications */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <Award className="w-8 h-8 text-blue-500" />
            <h2 className="text-3xl font-bold text-white">Certifications</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-black/50 border border-neutral-800 p-4 rounded-xl hover:border-blue-500/50 transition-colors group">
                <p className="text-sm font-bold text-neutral-200 group-hover:text-blue-400 transition-colors">{cert.name}</p>
                <p className="text-[10px] text-neutral-500 font-mono mt-1">ID: {cert.id}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Education & Organizations */}
        <div className="space-y-12">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="w-8 h-8 text-blue-500" />
              <h2 className="text-3xl font-bold text-white">Education</h2>
            </div>
            <div className="bg-black/50 border border-neutral-800 p-6 rounded-2xl">
              <h3 className="text-xl font-bold text-white">Bachelor of Electrical Engineering</h3>
              <p className="text-blue-400">University of Engineering and Technology, Lahore</p>
              <p className="text-neutral-500 text-sm mt-1">July 2005 – July 2009</p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Organizations & Interests</h3>
            <div className="flex flex-wrap gap-3">
              {["ICANN Fellow (2011)", "IETF Fellow (2013)", "Photography", "Blogging"].map((item, i) => (
                <span key={i} className="px-4 py-2 bg-neutral-800/50 border border-neutral-700 rounded-lg text-neutral-300 text-sm">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const certifications = [
  { name: "Google Cloud Certified - Professional Cloud DevOps Engineer", id: "33fed8b33c7b437eb7edd864c410ed9f" },
  { name: "Google Cloud Platform - Associate Cloud Engineer", id: "fecd1e6eb15044ff8c6775b07cd3759b" },
  { name: "AWS Solutions Architect - Associate", id: "GXY9BG1KCN11Q19N" },
  { name: "AWS Developer - Associate", id: "7BF18YYK2E111V31" },
  { name: "AWS SysOps Administrator - Associate", id: "B6W11R8CCJ4EQPK3" },
  { name: "Red Hat Certified System Administrator (RHCSA)", id: "170-249-726" },
  { name: "VMware Certified Professional 6 - DCV", id: "VMW-01779369Z-00542834" },
  { name: "Server Virtualization with Hyper-V Specialist", id: "848ED5-13288R" },
  { name: "Oracle Certified Associate (Solaris 11 & 10)", id: "OC1240184" },
  { name: "VNX Solutions Specialist & ISM v2", id: "EMC00453433" },
  { name: "Cisco Certified Network Associate (CCNA)", id: "CSCO12000954" },
  { name: "Microsoft Certified Technology Specialist", id: "2409R6-5D7E47" },
];
