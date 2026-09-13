"use client";
import { cn } from "@/lib/utils";

export function MetricGrowthCard({ className }: { className?: string }) {
  return (
    <div className={cn("w-56 p-4 rounded-2xl border border-[var(--border)] bg-[var(--card)] shadow-sm space-y-2", className)}>
      <div className="flex items-center justify-between text-xs text-[var(--muted-foreground)]">
        <span>Monthly Active</span>
        <span className="px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-500 font-bold text-[10px]">
          +24.8%
        </span>
      </div>
      <div className="text-2xl font-black tabular-nums tracking-tight">
        48.2k
      </div>
      <p className="text-[10px] text-[var(--muted-foreground)]">
        +3,420 from last month
      </p>
    </div>
  );
}