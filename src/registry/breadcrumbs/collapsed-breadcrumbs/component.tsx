"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function CollapsedBreadcrumbs({ items = ["Home", "Workspace", "Projects", "Max's Bits", "Components"], className }: { items?: string[]; className?: string }) {
  const [open, setOpen] = useState(false);
  const first = items[0];
  const last = items[items.length - 1];
  const hidden = items.slice(1, items.length - 1);

  return (
    <nav className={cn("flex items-center gap-1.5 text-xs font-medium", className)}>
      <span className="text-[var(--muted-foreground)] hover:text-[var(--foreground)] cursor-pointer">{first}</span>
      <span className="text-[var(--muted-foreground)]">/</span>
      
      <div className="relative">
        <button 
          onClick={() => setOpen(!open)} 
          className="px-1.5 py-0.5 rounded bg-[var(--secondary)] hover:bg-[var(--border)] transition-colors text-[10px]"
        >
          ...
        </button>
        {open && (
          <div className="absolute top-full left-0 mt-1 w-32 rounded-lg border border-[var(--border)] bg-[var(--card)] shadow-lg py-1 z-20">
            {hidden.map((h, i) => (
              <div key={i} className="px-3 py-1 text-xs hover:bg-[var(--secondary)] cursor-pointer">
                {h}
              </div>
            ))}
          </div>
        )}
      </div>

      <span className="text-[var(--muted-foreground)]">/</span>
      <span className="text-[var(--primary)] font-bold">{last}</span>
    </nav>
  );
}