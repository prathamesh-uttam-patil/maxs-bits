"use client";
import { cn } from "@/lib/utils";

export function GradientMarquee({ className }: { className?: string }) {
  const tags = ["Next.js 16", "Tailwind v4", "Turbopack", "React 19", "Framer Motion", "Shiki", "Lucide Icons"];

  return (
    <div className={cn("overflow-hidden w-80 py-2 [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]", className)}>
      <style>{`@keyframes grad-marq { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>
      <div 
        className="flex gap-2"
        style={{ animation: "grad-marq 12s linear infinite", width: "max-content" }}
      >
        {[...tags, ...tags].map((t, i) => (
          <span key={i} className="px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-[var(--primary)]/10 to-[var(--accent)]/10 border border-[var(--primary)]/20 text-[var(--primary)] shrink-0">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}