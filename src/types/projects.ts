export interface ProjectImage {
  url: string
  fit?: "cover" | "contain"
}

export interface Project {
  id: string
  title: string
  description: string
  longDescription?: string
  architecture?: string
  purpose?: string
  tags: string[]
  techStack: string[]
  images?: (string | ProjectImage)[]
  icon?: string
  link?: string
  github?: string
  variant: "wide" | "standard" | "full"
  date: string
}
