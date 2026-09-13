"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function NumberInput({ defaultValue = 0, min, max, className }: { defaultValue?: number; min?: number; max?: number; className?: string }) {
  const [value, setValue] = useState(defaultValue);
  const dec = () => setValue(v => min !== undefined ? Math.max(min, v - 1) : v - 1);
  const inc = () => setValue(v => max !== undefined ? Math.min(max, v + 1) : v + 1);
  return (
    <div className={cn("inline-flex items-center rounded-lg border border-[var(--border)] overflow-hidden", className)}>
      <button onClick={dec} className="w-9 h-9 flex items-center justify-center hover:bg-[var(--secondary)] transition-colors text-sm font-bold text-[var(--muted-foreground)]">\u2212</button>
      <input type="number" value={value} onChange={e => setValue(Number(e.target.value))} className="w-12 h-9 text-center text-sm font-semibold bg-transparent border-x border-[var(--border)] outline-none tabular-nums [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none" />
      <button onClick={inc} className="w-9 h-9 flex items-center justify-center hover:bg-[var(--secondary)] transition-colors text-sm font-bold text-[var(--muted-foreground)]">+</button>
    </div>
  );
}