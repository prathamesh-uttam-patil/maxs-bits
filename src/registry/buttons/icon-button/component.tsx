"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function IconButton({ icon, label, className, onClick }: { icon: React.ReactNode; label: string; className?: string; onClick?: () => void }) {
  const [hover, setHover] = useState(false);
  return (
    <div className="relative inline-flex">
      <button onClick={onClick} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
        className={cn("w-9 h-9 rounded-lg border border-[var(--border)] flex items-center justify-center hover:bg-[var(--secondary)] transition-colors", className)}>{icon}</button>
      <span className={cn("absolute bottom-full left-1/2 -translate-x-1/2 mb-1.5 px-2 py-1 rounded text-[10px] font-medium bg-[var(--foreground)] text-[var(--background)] whitespace-nowrap transition-all pointer-events-none",
        hover ? "opacity-100 scale-100" : "opacity-0 scale-90")}>{label}</span>
    </div>
  );
}