"use client";
import { cn } from "@/lib/utils";

interface LogoMarqueeProps { logos: string[]; className?: string; }

export function LogoMarquee({ logos, className }: LogoMarqueeProps) {
  return (
    <>
      <style>{`@keyframes logo-scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>
      <div className={cn("overflow-hidden", className)}>
        <div className="inline-flex whitespace-nowrap" style={{ animation: "logo-scroll 20s linear infinite" }}>
          {[...logos, ...logos].map((logo, i) => (
            <div key={i} className="mx-6 flex items-center justify-center w-16 h-10 rounded-md bg-[var(--secondary)] text-lg grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer hover:scale-110">{logo}</div>
          ))}
        </div>
      </div>
    </>
  );
}