"use client"

import * as React from "react"
import { motion, useInView, type HTMLMotionProps } from "framer-motion"

type MotionComponentType = keyof JSX.IntrinsicElements

interface AnimateInViewProps extends Omit<HTMLMotionProps<"div">, 'onAnimationStart' | 'onDragStart' | 'onDragEnd' | 'onDrag' | 'ref'> {
  as?: MotionComponentType
  children: React.ReactNode
  delay?: number
  once?: boolean
  amount?: number | "some" | "all"
  className?: string
}

export function AnimateInView({
  as: Tag = 'div',
  children,
  delay = 0,
  once = true,
  amount = 0.1,
  className,
  ...props
}: AnimateInViewProps) {
  const ref = React.useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, {
    once,
    amount,
    margin: '0px 0px -50px 0px',
  })

  const MotionTag = motion[Tag] || motion.div

  return (
    <MotionTag
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1],
            delay,
          },
        },
      }}
      {...props}
    >
      {children}
    </MotionTag>
  )
}
