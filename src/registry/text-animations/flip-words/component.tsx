"use client";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export function FlipWords({ words = ["Beautiful", "Accessible", "Customizable", "Performant"], className }: { words?: string[]; className?: string }) {
  const [index, setIndex] = useState(0);
  const [flipping, setFlipping] = useState(false);

  useEffect(() => {
    const t = setInterval(() => {
      setFlipping(true);
      setTimeout(() => {
        setIndex(i => (i + 1) % words.length);
        setFlipping(false);
      }, 250);
    }, 2000);
    return () => clearInterval(t);
  }, [words.length]);

  return (
    <span className={cn("inline-block [perspective:1000px] text-lg font-bold text-[var(--primary)]", className)}>
      <span
        className="inline-block transition-transform duration-250 [transform-style:preserve-3d]"
        style={{
          transform: flipping ? "rotateX(90deg)" : "rotateX(0deg)",
          opacity: flipping ? 0 : 1
        }}
      >
        {words[index]}
      </span>
    </span>
  );
}