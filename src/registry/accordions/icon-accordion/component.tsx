"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface Item {
  icon: string;
  title: string;
  content: string;
}

export function IconAccordion({ items, className }: { items?: Item[]; className?: string }) {
  const defaultItems: Item[] = [
    { icon: "⚡", title: "Instant Setup", content: "Copy and paste any component directly into your React project." },
    { icon: "🎨", title: "Tailwind CSS", content: "Built with standard Tailwind utility classes and CSS variables." },
    { icon: "🚀", title: "Zero Dependencies", content: "Most components use pure React and CSS with zero extra bloat." }
  ];

  const list = items || defaultItems;
  const [active, setActive] = useState<number | null>(0);

  return (
    <div className={cn("w-72 space-y-2", className)}>
      {list.map((item, i) => {
        const isOpen = active === i;
        return (
          <div key={i} className="rounded-xl border border-[var(--border)] bg-[var(--card)] overflow-hidden transition-all">
            <button
              onClick={() => setActive(isOpen ? null : i)}
              className="w-full flex items-center justify-between p-3.5 text-left text-xs font-bold hover:bg-[var(--secondary)] transition-colors"
            >
              <div className="flex items-center gap-2.5">
                <span className="text-base">{item.icon}</span>
                <span>{item.title}</span>
              </div>
              <span className={cn("text-xs transition-transform duration-300", isOpen && "rotate-180")}>▼</span>
            </button>
            {isOpen && (
              <div className="px-3.5 pb-3.5 pt-1 text-[11px] text-[var(--muted-foreground)] leading-relaxed border-t border-[var(--border)]/50">
                {item.content}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}