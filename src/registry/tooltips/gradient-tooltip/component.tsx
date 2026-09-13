"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface GradientTooltipProps { children: React.ReactNode; content: string; className?: string; }

export function GradientTooltip({ children, content, className }: GradientTooltipProps) {
  const [show, setShow] = useState(false);
  return (
    <>
      <style>{`@keyframes gradient-tt { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }`}</style>
      <div className={cn("relative inline-flex", className)} onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
        {children}
        <div className={cn("absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 rounded-lg text-white text-xs font-medium whitespace-nowrap transition-all duration-200 pointer-events-none", show ? "opacity-100 scale-100" : "opacity-0 scale-90")}
          style={{ background: "linear-gradient(135deg, #8b5cf6, #ec4899, #3b82f6)", backgroundSize: "200% 200%", animation: "gradient-tt 3s ease infinite" }}>
          {content}
        </div>
      </div>
    </>
  );
}