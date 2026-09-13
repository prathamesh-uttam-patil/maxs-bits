"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function LikeButton({ onLike, className }: { onLike?: () => void; className?: string }) {
  const [liked, setLiked] = useState(false);
  const [burst, setBurst] = useState(false);
  const toggle = () => { setLiked(!liked); if (!liked) { setBurst(true); onLike?.(); setTimeout(() => setBurst(false), 600); } };
  return (
    <>
      <style>{`@keyframes like-pop { 0% { transform: scale(1); } 30% { transform: scale(1.3); } 60% { transform: scale(0.9); } 100% { transform: scale(1); } } @keyframes like-burst { 0% { opacity:1; transform: scale(0); } 100% { opacity:0; transform: scale(2.5); } }`}</style>
      <button onClick={toggle} className={cn("relative w-10 h-10 flex items-center justify-center rounded-full transition-colors", liked ? "text-red-500" : "text-[var(--muted-foreground)] hover:text-red-400", className)}>
        {burst && <span className="absolute inset-0 rounded-full border-2 border-red-400" style={{ animation: "like-burst 0.6s ease-out forwards" }} />}
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill={liked ? "currentColor" : "none"} stroke="currentColor" strokeWidth={2}
          style={liked ? { animation: "like-pop 0.4s ease" } : {}}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
        </svg>
      </button>
    </>
  );
}