import { type NavigationLink, type SocialLink } from "@/types/navigation"

export const NAVIGATION_LINKS: NavigationLink[] = [
  { label: "Home", href: "#home", id: "home" },
  { label: "Experience", href: "#experience", id: "experience" },
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "Contact", href: "#contact", id: "contact" },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com",
    iconName: "github",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    iconName: "linkedin",
  },
  {
    label: "Twitter",
    href: "https://twitter.com",
    iconName: "twitter",
  },
  {
    label: "Email",
    href: "mailto:jonavioleta19@gmail.com",
    iconName: "mail",
  },
]
