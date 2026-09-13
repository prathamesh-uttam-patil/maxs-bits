"use client";
import { cn } from "@/lib/utils";

export function StripedAnimatedProgress({ value = 75, className }: { value?: number; className?: string }) {
  return (
    <>
      <style>{`@keyframes stripe-move { from { background-position: 1rem 0; } to { background-position: 0 0; } }`}</style>
      <div className={cn("w-64 h-3 rounded-full bg-[var(--secondary)] overflow-hidden border border-[var(--border)]", className)}>
        <div
          className="h-full rounded-full transition-all duration-500"
          style={{
            width: `${value}%`,
            backgroundImage: "linear-gradient(45deg, rgba(255,255,255,0.15) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0.15) 75%, transparent 75%, transparent)",
            backgroundColor: "var(--primary)",
            backgroundSize: "1rem 1rem",
            animation: "stripe-move 1s linear infinite"
          }}
        />
      </div>
    </>
  );
}