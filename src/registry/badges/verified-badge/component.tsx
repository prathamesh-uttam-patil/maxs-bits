"use client";
import { cn } from "@/lib/utils";
export function VerifiedBadge({ className }: { className?: string }) { return <span className={cn("inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-500 border border-blue-500/20 text-xs font-bold", className)}><span>✓</span> Verified</span>; }