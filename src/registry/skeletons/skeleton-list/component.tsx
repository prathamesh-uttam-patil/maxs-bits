"use client";
import { cn } from "@/lib/utils";

export function SkeletonList({ count = 3, className }: { count?: number; className?: string }) {
  return (
    <>
      <style>{`@keyframes sklist { from { background-position: -200% 0; } to { background-position: 200% 0; } }`}</style>
      <div className={cn("space-y-3", className)}>
        {Array.from({ length: count }, (_, i) => (
          <div key={i} className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full shrink-0" style={{ background: "linear-gradient(90deg, var(--muted) 25%, var(--secondary) 50%, var(--muted) 75%)", backgroundSize: "200% 100%", animation: "sklist 1.5s ease infinite" }} />
            <div className="flex-1 space-y-1.5">
              <div className="h-3 rounded" style={{ width: `${70 + i * 10}%`, background: "linear-gradient(90deg, var(--muted) 25%, var(--secondary) 50%, var(--muted) 75%)", backgroundSize: "200% 100%", animation: "sklist 1.5s ease infinite" }} />
              <div className="h-2 rounded" style={{ width: "40%", background: "linear-gradient(90deg, var(--muted) 25%, var(--secondary) 50%, var(--muted) 75%)", backgroundSize: "200% 100%", animation: "sklist 1.5s ease infinite" }} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}