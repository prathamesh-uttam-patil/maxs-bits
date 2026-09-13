"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";

const variants = { info: "bg-blue-500/10 text-blue-600 border-blue-500/20", success: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20", warning: "bg-amber-500/10 text-amber-600 border-amber-500/20", error: "bg-red-500/10 text-red-600 border-red-500/20" };
const icons = { info: "\u2139\uFE0F", success: "\u2705", warning: "\u26A0\uFE0F", error: "\u274C" };

export function BannerAlert({ message, variant = "info", className }: { message: string; variant?: keyof typeof variants; className?: string }) {
  const [show, setShow] = useState(true);
  if (!show) return null;
  return (
    <div className={cn("flex items-center gap-3 px-4 py-2.5 rounded-lg border text-sm", variants[variant], className)}>
      <span>{icons[variant]}</span><span className="flex-1">{message}</span>
      <button onClick={() => setShow(false)} className="opacity-50 hover:opacity-100 transition-opacity">\u2715</button>
    </div>
  );
}