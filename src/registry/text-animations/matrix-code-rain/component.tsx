"use client";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export function MatrixCodeRain({ className }: { className?: string }) {
  const chars = "0101MAXSBITS<>{}#_+=~";
  const [str, setStr] = useState("MAX_SYSTEM_ONLINE");

  useEffect(() => {
    const t = setInterval(() => {
      setStr(Array.from({ length: 16 }, () => chars[Math.floor(Math.random() * chars.length)]).join(""));
    }, 150);
    return () => clearInterval(t);
  }, []);

  return (
    <div className={cn("inline-block px-3 py-1.5 rounded-lg bg-black text-emerald-400 font-mono text-xs font-bold shadow-lg shadow-emerald-500/10 tracking-widest border border-emerald-500/30", className)}>
      {str}
    </div>
  );
}