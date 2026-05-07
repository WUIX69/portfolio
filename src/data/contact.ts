import { type ContactData } from "@/types/contact"

export const CONTACT_DATA: ContactData = {
  title: "Let's build something radical.",
  description:
    "I'm currently available for freelance projects and full-time opportunities. Reach out and let's start a conversation.",
  email: "jonathan.v@devmail.com",
  phone: "+1 (555) 000-1234",
  location: "Silicon Valley, CA",
  socials: [
    {
      id: "linkedin",
      label: "LinkedIn",
      href: "#",
      iconName: "Linkedin",
    },
    {
      id: "github",
      label: "GitHub",
      href: "#",
      iconName: "Github",
    },
    {
      id: "twitter",
      label: "Twitter",
      href: "#",
      iconName: "Twitter",
    },
    {
      id: "instagram",
      label: "Instagram",
      href: "#",
      iconName: "Instagram",
    },
  ],
  testimonial: {
    quote:
      "Jonathan's ability to bridge the gap between complex backend logic and pixel-perfect UI is rare. He delivered our enterprise portal two weeks ahead of schedule with flawless execution.",
    author: "Sarah Chen",
    role: "Senior Product Director, TechFlow Inc.",
    rating: 5,
  },
}
