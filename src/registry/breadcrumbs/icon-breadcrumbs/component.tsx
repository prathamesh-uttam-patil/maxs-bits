"use client";
import { cn } from "@/lib/utils";

export function IconBreadcrumbs({ items, className }: { items: {label:string;href?:string}[]; className?: string }) {
  return (
    <nav className={cn("flex items-center text-sm", className)}>
      <svg className="w-4 h-4 text-[var(--muted-foreground)] mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
      {items.map((item, i) => (
        <span key={i} className="flex items-center">
          {i > 0 && <span className="mx-1.5 text-[var(--muted-foreground)]">/</span>}
          {item.href ? <a href={item.href} className="text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-colors">{item.label}</a> : <span className="font-medium">{item.label}</span>}
        </span>
      ))}
    </nav>
  );
}