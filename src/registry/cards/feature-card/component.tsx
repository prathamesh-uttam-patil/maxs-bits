"use client";
import { cn } from "@/lib/utils";

interface FeatureCardProps { icon: string; title: string; description: string; className?: string; }

export function FeatureCard({ icon, title, description, className }: FeatureCardProps) {
  return (
    <div className={cn("group w-56 rounded-xl border border-[var(--border)] bg-[var(--card)] p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-[var(--primary)]/30", className)}>
      <div className="w-10 h-10 rounded-lg bg-[var(--primary)]/10 flex items-center justify-center text-xl mb-3 group-hover:scale-110 transition-transform">{icon}</div>
      <h3 className="text-sm font-bold mb-1">{title}</h3>
      <p className="text-xs text-[var(--muted-foreground)] leading-relaxed">{description}</p>
    </div>
  );
}