"use client";
import { cn } from "@/lib/utils";

export function ActionAlert({ title = "New version 2.5 available", className }: { title?: string; className?: string }) {
  return (
    <div className={cn("w-80 rounded-xl border border-[var(--primary)]/30 bg-[var(--primary)]/5 p-4 flex flex-col gap-3", className)}>
      <div className="flex items-center gap-2 text-xs font-bold text-[var(--foreground)]">
        <span className="text-base">🚀</span>
        <span>{title}</span>
      </div>
      <p className="text-[11px] text-[var(--muted-foreground)] leading-snug">
        Upgrade now to unlock 20+ new animated components and instant TypeScript registry support.
      </p>
      <div className="flex items-center gap-2 justify-end">
        <button className="px-3 py-1 rounded-lg text-[10px] font-semibold border border-[var(--border)] hover:bg-[var(--secondary)]">Later</button>
        <button className="px-3 py-1 rounded-lg text-[10px] font-semibold bg-[var(--primary)] text-white shadow-sm hover:opacity-90">Update Now</button>
      </div>
    </div>
  );
}