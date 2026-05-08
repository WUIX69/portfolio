"use client"

import { HeroTextContent } from "@/features/hero/components/hero-text-content"
import { HeroVisualCard } from "@/features/hero/components/hero-visual-card"
import { HeroThreadsBackground } from "@/features/hero/components/hero-threads-background"
import { Container } from "@/components/layout/container"
import { SectionGradient } from "@/components/layout/section-gradient"

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-[calc(100vh-144px)] w-full items-center overflow-hidden"
    >
      <HeroThreadsBackground />
      <SectionGradient side="left" />

      <Container className="relative z-10">
        <div className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-6">
          <HeroTextContent />
          <HeroVisualCard />
        </div>
      </Container>
    </section>
  )
}

export { HeroSection }
