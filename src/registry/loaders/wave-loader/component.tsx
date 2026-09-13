"use client";
import { cn } from "@/lib/utils";

export function WaveLoader({ color = "var(--primary)", className }: { color?: string; className?: string }) {
  return (
    <>
      <style>{`@keyframes wave-bar { 0%,100% { height: 8px; } 50% { height: 24px; } }`}</style>
      <div className={cn("inline-flex items-end gap-0.5", className)}>
        {[0,1,2,3,4].map(i => <div key={i} className="w-1 rounded-full" style={{ backgroundColor: color, height: 8, animation: "wave-bar 1s ease-in-out infinite", animationDelay: `${i*0.1}s` }} />)}
      </div>
    </>
  );
}