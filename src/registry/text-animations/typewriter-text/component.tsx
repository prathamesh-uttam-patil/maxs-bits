"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface TypewriterTextProps {
  text: string;
  speed?: number;
  className?: string;
}

export function TypewriterText({ text, speed = 80, className }: TypewriterTextProps) {
  const [displayed, setDisplayed] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timer = setTimeout(() => {
        setDisplayed((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, speed);
      return () => clearTimeout(timer);
    } else {
      // Reset after a pause
      const resetTimer = setTimeout(() => {
        setDisplayed("");
        setIndex(0);
      }, 2000);
      return () => clearTimeout(resetTimer);
    }
  }, [index, text, speed]);

  return (
    <span className={cn("text-2xl font-bold", className)}>
      {displayed}
      <span className="animate-pulse text-[var(--primary)]">|</span>
    </span>
  );
}
