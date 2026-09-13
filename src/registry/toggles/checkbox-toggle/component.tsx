"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function CheckboxToggle({ label, checked: ctrl, onChange, className }: { label?: string; checked?: boolean; onChange?: (v: boolean) => void; className?: string }) {
  const [internal, setInternal] = useState(false);
  const on = ctrl ?? internal;
  const toggle = () => { const v = !on; setInternal(v); onChange?.(v); };
  return (
    <label className={cn("inline-flex items-center gap-2 cursor-pointer select-none", className)}>
      <button onClick={toggle} className={cn("w-5 h-5 rounded border-2 flex items-center justify-center transition-all duration-200",
        on ? "bg-[var(--primary)] border-[var(--primary)]" : "border-[var(--muted)] hover:border-[var(--primary)]/50")}>
        {on && <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={4}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>}
      </button>
      {label && <span className="text-sm">{label}</span>}
    </label>
  );
}