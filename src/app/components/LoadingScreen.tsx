"use client";
import React, { useEffect, useState } from "react";
import { Audiowide } from "next/font/google";

const audiowide = Audiowide({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

export default function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  const [phase, setPhase] = useState(0);
  const fullName = "XYRUS REX DARCEN";
  const keepIndices = [0, 6, 10]; // X from XYRUS (0), R from REX (6), D from DARCEN (10)

  useEffect(() => {
    // Phase 1: Fade in full name
    setTimeout(() => {
      setPhase(1);
    }, 300);

    // Phase 2: Compress to XRD
    setTimeout(() => {
      setPhase(2);
    }, 2500);

    // Phase 3: Fade out
    setTimeout(() => setPhase(3), 5000);

    // Phase 4: Complete
    setTimeout(() => {
      setPhase(4);
      onLoadingComplete();
    }, 5800);
  }, [onLoadingComplete]);

  if (phase === 4) return null;

  return (
    <div
      className="fixed inset-0 z-[100] bg-black flex items-center justify-center"
      style={{
        opacity: phase === 3 ? 0 : 1,
        transition: "opacity 800ms ease-in-out",
      }}
    >
      <div className={`${audiowide.className} text-center`}>
        <div className="inline-flex items-center justify-center px-4 mx-auto max-w-full">
          {fullName.split("").map((char, index) => {
            const shouldKeep = keepIndices.includes(index);
            const isSpace = char === " ";
            
            return (
              <span
                key={index}
                className="inline-block"
                style={{
                  fontSize: phase >= 2 && shouldKeep 
                    ? "clamp(3rem, 6vw, 4.5rem)" 
                    : "clamp(1.5rem, 4vw, 3.75rem)", // Smaller base size for mobile
                  padding: phase >= 2 && shouldKeep ? "0 0.05em" : "0",
                  maxWidth: phase >= 2 && !shouldKeep ? "0" : "1.2em", // Reduced from 2em
                  margin: "0",
                  whiteSpace: "nowrap",
                  verticalAlign: "middle",
                  letterSpacing: phase >= 2 && shouldKeep 
                    ? "0.1em" 
                    : "0.02em", // Tighter letter spacing in phase 1
                  opacity: phase === 0 ? 0 : (phase >= 2 && !shouldKeep ? 0 : 1),
                  overflow: "hidden",
                  color: phase >= 2 && shouldKeep ? "transparent" : "white",
                  background: phase >= 2 && shouldKeep 
                    ? "linear-gradient(to bottom, rgb(156 163 175), rgb(255 255 255))"
                    : "transparent",
                  WebkitBackgroundClip: phase >= 2 && shouldKeep ? "text" : "unset",
                  WebkitTextFillColor: phase >= 2 && shouldKeep ? "transparent" : "white",
                  backgroundClip: phase >= 2 && shouldKeep ? "text" : "unset",
                  fontWeight: phase >= 2 && shouldKeep ? "800" : "400",
                  transform: phase >= 2 && shouldKeep ? "scale(1.15)" : "scale(1)",
                  transition: "all 1600ms cubic-bezier(0.22, 1, 0.36, 1), padding 1600ms cubic-bezier(0.22, 1, 0.36, 1)", // Even smoother easing with longer duration
                }}
              >
                {isSpace ? "\u00A0" : char}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}