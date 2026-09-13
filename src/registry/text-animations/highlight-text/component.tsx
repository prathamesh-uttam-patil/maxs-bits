"use client";
import { cn } from "@/lib/utils";

export function HighlightText({ children, color = "#8b5cf6", className }: { children: React.ReactNode; color?: string; className?: string }) {
  return (
    <>
      <style>{`@keyframes highlight-draw { from { background-size: 0% 40%; } to { background-size: 100% 40%; } }`}</style>
      <span className={cn("font-bold", className)} style={{
        backgroundImage: `linear-gradient(${color}40, ${color}40)`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "0 85%",
        backgroundSize: "100% 40%",
        animation: "highlight-draw 0.8s ease-out forwards",
      }}>{children}</span>
    </>
  );
}