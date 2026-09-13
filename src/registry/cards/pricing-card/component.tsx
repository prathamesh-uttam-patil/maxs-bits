"use client";
import { cn } from "@/lib/utils";

interface PricingCardProps { plan: string; price: string; features: string[]; highlighted?: boolean; className?: string; }

export function PricingCard({ plan, price, features, highlighted = false, className }: PricingCardProps) {
  return (
    <div className={cn("w-52 rounded-xl border p-5 transition-all duration-300 hover:scale-105", highlighted ? "border-[var(--primary)] bg-[var(--primary)]/5 shadow-lg shadow-[var(--primary)]/10" : "border-[var(--border)] bg-[var(--card)]", className)}>
      <div className="text-xs font-semibold uppercase tracking-wider text-[var(--muted-foreground)]">{plan}</div>
      <div className="mt-2 text-2xl font-extrabold">{price}</div>
      <div className="mt-4 space-y-2">
        {features.map((f, i) => <div key={i} className="flex items-center gap-2 text-xs"><svg className="w-3.5 h-3.5 text-emerald-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>{f}</div>)}
      </div>
      <button className={cn("mt-5 w-full py-2 rounded-lg text-xs font-bold transition-colors", highlighted ? "bg-[var(--primary)] text-[var(--primary-foreground)]" : "bg-[var(--secondary)] text-[var(--foreground)] hover:bg-[var(--primary)] hover:text-[var(--primary-foreground)]")}>Get Started</button>
    </div>
  );
}