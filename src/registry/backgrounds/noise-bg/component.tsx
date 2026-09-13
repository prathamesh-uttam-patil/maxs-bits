"use client";
import { cn } from "@/lib/utils";

export function NoiseBg({ children, opacity = 0.05, className }: { children?: React.ReactNode; opacity?: number; className?: string }) {
  return (
    <div className={cn("relative w-full h-full min-h-[200px] rounded-lg bg-[var(--background)]", className)}>
      <svg className="absolute inset-0 w-full h-full" style={{ opacity }}><filter id="noise"><feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" /><feColorMatrix type="saturate" values="0" /></filter><rect width="100%" height="100%" filter="url(#noise)" /></svg>
      <div className="relative z-10">{children}</div>
    </div>
  );
}