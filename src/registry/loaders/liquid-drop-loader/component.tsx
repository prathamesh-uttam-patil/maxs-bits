"use client";
import { cn } from "@/lib/utils";
export function LiquidDropLoader({ className }: { className?: string }) { return <div className={cn("relative w-8 h-8 flex items-center justify-center", className)}><span className="absolute w-8 h-8 rounded-full bg-[var(--primary)]/30 animate-ping" /><span className="w-3 h-3 rounded-full bg-[var(--primary)]" /></div>; }