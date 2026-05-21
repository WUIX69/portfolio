"use client"

import { motion, type Variants, type HTMLMotionProps } from "motion/react"

interface AnimatedItemProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode
  variants?: Variants
}

const AnimatedItem = ({ children, variants, ...props }: AnimatedItemProps) => {
  return (
    <motion.div variants={variants} {...props}>
      {children}
    </motion.div>
  )
}

export { AnimatedItem }
