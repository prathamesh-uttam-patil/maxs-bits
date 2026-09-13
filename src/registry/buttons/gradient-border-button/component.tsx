"use client";
import { cn } from "@/lib/utils";

export function GradientBorderButton({ children, className, onClick }: { children: React.ReactNode; className?: string; onClick?: () => void }) {
  return (
    <>
      <style>{`@keyframes gbb-spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
      <button onClick={onClick} className={cn("relative inline-flex items-center justify-center p-px rounded-lg group", className)}>
        <span className="absolute inset-0 overflow-hidden rounded-lg"><span className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,#8b5cf6,#ec4899,#3b82f6,#10b981,#8b5cf6)]" style={{ animation: "gbb-spin 3s linear infinite" }} /></span>
        <span className="relative flex items-center px-5 py-2.5 rounded-[7px] bg-[var(--background)] text-sm font-semibold group-hover:bg-transparent group-hover:text-white transition-colors duration-300">{children}</span>
      </button>
    </>
  );
}