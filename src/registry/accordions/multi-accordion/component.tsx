"use client";
import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

interface MultiAccordionProps { items: {title:string;content:string}[]; className?: string; }

export function MultiAccordion({ items, className }: MultiAccordionProps) {
  const [open, setOpen] = useState<Set<number>>(new Set());
  const toggle = (i: number) => setOpen(s => { const n = new Set(s); n.has(i) ? n.delete(i) : n.add(i); return n; });
  return (
    <div className={cn("w-full divide-y divide-[var(--border)] border border-[var(--border)] rounded-lg overflow-hidden", className)}>
      {items.map((item, i) => <Panel key={i} item={item} isOpen={open.has(i)} toggle={() => toggle(i)} />)}
    </div>
  );
}
function Panel({ item, isOpen, toggle }: { item: {title:string;content:string}; isOpen: boolean; toggle: () => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const [h, setH] = useState(0);
  useEffect(() => { if (ref.current) setH(isOpen ? ref.current.scrollHeight : 0); }, [isOpen]);
  return (
    <div>
      <button onClick={toggle} className="flex w-full items-center justify-between p-3 text-sm font-semibold bg-[var(--card)] hover:bg-[var(--secondary)] transition-colors">
        {item.title}<span className={cn("text-xs transition-transform duration-300", isOpen && "rotate-180")}>\u25BC</span>
      </button>
      <div className="overflow-hidden transition-all duration-300" style={{ height: h }}>
        <div ref={ref} className="p-3 text-xs text-[var(--muted-foreground)] bg-[var(--background)]">{item.content}</div>
      </div>
    </div>
  );
}