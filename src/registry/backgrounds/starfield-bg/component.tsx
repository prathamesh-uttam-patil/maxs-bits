"use client";
import { cn } from "@/lib/utils";

export function StarfieldBg({ children, className }: { children?: React.ReactNode; className?: string }) {
  return (
    <div className={cn("relative w-full h-44 rounded-xl bg-slate-950 text-white overflow-hidden flex items-center justify-center border border-slate-800", className)}>
      <style>{`@keyframes twinkle { 0%,100% { opacity:0.2; transform:scale(0.8); } 50% { opacity:1; transform:scale(1.2); } }`}</style>
      <div className="absolute top-4 left-8 w-1 h-1 bg-white rounded-full animate-[twinkle_2s_infinite]" />
      <div className="absolute top-12 right-12 w-1.5 h-1.5 bg-purple-400 rounded-full animate-[twinkle_3s_infinite]" />
      <div className="absolute bottom-8 left-20 w-1 h-1 bg-cyan-300 rounded-full animate-[twinkle_2.5s_infinite]" />
      <div className="absolute bottom-12 right-24 w-1 h-1 bg-white rounded-full animate-[twinkle_1.8s_infinite]" />
      <div className="relative z-10 text-xs font-bold text-slate-200">{children || "Cosmic Starfield"}</div>
    </div>
  );
}