"use client";
import { cn } from "@/lib/utils";
export function HotDealBadge({ className }: { className?: string }) { return <span className={cn("inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-orange-500/10 text-orange-500 border border-orange-500/20 text-xs font-black animate-pulse", className)}>🔥 HOT DEAL</span>; }