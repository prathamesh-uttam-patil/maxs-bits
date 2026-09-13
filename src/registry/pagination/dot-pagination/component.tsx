"use client";
import { cn } from "@/lib/utils";

interface DotPaginationProps { total: number; current: number; onChange?: (i: number) => void; className?: string; }

export function DotPagination({ total, current, onChange, className }: DotPaginationProps) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      {Array.from({ length: total }, (_, i) => (
        <button key={i} onClick={() => onChange?.(i)}
          className={cn("rounded-full transition-all duration-300", i === current ? "w-6 h-2.5 bg-[var(--primary)]" : "w-2.5 h-2.5 bg-[var(--muted)] hover:bg-[var(--muted-foreground)]")}
        />
      ))}
    </div>
  );
}