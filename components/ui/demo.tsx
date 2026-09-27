"use client";

import Velaris from "@/components/ui/velaris";

export default function VelarisDemo() {
  return (
    <Velaris height="500px" className="rounded-2xl shadow-xl">
      <div className="flex h-full w-full flex-col items-center justify-center gap-4 px-6 text-center">
        <span className="rounded-full border border-purple-400/30 bg-purple-500/10 px-4 py-1.5 text-xs font-semibold text-purple-200 backdrop-blur-md shadow-sm">
          Powered by WebGL
        </span>
        <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-white sm:text-6xl drop-shadow-md">
          Living gradients in motion
        </h1>
        <p className="max-w-md text-sm text-purple-100/80 sm:text-base">
          An animated simplex-noise background with radiant purple color blending, vignette glow and film grain.
        </p>
      </div>
    </Velaris>
  );
}
