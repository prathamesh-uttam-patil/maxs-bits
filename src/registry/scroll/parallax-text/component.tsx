"use client";
import { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface ParallaxTextProps { children: React.ReactNode; speed?: number; className?: string; }

export function ParallaxText({ children, speed = 0.5, className }: ParallaxTextProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    const handleScroll = () => { if (ref.current) { const rect = ref.current.getBoundingClientRect(); setOffset(rect.top * speed * -0.1); } };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed]);
  return <div ref={ref} className={cn("transition-transform", className)} style={{ transform: `translateY(${offset}px)` }}>{children}</div>;
}