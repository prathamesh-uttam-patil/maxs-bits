"use client";

import { useMemo } from "react";
import { cn } from "@/lib/utils";

interface ParticlesBackgroundProps {
  count?: number;
  color?: string;
  className?: string;
}

export function ParticlesBackground({ count = 30, color = "#8b5cf6", className }: ParticlesBackgroundProps) {
  const particles = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        size: Math.random() * 4 + 2,
        duration: Math.random() * 10 + 8,
        delay: Math.random() * 10,
        opacity: Math.random() * 0.5 + 0.1,
      })),
    [count]
  );

  return (
    <>
      <style>{`
        @keyframes particle-float {
          0% { transform: translateY(100%) translateX(0); opacity: 0; }
          10% { opacity: var(--p-opacity); }
          90% { opacity: var(--p-opacity); }
          100% { transform: translateY(-100%) translateX(20px); opacity: 0; }
        }
      `}</style>
      <div className={cn("relative w-full h-full min-h-[200px] overflow-hidden rounded-lg bg-[var(--background)]", className)}>
        {particles.map((p) => (
          <div
            key={p.id}
            className="absolute rounded-full"
            style={{
              left: `${p.x}%`,
              width: p.size,
              height: p.size,
              backgroundColor: color,
              "--p-opacity": p.opacity,
              animation: `particle-float ${p.duration}s linear infinite`,
              animationDelay: `${p.delay}s`,
            } as React.CSSProperties}
          />
        ))}
      </div>
    </>
  );
}
