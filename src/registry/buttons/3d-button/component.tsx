"use client";
import { cn } from "@/lib/utils";

export function ThreeDButton({ children, color = "#8b5cf6", className }: { children: React.ReactNode; color?: string; className?: string }) {
  return (
    <button className={cn("px-6 py-2.5 rounded-lg text-white text-sm font-bold transition-all active:translate-y-1 active:shadow-none", className)}
      style={{ backgroundColor: color, boxShadow: `0 4px 0 0 color-mix(in srgb, ${color} 70%, black), 0 6px 8px rgba(0,0,0,0.15)`, transform: "translateY(0)" }}
      onMouseDown={e => { e.currentTarget.style.transform = "translateY(4px)"; e.currentTarget.style.boxShadow = `0 0px 0 0 color-mix(in srgb, ${color} 70%, black)`; }}
      onMouseUp={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = `0 4px 0 0 color-mix(in srgb, ${color} 70%, black), 0 6px 8px rgba(0,0,0,0.15)`; }}
      onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = `0 4px 0 0 color-mix(in srgb, ${color} 70%, black), 0 6px 8px rgba(0,0,0,0.15)`; }}
    >{children}</button>
  );
}