"use client";
import { cn } from "@/lib/utils";

interface BreadcrumbItem { label: string; href?: string; }
interface AnimatedBreadcrumbsProps { items: BreadcrumbItem[]; className?: string; }

export function AnimatedBreadcrumbs({ items, className }: AnimatedBreadcrumbsProps) {
  return (
    <nav className={cn("flex items-center text-sm", className)}>
      {items.map((item, i) => (
        <span key={i} className="flex items-center">
          {i > 0 && <svg className="w-4 h-4 mx-2 text-[var(--muted-foreground)] transition-transform hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>}
          {item.href ? (
            <a href={item.href} className="text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-colors">{item.label}</a>
          ) : (
            <span className="font-medium text-[var(--foreground)]">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}