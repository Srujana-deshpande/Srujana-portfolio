import React from "react";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Services } from "@/components/sections/Services";
import { Education } from "@/components/sections/Education";
import { Certifications } from "@/components/sections/Certifications";
import { Achievements } from "@/components/sections/Achievements";
import { Contact } from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <main className="relative min-h-screen">
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Services />
      <Education />
      <Certifications />
      <Achievements />
      <Contact />
    </main>
  );
}
