"use client";

import { cn } from "@/lib/utils";

interface GradientButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export function GradientButton({ children, className, ...props }: GradientButtonProps) {
  return (
    <button
      className={cn(
        "relative inline-flex items-center justify-center px-8 py-3 font-semibold text-white rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95",
        className
      )}
      style={{
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #4facfe 75%, #667eea 100%)",
        backgroundSize: "300% 300%",
        animation: "gradient-shift 4s ease infinite",
      }}
      {...props}
    >
      <style>{`
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
      <span className="relative z-10">{children}</span>
    </button>
  );
}
