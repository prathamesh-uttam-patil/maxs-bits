"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface SearchInputProps { placeholder?: string; onSearch?: (q: string) => void; className?: string; }

export function SearchInput({ placeholder = "Search...", onSearch, className }: SearchInputProps) {
  const [expanded, setExpanded] = useState(false);
  const [value, setValue] = useState("");
  return (
    <div className={cn("relative inline-flex items-center", className)}>
      <button onClick={() => setExpanded(!expanded)} className="z-10 w-9 h-9 rounded-full bg-[var(--secondary)] flex items-center justify-center transition-colors hover:bg-[var(--primary)] hover:text-[var(--primary-foreground)]">
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
      </button>
      <input value={value} onChange={(e) => { setValue(e.target.value); onSearch?.(e.target.value); }}
        placeholder={placeholder}
        className={cn("absolute left-0 h-9 rounded-full border border-[var(--border)] bg-[var(--background)] pl-11 pr-4 text-sm outline-none transition-all duration-300",
          expanded ? "w-64 opacity-100" : "w-9 opacity-0 pointer-events-none"
        )} />
    </div>
  );
}