"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";
export function PowerToggle({ className }: { className?: string }) { const [on, setOn] = useState(true); return <button onClick={() => setOn(!on)} className={cn("w-10 h-10 rounded-full border-2 flex items-center justify-center text-sm font-bold transition-all", on ? "border-emerald-500 text-emerald-500 bg-emerald-500/10 shadow-[0_0_12px_rgba(16,185,129,0.3)]" : "border-[var(--muted)] text-[var(--muted-foreground)]", className)}>⏻</button>; }