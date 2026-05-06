import { HeroTextContent } from "@/features/hero/components/hero-text-content"
import { HeroVisualCard } from "@/features/hero/components/hero-visual-card"

const HeroSection = () => {
  return (
    <section
      id="home"
      className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-6"
    >
      <HeroTextContent />
      <HeroVisualCard />
    </section>
  )
}

export { HeroSection }
