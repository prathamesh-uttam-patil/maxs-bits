"use client";
import { cn } from "@/lib/utils";

interface HoverRevealCardProps { title: string; description: string; emoji?: string; className?: string; }

export function HoverRevealCard({ title, description, emoji = "\u2728", className }: HoverRevealCardProps) {
  return (
    <div className={cn("group relative w-48 h-56 rounded-xl border border-[var(--border)] bg-[var(--card)] overflow-hidden cursor-pointer", className)}>
      <div className="flex flex-col items-center justify-center h-full gap-2 transition-transform duration-300 group-hover:-translate-y-4">
        <span className="text-4xl transition-transform duration-300 group-hover:scale-125">{emoji}</span>
        <h3 className="text-sm font-bold">{title}</h3>
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-[var(--primary)] text-[var(--primary-foreground)] p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
        <p className="text-xs">{description}</p>
      </div>
    </div>
  );
}