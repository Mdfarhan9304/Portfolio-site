'use client';
import Hero from "@/components/sections/Hero";
import Navigation from "@/components/navigation/Navigation";

export default function Home() {
  return (
    <main className="min-h-screen my-auto bg-black">
      <Navigation />
      <Hero />
      <div className="max-w-7xl mx-auto px-4 py-20">
        {/* Add your other sections here */}
      </div>
    </main>
  );
}
