export interface Project {
  id: string
  title: string
  description: string
  tags: string[]
  techStack: string[]
  image?: string
  icon?: string
  link?: string
  github?: string
  variant: "wide" | "standard"
}
