"use client";
import { useState } from "react";
import Header from "../components/Header";

import Hero from "@/components/Hero";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Education from "../components/Education";
import Contact from "../components/Contact";
import ParticleBackground from "../components/ParticleBackground";
import TechStack from "@/components/TechStack";
import ScrollProgress from "@/components/ScrollProgress/ScrollProgress";

export default function Home() {
  const [activeSection, setActiveSection] = useState(null);

  const renderSelectedSection = () => {
    switch (activeSection) {
      case "projects":
        return <Projects />;
      case "tech":
        return <TechStack />;
      case "experience":
        return <Experience />;
      case "education":
        return <Education />;
      case "contact":
        return <Contact />;
      default:
        return null;
    }
  };

  return (
    <main className="relative min-h-screen  text-white overflow-x-hidden">
      {/* Background Particles */}
      {/* <div className="absolute inset-0 z-0"> */}
      <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none ">
        <ParticleBackground />
      </div>

      {/* Foreground */}
      <div className="relative pt-0  z-10">
        <Header onSectionClick={setActiveSection} />

        <div className="  px-6">
          {/* 👇 Always render Hero. It contains default or selected section */}
          <div className=" mt-10">
            <Hero activeSection={activeSection}>{renderSelectedSection()}</Hero>
          </div>

          {/* 👇 Only render full layout if Home is selected (activeSection is null) */}
          {activeSection === null && (
            <>
              <Education />
              <Experience />
              <TechStack />
              <Projects />
              <Contact />
            </>
          )}
        </div>
        <div>
          <ScrollProgress />
        </div>
      </div>
    </main>
  );
}
