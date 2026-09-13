"use client";
import { cn } from "@/lib/utils";

export function WaveText({ text, className }: { text: string; className?: string }) {
  return (
    <>
      <style>{`@keyframes wave-letter { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }`}</style>
      <span className={cn("inline-flex text-2xl font-bold", className)}>
        {text.split("").map((c, i) => <span key={i} className="inline-block" style={{ animation: "wave-letter 1.5s ease infinite", animationDelay: `${i * 0.05}s` }}>{c === " " ? "\u00A0" : c}</span>)}
      </span>
    </>
  );
}