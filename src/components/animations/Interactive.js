"use client";

import { m, useReducedMotion } from "framer-motion";
import { hoverGrow, hoverLift, tapPress } from "@/lib/animations/variants";

export default function Interactive({
  children,
  className,
  hover = "lift",
  tap = true,
}) {
  const prefersReducedMotion = useReducedMotion();

  const hoverAnimation =
    prefersReducedMotion || hover === "none"
      ? undefined
      : hover === "grow"
        ? hoverGrow
        : hoverLift;

  return (
    <m.div
      className={className}
      whileHover={hoverAnimation}
      whileTap={prefersReducedMotion || !tap ? undefined : tapPress}
    >
      {children}
    </m.div>
  );
}
