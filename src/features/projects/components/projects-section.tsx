import { Variants } from "motion/react"
import { PROJECTS_DATA } from "@/data/projects"
import { ProjectCard } from "@/features/projects/components/project-card"
import { SectionHeader } from "@/components/shared/section-header"
import { MotionViewport } from "@/components/shared/motion-viewport"
import { AnimatedItem } from "@/components/shared/animated-item"

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

import { Container } from "@/components/layout/container"
import { SectionGradient } from "@/components/layout/section-gradient"

const ProjectsSection = () => {
  return (
    <section id="projects" className="relative w-full overflow-hidden py-20">
      <SectionGradient side="left" />
      <Container>
        <MotionViewport>
          <AnimatedItem variants={itemVariants}>
            <SectionHeader
              title="Projects Showcase"
              subtitle="A curated selection of full-feature lifecycles, complex system migrations, and scalable architectures designed for modern SaaS platforms."
              titleClassName="text-primary"
            />
          </AnimatedItem>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {PROJECTS_DATA.map((project) => (
              <AnimatedItem key={project.id} variants={itemVariants}>
                <ProjectCard project={project} />
              </AnimatedItem>
            ))}
          </div>
        </MotionViewport>
      </Container>
    </section>
  )
}

export { ProjectsSection }
