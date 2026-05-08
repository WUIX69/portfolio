export interface ExperienceEntry {
  id: string
  role: string
  company: string
  period: string
  description: string
  achievements: string[]
  techStack: string[]
  type: string
}

export interface EducationEntry {
  id: string
  school: string
  degree: string
  period: string
}

export interface SkillCategory {
  title: string
  description: string
  skills: string[]
  variant: "primary" | "secondary"
  iconName: string
}
export interface HeroTechIcon {
  slug: string
  label: string
  brandHex: string
  position: string
  floatDelay: number
  floatDuration: number
}
