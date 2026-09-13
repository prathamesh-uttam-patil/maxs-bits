"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface RichPreviewTooltipProps {
  label: string;
  title: string;
  badge?: string;
  className?: string;
}

export function RichPreviewTooltip({ label, title, badge = "Featured", className }: RichPreviewTooltipProps) {
  const [open, setOpen] = useState(false);

  return (
    <div 
      className="relative inline-block"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <span className="text-sm font-semibold text-[var(--primary)] underline decoration-dotted underline-offset-4 cursor-pointer">
        {label}
      </span>
      {open && (
        <div className={cn("absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 rounded-xl border border-[var(--border)] bg-[var(--card)] p-2 shadow-2xl z-30", className)}>
          <div className="h-16 rounded-lg bg-gradient-to-tr from-[var(--primary)] to-[var(--accent)] flex items-center justify-center text-white text-xl font-bold">
            ✨
          </div>
          <div className="mt-2 px-1">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold">{title}</span>
              <span className="px-1.5 py-0.5 rounded text-[9px] bg-[var(--primary)]/10 text-[var(--primary)] font-medium">{badge}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}