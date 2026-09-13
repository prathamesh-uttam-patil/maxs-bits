"use client";
import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

export function SelectInput({ options, placeholder = "Select...", className }: { options: string[]; placeholder?: string; className?: string }) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("");
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => { const h = (e: MouseEvent) => { if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false); }; document.addEventListener("mousedown", h); return () => document.removeEventListener("mousedown", h); }, []);
  return (
    <div ref={ref} className={cn("relative w-48", className)}>
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg border border-[var(--border)] bg-[var(--background)] text-sm transition-colors focus:border-[var(--primary)]">
        <span className={selected ? "" : "text-[var(--muted-foreground)]"}>{selected || placeholder}</span>
        <svg className={cn("w-3.5 h-3.5 transition-transform text-[var(--muted-foreground)]", open && "rotate-180")} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
      </button>
      {open && <div className="absolute top-full left-0 right-0 mt-1 rounded-lg border border-[var(--border)] bg-[var(--card)] shadow-lg py-1 z-20 animate-[fadeIn_0.15s_ease]">
        {options.map(opt => <button key={opt} onClick={() => { setSelected(opt); setOpen(false); }} className={cn("w-full px-3 py-2 text-left text-sm hover:bg-[var(--secondary)] transition-colors", selected === opt && "text-[var(--primary)] font-medium")}>{opt}</button>)}
      </div>}
    </div>
  );
}