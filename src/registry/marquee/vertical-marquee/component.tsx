"use client";
import { cn } from "@/lib/utils";

export function VerticalMarquee({ items, speed = 20, className }: { items: string[]; speed?: number; className?: string }) {
  return (
    <>
      <style>{`@keyframes v-marquee { from { transform: translateY(0); } to { transform: translateY(-50%); } }`}</style>
      <div className={cn("overflow-hidden h-32", className)}>
        <div style={{ animation: `v-marquee ${speed}s linear infinite` }}>
          {[...items, ...items].map((item, i) => (
            <div key={i} className="py-2 px-3 text-sm border-b border-[var(--border)]">{item}</div>
          ))}
        </div>
      </div>
    </>
  );
}