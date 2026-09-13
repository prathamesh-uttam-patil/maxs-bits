"use client";
import { cn } from "@/lib/utils";

interface LoadingButtonProps { children: React.ReactNode; loading?: boolean; className?: string; onClick?: () => void; }

export function LoadingButton({ children, loading = false, className, onClick }: LoadingButtonProps) {
  return (
    <button onClick={onClick} disabled={loading}
      className={cn("relative inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-[var(--primary)] text-[var(--primary-foreground)] text-sm font-semibold transition-all disabled:opacity-70", className)}
    >
      {loading && <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="opacity-25" /><path d="M4 12a8 8 0 018-8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" /></svg>}
      <span className={cn(loading && "opacity-80")}>{children}</span>
    </button>
  );
}