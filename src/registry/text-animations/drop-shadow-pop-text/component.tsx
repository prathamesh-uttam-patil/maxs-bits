"use client";
import { cn } from "@/lib/utils";
export function DropShadowPopText({ className }: { className?: string }) { return <span className={cn("text-2xl font-black text-white tracking-wider select-none", className)} style={{ textShadow: "2px 2px 0 #8b5cf6, 4px 4px 0 #ec4899, 6px 6px 0 #3b82f6" }}>POP ART</span>; }