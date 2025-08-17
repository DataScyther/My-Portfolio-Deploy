"use client"

import * as React from 'react';
import { motion } from 'framer-motion';
import type { HTMLMotionProps, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

type MotionComponents = typeof motion;
type MotionTag = keyof MotionComponents;

interface AnimateInViewProps extends Omit<HTMLMotionProps<'div'>, 'ref'> {
  children?: React.ReactNode;
  as?: MotionTag | string;
  once?: boolean;
  amount?: number | 'some' | 'all';
  className?: string;
}

const variants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export function AnimateInView({
  children,
  as: Tag = 'div',
  once = true,
  amount = 0.2,
  className,
  ...props
}: AnimateInViewProps) {
  const [ref, inView] = useInView({
    triggerOnce: once,
    threshold: amount === 'all' ? 1 : amount === 'some' ? 0.5 : amount,
    rootMargin: '0px 0px -50px 0px',
  });

  // Use a div wrapper with motion.div for consistent behavior
  const MotionDiv = motion.div;
  
  return (
    <MotionDiv
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={variants}
      {...props}
    >
      {children}
    </MotionDiv>
  );
}
