import dynamic from "next/dynamic"
import { HeroSection } from "@/features/hero/components/hero-section"

const ExperienceSection = dynamic(() =>
  import("@/features/experience/components/experience-section").then(
    (mod) => mod.ExperienceSection
  )
)
const ProjectsSection = dynamic(() =>
  import("@/features/projects/components/projects-section").then(
    (mod) => mod.ProjectsSection
  )
)
const ContactSection = dynamic(() =>
  import("@/features/contact/components/contact-section").then(
    (mod) => mod.ContactSection
  )
)

const Page = () => {
  return (
    <div className="flex flex-col gap-30">
      <HeroSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  )
}

export default Page
