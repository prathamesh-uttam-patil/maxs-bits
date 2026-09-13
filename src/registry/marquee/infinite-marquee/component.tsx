"use client";
import { cn } from "@/lib/utils";

interface InfiniteMarqueeProps { children: React.ReactNode; speed?: number; direction?: "left" | "right"; className?: string; }

export function InfiniteMarquee({ children, speed = 30, direction = "left", className }: InfiniteMarqueeProps) {
  return (
    <>
      <style>{`@keyframes marquee-scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>
      <div className={cn("overflow-hidden", className)}>
        <div className="inline-flex whitespace-nowrap" style={{ animation: `marquee-scroll ${speed}s linear infinite`, animationDirection: direction === "right" ? "reverse" : "normal" }}>
          <div className="inline-flex items-center gap-8 pr-8">{children}</div>
          <div className="inline-flex items-center gap-8 pr-8" aria-hidden>{children}</div>
        </div>
      </div>
    </>
  );
}