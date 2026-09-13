"use client";
import { cn } from "@/lib/utils";
export function GlowLineDivider({ className }: { className?: string }) { return <div className={cn("w-64 h-px bg-gradient-to-r from-transparent via-[var(--primary)] to-transparent shadow-[0_0_8px_var(--primary)]", className)} />; }