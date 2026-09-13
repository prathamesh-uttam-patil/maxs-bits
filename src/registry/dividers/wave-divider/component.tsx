"use client";
import { cn } from "@/lib/utils";

export function WaveDivider({ color = "var(--primary)", className }: { color?: string; className?: string }) {
  return (
    <div className={cn("w-full overflow-hidden", className)}>
      <svg viewBox="0 0 1200 60" preserveAspectRatio="none" className="w-full h-8 block">
        <path d="M0,30 C200,60 400,0 600,30 C800,60 1000,0 1200,30 L1200,60 L0,60 Z" fill={color} opacity="0.1" />
        <path d="M0,35 C200,55 400,15 600,35 C800,55 1000,15 1200,35 L1200,60 L0,60 Z" fill={color} opacity="0.05" />
      </svg>
    </div>
  );
}