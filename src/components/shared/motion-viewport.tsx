"use client"

import { motion, HTMLMotionProps, Variants } from "motion/react"

interface MotionViewportProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode
  variants?: Variants
  initial?: string
  whileInView?: string
  viewport?: {
    once?: boolean
    amount?: number | "some" | "all"
    margin?: string
  }
  staggerChildren?: number
  delayChildren?: number
}

const MotionViewport = ({
  children,
  variants,
  initial = "hidden",
  whileInView = "visible",
  viewport = { once: true, amount: 0.2 },
  staggerChildren = 0.1,
  delayChildren = 0,
  ...props
}: MotionViewportProps) => {
  const defaultVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren,
        delayChildren,
      },
    },
  }

  return (
    <motion.div
      initial={initial}
      whileInView={whileInView}
      viewport={viewport}
      variants={variants || defaultVariants}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export { MotionViewport }
