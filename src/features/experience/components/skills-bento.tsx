import { Award, Brain, type LucideIcon } from "lucide-react"

import { type SkillCategory } from "@/types/portfolio"
import { cn } from "@/lib/utils"

const ICON_MAP: Record<string, LucideIcon> = {
  military_tech: Award,
  psychology: Brain,
}

interface SkillCardProps {
  category: SkillCategory
}

const SkillCard = ({ category }: SkillCardProps) => {
  const Icon = ICON_MAP[category.iconName] || Award

  return (
    <section className="flex h-full flex-col rounded-xl border border-border bg-card p-8 shadow-sm">
      <div className="mb-6 flex items-center gap-3">
        <div
          className={cn(
            "flex size-10 items-center justify-center rounded-lg",
            category.variant === "primary"
              ? "bg-primary/10 text-primary"
              : "bg-secondary text-secondary-foreground"
          )}
        >
          <Icon className="size-5" aria-hidden="true" />
        </div>
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
    </section>
  )
}

interface SkillsBentoProps {
  categories: SkillCategory[]
}

const SkillsBento = ({ categories }: SkillsBentoProps) => {
  return (
    <div className="flex flex-col gap-6 h-full">
      {categories.map((category) => (
        <SkillCard key={category.title} category={category} />
      ))}
    </div>
  )
}

export { SkillsBento }
