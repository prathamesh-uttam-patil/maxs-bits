"use client";
import { cn } from "@/lib/utils";

interface SlideDrawerProps { isOpen: boolean; onClose: () => void; children: React.ReactNode; className?: string; }

export function SlideDrawer({ isOpen, onClose, children, className }: SlideDrawerProps) {
  return (
    <>
      {isOpen && <div className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity" onClick={onClose} />}
      <div className={cn("fixed top-0 right-0 z-50 h-full w-80 bg-[var(--card)] border-l border-[var(--border)] shadow-2xl p-6 transition-transform duration-300", isOpen ? "translate-x-0" : "translate-x-full", className)}>
        <button onClick={onClose} className="absolute top-4 right-4 w-6 h-6 rounded-md flex items-center justify-center text-[var(--muted-foreground)] hover:bg-[var(--secondary)]">\u2715</button>
        {children}
      </div>
    </>
  );
}