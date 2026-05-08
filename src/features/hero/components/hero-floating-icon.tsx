"use client"

import { type ComponentType } from "react"
import { motion } from "motion/react"
import * as SimpleIcons from "@icons-pack/react-simple-icons"
import { cn } from "@/lib/utils"
import { type HeroTechIcon } from "@/types/portfolio"

interface HeroFloatingIconProps {
  techIcon: HeroTechIcon
}

const HeroFloatingIcon = ({ techIcon }: HeroFloatingIconProps) => {
  const iconComponentName = `Si${techIcon.slug}` as keyof typeof SimpleIcons
  const IconComponent = SimpleIcons[iconComponentName] as
    | ComponentType<{
        size: number
        color: string
      }>
    | undefined

  if (!IconComponent) return null

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: 1,
        scale: 1,
        y: [0, -8, 0],
      }}
      transition={{
        opacity: { duration: 0.2, delay: techIcon.floatDelay },
        scale: {
          type: "spring",
          stiffness: 400,
          damping: 20,
          delay: techIcon.floatDelay,
        },
        y: {
          duration: techIcon.floatDuration,
          repeat: Infinity,
          ease: "easeInOut",
          delay: techIcon.floatDelay,
        },
      }}
      className={cn(
        "absolute z-20 flex size-12 items-center justify-center rounded-2xl",
        "border border-border/50 bg-card/80 shadow-lg backdrop-blur-sm",
        "transition-all duration-300 hover:scale-110 hover:border-primary/40 hover:bg-card",
        techIcon.position
      )}
      aria-label={techIcon.label}
      title={techIcon.label}
      role="img"
    >
      <IconComponent size={24} color={`#${techIcon.brandHex}`} />
    </motion.div>
  )
}

export { HeroFloatingIcon }
