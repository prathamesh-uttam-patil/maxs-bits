"use client";
import { cn } from "@/lib/utils";

export function BadgeGroup({ tags = ["TypeScript", "Next.js 16", "Tailwind v4"], className }: { tags?: string[]; className?: string }) {
  return (
    <div className={cn("inline-flex items-center rounded-lg border border-[var(--border)] bg-[var(--card)] p-1 gap-1 text-xs font-semibold", className)}>
      {tags.map((t, i) => (
        <span key={i} className="px-2.5 py-1 rounded-md bg-[var(--secondary)] text-[var(--muted-foreground)] hover:text-[var(--primary)] hover:bg-[var(--primary)]/10 transition-colors cursor-pointer">
          {t}
        </span>
      ))}
    </div>
  );
}