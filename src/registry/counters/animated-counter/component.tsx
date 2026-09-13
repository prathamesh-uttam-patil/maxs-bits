"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface AnimatedCounterProps { initial?: number; min?: number; max?: number; className?: string; }

export function AnimatedCounter({ initial = 0, min = 0, max = 99, className }: AnimatedCounterProps) {
  const [count, setCount] = useState(initial);
  return (
    <div className={cn("inline-flex items-center gap-0 rounded-lg border border-[var(--border)] overflow-hidden", className)}>
      <button onClick={() => setCount(c => Math.max(min, c - 1))} className="px-3 py-2 text-sm font-bold hover:bg-[var(--secondary)] transition-colors disabled:opacity-30" disabled={count <= min}>-</button>
      <span className="px-4 py-2 text-sm font-bold tabular-nums min-w-[3rem] text-center border-x border-[var(--border)] transition-all duration-200">{count}</span>
      <button onClick={() => setCount(c => Math.min(max, c + 1))} className="px-3 py-2 text-sm font-bold hover:bg-[var(--secondary)] transition-colors disabled:opacity-30" disabled={count >= max}>+</button>
    </div>
  );
}