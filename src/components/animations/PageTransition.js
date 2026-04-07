"use client";

import { AnimatePresence, m, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";
import { pageTransition } from "@/lib/animations/variants";

export default function PageTransition({ children }) {
  const pathname = usePathname();
  const prefersReducedMotion = useReducedMotion();

  return (
    <AnimatePresence mode="wait">
      <m.div
        key={pathname}
        initial="hidden"
        animate="show"
        exit="exit"
        variants={
          prefersReducedMotion
            ? {
                hidden: { opacity: 1 },
                show: { opacity: 1 },
                exit: { opacity: 1 },
              }
            : pageTransition
        }
      >
        {children}
      </m.div>
    </AnimatePresence>
  );
}
