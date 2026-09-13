"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function ConfettiButton({ className }: { className?: string }) {
  const [popped, setPopped] = useState(false);

  const handleClick = () => {
    setPopped(true);
    setTimeout(() => setPopped(false), 1000);
  };

  return (
    <div className="relative inline-block">
      {popped && (
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 flex gap-1 text-sm animate-bounce">
          🎉 ✨ 🚀 🌟
        </div>
      )}
      <button
        onClick={handleClick}
        className={cn("px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-pink-500 text-white text-xs font-bold shadow-lg shadow-pink-500/20 active:scale-95 transition-transform", className)}
      >
        Celebrate! 🥳
      </button>
    </div>
  );
}