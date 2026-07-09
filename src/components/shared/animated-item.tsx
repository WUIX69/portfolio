"use client"

import { m, type Variants, type HTMLMotionProps } from "motion/react"

interface AnimatedItemProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode
  variants?: Variants
}

const AnimatedItem = ({ children, variants, ...props }: AnimatedItemProps) => {
  return (
    <m.div variants={variants} {...props}>
      {children}
    </m.div>
  )
}

export { AnimatedItem }
