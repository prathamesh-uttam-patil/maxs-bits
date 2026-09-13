"use client";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface CounterTextProps { target: number; duration?: number; className?: string; }

export function CounterText({ target, duration = 2000, className }: CounterTextProps) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const start = performance.now();
    const animate = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [target, duration]);
  return <span className={cn("tabular-nums font-bold text-3xl", className)}>{count.toLocaleString()}</span>;
}