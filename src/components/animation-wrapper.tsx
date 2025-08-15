"use client"

import * as React from 'react';
import { motion, useInView, Variants } from 'framer-motion';

type AnimationWrapperProps = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
};

const variants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
      delay,
      willChange: 'opacity, transform' as const,
    },
  }),
};

export default function AnimationWrapper({ children, delay = 0, className = '' }: AnimationWrapperProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '0px 0px -50px 0px' });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={variants}
      custom={delay}
      className={className}
    >
      {children}
    </motion.div>
  );
}
