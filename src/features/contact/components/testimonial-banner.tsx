"use client"

import { Quote, Star } from "lucide-react"
import { motion, HTMLMotionProps } from "motion/react"
import { cn } from "@/lib/utils"

import { type Testimonial } from "@/types/contact"

interface TestimonialBannerProps extends HTMLMotionProps<"div"> {
  testimonial: Testimonial
}

const TestimonialBanner = ({
  testimonial,
  className,
  ...props
}: TestimonialBannerProps) => {
  return (
    <motion.div
      className={cn(
        "flex flex-col items-start gap-8 rounded-2xl border border-primary/10 bg-primary/5 p-8 shadow-lg shadow-primary/5 md:col-span-4 md:row-span-1 md:flex-row md:items-center md:p-10",
        className
      )}
      {...props}
    >
      <div className="flex size-16 shrink-0 items-center justify-center rounded-full bg-primary/10">
        <Quote className="size-8 text-primary" />
      </div>
      <div className="flex-grow">
        <p className="mb-6 font-sans text-xl italic leading-relaxed text-foreground/80 md:text-2xl">
          &quot;{testimonial.quote}&quot;
        </p>
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <span className="block font-sans text-base font-bold text-foreground">
              {testimonial.author}
            </span>
            <span className="font-sans text-sm font-medium text-primary">
              {testimonial.role}
            </span>
          </div>
          <div className="flex gap-1">
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star
                key={i}
                className="size-5 fill-primary text-primary"
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export { TestimonialBanner }

