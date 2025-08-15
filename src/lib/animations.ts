import { Variants } from "framer-motion";

export const slideInUp: Variants = {
  hidden: { 
    y: 40, 
    opacity: 0,
    willChange: 'transform, opacity',
  },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: {
      type: 'spring',
      damping: 20,
      stiffness: 200,
      mass: 0.5,
      velocity: 1,
      restDelta: 0.001,
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    }
  }
};

export const container: Variants = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: { 
      staggerChildren: 0.08, 
      delayChildren: 0.04 * i,
    },
  }),
};

export const item: Variants = {
  hidden: { 
    y: 40, 
    opacity: 0,
    willChange: 'transform, opacity',
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      damping: 20,
      stiffness: 200,
      mass: 0.5,
      velocity: 1,
      restDelta: 0.001,
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};
