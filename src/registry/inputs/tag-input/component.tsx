"use client";
import { useState, useCallback } from "react";
import { cn } from "@/lib/utils";

export function TagInput({ placeholder = "Add tag...", className }: { placeholder?: string; className?: string }) {
  const [tags, setTags] = useState<string[]>([]);
  const [input, setInput] = useState("");
  const handleKey = useCallback((e: React.KeyboardEvent) => {
    if (e.key === "Enter" && input.trim()) { e.preventDefault(); if (!tags.includes(input.trim())) setTags([...tags, input.trim()]); setInput(""); }
    if (e.key === "Backspace" && !input && tags.length) setTags(tags.slice(0, -1));
  }, [input, tags]);
  return (
    <div className={cn("flex flex-wrap gap-1.5 p-2 rounded-lg border border-[var(--border)] bg-[var(--background)] focus-within:border-[var(--primary)] focus-within:ring-2 focus-within:ring-[var(--primary)]/20 min-h-[2.5rem] w-64", className)}>
      {tags.map(t => <span key={t} className="inline-flex items-center gap-1 bg-[var(--primary)]/10 text-[var(--primary)] text-xs font-medium rounded-md px-2 py-0.5">{t}<button onClick={() => setTags(tags.filter(x => x !== t))} className="hover:text-red-500">\u00D7</button></span>)}
      <input value={input} onChange={e => setInput(e.target.value)} onKeyDown={handleKey} placeholder={tags.length ? "" : placeholder} className="flex-1 min-w-[60px] bg-transparent text-sm outline-none" />
    </div>
  );
}