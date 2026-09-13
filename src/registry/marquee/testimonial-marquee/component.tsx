"use client";
import { cn } from "@/lib/utils";

export function TestimonialMarquee({ className }: { className?: string }) {
  const cards = [
    { name: "Dan A.", text: "Saved me 40 hours building our design system.", tag: "CTO" },
    { name: "Elena V.", text: "The animations are smooth and buttery.", tag: "Designer" },
    { name: "Marcus K.", text: "Best component copy-paste library hands down.", tag: "Dev" }
  ];

  return (
    <div className={cn("overflow-hidden w-80 relative group [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]", className)}>
      <style>{`@keyframes test-marq { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>
      <div 
        className="flex gap-3 group-hover:[animation-play-state:paused]"
        style={{ animation: "test-marq 15s linear infinite", width: "max-content" }}
      >
        {[...cards, ...cards].map((c, i) => (
          <div key={i} className="w-56 p-3 rounded-xl border border-[var(--border)] bg-[var(--card)] shrink-0 shadow-sm">
            <p className="text-[11px] text-[var(--muted-foreground)] line-clamp-2">"{c.text}"</p>
            <div className="mt-2 flex items-center justify-between text-[10px]">
              <span className="font-bold">{c.name}</span>
              <span className="px-1.5 py-0.5 rounded bg-[var(--secondary)] text-[var(--muted-foreground)]">{c.tag}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}