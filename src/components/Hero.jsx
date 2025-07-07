"use client";
import SectionWrapper from "./SectionWrapper";
import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faFileAlt } from "@fortawesome/free-solid-svg-icons";
const Hero = ({ activeSection, children }) => {
  return (
    <SectionWrapper id="hero">
      {activeSection ? (
        // Show selected section in place of hero message
        <div>{children}</div>
      ) : (
        // Default Hero content
        <div className="text-center">
          <h2 className="inline-block bg-emerald-900/30 text-green-400 font-semibold px-4 py-1 rounded-full backdrop-blur-sm shadow-md mb-4">
            Fullstack Developer
          </h2>

          <div className="text-center space-y-4">
            {/* Greeting */}
            <p className="text-xl text-gray-400 font-semibold">
              Heya <span className="inline-block animate-wave">👋</span>, I'm
            </p>

            {/* Gradient Name */}
            <h1 className="text-5xl text-gradient font-bold">Vivek Chauhan</h1>

            {/* Tagline */}
            <p className="text-xl md:text-3xl text-gray-400 font-bold">
              Building the Future with Dev and AI
            </p>
          </div>

          <section className="relative flex flex-col items-center justify-center text-white my-5">
            {/* About Section Wrapper with Blurred Circle */}
            <div className="relative flex items-center justify-center">
              {/* Blurred Circle (Left Side) */}
              <div className="absolute -left-24">
                <div className="w-52 h-52 rounded-full bg-green-400 blur-2xl opacity-10"></div>
              </div>

              {/* About Box */}
              <div className="border border-gray-700 rounded-xl p-8 max-w-2xl w-full text-center z-10 backdrop-blur-sm bg-gray-800/30">
                <div className="flex items-center justify-center mb-4">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 mr-2 shadow-[0_0_10px_#22d3ee] animate-pulse"></span>
                  <h2 className="text-cyan-400 text-lg font-medium">
                    About Me
                  </h2>
                </div>
                <p className="text-gray-400 text-base">
                  A passionate coder exploring automation and looking out to
                  build cool stuff.
                </p>
              </div>

              {/* Blurred Circle (Right Side) */}
              <div className="absolute -right-24">
                <div className="w-52 h-52 rounded-full bg-green-400 blur-2xl opacity-10"></div>
              </div>
            </div>

            {/* Buttons Below Border */}
            <div className="flex flex-wrap gap-4 justify-center mt-8">
              <button className="btn-project group flex items-center gap-2">
                View Projects
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="transform transition-transform duration-300 group-hover:translate-x-2"
                />
              </button>

              <button className="btn-gradient1">Contact Me</button>

              <button className="btn-cyan1">
                <FontAwesomeIcon icon={faFileAlt} className=" text-[#00BCD4]" />{" "}
                Resume
              </button>
            </div>

            {/* Bouncy Mouse Icon */}
            <div className="mt-5">
              <div className="w-8 h-12 border-2  animate-bounce border-gray-400 rounded-full flex items-center justify-center">
                <div className="w-1 h-2 bg-gray-400 rounded-full animate-bounce"></div>
              </div>
            </div>
          </section>
        </div>
      )}
    </SectionWrapper>
  );
};

export default Hero;
