"use client"

import { X } from "lucide-react"

import { type Project } from "@/types/projects"
import {
  Dialog,
  DialogContent,
  DialogClose,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { ProjectDialogGallery } from "./project-dialog-gallery"
import { ProjectDialogDetails } from "./project-dialog-details"
import { ProjectDialogActions } from "./project-dialog-actions"

interface ProjectDialogProps {
  project: Project
  children: React.ReactNode
}

export function ProjectDialog({ project, children }: ProjectDialogProps) {
  const imagesRaw = project.images || []
  const images = imagesRaw.map((img) =>
    typeof img === "string" ? { url: img, fit: "cover" as const } : img
  )

  return (
    <Dialog>
      {children}
      <DialogContent className="flex max-h-[98vh] w-[96vw] max-w-none flex-col overflow-hidden p-0 sm:max-w-5xl sm:rounded-[2rem] [&>button]:hidden">
        <div className="flex h-full max-h-[98vh] w-full min-w-0 flex-col md:flex-row">
          {/* Mobile Close Button */}
          <DialogClose asChild>
            <button
              type="button"
              className="absolute top-4 right-4 z-[110] flex h-9 w-9 items-center justify-center rounded-full bg-accent/80 text-muted-foreground backdrop-blur-sm transition-all hover:bg-accent hover:text-foreground md:hidden"
            >
              <X className="size-4" />
            </button>
          </DialogClose>

          {/* Left Column */}
          <div className="custom-scrollbar max-w-[96vw] min-w-0 flex-1 overflow-x-hidden overflow-y-auto p-5 md:p-10">
            {/* Header */}
            <div className="mb-8">
              <div className="mb-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 font-sans text-sm font-semibold text-primary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <DialogTitle className="mb-3 font-sans text-3xl leading-tight font-extrabold break-words text-foreground md:mb-4 md:text-5xl">
                {project.title}
              </DialogTitle>
              <DialogDescription className="max-w-full text-base leading-relaxed whitespace-normal text-muted-foreground md:text-lg">
                {project.longDescription || project.description}
              </DialogDescription>
            </div>

            <ProjectDialogGallery title={project.title} images={images} />
            <ProjectDialogDetails project={project} />
          </div>

          <ProjectDialogActions project={project} />
        </div>
      </DialogContent>
    </Dialog>
  )
}
