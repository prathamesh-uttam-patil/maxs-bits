"use client";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface ScrollProgressProps { color?: string; height?: number; className?: string; }

export function ScrollProgress({ color = "#8b5cf6", height = 3, className }: ScrollProgressProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={cn("fixed top-0 left-0 right-0 z-[100]", className)} style={{ height }}>
      <div className="h-full transition-all duration-150 ease-out" style={{ width: `${progress}%`, background: `linear-gradient(90deg, ${color}, ${color}cc)` }} />
    </div>
  );
}
