'use client';

import React from 'react';
import GradientWaves from './component';

export function Demo() {
  return (
    <div className="w-full h-72 md:h-96 relative rounded-2xl overflow-hidden border border-[var(--border)] shadow-2xl bg-black">
      <GradientWaves
        horizonColor="#5227FF"
        waveColor="#FF9FFC"
        crestColor="#FFFFFF"
        speed={0.4}
        amplitude={2.5}
        waveScale={0.6}
        waveRatio={0.9}
        swell={35}
        turbulence={20}
        tilt={1.11}
        zoom={1.0}
        height={5.5}
        fogDepth={15}
        detail="medium"
        brightness={1.0}
        opacity={1.0}
        mouseInteraction={true}
        parallaxStrength={0.5}
        grain={true}
        grainIntensity={0.05}
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none p-6 text-center">
        <span className="text-xs uppercase tracking-widest px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-white font-mono border border-white/20 mb-3 shadow-lg">
          WebGL Sine-Plasma
        </span>
        <h3 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight drop-shadow-md">
          Gradient Waves
        </h3>
        <p className="text-sm text-white/80 max-w-sm mt-1">
          Interactive camera parallax with raymarched volumetric wave fields
        </p>
      </div>
    </div>
  );
}
