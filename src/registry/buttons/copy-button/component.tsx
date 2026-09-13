"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function CopyButton({ text, children, className }: { text: string; children?: React.ReactNode; className?: string }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = async () => { await navigator.clipboard.writeText(text); setCopied(true); setTimeout(() => setCopied(false), 2000); };
  return (
    <button onClick={handleCopy} className={cn("inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-[var(--border)] text-sm font-medium transition-all hover:bg-[var(--secondary)]", copied && "border-emerald-500 text-emerald-500", className)}>
      {copied ? <><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>Copied!</> : <>{children || "Copy"}</>}
    </button>
  );
}