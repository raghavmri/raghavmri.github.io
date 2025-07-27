"use client";
import { useEffect, useState } from "react";
import Hero from "@/components/hero";
import About from "@/components/about";
import TechStack from "@/components/tech-stack";
import Projects from "@/components/projects";
import LatestTweet from "@/components/latest-tweet";
import Contact from "@/components/contact";
import Navigation from "@/components/navigation";
import {
  FloatingElements,
  ScrollProgress,
} from "@/components/enhanced-animations";

export default function Portfolio() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <ScrollProgress />
      <FloatingElements />
      <Navigation />
      <main className="relative">
        <Hero />
        <About />
        <TechStack />
        <Projects />
        {/* <LatestTweet /> */}
        <Contact />
      </main>
    </div>
  );
}
