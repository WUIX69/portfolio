"use client"

import { useState, useEffect, useCallback } from "react"
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
  const imagesRaw = project.images || []
  const images = imagesRaw.map((img) =>
    typeof img === "string" ? { url: img, fit: "cover" as const } : img
  )
  const hasImages = images.length > 0

  // Dialog Carousel state
  const [api, setApi] = useState<CarouselApi>()
  const [thumbApi, setThumbApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(false)

  const onThumbClick = useCallback(
    (index: number) => {
      if (!api) return
      api.scrollTo(index)
    },
    [api]
  )

  useEffect(() => {
    if (!api) return

    const updateState = () => {
      const index = api.selectedScrollSnap()
      setCurrent(index)
      setCanScrollPrev(api.canScrollPrev())
      setCanScrollNext(api.canScrollNext())
      if (thumbApi) thumbApi.scrollTo(index)
    }

    // Initialize state
    updateState()

    api.on("select", updateState)
    api.on("reInit", updateState)

    return () => {
      api.off("select", updateState)
      api.off("reInit", updateState)
    }
  }, [api, thumbApi])

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
                        type="button"
                        onClick={() => api?.scrollPrev()}
                        disabled={!canScrollPrev}
                        aria-label="Previous image"
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-accent-foreground transition-colors hover:bg-accent/80 disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        <ChevronLeft className="size-5" />
                      </button>
                      <button
                        type="button"
                        onClick={() => api?.scrollNext()}
                        disabled={!canScrollNext}
                        aria-label="Next image"
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-accent-foreground transition-colors hover:bg-accent/80 disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        <ChevronRight className="size-5" />
                      </button>
                    </div>
                  )}
                </div>

                <Carousel
                  setApi={setApi}
                  className="w-full overflow-hidden rounded-2xl"
                >
                  <CarouselContent>
                    {images.map((img, idx) => (
                      <CarouselItem key={idx}>
                        <div className="group relative aspect-video w-full overflow-hidden rounded-2xl">
                          <Image
                            src={img.url}
                            alt={`${project.title} - Gallery Image ${idx + 1}`}
                            fill
                            className={cn(
                              "transition-all duration-300",
                              img.fit === "contain"
                                ? "object-contain"
                                : "object-cover"
                            )}
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                </Carousel>

                {images.length > 1 && (
                  <Carousel
                    setApi={setThumbApi}
                    opts={{
                      containScroll: "keepSnaps",
                      dragFree: true,
                    }}
                    className="w-full"
                  >
                    <CarouselContent className="ml-0 flex-row gap-4">
                      {images.map((img, idx) => (
                        <CarouselItem
                          key={idx}
                          className="basis-auto cursor-pointer pl-0"
                          onClick={() => onThumbClick(idx)}
                        >
                          <div
                            aria-label={`View image ${idx + 1}`}
                            aria-current={current === idx ? "true" : undefined}
                            className={cn(
                              "relative aspect-video w-32 shrink-0 overflow-hidden rounded-xl transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                              current === idx
                                ? "border-2 border-primary ring-4 ring-primary/20"
                                : "opacity-60 hover:opacity-100"
                            )}
                          >
                            <Image
                              src={img.url}
                              alt={`Thumbnail ${idx + 1}`}
                              fill
                              className={cn(
                                img.fit === "contain"
                                  ? "bg-black/5 object-contain dark:bg-white/5"
                                  : "object-cover"
                              )}
                              sizes="128px"
                            />
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                  </Carousel>
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
          <div className="flex w-full shrink-0 flex-col justify-start border-t border-border bg-muted/20 p-5 md:w-72 md:justify-center md:border-t-0 md:border-l md:p-10">
            <div className="absolute top-10 right-10 hidden flex-col items-end md:flex">
              <DialogClose asChild>
                <button
                  type="button"
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
        </div>
      </DialogContent>
    </Dialog>
  )
}
