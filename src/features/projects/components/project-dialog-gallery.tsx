import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel"

interface ProjectImage {
  url: string
  fit?: "cover" | "contain"
}

interface ProjectDialogGalleryProps {
  title: string
  images: ProjectImage[]
}

export function ProjectDialogGallery({ title, images }: ProjectDialogGalleryProps) {
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

    updateState()

    api.on("select", updateState)
    api.on("reInit", updateState)

    return () => {
      api.off("select", updateState)
      api.off("reInit", updateState)
    }
  }, [api, thumbApi])

  if (!images.length) return null

  return (
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
                  alt={`${title} - Gallery Image ${idx + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className={cn(
                    "transition-all duration-300",
                    img.fit === "contain" ? "object-contain" : "object-cover"
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
                    "relative aspect-video w-32 shrink-0 overflow-hidden rounded-xl transition-all duration-300 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none",
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
  )
}
