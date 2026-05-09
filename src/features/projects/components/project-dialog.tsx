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
      <DialogContent className="max-h-[98vh] w-[96vw] max-w-none overflow-hidden p-0 sm:max-w-5xl sm:rounded-[2rem] [&>button]:hidden">
        <div className="flex h-full max-h-[98vh] flex-col md:flex-row">
          {/* Mobile Close Button */}
          <DialogClose asChild>
            <button className="absolute top-4 right-4 z-[110] flex h-9 w-9 items-center justify-center rounded-full bg-accent/80 text-muted-foreground backdrop-blur-sm transition-all hover:bg-accent hover:text-foreground md:hidden">
              <X className="size-4" />
            </button>
          </DialogClose>

          {/* Left Column */}
          <div className="custom-scrollbar max-w-[96vw] flex-1 overflow-x-hidden overflow-y-auto p-5 md:p-10">
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
          <div className="flex w-full min-w-0 flex-col justify-start border-t border-border bg-muted/20 p-5 md:w-72 md:justify-center md:border-t-0 md:border-l md:p-10">
            <div className="absolute top-10 right-10 hidden flex-col items-end md:flex">
              <DialogClose asChild>
                <button className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-muted-foreground transition-all hover:bg-accent/80 hover:text-foreground">
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
                <p className="font-sans text-xs font-semibold text-foreground md:text-sm">
                  December 2023
                </p>
              </div>

              <div className="md:pt-6">
                <p className="mb-2 hidden font-sans text-[10px] font-bold tracking-widest text-muted-foreground uppercase md:mb-4 md:block md:text-[12px]">
                  Share Project
                </p>
                <div className="flex gap-2 md:gap-4">
                  <button className="flex h-9 w-9 items-center justify-center rounded-full bg-accent transition-colors hover:bg-accent/80 md:h-10 md:w-10">
                    <Share2 className="size-4 text-muted-foreground md:size-5" />
                  </button>
                  <button className="flex h-9 w-9 items-center justify-center rounded-full bg-accent transition-colors hover:bg-accent/80 md:h-10 md:w-10">
                    <Bookmark className="size-4 text-muted-foreground md:size-5" />
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
