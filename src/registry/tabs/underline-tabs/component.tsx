"use client";
import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

export function UnderlineTabs({ tabs, defaultIndex = 0, className }: { tabs: string[]; defaultIndex?: number; className?: string }) {
  const [active, setActive] = useState(defaultIndex);
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });
  const refs = useRef<(HTMLButtonElement | null)[]>([]);
  useEffect(() => {
    const el = refs.current[active];
    if (el) setIndicator({ left: el.offsetLeft, width: el.offsetWidth });
  }, [active]);
  return (
    <div className={cn("relative", className)}>
      <div className="flex gap-0 border-b border-[var(--border)]">
        {tabs.map((tab, i) => <button key={i} ref={el => { refs.current[i] = el; }} onClick={() => setActive(i)}
          className={cn("px-4 py-2 text-sm font-medium transition-colors", active === i ? "text-[var(--primary)]" : "text-[var(--muted-foreground)] hover:text-[var(--foreground)]")}>{tab}</button>)}
      </div>
      <div className="absolute bottom-0 h-0.5 bg-[var(--primary)] rounded-full transition-all duration-300" style={{ left: indicator.left, width: indicator.width }} />
    </div>
  );
}