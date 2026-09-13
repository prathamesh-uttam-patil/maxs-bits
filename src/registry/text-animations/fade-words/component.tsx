"use client";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export function FadeWords({ words, interval = 2000, className }: { words: string[]; interval?: number; className?: string }) {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);
  useEffect(() => { const t = setInterval(() => { setFade(false); setTimeout(() => { setIndex(i => (i + 1) % words.length); setFade(true); }, 300); }, interval); return () => clearInterval(t); }, [words.length, interval]);
  return <span className={cn("inline-block text-2xl font-bold transition-all duration-300", fade ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2", className)}>{words[index]}</span>;
}