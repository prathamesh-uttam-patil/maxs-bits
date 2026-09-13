"use client";
import { cn } from "@/lib/utils";

export function BlinkingLiveDot({ label = "LIVE NOW", className }: { label?: string; className?: string }) {
  return (
    <div className={cn("inline-flex items-center gap-2 px-3 py-1 rounded-full border border-red-500/30 bg-red-500/10 text-red-500 text-xs font-black tracking-wider shadow-sm", className)}>
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
      </span>
      <span>{label}</span>
    </div>
  );
}