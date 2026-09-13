"use client";
import { cn } from "@/lib/utils";

interface SpinnerLoaderProps { size?: number; color?: string; className?: string; }

export function SpinnerLoader({ size = 32, color = "#8b5cf6", className }: SpinnerLoaderProps) {
  return <div className={cn("animate-spin rounded-full", className)} style={{ width: size, height: size, border: `3px solid ${color}20`, borderTopColor: color }} />;
}