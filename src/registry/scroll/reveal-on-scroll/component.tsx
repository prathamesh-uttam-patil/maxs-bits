"use client";
import { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const transforms = { up: "translateY(30px)", left: "translateX(-30px)", right: "translateX(30px)" };

export function RevealOnScroll({ children, direction = "up", className }: { children: React.ReactNode; direction?: keyof typeof transforms; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold: 0.1 });
    obs.observe(el); return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} className={cn("transition-all duration-700", className)}
      style={{ opacity: visible ? 1 : 0, transform: visible ? "none" : transforms[direction] }}>{children}</div>
  );
}