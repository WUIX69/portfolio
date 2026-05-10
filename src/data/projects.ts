import { type Project } from "@/types/projects"

export const PROJECTS_DATA: Project[] = [
  {
    id: "mindtrack",
    title: "MindTrack",
    description:
      "Web-based Patient Management and Online Appointment System built for a mental health clinic.",
    longDescription:
      "MindTrack is a web-based Patient Management and Online Appointment System built for the Wayside Psyche Resources Center, a mental health clinic. Its purpose is to digitize clinic operations by automating appointment scheduling, patient record management, and administrative reporting.",
    architecture:
      "LAMP/WAMP architecture with custom PHP framework. Pattern: Input-Process-Output (IPO) data flow. Structure: Feature-Sliced Design.",
    purpose:
      "Replaces manual scheduling with a centralized platform where patients book consultations online, admins manage requests, and clinicians access records.",
    tags: ["Full Stack", "Healthcare", "PHP"],
    techStack: ["PHP", "TailwindCSS", "MySQL", "JavaScript", "jQuery", "XAMPP"],
    images: [
      "/images/mindtrack-1.png",
      { url: "/images/mindtrack-2.png", fit: "contain" },
      "/images/mindtrack-3.png",
      "/images/mindtrack-4.png",
      "/images/mindtrack-5.png",
      { url: "/images/mindtrack-6.png", fit: "contain" },
      "/images/mindtrack-7.png",
      { url: "/images/mindtrack-8.png", fit: "contain" },
      "/images/mindtrack-9.png",
    ],
    github: "https://github.com/WUIX69/MindTrack",
    variant: "wide",
    date: "March\u00A02026",
  },
  {
    id: "vetsync",
    title: "VetSync",
    description:
      "Web-based administrative dashboard application for veterinary/pet service management.",
    longDescription:
      "VetSync is a multi-page web application providing an admin dashboard with user management, analytics tracking, system settings configuration, and messaging features.",
    architecture:
      "Multi-page application (MPA) with modular organization, reusable HTML components, and separated concerns (styles, scripts, markup).",
    purpose:
      "To provide administrative and management tools for veterinary clinics.",
    tags: ["Full Stack", "Dashboard", "Admin"],
    techStack: [
      "PHP",
      "Bootstrap",
      "MySQL",
      "Vanilla JS",
      "XAMPP",
      "jQuery",
      "Fomantic UI",
    ],
    images: [
      "/images/vetsync-0.jpg",
      "/images/vetsync-2.jpg",
      "/images/vetsync-3.jpg",
      "/images/vetsync-4.jpg",
      "/images/vetsync-5.jpg",
      { url: "/images/vetsync-6.jpg", fit: "contain" },
      { url: "/images/vetsync-7.jpg", fit: "contain" },
      { url: "/images/vetsync-8.jpg", fit: "contain" },
      { url: "/images/vetsync-9.jpg", fit: "contain" },
    ],
    github: "https://github.com/WUIX69/VetSync",
    variant: "standard",
    date: "February\u00A02025",
  },
  {
    id: "fileats",
    title: "FilEats",
    description:
      "Budget-friendly, web-based local recipe sharing platform dedicated to celebrating Filipino cuisine.",
    longDescription:
      "filEats connects home cooks and food enthusiasts who want to discover, share, and preserve traditional and modern Filipino recipes without expensive subscription barriers.",
    architecture:
      "Modular client-side web application organized by feature domains with role-based pages, module logic, and reusable UI components.",
    purpose:
      "To connect home cooks and food enthusiasts who want to discover, share, and preserve traditional and modern Filipino recipes.",
    tags: ["Full Stack", "Community", "Platform"],
    techStack: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Bootstrap",
      "XAMPP",
      "MySQL",
      "PHP",
    ],
    images: [
      { url: "/images/fileats-8.jpg", fit: "contain" },
      { url: "/images/fileats-2.jpg", fit: "contain" },
      { url: "/images/fileats-3.jpg", fit: "contain" },
      { url: "/images/fileats-4.jpg", fit: "contain" },
      { url: "/images/fileats-5.jpg", fit: "contain" },
      { url: "/images/fileats-6.jpg", fit: "contain" },
      { url: "/images/fileats-7.jpg", fit: "contain" },
      { url: "/images/fileats-8.jpg", fit: "contain" },
      { url: "/images/fileats-1.jpg", fit: "contain" },
    ],
    github: "https://github.com/WUIX69/FilEats",
    variant: "standard",
    date: "March\u00A02025",
  },
  {
    id: "juanwork-1",
    title: "JuanWork 1.0",
    description:
      "Philippine-based freelancing marketplace platform connecting clients with freelancers.",
    longDescription:
      "JuanWork serves as a comprehensive freelancing platform where clients can post projects, browse freelancers, manage proposals, and process payments securely.",
    architecture:
      "Monolithic PHP web application with a modular structure combining app modules, core classes, and view templates.",
    purpose:
      "To connect clients looking to hire talent with freelancers seeking work opportunities in the Philippines.",
    tags: ["Full Stack", "Marketplace", "Legacy"],
    techStack: [
      "PHP",
      "MySQL",
      "Bootstrap",
      "jQuery",
      "XAMPP",
      "Fomantic UI",
      "JavaScript",
    ],
    images: [
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
      "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=800&q=80",
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&q=80",
    ],
    github: "https://github.com/WUIX69/Juanwork-capstone",
    variant: "wide",
    date: "April\u00A02024",
  },
  {
    id: "juanwork-2",
    title: "JuanWork 2.0",
    description:
      "Modernized freelance marketplace platform with Next.js App Router and feature-sliced architecture.",
    longDescription:
      "A fully overhauled version of JuanWork built with Next.js and Tailwind CSS, supporting comprehensive features for project management, bidding, messaging, and payments.",
    architecture:
      "Feature-based modular architecture using Next.js App Router, combining shared components, feature modules, contexts, and hooks.",
    purpose:
      "To provide a scalable, fast, and modern freelancing platform for clients, freelancers, and admins.",
    tags: ["Full Stack", "Marketplace", "Next.js"],
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "React 19",
      "Shadcn UI",
      "PostgreSQL",
      "Drizzle ORM",
      "FastAPI",
    ],
    images: [
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
      "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&q=80",
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    ],
    github: "https://github.com/WUIX69/Juanwork-frontend",
    variant: "wide",
    date: "January\u00A02026",
  },
  {
    id: "portfolio",
    title: "Personal Portfolio",
    description:
      "Modern, responsive personal portfolio website showcasing professional projects and skills.",
    longDescription:
      "A Next.js 16 based portfolio website implementing Feature-Sliced Design principles, smooth animations with Motion, and dark/light theme switching.",
    architecture:
      "Feature-Sliced Design (FSD) inspired architecture with domain-specific modules, shared UI primitives, and centralized data definitions.",
    purpose:
      "To showcase professional projects, skills, and experience with clean architecture and intuitive UI.",
    tags: ["Frontend", "Portfolio", "Next.js"],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Motion", "Shadcn UI"],
    images: [
      "/images/portfolio-1.jpg",
      "/images/portfolio-2.jpg",
      "/images/portfolio-3.jpg",
      "/images/portfolio-4.jpg",
      { url: "/images/portfolio-5.jpg", fit: "contain" },
      { url: "/images/portfolio-6.jpg", fit: "contain" },
    ],
    github: "https://github.com/WUIX69/Portfolio",
    variant: "standard",
    date: "May\u00A02026",
  },
  {
    id: "ecommerce",
    title: "My Local Shop",
    description:
      "Frontend-only E-commerce website designed for a local retail business.",
    longDescription:
      "Provides a complete shopping experience with product browsing, cart management, checkout flow, and an admin dashboard for management via static HTML.",
    architecture:
      "Static HTML pages connected together with custom CSS to simulate a multi-page SPA feel.",
    purpose:
      "To demonstrate frontend E-commerce UI patterns and responsive web design principles using pure HTML/CSS.",
    tags: ["Frontend", "E-Commerce", "UI/UX"],
    techStack: ["HTML5", "CSS3", "Vanilla JS"],
    images: [
      "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&q=80",
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&q=80",
      "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=800&q=80",
    ],
    github: "https://github.com/WUIX69/E-Commerce",
    variant: "full",
    date: "May\u00A02023",
  },
]
