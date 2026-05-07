"use client"

import { GraduationCap } from "lucide-react"
import { motion, HTMLMotionProps } from "motion/react"

import { type EducationEntry } from "@/types/portfolio"
import { cn } from "@/lib/utils"

interface EducationCardProps extends HTMLMotionProps<"section"> {
  education: EducationEntry
}

const EducationCard = ({
  education,
  className,
  ...props
}: EducationCardProps) => {
  return (
    <motion.section
      className={cn(
        "rounded-xl border border-border bg-card p-8 shadow-sm",
        className
      )}
      {...props}
    >
      <div className="mb-6 flex items-center gap-3">
        <div className="flex size-10 items-center justify-center rounded-lg bg-secondary text-secondary-foreground">
          <GraduationCap className="size-5" aria-hidden="true" />
        </div>
        <h2 className="font-sans text-xl font-semibold text-foreground">
          Education
        </h2>
      </div>
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
        <div>
          <h3 className="mb-1 font-sans text-xl font-semibold text-foreground">
            {education.school}
          </h3>
          <p className="text-sm text-muted-foreground">{education.degree}</p>
        </div>
        <span className="mt-2 w-fit rounded-full bg-accent px-3 py-1 font-mono text-xs font-medium text-primary sm:mt-0">
          {education.period}
        </span>
      </div>
    </motion.section>
  )
}

export { EducationCard }

