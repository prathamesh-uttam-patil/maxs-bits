import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ComponentMeta } from "@/lib/registry";

interface ComponentCardProps {
  component: ComponentMeta;
  children?: React.ReactNode;
}

export function ComponentCard({ component, children }: ComponentCardProps) {
  return (
    <Link
      href={`/components/${component.category}/${component.slug}`}
      className="group relative flex flex-col rounded-xl border border-[var(--border)] bg-[var(--card)] overflow-hidden transition-all hover:border-[var(--primary)]/50 hover:shadow-lg hover:shadow-[var(--primary)]/5 hover:-translate-y-0.5"
    >
      {/* Preview Area */}
      <div className="relative h-48 flex items-center justify-center bg-[var(--secondary)]/50 overflow-hidden">
        <div className="absolute inset-0 dot-pattern" />
        <div className="relative z-10 flex items-center justify-center p-6 w-full h-full pointer-events-none">
          {children || (
            <div className="text-sm text-[var(--muted-foreground)] italic">Preview</div>
          )}
        </div>
      </div>

      {/* Info */}
      <div className="p-4 flex-1 flex flex-col">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="font-semibold text-base group-hover:text-[var(--primary)] transition-colors">
              {component.name}
            </h3>
            <p className="text-sm text-[var(--muted-foreground)] mt-1 line-clamp-2">
              {component.description}
            </p>
          </div>
          <ArrowUpRight className="w-4 h-4 text-[var(--muted-foreground)] shrink-0 mt-1 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mt-3">
          {component.isNew && (
            <span className="inline-flex items-center rounded-md bg-[var(--primary)]/10 text-[var(--primary)] px-2 py-0.5 text-xs font-medium">
              NEW
            </span>
          )}
          {component.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-md bg-[var(--secondary)] text-[var(--muted-foreground)] px-2 py-0.5 text-xs font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
