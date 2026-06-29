import { type HeroData, type HeroTechIcon } from "@/types/hero"

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
  resumeHref: "/misc/ATS-VIOLETA-JONATHAN-L-RESUME-CV.pdf",
}

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
