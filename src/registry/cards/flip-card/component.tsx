"use client";
import { cn } from "@/lib/utils";

export function FlipCard({ front, back, className }: { front: React.ReactNode; back: React.ReactNode; className?: string }) {
  return (
    <div className={cn("group w-48 h-56 [perspective:1000px]", className)}>
      <div className="relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        <div className="absolute inset-0 rounded-xl border border-[var(--border)] bg-[var(--card)] p-5 flex items-center justify-center [backface-visibility:hidden]">{front}</div>
        <div className="absolute inset-0 rounded-xl border border-[var(--primary)]/30 bg-[var(--primary)]/5 p-5 flex items-center justify-center [backface-visibility:hidden] [transform:rotateY(180deg)]">{back}</div>
      </div>
    </div>
  );
}