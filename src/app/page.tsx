'use client';
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import Navigation from "@/components/navigation/Navigation";
import TechStack from "@/components/sections/TechStack";

export default function Home() {
  return (
    <main className="bg-black">
      <Navigation />
      
      {/* Home Section */}
      <section id="home" className="min-h-screen">
        <Hero />
      </section>

      {/* Other Sections */}
      <TechStack />
      <Projects />
      <Contact />
    </main>
  );
}
