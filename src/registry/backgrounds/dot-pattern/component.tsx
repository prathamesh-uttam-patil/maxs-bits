"use client";
import { cn } from "@/lib/utils";

export function DotPattern({ children, className }: { children?: React.ReactNode; className?: string }) {
  return (
    <div className={cn("relative w-full h-full min-h-[200px] rounded-lg bg-[var(--background)]", className)}>
      <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle, var(--muted-foreground) 1px, transparent 1px)", backgroundSize: "20px 20px", opacity: 0.12 }} />
      <div className="absolute inset-0" style={{ background: "radial-gradient(circle at 50% 50%, transparent 30%, var(--background) 80%)" }} />
      <div className="relative z-10">{children}</div>
    </div>
  );
}