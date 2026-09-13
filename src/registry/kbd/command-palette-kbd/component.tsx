"use client";
import { cn } from "@/lib/utils";

export function CommandPaletteKbd({ action = "Search documentation...", className }: { action?: string; className?: string }) {
  return (
    <div className={cn("inline-flex items-center justify-between gap-4 px-3 py-1.5 rounded-xl border border-[var(--border)] bg-[var(--card)] hover:border-[var(--primary)]/50 transition-colors cursor-pointer shadow-sm", className)}>
      <div className="flex items-center gap-2 text-xs text-[var(--muted-foreground)]">
        <span>🔍</span>
        <span>{action}</span>
      </div>
      <div className="flex items-center gap-1">
        <kbd className="px-1.5 py-0.5 rounded bg-[var(--secondary)] border border-[var(--border)] text-[10px] font-mono font-bold">⌘</kbd>
        <kbd className="px-1.5 py-0.5 rounded bg-[var(--secondary)] border border-[var(--border)] text-[10px] font-mono font-bold">K</kbd>
      </div>
    </div>
  );
}