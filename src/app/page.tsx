import { HeroSection } from "@/features/hero/components/hero-section"
import { ExperienceSection } from "@/features/experience/components/experience-section"
import { ProjectsSection } from "@/features/projects/components/projects-section"

const Page = () => {
  return (
    <div className="flex flex-col gap-24">
      <HeroSection />
      <ExperienceSection />
      <ProjectsSection />
    </div>
  )
}

export default Page
