"use client";
import { cn } from "@/lib/utils";

export function StackedHoverCard({ className }: { className?: string }) {
  return (
    <div className={cn("relative group w-48 h-32 cursor-pointer", className)}>
      <div className="absolute inset-0 rounded-xl bg-purple-500/20 border border-purple-500/30 transition-transform duration-300 group-hover:-rotate-6 group-hover:-translate-x-2" />
      <div className="absolute inset-0 rounded-xl bg-pink-500/20 border border-pink-500/30 transition-transform duration-300 group-hover:rotate-6 group-hover:translate-x-2" />
      <div className="relative w-full h-full rounded-xl bg-[var(--card)] border border-[var(--border)] p-4 flex flex-col justify-between shadow-lg">
        <span className="text-xs font-bold">✨ Stacked Cards</span>
        <span className="text-[10px] text-[var(--muted-foreground)]">Hover to fan out layers</span>
      </div>
    </div>
  );
}