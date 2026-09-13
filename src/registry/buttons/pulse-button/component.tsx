"use client";

import { cn } from "@/lib/utils";

interface PulseButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  pulseColor?: string;
}

export function PulseButton({
  children,
  className,
  pulseColor = "#8b5cf6",
  ...props
}: PulseButtonProps) {
  return (
    <div className="relative inline-flex">
      {/* Pulse rings */}
      <span
        className="absolute inset-0 rounded-xl animate-ping opacity-20"
        style={{ backgroundColor: pulseColor, animationDuration: "2s" }}
      />
      <span
        className="absolute inset-0 rounded-xl animate-ping opacity-10"
        style={{ backgroundColor: pulseColor, animationDuration: "2s", animationDelay: "0.5s" }}
      />
      <button
        className={cn(
          "relative inline-flex items-center justify-center px-8 py-3 font-semibold text-white rounded-xl transition-all duration-300 hover:scale-105 active:scale-95",
          className
        )}
        style={{ backgroundColor: pulseColor }}
        {...props}
      >
        {children}
      </button>
    </div>
  );
}
