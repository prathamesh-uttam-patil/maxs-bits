"use client";
import { cn } from "@/lib/utils";
export function SystemStatusBanner({ className }: { className?: string }) { return <div className={cn("w-72 px-3 py-2 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-500 flex items-center gap-2 text-xs font-semibold", className)}><span>⚠️</span><span>Scheduled registry maintenance at 02:00 UTC</span></div>; }