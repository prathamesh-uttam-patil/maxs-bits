"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface PillTabsProps { tabs: string[]; defaultIndex?: number; className?: string; }

export function PillTabs({ tabs, defaultIndex = 0, className }: PillTabsProps) {
  const [active, setActive] = useState(defaultIndex);
  return (
    <div className={cn("inline-flex gap-1", className)}>
      {tabs.map((tab, i) => (
        <button key={tab} onClick={() => setActive(i)}
          className={cn("px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
            active === i ? "bg-[var(--primary)] text-[var(--primary-foreground)] shadow-lg shadow-[var(--primary)]/25 scale-105" : "text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--secondary)]"
          )}
        >{tab}</button>
      ))}
    </div>
  );
}
