"use client";
import { cn } from "@/lib/utils";

export function StackedAvatars({ className }: { className?: string }) {
  const members = ["👩🏻‍💻", "👨🏽‍💻", "👩🏼‍🎨", "👨🏿‍🚀"];

  return (
    <div className={cn("inline-flex items-center -space-x-2", className)}>
      {members.map((m, i) => (
        <div key={i} className="w-8 h-8 rounded-full border-2 border-[var(--card)] bg-[var(--secondary)] flex items-center justify-center text-sm shadow-sm transition-transform hover:-translate-y-1 hover:z-10 cursor-pointer">
          {m}
        </div>
      ))}
      <div className="w-8 h-8 rounded-full border-2 border-[var(--card)] bg-[var(--primary)] text-white text-[10px] font-bold flex items-center justify-center shadow-sm">
        +12
      </div>
    </div>
  );
}