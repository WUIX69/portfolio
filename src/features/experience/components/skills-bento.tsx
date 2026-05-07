"use client"

import { Award, Brain, type LucideIcon } from "lucide-react"
import { motion, HTMLMotionProps, Variants } from "motion/react"
import { type SkillCategory } from "@/types/portfolio"
import { cn } from "@/lib/utils"
import { IconWrapper } from "@/components/shared/icon-wrapper"

const ICON_MAP: Record<string, LucideIcon> = {
  military_tech: Award,
  psychology: Brain,
}

interface SkillCardProps extends HTMLMotionProps<"section"> {
  category: SkillCategory
}

const SkillCard = ({ category, className, ...props }: SkillCardProps) => {
  const Icon = ICON_MAP[category.iconName] || Award

  return (
    <motion.section
      className={cn(
        "flex h-full flex-col rounded-xl border border-border bg-card p-8 shadow-sm",
        className
      )}
      {...props}
    >
      <div className="mb-6 flex items-center gap-3">
        <IconWrapper
          icon={Icon}
          variant={category.variant === "primary" ? "primary" : "secondary"}
          size="md"
        />
        <h2 className="font-sans text-xl font-semibold text-foreground">
          {category.title}
        </h2>
      </div>
      <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
        {category.description}
      </p>
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <span
            key={skill}
            className={cn(
              "rounded-full px-4 py-2 font-mono text-xs font-medium",
              category.variant === "primary"
                ? "bg-accent text-primary"
                : "border border-border bg-muted text-muted-foreground"
            )}
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.section>
  )
}

interface SkillsBentoProps {
  categories: SkillCategory[]
  variants?: Variants
}

const SkillsBento = ({ categories, variants }: SkillsBentoProps) => {
  return (
    <div className="flex flex-col gap-6 h-full">
      {categories.map((category) => (
        <SkillCard key={category.title} category={category} variants={variants} />
      ))}
    </div>
  )
}

export { SkillsBento }

