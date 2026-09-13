"use client";
import { cn } from "@/lib/utils";

export function VerifiedAvatar({ className }: { className?: string }) {
  return (
    <div className={cn("relative inline-block", className)}>
      <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[var(--primary)] to-[var(--accent)] flex items-center justify-center text-white font-bold text-lg shadow-md">
        M
      </div>
      <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-blue-500 text-white flex items-center justify-center text-[10px] font-bold border-2 border-[var(--card)] shadow-sm">
        ✓
      </div>
    </div>
  );
}