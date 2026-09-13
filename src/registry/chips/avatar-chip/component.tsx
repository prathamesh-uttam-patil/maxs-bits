"use client";
import { cn } from "@/lib/utils";

export function AvatarChip({ name = "Sarah Chen", avatar = "👩🏻‍💻", className }: { name?: string; avatar?: string; className?: string }) {
  return (
    <div className={cn("inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--card)] pl-1.5 pr-3 py-1 text-xs font-medium shadow-sm hover:border-[var(--primary)]/50 transition-colors cursor-pointer", className)}>
      <div className="w-5 h-5 rounded-full bg-[var(--secondary)] flex items-center justify-center text-xs">
        {avatar}
      </div>
      <span>{name}</span>
      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
    </div>
  );
}