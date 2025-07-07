"use client";
import React from "react";

const SectionWrapper = ({ id, children }) => {
  return (
    <section id={id} className="py-16 px-4">
      {children}
    </section>
  );
};

export default SectionWrapper;
