"use client";
import { cn } from "@/lib/utils";

const styles = { google: "bg-white text-gray-800 border border-gray-300 hover:bg-gray-50", github: "bg-[#24292f] text-white hover:bg-[#2f363d]", twitter: "bg-[#1da1f2] text-white hover:bg-[#0d8bd9]" };
const icons = { google: "G", github: "\uD83D\uDC19", twitter: "\uD83D\uDC26" };

interface SocialButtonProps { provider: keyof typeof styles; children: React.ReactNode; className?: string; }

export function SocialButton({ provider, children, className }: SocialButtonProps) {
  return (
    <button className={cn("inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 active:scale-95", styles[provider], className)}>
      <span className="text-base">{icons[provider]}</span>{children}
    </button>
  );
}