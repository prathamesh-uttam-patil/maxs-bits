"use client";
import { cn } from "@/lib/utils";

export function SlideArrowButton({ className }: { className?: string }) {
  return (
    <button className={cn("group relative inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[var(--primary)] text-white text-xs font-bold overflow-hidden transition-all hover:pr-8 shadow-md", className)}>
      <span>Get Started</span>
      <span className="transition-transform duration-300 group-hover:translate-x-1.5">
        →
      </span>
    </button>
  );
}