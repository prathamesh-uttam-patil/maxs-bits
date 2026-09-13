"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

interface DayNightToggleProps {
  isDark?: boolean;
  onChange?: (isDark: boolean) => void;
  className?: string;
}

export function DayNightToggle({ isDark: controlledDark, onChange, className }: DayNightToggleProps) {
  const [internalDark, setInternalDark] = useState(false);
  const isDark = controlledDark ?? internalDark;

  const handleToggle = () => {
    const newValue = !isDark;
    setInternalDark(newValue);
    onChange?.(newValue);
  };

  return (
    <button
      onClick={handleToggle}
      className={cn(
        "relative h-10 w-20 rounded-full transition-all duration-700 overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)]",
        isDark ? "bg-indigo-950" : "bg-sky-400",
        className
      )}
    >
      {/* Stars (visible in dark mode) */}
      <span className={cn("absolute top-2 left-3 w-1 h-1 rounded-full bg-white transition-opacity duration-500", isDark ? "opacity-80" : "opacity-0")} />
      <span className={cn("absolute top-4 left-6 w-0.5 h-0.5 rounded-full bg-white transition-opacity duration-500 delay-100", isDark ? "opacity-60" : "opacity-0")} />
      <span className={cn("absolute top-1.5 left-10 w-0.5 h-0.5 rounded-full bg-white transition-opacity duration-500 delay-200", isDark ? "opacity-70" : "opacity-0")} />

      {/* Sun/Moon circle */}
      <span
        className={cn(
          "absolute top-1.5 flex items-center justify-center w-7 h-7 rounded-full transition-all duration-700 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] shadow-md",
          isDark
            ? "translate-x-11 bg-yellow-100 rotate-[360deg]"
            : "translate-x-1.5 bg-yellow-400 rotate-0"
        )}
      >
        {isDark ? (
          <span className="text-xs">🌙</span>
        ) : (
          <span className="text-xs">☀️</span>
        )}
      </span>
    </button>
  );
}
