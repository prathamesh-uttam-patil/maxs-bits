"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";
export function CookieConsentAlert({ className }: { className?: string }) { const [show, setShow] = useState(true); if (!show) return null; return <div className={cn("w-72 p-3 rounded-2xl border border-[var(--border)] bg-[var(--card)] shadow-xl flex items-center justify-between gap-2 text-xs", className)}><span>🍪 We use cookies to enhance UX.</span><button onClick={() => setShow(false)} className="px-2 py-1 rounded-lg bg-[var(--primary)] text-white text-[10px] font-bold">Accept</button></div>; }