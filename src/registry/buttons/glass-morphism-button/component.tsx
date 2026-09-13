"use client";
import { cn } from "@/lib/utils";
export function GlassMorphismButton({ className }: { className?: string }) { return <button className={cn("px-6 py-2.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-xs font-bold shadow-lg hover:bg-white/20 transition-all active:scale-95", className)}>Frosted Glass ✨</button>; }