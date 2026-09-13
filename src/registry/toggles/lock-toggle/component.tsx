"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";
export function LockToggle({ className }: { className?: string }) { const [locked, setLocked] = useState(true); return <button onClick={() => setLocked(!locked)} className={cn("px-3 py-1.5 rounded-xl border flex items-center gap-1.5 text-xs font-bold transition-all", locked ? "bg-red-500/10 text-red-500 border-red-500/20" : "bg-emerald-500/10 text-emerald-500 border-emerald-500/20", className)}><span>{locked ? "🔒" : "🔓"}</span><span>{locked ? "Locked" : "Unlocked"}</span></button>; }