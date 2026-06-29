"use client"

import * as React from "react"
import { motion, HTMLMotionProps } from "motion/react"
import { cn } from "@/lib/utils"

interface GlimmerButtonProps extends HTMLMotionProps<"a"> {
  children: React.ReactNode
}

export const GlimmerButton = ({
  children,
  className,
  ...props
}: GlimmerButtonProps) => {
  return (
    <motion.a
      whileHover="hover"
      whileTap="press"
      initial="default"
      className={cn(
        "relative inline-flex items-center justify-center overflow-visible rounded-full px-6 py-2 text-sm font-bold transition-all duration-300",
        // Light mode: Purple background, White text
        // Dark mode: Black background, Purple text
        "bg-primary text-primary-foreground shadow-lg dark:bg-black dark:text-primary",
        className
      )}
      {...props}
    >
      {/* Background Glow Layers (Behind) */}

      {/* Subtle atmospheric glow using theme primary color */}
      <motion.div
        variants={{
          default: { scale: 1, opacity: 0.15 },
          hover: { scale: 1.1, opacity: 0.25 },
          press: { scale: 1.2, opacity: 0.35 },
        }}
        className="absolute inset-0 -z-10 rounded-full bg-primary blur-[15px]"
      />

      {/* Border Glow (Animated Conic using Theme Colors) */}
      <div className="absolute inset-[-1.5px] -z-10 overflow-hidden rounded-full p-[1.5px]">
        <motion.div
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,var(--primary),var(--accent),var(--primary))]"
        />
      </div>

      {/* Content Overlay */}
      <span className="relative z-10 flex items-center gap-2 drop-shadow-sm">
        {children}
      </span>

      {/* Animated Shine Effect - Theme sensitive opacity */}
      <motion.div
        animate={{
          x: ["-100%", "200%"],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
          repeatDelay: 1.5,
        }}
        className="pointer-events-none absolute inset-0 z-30 w-1/2 skew-x-[-25deg] bg-gradient-to-r from-transparent via-white/20 to-transparent dark:via-primary/10"
      />
    </motion.a>
  )
}
