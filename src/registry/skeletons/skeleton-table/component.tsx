"use client";
import { cn } from "@/lib/utils";

export function SkeletonTable({ className }: { className?: string }) {
  return (
    <div className={cn("w-72 rounded-xl border border-[var(--border)] bg-[var(--card)] p-3 space-y-2.5", className)}>
      <div className="flex gap-2 pb-2 border-b border-[var(--border)]">
        <div className="h-3 w-1/3 rounded bg-[var(--muted)] animate-pulse" />
        <div className="h-3 w-1/4 rounded bg-[var(--muted)] animate-pulse" />
        <div className="h-3 w-1/3 rounded bg-[var(--muted)] animate-pulse" />
      </div>
      {[1, 2, 3].map(i => (
        <div key={i} className="flex gap-2 items-center py-1">
          <div className="h-2.5 w-1/3 rounded bg-[var(--secondary)] animate-pulse" />
          <div className="h-2.5 w-1/4 rounded bg-[var(--secondary)] animate-pulse" />
          <div className="h-2.5 w-1/3 rounded bg-[var(--secondary)] animate-pulse" />
        </div>
      ))}
    </div>
  );
}