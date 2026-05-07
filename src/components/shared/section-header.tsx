"use client"

import { motion, HTMLMotionProps } from "motion/react"
import { cn } from "@/lib/utils"

interface SectionHeaderProps extends HTMLMotionProps<"div"> {
  title: string
  subtitle?: string
  align?: "left" | "center" | "right"
  titleClassName?: string
  subtitleClassName?: string
}

const SectionHeader = ({
  title,
  subtitle,
  align = "left",
  className,
  titleClassName,
  subtitleClassName,
  ...props
}: SectionHeaderProps) => {
  const alignment = {
    left: "text-left items-start",
    center: "text-center items-center",
    right: "text-right items-end",
  }

  return (
    <motion.div
      className={cn("flex flex-col mb-12", alignment[align], className)}
      {...props}
    >
      <h2
        className={cn(
          "mb-4 font-sans text-4xl font-extrabold tracking-tight text-foreground md:text-5xl lg:text-6xl",
          titleClassName
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "max-w-2xl text-muted-foreground md:text-lg leading-relaxed",
            subtitleClassName
          )}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}

export { SectionHeader }
