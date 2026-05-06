export interface NavigationLink {
  label: string
  href: string
  id: string
}

export interface SocialLink {
  label: string
  href: string
  iconName: string
}

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
