"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function ProgressCounter({ current: initCurrent = 160, target = 200, className }: { current?: number; target?: number; className?: string }) {
  const [count, setCount] = useState(initCurrent);
  const pct = Math.min(100, Math.round((count / target) * 100));

  return (
    <div className={cn("w-64 rounded-xl border border-[var(--border)] bg-[var(--card)] p-4 space-y-2", className)}>
      <div className="flex items-center justify-between text-xs font-bold">
        <span>Components Goal</span>
        <span className="text-[var(--primary)]">{count} / {target} ({pct}%)</span>
      </div>
      <div className="h-2 w-full rounded-full bg-[var(--secondary)] overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] transition-all duration-500"
          style={{ width: `${pct}%` }}
        />
      </div>
      <button 
        onClick={() => setCount(c => Math.min(target, c + 5))}
        className="w-full py-1 rounded bg-[var(--secondary)] text-[10px] font-semibold hover:bg-[var(--border)]"
      >
        +5 Add Components
      </button>
    </div>
  );
}