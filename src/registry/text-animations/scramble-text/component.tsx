"use client";
import { useState, useEffect, useCallback } from "react";
import { cn } from "@/lib/utils";

const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%";

interface ScrambleTextProps { text: string; speed?: number; className?: string; }

export function ScrambleText({ text, speed = 50, className }: ScrambleTextProps) {
  const [display, setDisplay] = useState(text.replace(/./g, " "));
  const [done, setDone] = useState(false);
  const scramble = useCallback(() => {
    let iteration = 0;
    setDone(false);
    const interval = setInterval(() => {
      setDisplay(text.split("").map((c, i) => i < iteration ? c : chars[Math.floor(Math.random() * chars.length)]).join(""));
      iteration += 1 / 3;
      if (iteration >= text.length) { clearInterval(interval); setDisplay(text); setDone(true); }
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);
  useEffect(() => { const cleanup = scramble(); return cleanup; }, [scramble]);
  return <span className={cn("font-mono text-xl font-bold", className)} onMouseEnter={() => { if (done) scramble(); }}>{display}</span>;
}