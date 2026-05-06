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

export const HERO_DATA: HeroData = {
  fullName: "Jonathan L. Violeta",
  tagline: "Jonathan L. Violeta",
  title: "Jr. Full Stack",
  highlightedTitle: "Developer",
  description:
    "Demonstrated technical autonomy with 2+ years of experience building scalable web applications. Passionate about bridging the gap between robust backend systems and intuitive user interfaces.",
  stats: [
    { value: "2+", label: "Years Experience" },
    { value: "15+", label: "Projects Shipped" },
  ],
  resumeHref: "#",
}
