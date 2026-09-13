"use client";
import { cn } from "@/lib/utils";

export function ShimmerGradientText({ text = "Max's Bits Next-Gen", className }: { text?: string; className?: string }) {
  return (
    <>
      <style>{`@keyframes text-sweep { 0% { background-position: -200% 0; } 100% { background-position: 200% 0; } }`}</style>
      <span
        className={cn("inline-block text-xl font-black bg-clip-text text-transparent", className)}
        style={{
          backgroundImage: "linear-gradient(90deg, #8b5cf6 0%, #ec4899 25%, #ffffff 50%, #ec4899 75%, #8b5cf6 100%)",
          backgroundSize: "200% auto",
          animation: "text-sweep 4s linear infinite"
        }}
      >
        {text}
      </span>
    </>
  );
}