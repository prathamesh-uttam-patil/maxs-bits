"use client";
import { cn } from "@/lib/utils";

export function KeyboardKey({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <kbd className={cn("inline-flex items-center justify-center min-w-[1.75rem] h-7 px-2 rounded-md border border-[var(--border)] bg-[var(--secondary)] text-[11px] font-mono font-semibold text-[var(--muted-foreground)] shadow-[0_1px_0_1px_var(--border)] transition-all active:translate-y-px active:shadow-none", className)}>
      {children}
    </kbd>
  );
}