import { FileDown, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { HERO_DATA } from "@/data/portfolio"

const HeroTextContent = () => {
  return (
    <div className="col-span-1 z-10 flex flex-col gap-6 lg:col-span-6">
      <div className="inline-flex w-fit items-center gap-2 rounded-full bg-accent px-4 py-2">
        <span className="size-2 rounded-full bg-primary" aria-hidden="true" />
        <span className="text-sm font-semibold tracking-tight text-accent-foreground">
          {HERO_DATA.tagline}
        </span>
      </div>

      <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl lg:text-[48px] lg:leading-[1.1]">
        {HERO_DATA.title} <br />
        <span className="text-primary">{HERO_DATA.highlightedTitle}</span>
      </h1>

      <p className="max-w-lg text-lg leading-relaxed text-muted-foreground">
        {HERO_DATA.description}
      </p>

      <div className="mt-4 flex flex-wrap items-center gap-4">
        <Button
          asChild
          size="lg"
          className="h-12 rounded-full px-8 text-sm font-semibold shadow-lg"
        >
          <a href={HERO_DATA.resumeHref} aria-label="Download resume PDF">
            <FileDown className="size-4" data-icon="inline-start" />
            Download Resume
          </a>
        </Button>
        <Button
          asChild
          variant="secondary"
          size="lg"
          className="h-12 rounded-full px-8 text-sm font-semibold shadow-md"
        >
          <a href="#projects" aria-label="View portfolio projects">
            View Work
            <ArrowRight className="size-4" data-icon="inline-end" />
          </a>
        </Button>
      </div>

      <div className="mt-8 flex items-center gap-6 border-t border-border pt-8">
        {HERO_DATA.stats.map((stat, statIndex) => (
          <div key={stat.label} className="flex items-center gap-6">
            {statIndex > 0 && (
              <Separator
                orientation="vertical"
                className="h-12"
                aria-hidden="true"
              />
            )}
            <div className="flex flex-col">
              <span className="text-2xl font-semibold tracking-tight">
                {stat.value}
              </span>
              <span className="text-sm font-semibold text-muted-foreground">
                {stat.label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export { HeroTextContent }
