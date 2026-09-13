"use client";
import { cn } from "@/lib/utils";

export function GradientDivider({ className }: { className?: string }) {
  return (
    <>
      <style>{`@keyframes divider-shimmer { 0% { background-position: -200% 0; } 100% { background-position: 200% 0; } }`}</style>
      <div
        className={cn("w-full h-px", className)}
        style={{ background: "linear-gradient(90deg, transparent, #8b5cf6, #ec4899, #3b82f6, transparent)", backgroundSize: "200% 100%", animation: "divider-shimmer 4s linear infinite" }}
      />
    </>
  );
}
