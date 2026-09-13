"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function PriceDiscountChip({ className }: { className?: string }) {
  const [active, setActive] = useState(false);
  return (
    <div 
      onClick={() => setActive(!active)}
      className={cn("inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-[var(--border)] bg-[var(--card)] text-xs font-bold transition-all hover:border-[var(--primary)]/50 cursor-pointer shadow-sm active:scale-95 select-none", className)}
    >
      <span className="w-2 h-2 rounded-full bg-[var(--primary)] animate-pulse" />
      <span>Price Discount Chip</span>
      {active && <span className="text-[10px] text-emerald-500 font-bold">✓</span>}
    </div>
  );
}
