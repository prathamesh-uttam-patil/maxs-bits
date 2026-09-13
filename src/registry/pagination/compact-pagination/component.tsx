"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function CompactPagination({ total = 10, className }: { total?: number; className?: string }) {
  const [page, setPage] = useState(1);

  return (
    <div className={cn("inline-flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--card)] px-3 py-1.5 shadow-sm", className)}>
      <button 
        disabled={page <= 1}
        onClick={() => setPage(p => p - 1)}
        className="p-1 rounded-md text-xs hover:bg-[var(--secondary)] disabled:opacity-30"
      >
        ←
      </button>
      <span className="text-xs font-semibold tabular-nums">
        Page <span className="text-[var(--primary)]">{page}</span> of {total}
      </span>
      <button 
        disabled={page >= total}
        onClick={() => setPage(p => p + 1)}
        className="p-1 rounded-md text-xs hover:bg-[var(--secondary)] disabled:opacity-30"
      >
        →
      </button>
    </div>
  );
}