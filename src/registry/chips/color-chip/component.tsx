"use client";
import { cn } from "@/lib/utils";

export function ColorChip({ label, color = "#8b5cf6", className }: { label: string; color?: string; className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-1.5 rounded-full border border-[var(--border)] bg-[var(--card)] px-3 py-1 text-xs font-medium", className)}>
      <span className="w-2 h-2 rounded-full" style={{ backgroundColor: color }} />{label}
    </span>
  );
}