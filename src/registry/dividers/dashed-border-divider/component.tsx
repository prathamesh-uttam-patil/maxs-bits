"use client";
import { cn } from "@/lib/utils";
export function DashedBorderDivider({ className }: { className?: string }) { return <div className={cn("w-64 border-b border-dashed border-[var(--border)]", className)} />; }