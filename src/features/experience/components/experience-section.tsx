import { Variants } from "motion/react"
import { EXPERIENCE_DATA, EDUCATION_DATA, SKILLS_DATA } from "@/data/portfolio"
import { ExperienceCard } from "@/features/experience/components/experience-card"
import { EducationCard } from "@/features/experience/components/education-card"
import { SkillsBento } from "@/features/experience/components/skills-bento"
import { SectionHeader } from "@/components/shared/section-header"
import { MotionViewport } from "@/components/shared/motion-viewport"

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

const ExperienceSection = () => {
  return (
    <section id="experience" className="w-full">
      <Container>
        <MotionViewport>
          <SectionHeader
            title="Journey & Arsenal"
            subtitle="A timeline of architectural ownership and a curated grid of technical proficiencies driving modern web solutions."
            align="center"
            variants={itemVariants}
          />

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
            {/* Left Column: Experience & Education */}
            <div className="flex flex-col gap-6 lg:col-span-7">
              {EXPERIENCE_DATA.map((exp) => (
                <ExperienceCard
                  key={exp.id}
                  experience={exp}
                  variants={itemVariants}
                />
              ))}
              {EDUCATION_DATA.map((edu) => (
                <EducationCard
                  key={edu.id}
                  education={edu}
                  variants={itemVariants}
                />
              ))}
            </div>

            {/* Right Column: Skills Bento */}
            <div className="lg:col-span-5">
              <SkillsBento categories={SKILLS_DATA} variants={itemVariants} />
            </div>
          </div>
        </MotionViewport>
      </Container>
    </section>
  )
}

export { ExperienceSection }
