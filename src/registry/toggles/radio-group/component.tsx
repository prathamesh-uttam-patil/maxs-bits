"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function RadioGroup({ options, defaultValue, className }: { options: string[]; defaultValue?: string; className?: string }) {
  const [selected, setSelected] = useState(defaultValue || options[0]);
  return (
    <div className={cn("space-y-2", className)}>
      {options.map(opt => (
        <button key={opt} onClick={() => setSelected(opt)} className="flex items-center gap-2.5 w-full text-left group">
          <div className={cn("w-4.5 h-4.5 rounded-full border-2 flex items-center justify-center transition-all", selected === opt ? "border-[var(--primary)]" : "border-[var(--muted)] group-hover:border-[var(--primary)]/50")}>
            <div className={cn("w-2 h-2 rounded-full transition-all", selected === opt ? "bg-[var(--primary)] scale-100" : "scale-0")} />
          </div>
          <span className={cn("text-sm transition-colors", selected === opt ? "font-medium" : "text-[var(--muted-foreground)]")}>{opt}</span>
        </button>
      ))}
    </div>
  );
}