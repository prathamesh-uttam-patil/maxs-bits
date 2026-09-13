"use client";
import { cn } from "@/lib/utils";

interface HorizontalTimelineProps { items: {label:string;date:string}[]; activeIndex?: number; className?: string; }

export function HorizontalTimeline({ items, activeIndex = 0, className }: HorizontalTimelineProps) {
  return (
    <div className={cn("flex items-center w-full", className)}>
      {items.map((item, i) => (
        <div key={i} className="flex items-center flex-1 last:flex-none">
          <div className="flex flex-col items-center">
            <div className={cn("w-3 h-3 rounded-full border-2 transition-all", i <= activeIndex ? "bg-[var(--primary)] border-[var(--primary)]" : "bg-[var(--background)] border-[var(--muted)]")} />
            <div className="mt-2 text-center"><div className="text-[10px] font-bold">{item.label}</div><div className="text-[9px] text-[var(--muted-foreground)]">{item.date}</div></div>
          </div>
          {i < items.length - 1 && <div className={cn("flex-1 h-0.5 mx-1", i < activeIndex ? "bg-[var(--primary)]" : "bg-[var(--muted)]")} />}
        </div>
      ))}
    </div>
  );
}