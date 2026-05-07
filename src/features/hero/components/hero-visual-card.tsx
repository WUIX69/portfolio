"use client"

import Image from "next/image"
import { motion } from "motion/react"

import { HeroStatusOverlay } from "@/features/hero/components/hero-status-overlay"

const HeroVisualCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40, scale: 0.95 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.4,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className="col-span-1 lg:col-span-6"
    >
      <div className="relative h-[500px] w-full overflow-hidden rounded-[2rem] lg:h-[600px]">
        {/* Decorative Background Gradient */}
        <div className="absolute inset-0 -z-10 w-full bg-gradient-to-t from-primary/20 via-transparent to-transparent" />

        <div className="relative h-full w-full overflow-hidden rounded-xl">
          <Image
            src="/images/hero-me-google.png"
            alt="Jonathan L. Violeta - Jr. Full Stack Developer Profile"
            fill
            className="object-contain object-bottom opacity-95 drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <HeroStatusOverlay />
        </div>
      </div>
    </motion.div>
  )
}

export { HeroVisualCard }

