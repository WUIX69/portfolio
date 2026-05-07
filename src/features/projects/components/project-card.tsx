import Image from "next/image"
import {
  ArrowRight,
  ExternalLink,
  Code,
  FileText,
  Wallet,
  type LucideIcon,
} from "lucide-react"

import { type Project } from "@/types/projects"
import { cn } from "@/lib/utils"

const ICON_MAP: Record<string, LucideIcon> = {
  Wallet: Wallet,
  code: Code,
  article: FileText,
}

interface ProjectCardProps {
  project: Project
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const isWide = project.variant === "wide"
  const Icon = project.icon ? ICON_MAP[project.icon] : null

  return (
    <article
      className={cn(
        "group flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-lg shadow-primary/5 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10",
        isWide ? "md:col-span-2 lg:flex-row" : "col-span-1"
      )}
    >
      {/* Image Container */}
      <div
        className={cn(
          "relative overflow-hidden bg-muted",
          isWide ? "h-64 md:h-auto md:w-1/2" : "h-48"
        )}
      >
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-primary/10">
            {Icon && <Icon className="size-24 text-primary opacity-20" />}
          </div>
        )}
      </div>

      {/* Content Container */}
      <div
        className={cn(
          "flex flex-col justify-between p-6 md:p-8",
          isWide ? "md:w-1/2" : "flex-grow"
        )}
      >
        <div>
          <div className="mb-4 flex flex-wrap items-center gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-accent px-3 py-1 font-sans text-xs font-semibold text-primary"
              >
                {tag}
              </span>
            ))}
          </div>
          <h3
            className={cn(
              "mb-3 font-sans font-bold text-foreground",
              isWide ? "text-2xl md:text-3xl" : "text-xl"
            )}
          >
            {project.title}
          </h3>
          <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
            {project.description}
          </p>
          <div className="mb-8 flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="rounded bg-muted px-2 py-1 font-mono text-xs text-muted-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4">
          {project.link && (
            <button className="flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 font-sans text-sm font-bold text-primary-foreground transition-colors hover:bg-primary/90">
              {isWide ? "View Case Study" : "Live Demo"}
              {isWide ? (
                <ArrowRight className="size-4" />
              ) : (
                <ExternalLink className="size-4" />
              )}
            </button>
          )}
          {project.github && (
            <button className="flex items-center gap-1 font-sans text-sm font-bold text-primary transition-colors hover:text-primary/80">
              <Code className="size-4" />
              Source
            </button>
          )}
        </div>
      </div>
    </article>
  )
}

export { ProjectCard }
