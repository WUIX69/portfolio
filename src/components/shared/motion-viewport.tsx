"use client"

import { m, HTMLMotionProps, Variants } from "motion/react"

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
  viewport = { once: true, amount: "some", margin: "-10%" },
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
    <m.div
      initial={initial}
      whileInView={whileInView}
      viewport={viewport}
      variants={variants || defaultVariants}
      {...props}
    >
      {children}
    </m.div>
  )
}

export { MotionViewport }
