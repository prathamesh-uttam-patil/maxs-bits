"use client";
import { useState, useEffect, useCallback } from "react";
import { cn } from "@/lib/utils";

export function TypingDelete({ words, speed = 100, className }: { words: string[]; speed?: number; className?: string }) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const tick = useCallback(() => {
    const current = words[wordIndex];
    setText(deleting ? current.substring(0, text.length - 1) : current.substring(0, text.length + 1));
    if (!deleting && text === current) { setTimeout(() => setDeleting(true), 1500); return; }
    if (deleting && text === "") { setDeleting(false); setWordIndex((wordIndex + 1) % words.length); }
  }, [text, wordIndex, deleting, words]);
  useEffect(() => { const t = setTimeout(tick, deleting ? speed / 2 : speed); return () => clearTimeout(t); }, [tick, deleting, speed]);
  return <span className={cn("text-2xl font-bold", className)}>{text}<span className="animate-pulse text-[var(--primary)]">|</span></span>;
}