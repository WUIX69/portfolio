export interface PortfolioStat {
  value: string
  label: string
}

export interface HeroData {
  fullName: string
  tagline: string
  title: string
  highlightedTitle: string
  description: string
  stats: PortfolioStat[]
  resumeHref: string
}

export interface ExperienceEntry {
  id: string
  role: string
  company: string
  period: string
  description: string
  achievements: string[]
}

export interface EducationEntry {
  id: string
  school: string
  degree: string
}

export interface Skill {
  name: string
}

export interface SkillCategory {
  title: string
  description: string
  skills: string[]
  variant: "primary" | "secondary"
  iconName: string
}

export interface PortfolioData {
  hero: HeroData
  experience: ExperienceEntry[]
  education: EducationEntry[]
  skills: SkillCategory[]
}
