"use client";
import { cn } from "@/lib/utils";

export function SkeletonDashboard({ className }: { className?: string }) {
  return (
    <div className={cn("w-72 rounded-xl border border-[var(--border)] bg-[var(--card)] p-4 space-y-3", className)}>
      <div className="grid grid-cols-2 gap-2">
        <div className="p-2.5 rounded-lg bg-[var(--secondary)] space-y-1.5 animate-pulse">
          <div className="h-2 w-12 rounded bg-[var(--muted)]" />
          <div className="h-4 w-16 rounded bg-[var(--muted)]" />
        </div>
        <div className="p-2.5 rounded-lg bg-[var(--secondary)] space-y-1.5 animate-pulse">
          <div className="h-2 w-12 rounded bg-[var(--muted)]" />
          <div className="h-4 w-16 rounded bg-[var(--muted)]" />
        </div>
      </div>
      <div className="h-16 w-full rounded-lg bg-[var(--secondary)] flex items-end gap-1.5 p-2 animate-pulse">
        <div className="h-40% w-1/5 rounded-t bg-[var(--muted)]" />
        <div className="h-70% w-1/5 rounded-t bg-[var(--muted)]" />
        <div className="h-50% w-1/5 rounded-t bg-[var(--muted)]" />
        <div className="h-90% w-1/5 rounded-t bg-[var(--muted)]" />
        <div className="h-60% w-1/5 rounded-t bg-[var(--muted)]" />
      </div>
    </div>
  );
}