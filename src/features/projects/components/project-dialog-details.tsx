import { Code2, Target, Network } from "lucide-react"
import { type Project } from "@/types/projects"

interface ProjectDialogDetailsProps {
  project: Project
}

export function ProjectDialogDetails({ project }: ProjectDialogDetailsProps) {
  return (
    <>
      {/* Details Grid */}
      <div className="mb-10 grid grid-cols-1 gap-8 md:grid-cols-2">
        {project.purpose && (
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-primary">
              <Target className="size-5" />
              <h4 className="font-sans text-sm font-bold tracking-wider text-foreground uppercase">
                Purpose
              </h4>
            </div>
            <p className="leading-relaxed text-muted-foreground">
              {project.purpose}
            </p>
          </div>
        )}

        {project.architecture && (
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-emerald-500">
              <Network className="size-5" />
              <h4 className="font-sans text-sm font-bold tracking-wider text-foreground uppercase">
                Architecture
              </h4>
            </div>
            <p className="leading-relaxed text-muted-foreground">
              {project.architecture}
            </p>
          </div>
        )}
      </div>

      {/* Tech Stack */}
      <div className="mb-10">
        <div className="mb-4 flex items-center gap-2 text-orange-500">
          <Code2 className="size-5" />
          <h4 className="font-sans text-sm font-bold tracking-wider text-foreground uppercase">
            Tech Stack
          </h4>
        </div>
        <div className="flex flex-wrap gap-3">
          {project.techStack.map((tech) => (
            <div
              key={tech}
              className="flex items-center gap-2 rounded-xl border border-border bg-accent px-4 py-2 font-mono text-sm text-foreground"
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
