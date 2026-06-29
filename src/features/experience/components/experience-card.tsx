import { Briefcase } from "lucide-react"

import { type ExperienceEntry } from "@/types/experience"
import { cn } from "@/lib/utils"

interface ExperienceCardProps {
  experience: ExperienceEntry
  className?: string
}

const ExperienceCard = ({ experience, className }: ExperienceCardProps) => {
  return (
    <section
      className={cn(
        "rounded-xl border border-border bg-card p-8 shadow-sm",
        className
      )}
    >
      <div className="mb-8 flex items-center gap-3">
        <div className="flex size-10 items-center justify-center rounded-lg bg-accent text-primary">
          <Briefcase className="size-5" aria-hidden="true" />
        </div>
        <h2 className="font-sans text-2xl font-bold text-foreground">
          Professional Experience
        </h2>
      </div>

      <div className="relative ml-4 border-l-2 border-border pb-4 pl-6">
        <div className="absolute top-1 -left-[9px] size-4 rounded-full border-4 border-card bg-primary" />
        <div className="mb-2 flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
          <div className="flex flex-col gap-1">
            <h3 className="font-sans text-xl font-semibold text-foreground">
              {experience.role}
            </h3>
            <span className="text-xs font-medium text-primary/80">
              {experience.type}
            </span>
          </div>
          <span className="mt-2 w-fit rounded-full bg-accent px-3 py-1 font-mono text-xs font-medium text-primary sm:mt-0">
            {experience.period}
          </span>
        </div>
        <h4 className="mb-4 font-sans text-sm font-bold tracking-wider text-muted-foreground uppercase">
          {experience.company}
        </h4>
        <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
          {experience.description}
        </p>
        <ul className="mb-6 flex list-inside list-disc flex-col gap-2 text-sm text-muted-foreground">
          {experience.achievements.map((achievement, index) => (
            <li key={index}>{achievement}</li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2 border-t border-border/50 pt-2">
          {experience.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-border/50 bg-muted/50 px-2 py-1 font-mono text-[10px] font-medium text-muted-foreground"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

export { ExperienceCard }
