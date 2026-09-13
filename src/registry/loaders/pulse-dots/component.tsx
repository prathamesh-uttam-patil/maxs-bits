"use client";

import { cn } from "@/lib/utils";

interface PulseDotsProps {
  size?: number;
  color?: string;
  className?: string;
}

export function PulseDots({ size = 10, color = "#8b5cf6", className }: PulseDotsProps) {
  return (
    <>
      <style>{`
        @keyframes pulse-dot-bounce {
          0%, 80%, 100% { transform: scale(0.6); opacity: 0.4; }
          40% { transform: scale(1); opacity: 1; }
        }
      `}</style>
      <div className={cn("inline-flex items-center gap-1.5", className)}>
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="rounded-full"
            style={{
              width: size,
              height: size,
              backgroundColor: color,
              animation: `pulse-dot-bounce 1.4s ease-in-out infinite`,
              animationDelay: `${i * 0.16}s`,
            }}
          />
        ))}
      </div>
    </>
  );
}
