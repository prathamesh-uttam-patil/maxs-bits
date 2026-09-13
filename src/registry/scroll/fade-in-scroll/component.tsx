"use client";
import { useRef, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const offsets = { up: "translateY(30px)", down: "translateY(-30px)", left: "translateX(30px)", right: "translateX(-30px)" };

interface FadeInScrollProps { children: React.ReactNode; direction?: keyof typeof offsets; className?: string; }

export function FadeInScroll({ children, direction = "up", className }: FadeInScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold: 0.15 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn("transition-all duration-700 ease-out", className)}
      style={{ opacity: visible ? 1 : 0, transform: visible ? "none" : offsets[direction] }}
    >{children}</div>
  );
}
