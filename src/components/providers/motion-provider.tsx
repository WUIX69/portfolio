"use client"

import { MotionConfig } from "motion/react"

export const MotionProvider = ({ children }: { children: React.ReactNode }) => {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>
}
