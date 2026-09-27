"use client";

import Velaris from "./component";

export function Demo() {
  return (
    <Velaris height="380px" className="rounded-xl w-full">
      <div className="flex h-full w-full flex-col items-center justify-center gap-3 px-6 text-center">
        <span className="rounded-full border border-purple-400/30 bg-purple-500/10 px-3 py-1 text-xs font-semibold text-purple-200 backdrop-blur-md">
          Powered by WebGL
        </span>
        <h3 className="max-w-lg text-2xl font-bold tracking-tight text-white sm:text-3xl drop-shadow-sm">
          Living gradients in motion
        </h3>
        <p className="max-w-sm text-xs text-purple-100/80 sm:text-sm">
          Simplex-noise background with radiant purple blending, vignette glow and film grain.
        </p>
      </div>
    </Velaris>
  );
}
