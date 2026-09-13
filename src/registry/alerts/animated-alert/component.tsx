"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";

const variants = { info: "bg-blue-500/10 border-blue-500/30 text-blue-500", success: "bg-emerald-500/10 border-emerald-500/30 text-emerald-500", warning: "bg-amber-500/10 border-amber-500/30 text-amber-500", error: "bg-red-500/10 border-red-500/30 text-red-500" };
const icons = { info: "\u2139\uFE0F", success: "\u2705", warning: "\u26A0\uFE0F", error: "\u274C" };

interface AnimatedAlertProps { children: React.ReactNode; variant?: keyof typeof variants; className?: string; }

export function AnimatedAlert({ children, variant = "info", className }: AnimatedAlertProps) {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;
  return (
    <>
      <style>{`@keyframes alert-in { from { opacity:0; transform:translateY(-10px); } to { opacity:1; transform:translateY(0); } }`}</style>
      <div className={cn("flex items-start gap-3 rounded-lg border p-4 text-sm", variants[variant], className)} style={{ animation: "alert-in 0.3s ease-out" }}>
        <span>{icons[variant]}</span>
        <div className="flex-1">{children}</div>
        <button onClick={() => setVisible(false)} className="text-current opacity-50 hover:opacity-100 transition-opacity">\u2715</button>
      </div>
    </>
  );
}