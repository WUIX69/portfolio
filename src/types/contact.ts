export interface SocialLink {
  id: string
  label: string
  href: string
  iconName: string
}

export interface ContactData {
  title: string
  description: string
  email: string
  phone: string
  location: string
  socials: SocialLink[]
}
