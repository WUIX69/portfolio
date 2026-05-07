import { GraduationCap } from "lucide-react"

import { type EducationEntry } from "@/types/portfolio"

interface EducationCardProps {
  education: EducationEntry
}

const EducationCard = ({ education }: EducationCardProps) => {
  return (
    <section className="rounded-xl border border-border bg-card p-8 shadow-sm">
      <div className="mb-6 flex items-center gap-3">
        <div className="flex size-10 items-center justify-center rounded-lg bg-secondary text-secondary-foreground">
          <GraduationCap className="size-5" aria-hidden="true" />
        </div>
        <h2 className="font-sans text-xl font-semibold text-foreground">
          Education
        </h2>
      </div>
      <div>
        <h3 className="mb-1 font-sans text-xl font-semibold text-foreground">
          {education.school}
        </h3>
        <p className="text-sm text-muted-foreground">{education.degree}</p>
      </div>
    </section>
  )
}

export { EducationCard }
