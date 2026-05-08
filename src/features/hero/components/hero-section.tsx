"use client"

import { HeroTextContent } from "@/features/hero/components/hero-text-content"
import { HeroVisualCard } from "@/features/hero/components/hero-visual-card"
import { HeroThreadsBackground } from "@/features/hero/components/hero-threads-background"

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-[calc(100vh-144px)] w-full items-center overflow-hidden"
    >
      <HeroThreadsBackground />

      <div className="relative z-10 grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-6">
        <HeroTextContent />
        <HeroVisualCard />
      </div>
    </section>
  )
}

export { HeroSection }
