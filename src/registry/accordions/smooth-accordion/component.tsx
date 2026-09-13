"use client";
import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

interface AccordionItem { title: string; content: string; }
interface SmoothAccordionProps { items: AccordionItem[]; className?: string; }

function Panel({ item, isOpen, toggle }: { item: AccordionItem; isOpen: boolean; toggle: () => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const [h, setH] = useState(0);
  useEffect(() => { if (ref.current) setH(isOpen ? ref.current.scrollHeight : 0); }, [isOpen]);
  return (
    <div className="border-b border-[var(--border)]">
      <button onClick={toggle} className="flex w-full items-center justify-between py-4 text-left text-sm font-semibold hover:text-[var(--primary)] transition-colors">
        {item.title}
        <svg className={cn("w-4 h-4 transition-transform duration-300", isOpen && "rotate-180")} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
      </button>
      <div className="overflow-hidden transition-all duration-300" style={{ height: h }}>
        <div ref={ref} className="pb-4 text-sm text-[var(--muted-foreground)]">{item.content}</div>
      </div>
    </div>
  );
}

export function SmoothAccordion({ items, className }: SmoothAccordionProps) {
  const [open, setOpen] = useState<number | null>(null);
  return <div className={cn("w-full", className)}>{items.map((item, i) => <Panel key={i} item={item} isOpen={open === i} toggle={() => setOpen(open === i ? null : i)} />)}</div>;
}