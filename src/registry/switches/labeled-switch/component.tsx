"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface LabeledSwitchProps { checked?: boolean; onChange?: (v: boolean) => void; className?: string; }

export function LabeledSwitch({ checked: ctrl, onChange, className }: LabeledSwitchProps) {
  const [internal, setInternal] = useState(false);
  const on = ctrl ?? internal;
  const toggle = () => { const v = !on; setInternal(v); onChange?.(v); };
  return (
    <button role="switch" aria-checked={on} onClick={toggle}
      className={cn("relative inline-flex h-7 w-14 items-center rounded-full transition-colors duration-300 focus:outline-none", on ? "bg-emerald-500" : "bg-[var(--muted)]", className)}
    >
      <span className={cn("absolute left-1.5 text-[9px] font-bold text-white transition-opacity", on ? "opacity-100" : "opacity-0")}>ON</span>
      <span className={cn("absolute right-1 text-[9px] font-bold text-[var(--muted-foreground)] transition-opacity", on ? "opacity-0" : "opacity-100")}>OFF</span>
      <span className={cn("inline-block h-5 w-5 rounded-full bg-white shadow transition-transform duration-300", on ? "translate-x-7" : "translate-x-1")} />
    </button>
  );
}