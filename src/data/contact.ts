import { type ContactData } from "@/types/contact"

export const CONTACT_DATA: ContactData = {
  title: "Let's build something radical.",
  description:
    "I'm currently available for full-time opportunities and strategic collaborations. Reach out and let's start a conversation.",
  email: "jonavioleta19@gmail.com",
  phone: "+639924865960",
  location: "Sta. Maria, Bulacan, PH",
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
  ],
  testimonial: {
    quote:
      "Jonathan's technical autonomy is exceptional. He led complex system migrations and full-feature lifecycles without senior oversight, delivering high-performance results for our platform.",
    author: "Kleng Bancud",
    role: "CEO, Juanwork Inc.",
    rating: 5,
  },
}
