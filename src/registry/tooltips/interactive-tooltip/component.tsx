"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface InteractiveTooltipProps {
  trigger: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

export function InteractiveTooltip({ trigger, title, description, className }: InteractiveTooltipProps) {
  const [open, setOpen] = useState(false);

  return (
    <div 
      className="relative inline-block"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <div className="cursor-pointer">{trigger}</div>
      {open && (
        <div 
          className={cn(
            "absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-56 p-3 rounded-xl border border-[var(--border)] bg-[var(--card)] shadow-xl z-30 transition-all animate-in fade-in zoom-in-95",
            className
          )}
        >
          <h4 className="text-xs font-bold text-[var(--foreground)]">{title}</h4>
          <p className="text-[11px] text-[var(--muted-foreground)] mt-1 leading-snug">{description}</p>
          <div className="mt-2.5 flex items-center justify-between border-t border-[var(--border)] pt-2">
            <span className="text-[10px] text-[var(--primary)] font-semibold cursor-pointer hover:underline">Learn more →</span>
            <button className="px-2 py-0.5 rounded bg-[var(--primary)] text-white text-[10px] font-medium">Action</button>
          </div>
        </div>
      )}
    </div>
  );
}