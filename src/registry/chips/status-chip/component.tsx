"use client";
import { cn } from "@/lib/utils";

const styles = { success: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20", error: "bg-red-500/10 text-red-600 border-red-500/20", warning: "bg-amber-500/10 text-amber-600 border-amber-500/20", info: "bg-blue-500/10 text-blue-600 border-blue-500/20" };
const icons = { success: "\u2713", error: "\u2717", warning: "!", info: "i" };

export function StatusChip({ status, label, className }: { status: keyof typeof styles; label: string; className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-semibold", styles[status], className)}>
      <span className="w-3.5 h-3.5 rounded-full bg-current/20 flex items-center justify-center text-[9px] font-bold">{icons[status]}</span>{label}
    </span>
  );
}