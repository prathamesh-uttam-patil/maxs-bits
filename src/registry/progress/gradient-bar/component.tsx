"use client";
import { cn } from "@/lib/utils";

export function GradientBar({ value, className }: { value: number; className?: string }) {
  return (
    <>
      <style>{`@keyframes bar-glow { 0%,100% { box-shadow: 0 0 8px rgba(139,92,246,0.3); } 50% { box-shadow: 0 0 16px rgba(139,92,246,0.5); } }`}</style>
      <div className={cn("h-2.5 w-full rounded-full bg-[var(--muted)] overflow-hidden", className)}>
        <div className="h-full rounded-full transition-all duration-700 ease-out" style={{ width: `${Math.min(100, Math.max(0, value))}%`, background: "linear-gradient(90deg, #8b5cf6, #ec4899, #3b82f6)", animation: "bar-glow 2s ease infinite" }} />
      </div>
    </>
  );
}