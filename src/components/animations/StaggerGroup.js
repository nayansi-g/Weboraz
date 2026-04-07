"use client";

import { m, useReducedMotion } from "framer-motion";
import {
  reducedMotionVariant,
  staggerContainer,
  viewport as defaultViewport,
} from "@/lib/animations/variants";

export default function StaggerGroup({
  children,
  className,
  delayChildren = 0.06,
  staggerChildren = 0.14,
  viewport = defaultViewport,
}) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <m.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      variants={
        prefersReducedMotion
          ? reducedMotionVariant
          : staggerContainer(staggerChildren, delayChildren)
      }
    >
      {children}
    </m.div>
  );
}
