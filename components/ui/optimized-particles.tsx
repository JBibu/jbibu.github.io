"use client";

import { memo, useMemo } from "react";
import Particles from "@/components/particles";
import type { ParticlesConfig } from "@/lib/types";

// Predefined particle configurations to avoid recreating objects
export const PARTICLE_CONFIGS = {
  hero: {
    quantity: 150,
    staticity: 30,
    color: "#9ca3af",
    size: 0.8,
  },
  about: {
    quantity: 100,
    staticity: 50,
    color: "#9ca3af",
    size: 0.4,
  },
  projects: {
    quantity: 80,
    staticity: 70,
    color: "#9ca3af",
    size: 0.5,
  },
  skills: {
    quantity: 120,
    staticity: 40,
    color: "#9ca3af",
    size: 0.3,
  },
  contact: {
    quantity: 90,
    staticity: 60,
    color: "#9ca3af",
    size: 0.4,
  },
} as const;

interface OptimizedParticlesProps extends ParticlesConfig {
  variant: keyof typeof PARTICLE_CONFIGS;
  opacity?: string;
}

export const OptimizedParticles = memo<OptimizedParticlesProps>(({ 
  variant, 
  opacity = "opacity-30",
  className = "",
  ...overrides 
}) => {
  const config = PARTICLE_CONFIGS[variant];
  const finalClassName = useMemo(() => 
    `absolute inset-0 -z-10 ${opacity} ${className}`.trim(),
    [opacity, className]
  );

  return (
    <Particles
      className={finalClassName}
      {...config}
      {...overrides}
    />
  );
});

OptimizedParticles.displayName = "OptimizedParticles";