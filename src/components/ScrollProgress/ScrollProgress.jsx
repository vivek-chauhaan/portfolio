"use client";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const ScrollProgressButton = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    const scrolled = window.scrollY;
    const height = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrolled / height) * 100;
    setScrollProgress(progress);
    setShowButton(scrolled > 200);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const strokeDasharray = 100;
  const strokeDashoffset = 100 - scrollProgress;

  return (
    <>
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 cursor-pointer right-5 z-50 w-10 h-10 rounded-full bg-black/80 text-white flex items-center justify-center shadow-lg hover:scale-110 transition duration-300"
          aria-label="Scroll to top"
        >
          <svg className="absolute w-12 h-12 -z-10" viewBox="0 0 36 36">
            <path
              className="text-gray-700"
              d="M18 2.0845
                 a 15.9155 15.9155 0 0 1 0 31.831
                 a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />
            <path
              className="text-gradient-to-r from-green-400 to-cyan-500"
              d="M18 2.0845
                 a 15.9155 15.9155 0 0 1 0 31.831
                 a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="url(#grad)"
              strokeWidth="2.5"
              strokeDasharray={strokeDasharray}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
            />
            <defs>
              <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#22c55e" />
                <stop offset="100%" stopColor="#06b6d4" />
              </linearGradient>
            </defs>
          </svg>
          <FontAwesomeIcon icon={faArrowUp} size="l" />
        </button>
      )}
    </>
  );
};

export default ScrollProgressButton;
