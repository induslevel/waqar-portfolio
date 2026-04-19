import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-black overflow-hidden">
      <Hero />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
}
