"use client";

import { cn } from "@/lib/utils";

interface BarLoaderProps {
  width?: number;
  height?: number;
  color?: string;
  className?: string;
}

export function BarLoader({ width = 200, height = 4, color = "#8b5cf6", className }: BarLoaderProps) {
  return (
    <>
      <style>{`
        @keyframes bar-loading {
          0% { left: -40%; }
          100% { left: 100%; }
        }
      `}</style>
      <div
        className={cn("relative overflow-hidden rounded-full", className)}
        style={{
          width,
          height,
          backgroundColor: `${color}20`,
        }}
      >
        <div
          className="absolute top-0 h-full rounded-full"
          style={{
            width: '40%',
            background: `linear-gradient(90deg, transparent, ${color}, transparent)`,
            animation: 'bar-loading 1.5s ease-in-out infinite',
          }}
        />
      </div>
    </>
  );
}
