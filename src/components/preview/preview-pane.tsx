"use client";

import { useState } from "react";
import { Monitor, Tablet, Smartphone } from "lucide-react";
import { cn } from "@/lib/utils";

type Viewport = "desktop" | "tablet" | "mobile";

const viewportWidths: Record<Viewport, string> = {
  desktop: "100%",
  tablet: "768px",
  mobile: "375px",
};

interface PreviewPaneProps {
  children: React.ReactNode;
  className?: string;
}

export function PreviewPane({ children, className }: PreviewPaneProps) {
  const [viewport, setViewport] = useState<Viewport>("desktop");

  return (
    <div className={cn("rounded-xl border border-[var(--border)] bg-[var(--card)] overflow-hidden", className)}>
      {/* Toolbar */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-[var(--border)] bg-[var(--secondary)]/50">
        <span className="text-xs font-medium text-[var(--muted-foreground)] uppercase tracking-wider">Preview</span>
        <div className="flex items-center gap-1">
          {([
            { id: "desktop" as Viewport, icon: Monitor, label: "Desktop" },
            { id: "tablet" as Viewport, icon: Tablet, label: "Tablet" },
            { id: "mobile" as Viewport, icon: Smartphone, label: "Mobile" },
          ]).map(({ id, icon: Icon, label }) => (
            <button
              key={id}
              onClick={() => setViewport(id)}
              className={cn(
                "p-1.5 rounded-md transition-colors",
                viewport === id
                  ? "bg-[var(--primary)]/10 text-[var(--primary)]"
                  : "text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--secondary)]"
              )}
              title={label}
            >
              <Icon className="w-4 h-4" />
            </button>
          ))}
        </div>
      </div>

      {/* Preview content */}
      <div className="flex justify-center p-6 md:p-10 bg-[var(--secondary)]/30 min-h-[300px]">
        <div
          className="relative w-full flex items-center justify-center transition-all duration-300"
          style={{ maxWidth: viewportWidths[viewport] }}
        >
          <div className="absolute inset-0 dot-pattern rounded-lg" />
          <div className="relative z-10 w-full flex items-center justify-center p-8">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
