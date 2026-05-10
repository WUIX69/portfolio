export interface HeroTechIcon {
  slug: string
  label: string
  brandHex: string
  position: string
  floatDelay: number
  floatDuration: number
}

export interface HeroData {
  fullName: string
  tagline: string
  title: string
  highlightedTitle: string
  description: string
  stats: {
    value: string
    label: string
  }[]
  resumeHref: string
}
