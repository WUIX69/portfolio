import { PROJECTS_DATA } from "@/data/projects"
import { ProjectCard } from "@/features/projects/components/project-card"
import { SectionHeader } from "@/components/shared/section-header"

const ProjectsSection = () => {
  return (
    <section id="projects" className="w-full">
      <SectionHeader
        title="Projects Showcase"
        subtitle="A curated selection of full-feature lifecycles, complex system migrations, and scalable architectures designed for modern SaaS platforms."
        titleClassName="text-primary"
      />

      {/* Bento Grid */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {PROJECTS_DATA.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}

export { ProjectsSection }
