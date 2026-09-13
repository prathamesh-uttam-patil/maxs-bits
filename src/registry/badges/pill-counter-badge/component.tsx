"use client";
import { cn } from "@/lib/utils";

export function PillCounterBadge({ label = "Components", count = 180, className }: { label?: string; count?: number; className?: string }) {
  return (
    <div className={cn("inline-flex items-center rounded-full border border-[var(--primary)]/30 bg-[var(--primary)]/10 text-xs font-bold overflow-hidden shadow-sm", className)}>
      <span className="px-2.5 py-1 text-[var(--primary)]">{label}</span>
      <span className="px-2 py-1 bg-[var(--primary)] text-white tabular-nums">{count}</span>
    </div>
  );
}