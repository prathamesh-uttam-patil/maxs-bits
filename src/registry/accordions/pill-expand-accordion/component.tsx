"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";
export function PillExpandAccordion({ className }: { className?: string }) { const [open, setOpen] = useState(false); return <div className={cn("w-64 rounded-2xl bg-[var(--secondary)] p-2 text-xs", className)}><button onClick={() => setOpen(!open)} className="w-full px-3 py-1.5 rounded-xl bg-[var(--card)] font-bold flex justify-between"><span>Tech Stack</span><span>▼</span></button>{open && <div className="p-2 text-[10px] text-[var(--muted-foreground)]">Next.js 16 • Tailwind v4 • TypeScript</div>}</div>; }