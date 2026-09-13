"use client";
import { cn } from "@/lib/utils";

interface DotDividerProps { color?: string; className?: string; }

export function DotDivider({ color = "#8b5cf6", className }: DotDividerProps) {
  return (
    <>
      <style>{`@keyframes dot-bounce { 0%, 100% { transform: scale(1); opacity: 0.5; } 50% { transform: scale(1.4); opacity: 1; } }`}</style>
      <div className={cn("flex items-center justify-center gap-2", className)}>
        <div className="flex-1 h-px bg-gradient-to-r from-transparent to-[var(--border)]" />
        {[0, 1, 2].map((i) => (
          <div key={i} className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: color, animation: `dot-bounce 1.5s ease-in-out infinite`, animationDelay: `${i * 0.2}s` }} />
        ))}
        <div className="flex-1 h-px bg-gradient-to-l from-transparent to-[var(--border)]" />
      </div>
    </>
  );
}
