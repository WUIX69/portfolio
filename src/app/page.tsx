import { HeroSection } from "@/features/hero/components/hero-section"
import { ExperienceSection } from "@/features/experience/components/experience-section"

const Page = () => {
  return (
    <div className="flex flex-col gap-24">
      <HeroSection />
      <ExperienceSection />
    </div>
  )
}

export default Page
