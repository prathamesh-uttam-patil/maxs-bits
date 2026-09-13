"use client";
import { cn } from "@/lib/utils";

export function ShortcutDisplay({ keys, className }: { keys: string[]; className?: string }) {
  return (
    <div className={cn("inline-flex items-center gap-1", className)}>
      {keys.map((key, i) => (
        <span key={i} className="contents">
          {i > 0 && <span className="text-[10px] text-[var(--muted-foreground)]">+</span>}
          <kbd className="inline-flex items-center justify-center min-w-[1.5rem] h-6 px-1.5 rounded border border-[var(--border)] bg-[var(--secondary)] text-[10px] font-mono font-semibold shadow-[0_1px_0_var(--border)]">{key}</kbd>
        </span>
      ))}
    </div>
  );
}