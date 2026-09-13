"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function SplitButton({ label, options = [], className }: { label: string; options?: string[]; className?: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={cn("relative inline-flex", className)}>
      <button className="px-4 py-2 rounded-l-lg bg-[var(--primary)] text-[var(--primary-foreground)] text-sm font-semibold hover:opacity-90">{label}</button>
      <button onClick={() => setOpen(!open)} className="px-2 py-2 rounded-r-lg bg-[var(--primary)] text-[var(--primary-foreground)] border-l border-white/20 hover:opacity-90">
        <svg className={cn("w-3 h-3 transition-transform", open && "rotate-180")} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
      </button>
      {open && options.length > 0 && (
        <div className="absolute top-full right-0 mt-1 w-36 rounded-lg border border-[var(--border)] bg-[var(--card)] shadow-lg py-1 z-20">
          {options.map((opt, i) => <button key={i} onClick={() => setOpen(false)} className="w-full px-3 py-1.5 text-left text-xs hover:bg-[var(--secondary)] transition-colors">{opt}</button>)}
        </div>
      )}
    </div>
  );
}