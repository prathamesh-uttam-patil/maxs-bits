"use client";
import { cn } from "@/lib/utils";

export function DotsGrid({ color = "var(--primary)", className }: { color?: string; className?: string }) {
  return (
    <>
      <style>{`@keyframes grid-dot { 0%,100% { opacity: 0.3; transform: scale(0.8); } 50% { opacity: 1; transform: scale(1.2); } }`}</style>
      <div className={cn("grid grid-cols-3 gap-1.5", className)}>
        {Array.from({ length: 9 }, (_, i) => <div key={i} className="w-2 h-2 rounded-full" style={{ backgroundColor: color, animation: "grid-dot 1.2s ease infinite", animationDelay: `${(i % 3 + Math.floor(i / 3)) * 0.1}s` }} />)}
      </div>
    </>
  );
}