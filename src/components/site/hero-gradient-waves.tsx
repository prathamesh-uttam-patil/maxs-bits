'use client';

import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import GradientWaves from '@/components/GradientWaves';

export function HeroGradientWaves() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Default to dark until mounted to prevent hydration mismatch
  const isDark = !mounted || resolvedTheme === 'dark';

  return (
    <div className="absolute inset-0 -z-10 w-full h-full overflow-hidden">
      {/* Dark Theme GradientWaves */}
      {isDark ? (
        <GradientWaves
          horizonColor="#2e0854"
          waveColor="#9333ea"
          crestColor="#38bdf8"
          speed={0.45}
          amplitude={2.8}
          waveScale={0.65}
          waveRatio={0.85}
          swell={28}
          turbulence={20}
          tilt={0.55}
          zoom={1.05}
          height={3.8}
          fogDepth={36}
          detail="medium"
          brightness={1.35}
          opacity={1.0}
          mouseInteraction={true}
          parallaxStrength={0.45}
          grain={true}
          grainIntensity={0.03}
        />
      ) : (
        /* Light Theme GradientWaves: Clean, luminous, no dirty grain, crisp pastel gradients */
        <GradientWaves
          horizonColor="#f3e8ff"
          waveColor="#7c3aed"
          crestColor="#ec4899"
          speed={0.38}
          amplitude={2.4}
          waveScale={0.65}
          waveRatio={0.85}
          swell={26}
          turbulence={18}
          tilt={0.55}
          zoom={1.05}
          height={3.8}
          fogDepth={36}
          detail="medium"
          brightness={1.12}
          opacity={0.95}
          mouseInteraction={true}
          parallaxStrength={0.45}
          grain={false}
          grainIntensity={0.0}
        />
      )}

      {/* Smooth gradient blend into the page background at bottom and top */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--background)]/30 via-transparent to-[var(--background)] pointer-events-none" />
      {/* Radial vignette to softly focus center content */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,var(--background)_100%)] opacity-70 pointer-events-none" />
    </div>
  );
}

export default HeroGradientWaves;
