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

export interface SkillCategory {
  title: string
  description: string
  skills: string[]
  variant: "primary" | "secondary"
  iconName: string
}
