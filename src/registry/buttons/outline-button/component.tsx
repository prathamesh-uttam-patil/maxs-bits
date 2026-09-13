"use client";
import { cn } from "@/lib/utils";

export function OutlineButton({ children, className, onClick }: { children: React.ReactNode; className?: string; onClick?: () => void }) {
  return (
    <button onClick={onClick}
      className={cn("group relative overflow-hidden rounded-lg border-2 border-[var(--primary)] px-6 py-2.5 text-sm font-semibold text-[var(--primary)] transition-colors duration-500 hover:text-[var(--primary-foreground)]", className)}
    >
      <span className="absolute inset-0 bg-[var(--primary)] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />
      <span className="relative z-10">{children}</span>
    </button>
  );
}