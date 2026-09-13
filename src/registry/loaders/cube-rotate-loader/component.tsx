"use client";
import { cn } from "@/lib/utils";
export function CubeRotateLoader({ className }: { className?: string }) { return <div className={cn("w-6 h-6 border-2 border-[var(--primary)] bg-[var(--primary)]/20 animate-spin rounded-md", className)} style={{ animationDuration: "1.5s" }} />; }