"use client";
import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

interface AnimatedTabsProps { tabs: string[]; defaultIndex?: number; className?: string; }

export function AnimatedTabs({ tabs, defaultIndex = 0, className }: AnimatedTabsProps) {
  const [active, setActive] = useState(defaultIndex);
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    const el = tabRefs.current[active];
    if (el) setIndicator({ left: el.offsetLeft, width: el.offsetWidth });
  }, [active]);

  return (
    <div className={cn("relative flex rounded-lg bg-[var(--secondary)] p-1", className)}>
      <div className="absolute top-1 bottom-1 rounded-md bg-[var(--background)] shadow-sm transition-all duration-300 ease-out" style={{ left: indicator.left, width: indicator.width }} />
      {tabs.map((tab, i) => (
        <button key={tab} ref={(el) => { tabRefs.current[i] = el; }} onClick={() => setActive(i)}
          className={cn("relative z-10 px-4 py-2 text-sm font-medium transition-colors rounded-md", active === i ? "text-[var(--foreground)]" : "text-[var(--muted-foreground)] hover:text-[var(--foreground)]")}
        >{tab}</button>
      ))}
    </div>
  );
}
