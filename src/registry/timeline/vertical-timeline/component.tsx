"use client";
import { cn } from "@/lib/utils";

interface TimelineItem { title: string; description: string; date: string; }
interface VerticalTimelineProps { items: TimelineItem[]; className?: string; }

export function VerticalTimeline({ items, className }: VerticalTimelineProps) {
  return (
    <div className={cn("relative space-y-6 pl-6", className)}>
      <div className="absolute left-[7px] top-2 bottom-2 w-0.5 bg-[var(--border)]" />
      {items.map((item, i) => (
        <div key={i} className="relative">
          <div className="absolute -left-6 top-1.5 w-3.5 h-3.5 rounded-full border-2 border-[var(--primary)] bg-[var(--background)]" />
          <div className="text-[10px] text-[var(--muted-foreground)] mb-0.5">{item.date}</div>
          <div className="text-sm font-semibold">{item.title}</div>
          <div className="text-xs text-[var(--muted-foreground)] mt-0.5">{item.description}</div>
        </div>
      ))}
    </div>
  );
}