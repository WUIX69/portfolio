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
    "Demonstrated technical autonomy with 2+ years of experience building scalable web applications. Passionate about bridging the gap between robust backend systems and intuitive user interfaces.",
  stats: [
    { value: "2+", label: "Years Experience" },
    { value: "15+", label: "Projects Shipped" },
  ],
  resumeHref: "#",
}

export const EXPERIENCE_DATA: ExperienceEntry[] = [
  {
    id: "juanwork",
    role: "Jr. Full Stack Developer",
    company: "Juanwork",
    period: "Apr 2024 – Jan 2026",
    description:
      "Spearheaded technical ownership of key modules within the core platform. Directed system architecture decisions to improve scalability and reduce technical debt across both frontend and backend environments.",
    achievements: [
      "Architected and deployed scalable RESTful APIs serving 10k+ daily interactions.",
      "Led the migration of legacy components to modern React/Next.js stacks.",
      "Implemented CI/CD pipelines reducing deployment time by 40%.",
    ],
  },
]

export const EDUCATION_DATA: EducationEntry[] = [
  {
    id: "bulsu",
    school: "Bulacan State University",
    degree: "Bachelor of Science in Information Technology",
  },
]

export const SKILLS_DATA: SkillCategory[] = [
  {
    title: "Expertise",
    description:
      "Technologies utilized extensively in production environments with deep architectural understanding.",
    skills: [
      "PHP / Laravel",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "MySQL",
      "Tailwind CSS",
    ],
    variant: "primary",
    iconName: "military_tech",
  },
  {
    title: "Proficient",
    description:
      "Solid working knowledge and experience in building features and maintaining systems.",
    skills: [
      "Python / Django",
      "Java",
      "PostgreSQL",
      "Docker",
      "AWS (EC2, S3)",
    ],
    variant: "secondary",
    iconName: "psychology",
  },
]
