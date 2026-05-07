import {
  type ExperienceEntry,
  type EducationEntry,
  type SkillCategory,
} from "@/types/portfolio"

interface HeroData {
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

export const HERO_DATA: HeroData = {
  fullName: "Jonathan L. Violeta",
  tagline: "Jonathan L. Violeta",
  title: "Jr. Full Stack",
  highlightedTitle: "Developer",
  description:
    "A Full Stack Developer with over two years of experience in real-world end-to-end software development. Distinguished by a high degree of technical autonomy, I possess a proven track record of leading full-feature lifecycles and complex system migrations without senior oversight.",
  stats: [
    { value: "2+", label: "Years Experience" },
    { value: "15+", label: "Projects Shipped" },
  ],
  resumeHref: "#",
}

export const EXPERIENCE_DATA: ExperienceEntry[] = [
  {
    id: "juanwork",
    role: "Jr. Fullstack Web Developer",
    company: "Juanwork",
    period: "Apr 2024 – Present",
    type: "Freelance | Remote",
    description:
      "Operated independently without senior supervision, taking full accountability for the implementation of complex features. Developed and optimized core system flows for both freelancer and client-facing modules.",
    achievements: [
      "Led the migration of legacy PHP/JQuery systems to modern Next.js/PostgreSQL architecture.",
      "Engineered original features and custom automation scripts to streamline daily workflows.",
      "Conducted high-level technical demonstrations for stakeholders during conferences.",
      "Integrated secure payment gateways including Paymongo and Xendit.",
    ],
    techStack: [
      "Next.js",
      "React",
      "PostgreSQL",
      "Drizzle ORM",
      "FastAPI",
      "PHP",
      "JQuery",
      "MVC/Rest API",
      "MySQL",
      "Fomantic UI/Bootstrap",
      "XAMPP/WAMP",
      "Xendit/Paymongo",
      "Tailwind CSS",
    ],
  },
]

export const EDUCATION_DATA: EducationEntry[] = [
  {
    id: "bulsu",
    school: "Bulacan State University",
    degree: "Bachelor of Science in Information Technology",
    period: "2020 - 2026",
  },
  {
    id: "icp",
    school: "Immaculate Conception Polytechnic",
    degree: "Senior High School — ICT",
    period: "2018 - 2020",
  },
  {
    id: "pnhs",
    school: "Parada National High School",
    degree: "Junior High School",
    period: "2013 - 2018",
  },
]

export const SKILLS_DATA: SkillCategory[] = [
  {
    title: "Core Technologies",
    description:
      "High-level proficiency in modern web development stacks and frameworks.",
    skills: [
      "PHP / Laravel",
      "JQuery",
      "MVC/RestAPI",
      "XAMPP/WAMP",
      "JavaScript / TypeScript",
      "React",
      "Next.js",
      "PostgreSQL",
      "MySQL",
      "Tailwind CSS",
      "Drizzle ORM",
    ],
    variant: "primary",
    iconName: "military_tech",
  },
  {
    title: "Technical Arsenal",
    description:
      "Versatile experience with various programming languages and backend systems.",
    skills: [
      "Python / Django",
      "FastAPI",
      "Java",
      "C / C++ / C#",
      "Git / GitHub / Bitbucket",
      "Docker",
      "CI/CD (GitHub Actions)",
      "Automated Testing",
    ],
    variant: "secondary",
    iconName: "psychology",
  },
  {
    title: "Engineering & Soft Skills",
    description:
      "Methodologies and professional attributes that drive delivery.",
    skills: [
      "Agile Development",
      "AI Integration",
      "Code Optimization",
      "Security (JWT)",
      "Problem-Solving",
      "Strong Communication",
      "Team-Oriented",
    ],
    variant: "secondary",
    iconName: "psychology",
  },
]
