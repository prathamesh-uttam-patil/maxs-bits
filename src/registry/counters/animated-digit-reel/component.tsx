"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";
export function AnimatedDigitReel({ className }: { className?: string }) { const [val, setVal] = useState(9); return <div className={cn("inline-flex items-center gap-2", className)}><div className="w-8 h-10 rounded-lg bg-[var(--primary)] text-white font-mono font-black text-xl flex items-center justify-center shadow-md">{val}</div><button onClick={() => setVal((val + 1) % 10)} className="px-2 py-1 rounded bg-[var(--secondary)] text-[10px] font-bold">Spin</button></div>; }