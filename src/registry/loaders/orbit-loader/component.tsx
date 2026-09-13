"use client";

import { cn } from "@/lib/utils";

interface OrbitLoaderProps {
  size?: number;
  color?: string;
  className?: string;
}

export function OrbitLoader({ size = 40, color = "#8b5cf6", className }: OrbitLoaderProps) {
  const dotSize = size * 0.2;

  return (
    <>
      <style>{`
        @keyframes orbit-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
      <div
        className={cn("relative", className)}
        style={{ width: size, height: size }}
      >
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="absolute inset-0"
            style={{
              animation: `orbit-spin ${1.2 + i * 0.3}s linear infinite`,
              animationDelay: `${i * -0.15}s`,
            }}
          >
            <div
              className="absolute rounded-full"
              style={{
                width: dotSize,
                height: dotSize,
                backgroundColor: color,
                top: 0,
                left: '50%',
                transform: 'translateX(-50%)',
                opacity: 1 - i * 0.25,
              }}
            />
          </div>
        ))}
      </div>
    </>
  );
}
