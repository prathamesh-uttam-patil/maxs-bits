"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface IconToggleProps { checked?: boolean; onChange?: (v: boolean) => void; className?: string; }

export function IconToggle({ checked: ctrl, onChange, className }: IconToggleProps) {
  const [internal, setInternal] = useState(false);
  const on = ctrl ?? internal;
  const toggle = () => { const v = !on; setInternal(v); onChange?.(v); };
  return (
    <button onClick={toggle} className={cn("w-10 h-10 rounded-xl border border-[var(--border)] flex items-center justify-center transition-all duration-300", on ? "bg-[var(--primary)] text-[var(--primary-foreground)] border-[var(--primary)]" : "bg-[var(--card)]", className)}>
      <svg className={cn("w-5 h-5 transition-transform duration-500", on ? "rotate-180" : "rotate-0")} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        {on ? <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /> : <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />}
      </svg>
    </button>
  );
}