"use client";
import { cn } from "@/lib/utils";

interface SkeletonTextProps { lines?: number; className?: string; }

export function SkeletonText({ lines = 3, className }: SkeletonTextProps) {
  const widths = ["100%", "92%", "76%", "88%", "64%"];
  return (
    <>
      <style>{`@keyframes shimmer-text { from { transform: translateX(-100%); } to { transform: translateX(100%); } }`}</style>
      <div className={cn("space-y-2.5", className)}>
        {Array.from({ length: lines }, (_, i) => (
          <div key={i} className="relative overflow-hidden rounded h-3 bg-[var(--muted)]" style={{ width: widths[i % widths.length] }}>
            <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, transparent, var(--secondary), transparent)", animation: `shimmer-text 1.5s infinite`, animationDelay: `${i * 0.1}s` }} />
          </div>
        ))}
      </div>
    </>
  );
}
