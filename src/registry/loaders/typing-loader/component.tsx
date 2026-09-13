"use client";
import { cn } from "@/lib/utils";

export function TypingLoader({ color = "#8b5cf6", className }: { color?: string; className?: string }) {
  return (
    <>
      <style>{`@keyframes typing-bounce { 0%,60%,100% { transform: translateY(0); } 30% { transform: translateY(-8px); } }`}</style>
      <div className={cn("inline-flex items-center gap-1 px-3 py-2 rounded-full bg-[var(--secondary)]", className)}>
        {[0, 1, 2].map(i => <div key={i} className="w-2 h-2 rounded-full" style={{ backgroundColor: color, animation: "typing-bounce 1.2s infinite", animationDelay: `${i * 0.15}s` }} />)}
      </div>
    </>
  );
}