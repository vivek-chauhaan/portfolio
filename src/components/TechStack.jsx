"use client";
import { useState } from "react";
import Image from "next/image";
import techStacks from "@/data/techstackdata";

const TechStack = () => {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <section className="py-12 md:px-6 max-w-4xl mx-auto text-center">
      {/* Header */}
      <div className="flex items-center justify-center mb-5">
        <div className="relative inline-flex items-center gap-3 px-4 py-2">
          {/* Glowing background */}
          <div className="absolute inset-0 rounded-lg bg-green-500 blur-2xl opacity-30"></div>

          {/* Content */}
          <div className="relative flex items-center gap-3 z-10">
            <div className="text-green-400 text-2xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-8 w-8"
              >
                <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                <path d="M11 9h4a2 2 0 0 0 2-2V3"></path>
                <circle cx="9" cy="9" r="2"></circle>
                <path d="M7 21v-4a2 2 0 0 1 2-2h4"></path>
                <circle cx="15" cy="15" r="2"></circle>
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-white">
              Tech Stack (skill)
            </h2>

            <span className="w-8 h-1 bg-pink-500 rounded-full"></span>
          </div>
        </div>
      </div>
      <h4 className=" text-gray-400 mb-5">
        Showcasing my work spanning web applications, AI integrations, and more.
      </h4>

      {/* Tabs */}
      {/* Tech Cards  101014*/}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3  ">
        {techStacks.map((tech, idx) => (
          <div
            key={idx}
            className={`bg-[#1d1d1e] cursor-pointer  rounded-2xl py-2 px-1 flex flex-col items-center justify-center border border-transparent hover:border-green-500 transition ${
              tech.name === "Node.js" ? "border-green-500" : ""
            }`}
          >
            <Image src={tech.image} alt={tech.name} width={60} height={60} />
            <p className="text-white text-sm font-medium">{tech.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
