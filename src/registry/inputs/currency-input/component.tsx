"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function CurrencyInput({ className }: { className?: string }) {
  const [amount, setAmount] = useState("49.00");

  return (
    <div className={cn("relative w-52", className)}>
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-xs font-bold text-[var(--muted-foreground)]">
        $
      </div>
      <input
        type="number"
        step="0.01"
        value={amount}
        onChange={e => setAmount(e.target.value)}
        className="w-full pl-7 pr-12 py-2 rounded-xl border border-[var(--border)] bg-[var(--background)] text-xs font-bold outline-none focus:border-[var(--primary)] tabular-nums"
      />
      <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-[10px] font-bold text-[var(--muted-foreground)]">
        USD
      </div>
    </div>
  );
}