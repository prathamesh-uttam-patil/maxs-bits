"use client";
import { cn } from "@/lib/utils";

interface FilterChipProps { label: string; selected?: boolean; onClick?: () => void; className?: string; }

export function FilterChip({ label, selected = false, onClick, className }: FilterChipProps) {
  return (
    <button onClick={onClick} className={cn("inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-medium border transition-all duration-300",
      selected ? "bg-[var(--primary)] text-[var(--primary-foreground)] border-[var(--primary)] shadow-md shadow-[var(--primary)]/20 scale-105" : "bg-transparent text-[var(--muted-foreground)] border-[var(--border)] hover:border-[var(--primary)]/50 hover:text-[var(--foreground)]",
      className
    )}>
      {selected && <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>}
      {label}
    </button>
  );
}