"use client";
import { AnimatedBadge } from "./component";
export function Demo() {
  return (
    <div className="flex flex-wrap gap-3">
      <AnimatedBadge>Default</AnimatedBadge>
      <AnimatedBadge variant="success">Success</AnimatedBadge>
      <AnimatedBadge variant="warning">Warning</AnimatedBadge>
      <AnimatedBadge variant="error">Error</AnimatedBadge>
    </div>
  );
}
