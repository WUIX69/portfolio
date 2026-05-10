"use client"

import { useState, useEffect } from "react"
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
import { motion, HTMLMotionProps, AnimatePresence } from "motion/react"

import { type Project } from "@/types/projects"
import { cn } from "@/lib/utils"
import { DialogTrigger } from "@/components/ui/dialog"
import { ProjectDialog } from "./project-dialog"

const ICON_MAP: Record<string, LucideIcon> = {
  Wallet: Wallet,
  code: Code,
  article: FileText,
}

interface ProjectCardProps extends HTMLMotionProps<"article"> {
  project: Project
}

const ProjectCard = ({ project, className, ...props }: ProjectCardProps) => {
  const isWide = project.variant === "wide"
  const isFull = project.variant === "full"
  const isExpanded = isWide || isFull
  const Icon = project.icon ? ICON_MAP[project.icon] : null

  // Carousel state
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const imagesRaw = project.images || []
  const images = imagesRaw.map((img) => (typeof img === "string" ? img : img.url))
  const hasImages = images.length > 0

  // Auto-play carousel
  useEffect(() => {
    if (images.length <= 1) return

    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length)
    }, 2000) // Change image every 2 seconds

    return () => clearInterval(timer)
  }, [images.length])

  const nextImage = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (images.length <= 1) return
    setCurrentImageIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (images.length <= 1) return
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <ProjectDialog project={project}>
      <motion.article
        className={cn(
          "group flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-lg shadow-primary/5 transition-shadow duration-300 hover:shadow-xl hover:shadow-primary/10",
          isFull ? "md:col-span-2 lg:col-span-full lg:flex-row" : isWide ? "md:col-span-2 lg:col-span-2 lg:flex-row" : "col-span-1",
          className
        )}
        {...props}
      >
        {/* Image Container */}
        <div
          className={cn(
            "group/carousel relative overflow-hidden bg-muted",
            isExpanded ? "h-64 md:h-auto md:w-1/2" : "h-48"
          )}
        >
          {hasImages ? (
            <>
              <AnimatePresence mode="popLayout" initial={false}>
                <motion.img
                  key={currentImageIndex}
                  src={images[currentImageIndex]}
                  alt={`${project.title} - Image ${currentImageIndex + 1}`}
                  className="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-105"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                />
              </AnimatePresence>
              {images.length > 1 && (
                <>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition-opacity duration-300 group-hover/carousel:opacity-100" />
                  <button
                    onClick={prevImage}
                    className="absolute top-1/2 left-2 -translate-y-1/2 rounded-full bg-black/50 p-1.5 text-white opacity-0 backdrop-blur-sm transition-all duration-300 group-hover/carousel:opacity-100 hover:bg-black/70"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="size-5" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute top-1/2 right-2 -translate-y-1/2 rounded-full bg-black/50 p-1.5 text-white opacity-0 backdrop-blur-sm transition-all duration-300 group-hover/carousel:opacity-100 hover:bg-black/70"
                    aria-label="Next image"
                  >
                    <ChevronRight className="size-5" />
                  </button>
                  <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
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
            </>
          ) : (
            <div className="flex h-full items-center justify-center bg-primary/10">
              {Icon && <Icon className="size-24 text-primary opacity-20" />}
            </div>
          )}
        </div>

        {/* Content Container */}
        <div
          className={cn(
            "flex flex-1 flex-col p-6 md:p-10",
            isExpanded ? "md:w-1/2" : "w-full"
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

          <div className="flex flex-wrap items-center gap-4">
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
