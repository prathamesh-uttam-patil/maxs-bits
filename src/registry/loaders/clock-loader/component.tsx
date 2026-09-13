"use client";
import { cn } from "@/lib/utils";

export function ClockLoader({ size = 32, className }: { size?: number; className?: string }) {
  return (
    <>
      <style>{`@keyframes clock-min { from { transform: rotate(0deg); } to { transform: rotate(360deg); } } @keyframes clock-hr { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
      <div className={cn("relative rounded-full border-2 border-[var(--foreground)]", className)} style={{ width: size, height: size }}>
        <div className="absolute top-1/2 left-1/2 w-0.5 bg-[var(--foreground)] rounded-full origin-bottom" style={{ height: size * 0.3, transform: "translate(-50%, -100%)", animation: "clock-min 2s linear infinite" }} />
        <div className="absolute top-1/2 left-1/2 w-0.5 bg-[var(--primary)] rounded-full origin-bottom" style={{ height: size * 0.22, transform: "translate(-50%, -100%)", animation: "clock-hr 8s linear infinite" }} />
        <div className="absolute top-1/2 left-1/2 w-1 h-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--primary)]" />
      </div>
    </>
  );
}