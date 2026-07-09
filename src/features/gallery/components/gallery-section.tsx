import { Variants } from "motion/react"
import { GALLERY_DATA } from "@/data/gallery"
import { GalleryCard } from "./gallery-card"
import { SectionHeader } from "@/components/shared/section-header"
import { MotionViewport } from "@/components/shared/motion-viewport"
import { AnimatedItem } from "@/components/shared/animated-item"
import { Container } from "@/components/layout/container"
import { SectionGradient } from "@/components/layout/section-gradient"

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
}

const GallerySection = () => {
  return (
    <section id="gallery" className="relative w-full overflow-hidden py-20">
      <SectionGradient side="right" />
      <Container>
        <MotionViewport>
          <AnimatedItem variants={itemVariants}>
            <SectionHeader
              title="Gallery"
              subtitle="My journey, hard evidence, and big flex of my work."
              titleClassName="text-primary"
            />
          </AnimatedItem>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:auto-rows-[300px]">
            {GALLERY_DATA.map((item) => {
              const isWide = item.variant === "wide"
              const isTall = item.variant === "tall"
              const isFull = item.variant === "full"
              const gridClass = isFull
                ? "md:col-span-2 md:row-span-2"
                : isWide
                  ? "md:col-span-2"
                  : isTall
                    ? "md:row-span-2"
                    : ""

              return (
                <AnimatedItem
                  key={item.id}
                  className={gridClass}
                  variants={itemVariants}
                >
                  <GalleryCard item={item} />
                </AnimatedItem>
              )
            })}
          </div>
        </MotionViewport>
      </Container>
    </section>
  )
}

export { GallerySection }
