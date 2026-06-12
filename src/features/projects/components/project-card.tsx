"use client"

import { useState, useEffect, useRef } from "react"
import {
  ExternalLink,
  Code,
  FileText,
  Wallet,
  Info,
  ChevronLeft,
  ChevronRight,
  type LucideIcon,
} from "lucide-react"
import { motion } from "motion/react"
import Image from "next/image"
import Autoplay from "embla-carousel-autoplay"

import { type Project } from "@/types/projects"
import { cn } from "@/lib/utils"
import { DialogTrigger } from "@/components/ui/dialog"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel"
import { ProjectDialog } from "./project-dialog"

const ICON_MAP: Record<string, LucideIcon> = {
  Wallet: Wallet,
  code: Code,
  article: FileText,
}

interface ProjectCardProps {
  project: Project
  className?: string
}

const ProjectCard = ({ project, className }: ProjectCardProps) => {
  const isWide = project.variant === "wide"
  const isFull = project.variant === "full"
  const isExpanded = isWide || isFull
  const Icon = project.icon ? ICON_MAP[project.icon] : null

  // Carousel state
  const [api, setApi] = useState<CarouselApi>()
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const imagesRaw = project.images || []
  const images = imagesRaw.map((img) =>
    typeof img === "string" ? img : img.url
  )
  const hasImages = images.length > 0
  const [autoplayPlugin] = useState(() =>
    Autoplay({ delay: 4000, stopOnInteraction: true, stopOnMouseEnter: true })
  )
  const carouselRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!api) return

    const onSelect = () => {
      setCurrentImageIndex(api.selectedScrollSnap())
    }

    api.on("select", onSelect)
    api.on("reInit", onSelect)

    return () => {
      api.off("select", onSelect)
      api.off("reInit", onSelect)
    }
  }, [api])

  useEffect(() => {
    const el = carouselRef.current
    if (!el || !api) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          autoplayPlugin.play()
        } else {
          autoplayPlugin.stop()
        }
      },
      { threshold: 0.2 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [api, autoplayPlugin])

  return (
    <ProjectDialog project={project}>
      <motion.article
        className={cn(
          "group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card shadow-lg shadow-primary/5 transition-shadow duration-300 hover:shadow-xl hover:shadow-primary/10",
          isFull ? "lg:flex-row" : isWide ? "lg:flex-row" : "",
          className
        )}
      >
        {/* Image Container */}
        <div
          className={cn(
            "group/carousel relative overflow-hidden bg-muted",
            isExpanded ? "h-64 md:h-auto md:w-1/2" : "h-60"
          )}
        >
          {hasImages ? (
            <div ref={carouselRef} className="h-full w-full">
              <Carousel
                setApi={setApi}
                plugins={[autoplayPlugin]}
                className="h-full w-full [&_[data-slot=carousel-content]]:h-full"
                opts={{
                  loop: true,
                }}
              >
                <CarouselContent className="ml-0 h-full">
                  {images.map((src, idx) => (
                    <CarouselItem
                      key={idx}
                      className="relative h-full w-full pl-0"
                    >
                      <Image
                        src={src}
                        alt={`${project.title} - Image ${idx + 1}`}
                        fill
                        className="object-cover transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>

              {images.length > 1 && (
                <>
                  <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition-opacity duration-300 group-hover/carousel:opacity-100" />
                  <button
                    onClick={(e) => {
                      e.preventDefault()
                      e.stopPropagation()
                      api?.scrollPrev()
                    }}
                    className="absolute top-1/2 left-2 z-20 -translate-y-1/2 rounded-full bg-black/50 p-1.5 text-white opacity-0 backdrop-blur-sm transition-all duration-300 group-hover/carousel:opacity-100 hover:bg-black/70"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="size-5" />
                  </button>
                  <button
                    onClick={(e) => {
                      e.preventDefault()
                      e.stopPropagation()
                      api?.scrollNext()
                    }}
                    className="absolute top-1/2 right-2 z-20 -translate-y-1/2 rounded-full bg-black/50 p-1.5 text-white opacity-0 backdrop-blur-sm transition-all duration-300 group-hover/carousel:opacity-100 hover:bg-black/70"
                    aria-label="Next image"
                  >
                    <ChevronRight className="size-5" />
                  </button>
                  <div className="absolute bottom-3 left-1/2 z-20 flex -translate-x-1/2 gap-1.5">
                    {images.map((_, idx) => (
                      <div
                        key={idx}
                        className={cn(
                          "size-1.5 rounded-full transition-all duration-300",
                          idx === currentImageIndex
                            ? "w-3 bg-white"
                            : "bg-white/50"
                        )}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          ) : (
            <div className="flex h-full items-center justify-center bg-primary/10">
              {Icon && <Icon className="size-24 text-primary opacity-20" />}
            </div>
          )}
        </div>

        {/* Content Container */}
        <div
          className={cn(
            "flex flex-1 flex-col p-6",
            isExpanded ? "md:w-1/2 md:p-10" : "w-full md:p-8"
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

          <div className="flex flex-wrap items-center gap-2 md:gap-5">
            <DialogTrigger asChild>
              <button className="flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 font-sans text-sm font-bold text-primary-foreground transition-colors hover:bg-primary/90">
                <Info className="size-4" />
                Details
              </button>
            </DialogTrigger>
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 font-sans text-sm font-bold text-primary transition-colors hover:text-primary/80"
              >
                <Code className="size-4" />
                View Source
              </a>
            )}
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 font-sans text-sm font-bold text-primary transition-colors hover:text-primary/80"
              >
                <ExternalLink className="size-4" />
                Live Demo
              </a>
            )}
          </div>
        </div>
      </motion.article>
    </ProjectDialog>
  )
}

export { ProjectCard }
