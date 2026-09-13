"use client";
import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

interface GradientAccordionProps { items: {title:string;content:string}[]; className?: string; }

export function GradientAccordion({ items, className }: GradientAccordionProps) {
  const [open, setOpen] = useState<number|null>(null);
  return (
    <div className={cn("w-full space-y-2", className)}>
      {items.map((item, i) => {
        const isOpen = open === i;
        return <Panel key={i} item={item} isOpen={isOpen} toggle={() => setOpen(isOpen ? null : i)} />;
      })}
    </div>
  );
}

function Panel({ item, isOpen, toggle }: { item: {title:string;content:string}; isOpen: boolean; toggle: () => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const [h, setH] = useState(0);
  useEffect(() => { if (ref.current) setH(isOpen ? ref.current.scrollHeight : 0); }, [isOpen]);
  return (
    <div className={cn("rounded-lg border transition-all duration-300", isOpen ? "border-[var(--primary)]/30 bg-gradient-to-r from-[var(--primary)]/5 to-transparent" : "border-[var(--border)]")}>
      <button onClick={toggle} className="flex w-full items-center justify-between p-4 text-sm font-semibold">
        {item.title}
        <span className={cn("text-xs transition-transform duration-300", isOpen && "rotate-45")}>+</span>
      </button>
      <div className="overflow-hidden transition-all duration-300" style={{ height: h }}>
        <div ref={ref} className="px-4 pb-4 text-sm text-[var(--muted-foreground)]">{item.content}</div>
      </div>
    </div>
  );
}