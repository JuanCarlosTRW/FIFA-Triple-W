"use client";

import { cn } from "@/lib/utils";

type SoftGlowBackgroundProps = {
  color?: string;
  opacity?: number;
  blendMode?: React.CSSProperties["mixBlendMode"];
  className?: string;
};

export function SoftGlowBackground({
  color = "#FF7112",
  opacity = 0.3,
  blendMode = "screen",
  className,
}: SoftGlowBackgroundProps) {
  return (
    <div
      aria-hidden
      className={cn("absolute inset-0 z-0 pointer-events-none", className)}
      style={{
        backgroundImage: `radial-gradient(circle at center, ${color}, transparent)`,
        opacity,
        mixBlendMode: blendMode,
      }}
    />
  );
}

export default SoftGlowBackground;
