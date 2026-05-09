import {
  type ExperienceEntry,
  type EducationEntry,
  type SkillCategory,
  type HeroTechIcon,
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
  resumeHref: "/misc/R1-ATS-Resume-CV-Violeta-Jonathan-L.pdf",
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

export const HERO_TECH_ICONS: HeroTechIcon[] = [
  // ── Top quadrant (Avoid center-head) ──
  {
    slug: "Nextdotjs",
    label: "Next.js",
    brandHex: "000000",
    position: "top-10 right-12",
    floatDelay: 0.05,
    floatDuration: 3.0,
  },
  {
    slug: "React",
    label: "React",
    brandHex: "61DAFB",
    position: "top-[12%] left-10",
    floatDelay: 0.05,
    floatDuration: 3.4,
  },
  {
    slug: "Typescript",
    label: "TypeScript",
    brandHex: "3178C6",
    position: "top-[3%] left-[28%]",
    floatDelay: 0.1,
    floatDuration: 2.8,
  },
  {
    slug: "Docker",
    label: "Docker",
    brandHex: "2496ED",
    position: "top-[3%] right-[28%]",
    floatDelay: 0.15,
    floatDuration: 2.8,
  },

  // ── Middle quadrant (Sides) ──
  {
    slug: "Javascript",
    label: "JavaScript",
    brandHex: "F7DF1E",
    position: "top-[33%] left-5",
    floatDelay: 0.2,
    floatDuration: 3.2,
  },
  {
    slug: "Python",
    label: "Python",
    brandHex: "3776AB",
    position: "top-[28%] left-38",
    floatDelay: 0.5,
    floatDuration: 2.9,
  },
  {
    slug: "Tailwindcss",
    label: "Tailwind CSS",
    brandHex: "06B6D4",
    position: "top-[20%] right-36",
    floatDelay: 0.25,
    floatDuration: 2.6,
  },
  {
    slug: "Postgresql",
    label: "PostgreSQL",
    brandHex: "4169E1",
    position: "top-[52%] left-16",
    floatDelay: 0.3,
    floatDuration: 3.6,
  },
  {
    slug: "Php",
    label: "PHP",
    brandHex: "777BB4",
    position: "top-[28%] right-6",
    floatDelay: 0.35,
    floatDuration: 3.2,
  },

  // ── Bottom-ish quadrant (Avoiding Status Card at Bottom-Left) ──
  {
    slug: "Mysql",
    label: "MySQL",
    brandHex: "4479A1",
    position: "top-[72%] left-8",
    floatDelay: 0.4,
    floatDuration: 3.5,
  },
  {
    slug: "Github",
    label: "GitHub",
    brandHex: "181717",
    position: "top-[50%] right-12",
    floatDelay: 0.45,
    floatDuration: 3.1,
  },
  {
    slug: "Fastapi",
    label: "FastAPI",
    brandHex: "009688",
    position: "bottom-[55%] right-51",
    floatDelay: 0.55,
    floatDuration: 2.7,
  },
  {
    slug: "Git",
    label: "Git",
    brandHex: "F05032",
    position: "bottom-32 right-[18%]",
    floatDelay: 0.6,
    floatDuration: 3.3,
  },
  {
    slug: "Jquery",
    label: "jQuery",
    brandHex: "0769AD",
    position: "bottom-8 right-10",
    floatDelay: 0.65,
    floatDuration: 3.4,
  },
]
