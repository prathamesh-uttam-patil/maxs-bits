"use client";
import { cn } from "@/lib/utils";

export function DnaSpinnerLoader({ className }: { className?: string }) {
  return (
    <>
      <style>{`@keyframes dna-wave { 0%,100% { transform: translateY(0px) scale(0.8); opacity: 0.4; } 50% { transform: translateY(-12px) scale(1.2); opacity: 1; } }`}</style>
      <div className={cn("flex items-center gap-1.5 h-8", className)}>
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            className="w-2 h-2 rounded-full bg-gradient-to-tr from-[var(--primary)] to-[var(--accent)]"
            style={{
              animation: "dna-wave 1.2s ease-in-out infinite",
              animationDelay: `${i * 0.15}s`
            }}
          />
        ))}
      </div>
    </>
  );
}