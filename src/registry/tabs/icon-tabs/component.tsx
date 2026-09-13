"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function IconTabs({ tabs, className }: { tabs: {icon:string;label:string}[]; className?: string }) {
  const [active, setActive] = useState(0);
  return (
    <div className={cn("inline-flex rounded-xl border border-[var(--border)] bg-[var(--card)] p-1 gap-0.5", className)}>
      {tabs.map((tab, i) => (
        <button key={i} onClick={() => setActive(i)} className={cn("flex flex-col items-center gap-0.5 px-4 py-2 rounded-lg text-xs font-medium transition-all",
          active === i ? "bg-[var(--primary)] text-[var(--primary-foreground)] shadow-sm" : "text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--secondary)]")}>
          <span className="text-base">{tab.icon}</span>{tab.label}
        </button>
      ))}
    </div>
  );
}