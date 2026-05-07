import { PROJECTS_DATA } from "@/data/projects"
import { ProjectCard } from "@/features/projects/components/project-card"

const ProjectsSection = () => {
  return (
    <section id="projects" className="w-full py-16 md:py-24">
      <header className="mb-16">
        <h2 className="mb-4 font-sans text-4xl font-extrabold tracking-tight text-primary md:text-5xl">
          Projects Showcase
        </h2>
        <p className="max-w-3xl text-lg text-muted-foreground">
          A curated selection of full-feature lifecycles, complex system
          migrations, and scalable architectures designed for modern SaaS
          platforms.
        </p>
      </header>

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
