"use client";
import { cn } from "@/lib/utils";
export function RetroPixelButton({ className }: { className?: string }) { return <button className={cn("px-4 py-2 bg-emerald-500 text-black font-mono text-xs font-black uppercase tracking-wider shadow-[3px_3px_0_0_#000] border-2 border-black active:translate-x-[2px] active:translate-y-[2px] active:shadow-none", className)}>Press Start 🕹️</button>; }