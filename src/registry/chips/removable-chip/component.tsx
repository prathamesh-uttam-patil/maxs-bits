"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface RemovableChipProps { label: string; onRemove?: () => void; className?: string; }

export function RemovableChip({ label, onRemove, className }: RemovableChipProps) {
  const [removing, setRemoving] = useState(false);
  const handleRemove = () => { setRemoving(true); setTimeout(() => onRemove?.(), 200); };
  return (
    <span className={cn("inline-flex items-center gap-1.5 rounded-full bg-[var(--secondary)] px-3 py-1 text-xs font-medium transition-all duration-200",
      removing ? "scale-0 opacity-0" : "scale-100 opacity-100", className
    )}>
      {label}
      <button onClick={handleRemove} className="w-3.5 h-3.5 rounded-full flex items-center justify-center hover:bg-[var(--muted)] transition-colors text-[var(--muted-foreground)] hover:text-[var(--foreground)]">
        <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
      </button>
    </span>
  );
}