"use client";
import { cn } from "@/lib/utils";

interface ScaleModalProps { isOpen: boolean; onClose: () => void; children: React.ReactNode; className?: string; }

export function ScaleModal({ isOpen, onClose, children, className }: ScaleModalProps) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} style={{ animation: "fadeIn 0.2s ease" }} />
      <style>{`@keyframes fadeIn { from { opacity:0; } to { opacity:1; } } @keyframes scaleIn { from { opacity:0; transform:scale(0.9); } to { opacity:1; transform:scale(1); } }`}</style>
      <div className={cn("relative z-10 rounded-xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-2xl max-w-sm w-full mx-4", className)} style={{ animation: "scaleIn 0.25s cubic-bezier(0.34,1.56,0.64,1)" }}>
        <button onClick={onClose} className="absolute top-3 right-3 w-6 h-6 rounded-md flex items-center justify-center text-[var(--muted-foreground)] hover:bg-[var(--secondary)] transition-colors text-sm">\u2715</button>
        {children}
      </div>
    </div>
  );
}