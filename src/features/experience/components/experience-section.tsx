import {
  EXPERIENCE_DATA,
  EDUCATION_DATA,
  SKILLS_DATA,
} from "@/data/portfolio"
import { ExperienceCard } from "@/features/experience/components/experience-card"
import { EducationCard } from "@/features/experience/components/education-card"
import { SkillsBento } from "@/features/experience/components/skills-bento"

const ExperienceSection = () => {
  return (
    <section id="experience" className="w-full py-16 md:py-24">
      <header className="mx-auto mb-16 max-w-2xl text-center">
        <h2 className="mb-4 font-sans text-4xl font-extrabold tracking-tight text-foreground md:text-5xl">
          Journey & Arsenal
        </h2>
        <p className="text-lg text-muted-foreground">
          A timeline of architectural ownership and a curated grid of technical
          proficiencies driving modern web solutions.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
        {/* Left Column: Experience & Education */}
        <div className="flex flex-col gap-6 lg:col-span-7">
          {EXPERIENCE_DATA.map((exp) => (
            <ExperienceCard key={exp.id} experience={exp} />
          ))}
          {EDUCATION_DATA.map((edu) => (
            <EducationCard key={edu.id} education={edu} />
          ))}
        </div>

        {/* Right Column: Skills Bento */}
        <div className="lg:col-span-5">
          <SkillsBento categories={SKILLS_DATA} />
        </div>
      </div>
    </section>
  )
}

export { ExperienceSection }
