"use client";
import { cn } from "@/lib/utils";

interface NumberPaginationProps { total: number; current: number; onChange?: (p: number) => void; className?: string; }

export function NumberPagination({ total, current, onChange, className }: NumberPaginationProps) {
  return (
    <div className={cn("flex items-center gap-1", className)}>
      <button disabled={current <= 1} onClick={() => onChange?.(current - 1)} className="w-8 h-8 rounded-md flex items-center justify-center text-sm disabled:opacity-30 hover:bg-[var(--secondary)] transition-colors">\u2039</button>
      {Array.from({ length: total }, (_, i) => (
        <button key={i} onClick={() => onChange?.(i + 1)}
          className={cn("w-8 h-8 rounded-md text-xs font-semibold transition-all", current === i + 1 ? "bg-[var(--primary)] text-[var(--primary-foreground)] shadow-sm" : "hover:bg-[var(--secondary)] text-[var(--muted-foreground)]")}>{i + 1}</button>
      ))}
      <button disabled={current >= total} onClick={() => onChange?.(current + 1)} className="w-8 h-8 rounded-md flex items-center justify-center text-sm disabled:opacity-30 hover:bg-[var(--secondary)] transition-colors">\u203A</button>
    </div>
  );
}