"use client";
import { cn } from "@/lib/utils";

interface TestimonialCardProps { quote: string; author: string; role?: string; className?: string; }

export function TestimonialCard({ quote, author, role, className }: TestimonialCardProps) {
  return (
    <div className={cn("w-64 rounded-xl border border-[var(--border)] bg-[var(--card)] p-5", className)}>
      <div className="text-3xl text-[var(--primary)] mb-2 leading-none">\u201C</div>
      <p className="text-sm text-[var(--muted-foreground)] italic mb-4">{quote}</p>
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-[var(--primary)]/10 flex items-center justify-center text-xs font-bold text-[var(--primary)]">{author[0]}</div>
        <div><div className="text-xs font-semibold">{author}</div>{role && <div className="text-[10px] text-[var(--muted-foreground)]">{role}</div>}</div>
      </div>
    </div>
  );
}