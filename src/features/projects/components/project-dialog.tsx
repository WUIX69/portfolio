"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import {
  Code2,
  Terminal,
  Rocket,
  Share2,
  Bookmark,
  X,
  Target,
  Network,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"

import { type Project } from "@/types/projects"
import { cn } from "@/lib/utils"
import {
  Dialog,
  DialogContent,
  DialogClose,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel"

interface ProjectDialogProps {
  project: Project
  children: React.ReactNode
}

export function ProjectDialog({ project, children }: ProjectDialogProps) {
  const images = project.images || []
  const hasImages = images.length > 0

  // Dialog Carousel state
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!api) return
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCurrent(api.selectedScrollSnap())
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  return (
    <Dialog>
      {children}
      <DialogContent className="max-h-[92vh] max-w-full overflow-hidden p-0 sm:max-w-5xl sm:rounded-[2rem] [&>button]:hidden">
        <div className="flex h-full max-h-[92vh] flex-col md:flex-row">
          {/* Mobile Close Button */}
          <DialogClose asChild>
            <button className="absolute top-6 right-6 z-[110] flex h-10 w-10 items-center justify-center rounded-full bg-accent text-muted-foreground transition-all hover:bg-accent/80 hover:text-foreground md:hidden">
              <X className="size-5" />
            </button>
          </DialogClose>

          {/* Left Column */}
          <div className="custom-scrollbar flex-1 overflow-y-auto p-6 md:p-10">
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
              <DialogTitle className="mb-4 font-sans text-4xl font-extrabold text-foreground md:text-5xl">
                {project.title}
              </DialogTitle>
              <DialogDescription className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
                {project.longDescription || project.description}
              </DialogDescription>
            </div>

            {/* Gallery */}
            {hasImages && (
              <div className="mb-10 space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-sans text-2xl font-bold text-foreground">
                    Gallery
                  </h3>
                  {images.length > 1 && (
                    <div className="flex gap-2">
                      <button
                        onClick={() => api?.scrollPrev()}
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-accent-foreground transition-colors hover:bg-accent/80"
                      >
                        <ChevronLeft className="size-5" />
                      </button>
                      <button
                        onClick={() => api?.scrollNext()}
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-accent-foreground transition-colors hover:bg-accent/80"
                      >
                        <ChevronRight className="size-5" />
                      </button>
                    </div>
                  )}
                </div>

                <Carousel setApi={setApi} className="w-full">
                  <CarouselContent>
                    {images.map((img, idx) => (
                      <CarouselItem key={idx}>
                        <div className="group relative aspect-video w-full overflow-hidden rounded-2xl shadow-xl ring-1 ring-border">
                          <Image
                            src={img}
                            alt={`${project.title} - Gallery Image ${idx + 1}`}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                </Carousel>

                {images.length > 1 && (
                  <div className="custom-scrollbar flex gap-4 overflow-x-auto pb-4">
                    {images.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => api?.scrollTo(idx)}
                        className={cn(
                          "relative aspect-video w-32 shrink-0 cursor-pointer overflow-hidden rounded-xl transition-all duration-300",
                          current === idx
                            ? "border-2 border-primary ring-4 ring-primary/20"
                            : "opacity-60 hover:opacity-100"
                        )}
                      >
                        <Image
                          src={img}
                          alt={`Thumbnail ${idx + 1}`}
                          fill
                          className="object-cover"
                          sizes="128px"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}

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
          </div>

          {/* Right Column */}
          <div className="flex w-full flex-col justify-center border-t border-border bg-muted/20 p-6 md:w-72 md:border-t-0 md:border-l md:p-10">
            <div className="absolute top-10 right-10 hidden flex-col items-end md:flex">
              <DialogClose asChild>
                <button className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-muted-foreground transition-all hover:bg-accent/80 hover:text-foreground">
                  <X className="size-5" />
                </button>
              </DialogClose>
            </div>

            <div className="space-y-6">
              <div className="space-y-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-3 rounded-2xl bg-primary py-4 font-sans text-sm font-bold text-primary-foreground shadow-xl shadow-primary/20 transition-all hover:bg-primary/90 active:scale-95"
                  >
                    <Terminal className="size-5" />
                    View Source
                  </a>
                )}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-3 rounded-2xl border border-border bg-accent py-4 font-sans text-sm font-bold text-foreground transition-all hover:bg-accent/80 active:scale-95"
                  >
                    <Rocket className="size-5" />
                    Live Demo
                  </a>
                )}
              </div>

              <div className="border-t border-border pt-8">
                <p className="mb-4 font-sans text-[12px] font-bold tracking-widest text-muted-foreground uppercase">
                  Project Date
                </p>
                <p className="font-sans text-sm font-semibold text-foreground">
                  December 2023
                </p>
              </div>

              <div className="pt-6">
                <p className="mb-4 font-sans text-[12px] font-bold tracking-widest text-muted-foreground uppercase">
                  Share Project
                </p>
                <div className="flex gap-4">
                  <button className="flex h-10 w-10 items-center justify-center rounded-full bg-accent transition-colors hover:bg-accent/80">
                    <Share2 className="size-5 text-muted-foreground" />
                  </button>
                  <button className="flex h-10 w-10 items-center justify-center rounded-full bg-accent transition-colors hover:bg-accent/80">
                    <Bookmark className="size-5 text-muted-foreground" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
