"use client";
import { InfiniteMarquee } from "./component";
export function Demo() {
  return (
    <div className="w-64 overflow-hidden">
      <InfiniteMarquee speed={15}>
        <span className="text-lg font-bold text-[var(--primary)]">React</span>
        <span className="text-lg font-bold">Next.js</span>
        <span className="text-lg font-bold text-[var(--accent)]">Tailwind</span>
        <span className="text-lg font-bold">TypeScript</span>
      </InfiniteMarquee>
    </div>
  );
}