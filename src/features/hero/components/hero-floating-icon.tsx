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
        y: [0, -25, 0],
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
        "absolute z-20 m-0 flex size-12 items-center justify-center rounded-2xl p-0",
        "cursor-pointer",
        "transition-all duration-300 hover:scale-115",
        techIcon.position
      )}
      aria-label={techIcon.label}
      title={techIcon.label}
      role="img"
    >
      <IconComponent size={27} color={`#${techIcon.brandHex}`} />
    </motion.div>
  )
}

export { HeroFloatingIcon }
