import { Terminal, Rocket, Share2, Bookmark, X } from "lucide-react"
import { type Project } from "@/types/projects"
import { DialogClose } from "@/components/ui/dialog"

interface ProjectDialogActionsProps {
  project: Project
}

export function ProjectDialogActions({ project }: ProjectDialogActionsProps) {
  return (
    <div className="flex w-full shrink-0 flex-col justify-start border-t border-border bg-muted/20 p-5 md:w-72 md:justify-center md:border-t-0 md:border-l md:p-10">
      <div className="absolute top-10 right-10 hidden flex-col items-end md:flex">
        <DialogClose asChild>
          <button
            type="button"
            aria-label="Close dialog"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-muted-foreground transition-all hover:bg-accent/80 hover:text-foreground"
          >
            <X className="size-5" />
          </button>
        </DialogClose>
      </div>

      <div className="grid grid-cols-1 gap-3 md:flex md:flex-col md:gap-4">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-3 rounded-xl bg-primary py-3 font-sans text-sm font-bold text-primary-foreground shadow-xl shadow-primary/20 transition-all hover:bg-primary/90 active:scale-95 md:rounded-2xl md:py-4"
          >
            <Terminal className="size-4 md:size-5" />
            View Source
          </a>
        )}
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-3 rounded-xl border border-border bg-accent py-3 font-sans text-sm font-bold text-foreground transition-all hover:bg-accent/80 active:scale-95 md:rounded-2xl md:py-4"
          >
            <Rocket className="size-4 md:size-5" />
            Live Demo
          </a>
        )}
      </div>

      <div className="mt-6 flex items-center justify-between border-t border-border pt-6 md:block md:pt-8">
        <div>
          <p className="mb-1 font-sans text-[10px] font-bold tracking-widest text-muted-foreground uppercase md:mb-4 md:text-[12px]">
            Project Date
          </p>
          <p className="font-sans text-xs font-semibold tracking-wide text-foreground md:text-sm">
            {project.date}
          </p>
        </div>

        <div className="md:pt-6">
          <p className="mb-2 hidden font-sans text-[10px] font-bold tracking-widest text-muted-foreground uppercase md:mb-4 md:block md:text-[12px]">
            Share Project
          </p>
          <div className="flex gap-2 md:gap-4">
            <button
              type="button"
              aria-label="Share project"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-accent transition-colors hover:bg-accent/80 md:h-10 md:w-10"
            >
              <Share2 className="size-4 text-muted-foreground md:size-5" />
            </button>
            <button
              type="button"
              aria-label="Save project"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-accent transition-colors hover:bg-accent/80 md:h-10 md:w-10"
            >
              <Bookmark className="size-4 text-muted-foreground md:size-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
