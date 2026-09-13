"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface AnimatedTooltipProps { children: React.ReactNode; content: string; className?: string; }

export function AnimatedTooltip({ children, content, className }: AnimatedTooltipProps) {
  const [show, setShow] = useState(false);
  return (
    <div className={cn("relative inline-flex", className)} onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
      {children}
      <div className={cn("absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 rounded-lg bg-[var(--foreground)] text-[var(--background)] text-xs font-medium whitespace-nowrap transition-all duration-200 pointer-events-none", show ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-1")}>
        {content}
        <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-px border-4 border-transparent border-t-[var(--foreground)]" />
      </div>
    </div>
  );
}