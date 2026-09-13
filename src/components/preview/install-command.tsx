"use client";

import { useState, useCallback } from "react";
import { Check, Copy, Terminal } from "lucide-react";
import { cn } from "@/lib/utils";

interface InstallCommandProps {
  slug: string;
  className?: string;
}

export function InstallCommand({ slug, className }: InstallCommandProps) {
  const [copied, setCopied] = useState(false);
  const command = `npx maxs-bits add ${slug}`;

  const handleCopy = useCallback(async () => {
    await navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [command]);

  return (
    <div className={cn("rounded-xl border border-[var(--border)] overflow-hidden", className)}>
      <div className="px-4 py-3 border-b border-[var(--border)] bg-[var(--secondary)]/50">
        <div className="flex items-center gap-2">
          <Terminal className="w-4 h-4 text-[var(--muted-foreground)]" />
          <span className="text-sm font-semibold">Install</span>
        </div>
      </div>
      <div className="flex items-center justify-between p-4 bg-[var(--card)]">
        <code className="text-sm font-mono text-[var(--muted-foreground)]">
          <span className="text-[var(--primary)]">$</span> {command}
        </code>
        <button
          onClick={handleCopy}
          className={cn(
            "flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all",
            copied
              ? "bg-green-500/10 text-green-500"
              : "text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--secondary)]"
          )}
        >
          {copied ? (
            <Check className="w-3.5 h-3.5" />
          ) : (
            <Copy className="w-3.5 h-3.5" />
          )}
        </button>
      </div>
    </div>
  );
}
