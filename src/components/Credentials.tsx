import { Award, BookOpen, MoveUpRight, Globe, Cloud, Terminal, Monitor, LayoutGrid, Database, HardDrive, Network } from "lucide-react";

export function Credentials() {
  return (
    <section id="credentials" className="py-20 bg-neutral-50 dark:bg-neutral-900/30">
      <div className="max-w-7xl mx-auto px-4 flex flex-col space-y-20">
        {/* Certifications Section */}
        <div id="certifications">
          <div className="flex items-center gap-3 mb-10 justify-start">
            <Award className="w-10 h-10 text-blue-500" />
            <h2 className="text-3xl md:text-5xl font-bold text-black dark:text-white text-left">Certifications</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <a 
                key={index} 
                href={cert.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white dark:bg-black/50 border border-neutral-200 dark:border-neutral-800 p-5 rounded-2xl hover:border-blue-500/50 transition-all group block shadow-sm hover:shadow-md"
              >
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0">
                    <img 
                      src={cert.logo} 
                      alt={cert.name}
                      className="w-10 h-10 object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-neutral-800 dark:text-neutral-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-tight">{cert.name}</p>
                    <p className="text-[10px] text-neutral-500 dark:text-neutral-500 font-mono mt-2 flex items-center gap-1">
                      Verify <MoveUpRight className="w-3 h-3" />
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div id="education">
          <div className="flex items-center gap-3 mb-10 justify-start">
            <BookOpen className="w-10 h-10 text-blue-500" />
            <h2 className="text-3xl md:text-5xl font-bold text-black dark:text-white text-left">Education</h2>
          </div>
          <a href="https://www.uet.edu.pk/" target="_blank" rel="noopener noreferrer" className="bg-white dark:bg-black/50 border border-neutral-200 dark:border-neutral-800 p-8 rounded-3xl block hover:border-blue-500/30 transition-all group shadow-sm hover:shadow-lg w-full">
            <h3 className="text-2xl font-bold text-black dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Bachelor of Electrical Engineering</h3>
            <p className="text-blue-600 dark:text-blue-400 font-medium text-lg mt-1">University of Engineering and Technology, Lahore</p>
            <p className="text-neutral-500 dark:text-neutral-500 text-sm mt-2 font-mono">July 2005 – July 2009</p>
          </a>
        </div>
      </div>
    </section>
  );
}

const certifications = [
  { 
    name: "Google Cloud Certified - Professional Cloud DevOps Engineer", 
    link: "https://www.credly.com/badges/8aa9bcfb-428c-412f-97e6-3e168846804c", 
    logo: "/logos/gcp.svg" 
  },
  { 
    name: "Google Cloud Platform - Associate Cloud Engineer", 
    link: "https://www.credly.com/badges/4010d9ec-788f-4510-b8db-36b7e32566bc/public_url", 
    logo: "/logos/gcp.svg" 
  },
  { 
    name: "Amazon Web Services Developer - Associate", 
    link: "https://cp.certmetrics.com/amazon/en/public/verify/credential/7BF18YYK2E111V31", 
    logo: "/logos/aws.svg" 
  },
  { 
    name: "Amazon Web Services SysOps Administrator - Associate", 
    link: "https://cp.certmetrics.com/amazon/en/public/verify/credential/B6W11R8CCJ4EQPK3", 
    logo: "/logos/aws.svg" 
  },
  { 
    name: "Red Hat Certified System Administrator (RHCSA)", 
    link: "https://rhtapps.redhat.com/verify?certId=170-249-726", 
    logo: "/logos/redhat.svg" 
  },
  { 
    name: "Amazon Web Services Solutions Architect - Associate", 
    link: "https://cp.certmetrics.com/amazon/en/public/verify/credential/GXY9BG1KCN11Q19N", 
    logo: "/logos/aws.svg" 
  },
  { 
    name: "VMware Certified Professional 6 - Data Center Virtualization (VCP6-DCV)", 
    link: "https://www.credly.com/badges/4b89c1bc-8e87-4e5f-8ec0-ba79dcf94a93", 
    logo: "/logos/vmware.png" 
  },
  { 
    name: "Server Virtualization with Hyper-V and System Center Specialist", 
    link: "https://learn.microsoft.com/en-us/users/waqar-azeem/transcript/73451fgwy4122ee", 
    logo: "/logos/microsoft.svg" 
  },
  { 
    name: "Oracle Certified Associate, Oracle Solaris 11 System Administrator", 
    link: "https://www.credly.com/badges/ff01852e-f403-426b-b098-1ff7aea915a3", 
    logo: "/logos/oracle.svg" 
  },
  { 
    name: "VNX Solutions Specialist Exam for Storage Administrators", 
    link: "https://www.certmetrics.com/dell/public/transcript.aspx?transcript=JK9FWGBC2B1E1B31", 
    logo: "/logos/dell.svg" 
  },
  { 
    name: "Oracle Certified Associate, Oracle Solaris 10 Operating System", 
    link: "https://www.credly.com/badges/eff39cfa-87d1-4766-b165-da2dbd36d81a", 
    logo: "/logos/oracle.svg" 
  },
  { 
    name: "Information Storage and Management Exam Version 2", 
    link: "https://www.certmetrics.com/dell/public/transcript.aspx?transcript=JK9FWGBC2B1E1B31", 
    logo: "/logos/dell.svg" 
  },
  { 
    name: "Cisco Certified Network Associate Routing and Switching (CCNA)", 
    link: "https://www.credly.com/badges/59672490-dccb-4645-adc4-ad6a42d3806a", 
    logo: "/logos/cisco.svg" 
  },
  { 
    name: "Microsoft Certified Technology Specialist Windows 7", 
    link: "https://learn.microsoft.com/en-us/users/waqar-azeem/transcript/73451fgwy4122ee", 
    logo: "/logos/microsoft.svg" 
  },
];
