"use client";

import { cn } from "@/lib/utils";

interface ShimmerButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export function ShimmerButton({ children, className, ...props }: ShimmerButtonProps) {
  return (
    <button
      className={cn(
        "relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-semibold text-white rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 transition-all duration-300 hover:scale-105 active:scale-95 group",
        className
      )}
      {...props}
    >
      {/* Shimmer effect */}
      <span className="absolute inset-0 w-full h-full">
        <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
      </span>
      <span className="relative z-10">{children}</span>
    </button>
  );
}
