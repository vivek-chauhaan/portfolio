"use client";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

export default function ParticleBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: false },
        background: { color: "transparent" },
        particles: {
          number: { value: 100 },
          color: { value: ["#00ffff", "#ff00ff", "#00ff00"] },
          links: {
            enable: true,
            color: "#ffffff",
            distance: 140,
            opacity: 0.3,
          },
          move: {
            enable: true,
            speed: 0.15, // Slow & smooth
            outModes: { default: "bounce" },
          },
          opacity: {
            value: 0.5,
          },
        },
      }}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        pointerEvents: "none",
        filter: "blur(0.8px)", // ✅ Light blur
      }}
    />
  );
}
