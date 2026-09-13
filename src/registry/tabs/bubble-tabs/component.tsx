"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";
export function BubbleTabs({ className }: { className?: string }) { const [idx, setIdx] = useState(0); return <div className={cn("flex gap-1.5 p-1 rounded-2xl bg-[var(--secondary)]", className)}>{["All", "Popular", "New", "Free"].map((t, i) => <button key={i} onClick={() => setIdx(i)} className={cn("px-3 py-1 rounded-xl text-xs font-bold transition-all", idx === i ? "bg-[var(--card)] text-[var(--primary)] shadow-sm scale-105" : "text-[var(--muted-foreground)]")}>{t}</button>)}</div>; }