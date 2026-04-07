"use client";

import { m, useReducedMotion } from "framer-motion";
import {
  fadeIn,
  fadeUp,
  reducedMotionVariant,
  scaleIn,
  slideIn,
  viewport as defaultViewport,
} from "@/lib/animations/variants";

const variantFactories = {
  fade: ({ delay = 0 }) => fadeIn(delay),
  fadeUp: ({ delay = 0, distance = 28 }) => fadeUp(distance, delay),
  scale: ({ delay = 0 }) => scaleIn(delay),
  slideLeft: ({ delay = 0, distance = 36 }) => slideIn("left", distance, delay),
  slideRight: ({ delay = 0, distance = 36 }) =>
    slideIn("right", distance, delay),
};

export default function Reveal({
  children,
  className,
  delay = 0,
  distance = 28,
  variant = "fadeUp",
  viewport = defaultViewport,
}) {
  const prefersReducedMotion = useReducedMotion();
  const getVariant = variantFactories[variant] ?? variantFactories.fadeUp;
  const variants = prefersReducedMotion
    ? reducedMotionVariant
    : getVariant({ delay, distance });

  return (
    <m.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      variants={variants}
    >
      {children}
    </m.div>
  );
}
