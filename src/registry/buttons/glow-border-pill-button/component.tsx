"use client";
import { cn } from "@/lib/utils";

export function GlowBorderPillButton({ className }: { className?: string }) {
  return (
    <button className={cn("relative inline-flex items-center justify-center p-0.5 rounded-full overflow-hidden font-bold text-xs group", className)}>
      <span className="absolute inset-0 bg-gradient-to-r from-[var(--primary)] via-[var(--accent)] to-purple-500 animate-pulse" />
      <span className="relative px-6 py-2.5 rounded-full bg-[var(--background)] text-[var(--foreground)] group-hover:bg-transparent group-hover:text-white transition-colors duration-300">
        Launch Project 🚀
      </span>
    </button>
  );
}