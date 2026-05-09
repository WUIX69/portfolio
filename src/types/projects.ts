export interface Project {
  id: string
  title: string
  description: string
  longDescription?: string
  architecture?: string
  purpose?: string
  tags: string[]
  techStack: string[]
  images?: string[]
  icon?: string
  link?: string
  github?: string
  variant: "wide" | "standard" | "full"
  date: string
}
