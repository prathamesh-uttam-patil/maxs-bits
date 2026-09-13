"use client";

import { useState, useCallback } from "react";
import { Check, Copy, Code2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface CodeViewerProps {
  code: string;
  filename?: string;
  className?: string;
}

export function CodeViewer({ code, filename, className }: CodeViewerProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [code]);

  return (
    <div className={cn("rounded-xl border border-[var(--border)] bg-[var(--card)] overflow-hidden", className)}>
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-[var(--border)] bg-[var(--secondary)]/50">
        <div className="flex items-center gap-2">
          <Code2 className="w-4 h-4 text-[var(--muted-foreground)]" />
          <span className="text-xs font-medium text-[var(--muted-foreground)]">
            {filename || "component.tsx"}
          </span>
        </div>
        <button
          onClick={handleCopy}
          className={cn(
            "flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-medium transition-all",
            copied
              ? "bg-green-500/10 text-green-500"
              : "text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--secondary)]"
          )}
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5" />
              Copied!
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              Copy
            </>
          )}
        </button>
      </div>

      {/* Code content */}
      <div className="overflow-auto max-h-[500px]">
        <pre className="!rounded-none !m-0">
          <code className="text-sm leading-relaxed">
            {code.split("\n").map((line, i) => (
              <div key={i} className="flex">
                <span className="select-none w-12 text-right pr-4 text-[var(--muted-foreground)]/50 text-xs leading-relaxed">
                  {i + 1}
                </span>
                <span className="flex-1">{line || " "}</span>
              </div>
            ))}
          </code>
        </pre>
      </div>
    </div>
  );
}
