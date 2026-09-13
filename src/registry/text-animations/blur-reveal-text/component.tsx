"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface BlurRevealTextProps {
  text: string;
  className?: string;
}

export function BlurRevealText({ text, className }: BlurRevealTextProps) {
  const letters = text.split("");

  return (
    <span className={cn("inline-flex text-3xl font-extrabold", className)}>
      {letters.map((letter, i) => (
        <motion.span
          key={`${letter}-${i}`}
          initial={{ filter: "blur(12px)", opacity: 0, y: 10 }}
          animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: i * 0.06,
            ease: "easeOut",
          }}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </span>
  );
}
