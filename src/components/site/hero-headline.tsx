"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function HeroHeadline() {
  const [mounted, setMounted] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    setMounted(true);
    // Smoothly cycle through: 0 -> Copy, 1 -> Paste, 2 -> Ship
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 3);
    }, 1800);
    return () => clearInterval(interval);
  }, []);

  return (
    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.15] mb-6">
      <span className="inline-flex items-center justify-center gap-2 sm:gap-3 md:gap-4 flex-wrap">
        {/* Copy. */}
        <span
          className={cn(
            "inline-block transition-all duration-500 ease-out",
            mounted ? "opacity-100" : "opacity-0 translate-y-4",
            activeStep === 0
              ? "-translate-y-1.5 text-[var(--primary)] drop-shadow-[0_0_24px_rgba(109,40,217,0.45)] scale-105"
              : "translate-y-0 text-[var(--foreground)] opacity-85"
          )}
          style={{ transitionDelay: mounted ? "0ms" : "150ms" }}
        >
          Copy.
        </span>

        {/* Paste. */}
        <span
          className={cn(
            "inline-block transition-all duration-500 ease-out",
            mounted ? "opacity-100" : "opacity-0 translate-y-4",
            activeStep === 1
              ? "-translate-y-1.5 text-[var(--accent)] drop-shadow-[0_0_24px_rgba(236,72,153,0.45)] scale-105"
              : "translate-y-0 text-[var(--foreground)] opacity-85"
          )}
          style={{ transitionDelay: mounted ? "0ms" : "350ms" }}
        >
          Paste.
        </span>

        {/* Ship: */}
        <span
          className={cn(
            "inline-block transition-all duration-500 ease-out",
            mounted ? "opacity-100" : "opacity-0 translate-y-4",
            activeStep === 2
              ? "-translate-y-1.5 text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] via-[var(--accent)] to-purple-400 drop-shadow-[0_0_24px_rgba(168,85,247,0.45)] scale-105"
              : "translate-y-0 text-[var(--foreground)] opacity-85"
          )}
          style={{ transitionDelay: mounted ? "0ms" : "550ms" }}
        >
          Ship:
        </span>
      </span>

      <br />

      {/* Stunning React UIs */}
      <span
        className={cn(
          "inline-block transition-all duration-700 ease-out mt-1",
          mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
          "text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] via-[var(--accent)] to-purple-400"
        )}
        style={{ transitionDelay: mounted ? "0ms" : "750ms" }}
      >
        Stunning React UIs
      </span>
    </h1>
  );
}
