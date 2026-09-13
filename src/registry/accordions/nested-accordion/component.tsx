"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function NestedAccordion({ className }: { className?: string }) {
  const [openParent, setOpenParent] = useState(true);
  const [openChild, setOpenChild] = useState(false);

  return (
    <div className={cn("w-64 rounded-xl border border-[var(--border)] bg-[var(--card)] p-3 text-xs space-y-1.5", className)}>
      <button 
        onClick={() => setOpenParent(!openParent)}
        className="w-full flex items-center justify-between font-bold text-[var(--foreground)] py-1"
      >
        <span>📁 Components</span>
        <span>{openParent ? "−" : "+"}</span>
      </button>

      {openParent && (
        <div className="pl-3 border-l border-[var(--border)] space-y-1 mt-1">
          <div className="py-0.5 text-[var(--muted-foreground)] hover:text-[var(--foreground)] cursor-pointer">Buttons</div>
          <div className="py-0.5 text-[var(--muted-foreground)] hover:text-[var(--foreground)] cursor-pointer">Cards</div>
          
          <button 
            onClick={() => setOpenChild(!openChild)}
            className="w-full flex items-center justify-between font-semibold text-[var(--foreground)] py-1"
          >
            <span>📁 Animations</span>
            <span>{openChild ? "−" : "+"}</span>
          </button>

          {openChild && (
            <div className="pl-3 border-l border-[var(--border)] space-y-0.5 text-[11px] text-[var(--muted-foreground)]">
              <div className="py-0.5 hover:text-[var(--primary)] cursor-pointer">Fade Words</div>
              <div className="py-0.5 hover:text-[var(--primary)] cursor-pointer">Glitch Text</div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}