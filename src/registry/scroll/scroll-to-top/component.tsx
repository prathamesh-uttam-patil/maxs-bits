"use client";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export function ScrollToTop({ threshold = 300, className }: { threshold?: number; className?: string }) {
  const [show, setShow] = useState(false);
  useEffect(() => { const h = () => setShow(window.scrollY > threshold); window.addEventListener("scroll", h); return () => window.removeEventListener("scroll", h); }, [threshold]);
  return (
    <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={cn("fixed bottom-6 right-6 w-10 h-10 rounded-full bg-[var(--primary)] text-[var(--primary-foreground)] shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 z-40",
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none", className)}>
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" /></svg>
    </button>
  );
}