"use client";

import Velaris from "./component";

export function Demo() {
  return (
    <Velaris height="380px" className="rounded-xl w-full">
      <div className="flex h-full w-full flex-col items-center justify-center gap-3 px-6 text-center">
        <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur">
          Powered by WebGL
        </span>
        <h3 className="max-w-lg text-2xl font-bold tracking-tight text-white sm:text-3xl">
          Living gradients in motion
        </h3>
        <p className="max-w-sm text-xs text-white/70 sm:text-sm">
          Simplex-noise background with color blending, vignette glow and film grain.
        </p>
      </div>
    </Velaris>
  );
}
