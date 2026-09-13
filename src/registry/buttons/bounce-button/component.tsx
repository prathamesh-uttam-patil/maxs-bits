"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function BounceButton({ children, className, onClick }: { children: React.ReactNode; className?: string; onClick?: () => void }) {
  const [bounce, setBounce] = useState(false);
  return (
    <>
      <style>{`@keyframes btn-bounce { 0% { transform: scale(1); } 30% { transform: scale(0.9); } 50% { transform: scale(1.08); } 70% { transform: scale(0.97); } 100% { transform: scale(1); } }`}</style>
      <button onClick={() => { setBounce(true); onClick?.(); setTimeout(() => setBounce(false), 500); }}
        className={cn("px-5 py-2.5 rounded-lg bg-[var(--primary)] text-[var(--primary-foreground)] text-sm font-semibold", className)}
        style={bounce ? { animation: "btn-bounce 0.5s ease" } : {}}>{children}</button>
    </>
  );
}