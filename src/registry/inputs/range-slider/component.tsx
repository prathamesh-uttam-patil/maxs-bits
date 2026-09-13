"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function RangeSlider({ min = 0, max = 100, defaultValue = 50, className }: { min?: number; max?: number; defaultValue?: number; className?: string }) {
  const [value, setValue] = useState(defaultValue);
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <div className={cn("relative w-48 pt-6", className)}>
      <div className="absolute text-[10px] font-bold bg-[var(--primary)] text-[var(--primary-foreground)] px-1.5 py-0.5 rounded -translate-x-1/2 -top-0" style={{ left: `${pct}%` }}>{value}</div>
      <input type="range" min={min} max={max} value={value} onChange={e => setValue(Number(e.target.value))}
        className="w-full h-1.5 rounded-full appearance-none cursor-pointer bg-[var(--muted)] accent-[var(--primary)]" />
      <div className="flex justify-between mt-1 text-[9px] text-[var(--muted-foreground)]"><span>{min}</span><span>{max}</span></div>
    </div>
  );
}