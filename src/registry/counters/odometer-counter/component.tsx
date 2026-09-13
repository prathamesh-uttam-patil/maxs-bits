"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function OdometerCounter({ value: initial = 1420, className }: { value?: number; className?: string }) {
  const [val, setVal] = useState(initial);

  return (
    <div className={cn("inline-flex items-center gap-3 rounded-xl border border-[var(--border)] bg-[var(--card)] px-4 py-2.5 shadow-sm", className)}>
      <div className="flex items-baseline gap-1">
        <span className="text-2xl font-black font-mono tracking-tight text-[var(--primary)] tabular-nums">
          {val.toLocaleString()}
        </span>
        <span className="text-[10px] text-[var(--muted-foreground)] uppercase font-bold">Stars</span>
      </div>
      <button 
        onClick={() => setVal(v => v + 10)}
        className="px-2 py-1 rounded bg-[var(--secondary)] hover:bg-[var(--border)] text-[10px] font-bold"
      >
        +10
      </button>
    </div>
  );
}