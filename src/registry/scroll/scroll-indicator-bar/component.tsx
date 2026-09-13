"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function ScrollIndicatorBar({ className }: { className?: string }) {
  const [val, setVal] = useState(65);

  return (
    <div className={cn("w-64 space-y-2 rounded-xl border border-[var(--border)] bg-[var(--card)] p-4", className)}>
      <div className="flex items-center justify-between text-xs font-bold">
        <span>Article Reading Progress</span>
        <span className="text-[var(--primary)]">{val}%</span>
      </div>
      <div className="h-1.5 w-full bg-[var(--secondary)] rounded-full overflow-hidden">
        <div className="h-full bg-[var(--primary)] transition-all duration-300" style={{ width: `${val}%` }} />
      </div>
      <input type="range" min="0" max="100" value={val} onChange={e => setVal(Number(e.target.value))} className="w-full text-xs" />
    </div>
  );
}