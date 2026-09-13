"use client";
import { cn } from "@/lib/utils";

export function SlashBreadcrumbs({ paths = ["src", "app", "components", "page.tsx"], className }: { paths?: string[]; className?: string }) {
  return (
    <div className={cn("inline-flex items-center rounded-lg border border-[var(--border)] bg-[var(--card)] px-3 py-1.5 text-xs font-mono", className)}>
      {paths.map((p, i) => (
        <span key={i} className="flex items-center">
          {i > 0 && <span className="mx-2 text-[var(--muted)] font-bold">/</span>}
          <span className={cn(i === paths.length - 1 ? "text-[var(--primary)] font-bold" : "text-[var(--muted-foreground)] hover:text-[var(--foreground)] cursor-pointer")}>
            {p}
          </span>
        </span>
      ))}
    </div>
  );
}