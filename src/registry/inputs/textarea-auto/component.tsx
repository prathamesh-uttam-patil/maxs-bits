"use client";
import { useRef, useCallback } from "react";
import { cn } from "@/lib/utils";

interface AutoTextareaProps { placeholder?: string; maxRows?: number; className?: string; }

export function AutoTextarea({ placeholder = "Type something...", maxRows = 6, className }: AutoTextareaProps) {
  const ref = useRef<HTMLTextAreaElement>(null);
  const handleInput = useCallback(() => {
    const el = ref.current; if (!el) return;
    el.style.height = "auto";
    const lineHeight = parseInt(getComputedStyle(el).lineHeight) || 20;
    el.style.height = Math.min(el.scrollHeight, lineHeight * maxRows) + "px";
  }, [maxRows]);
  return <textarea ref={ref} onInput={handleInput} placeholder={placeholder} rows={1}
    className={cn("w-full resize-none rounded-lg border border-[var(--border)] bg-[var(--background)] px-4 py-3 text-sm outline-none transition-all focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20", className)} />;
}