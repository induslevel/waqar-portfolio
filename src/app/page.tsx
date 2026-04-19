import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Credentials } from "@/components/Credentials";
import { Organizations } from "@/components/Organizations";
import { Interests } from "@/components/Interests";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-black overflow-hidden">
      <Hero />
      <Projects />
      <Skills />
      <Experience />
      <Credentials />
      <Organizations />
      <Interests />
      <Contact />
    </main>
  );
}
