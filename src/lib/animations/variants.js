export const EASE_OUT = [0.22, 1, 0.36, 1];

export const viewport = {
  once: true,
  amount: 0.2,
};

export function fadeUp(distance = 28, delay = 0) {
  return {
    hidden: {
      opacity: 0,
      y: distance,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.55,
        delay,
        ease: EASE_OUT,
      },
    },
  };
}

export function fadeIn(delay = 0) {
  return {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        duration: 0.45,
        delay,
        ease: EASE_OUT,
      },
    },
  };
}

export function slideIn(direction = "up", distance = 36, delay = 0) {
  const axis =
    direction === "left" || direction === "right"
      ? { x: direction === "left" ? distance : -distance, y: 0 }
      : { x: 0, y: direction === "up" ? distance : -distance };

  return {
    hidden: {
      opacity: 0,
      ...axis,
    },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.58,
        delay,
        ease: EASE_OUT,
      },
    },
  };
}

export function scaleIn(delay = 0) {
  return {
    hidden: {
      opacity: 0,
      scale: 0.94,
    },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        delay,
        ease: EASE_OUT,
      },
    },
  };
}

export function staggerContainer(staggerChildren = 0.14, delayChildren = 0.06) {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren,
        delayChildren,
      },
    },
  };
}

export const hoverLift = {
  y: -8,
  transition: {
    duration: 0.22,
    ease: EASE_OUT,
  },
};

export const hoverGrow = {
  scale: 1.03,
  transition: {
    duration: 0.22,
    ease: EASE_OUT,
  },
};

export const tapPress = {
  scale: 0.985,
  transition: {
    duration: 0.16,
    ease: EASE_OUT,
  },
};

export const reducedMotionVariant = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.01,
    },
  },
};

export const pageTransition = {
  hidden: {
    opacity: 0,
    y: 18,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: EASE_OUT,
    },
  },
  exit: {
    opacity: 0,
    y: -18,
    transition: {
      duration: 0.35,
      ease: EASE_OUT,
    },
  },
};
