import { type Project } from "@/types/projects"

export const PROJECTS_DATA: Project[] = [
  {
    id: "enterprise-dashboard",
    title: "Enterprise Dashboard Overhaul",
    description:
      "Led the migration of a legacy monolithic dashboard to a scalable micro-frontend architecture using React and Node.js. Reduced load times by 40% and improved developer velocity across 3 distinct teams.",
    tags: ["System Migration", "React"],
    techStack: ["TypeScript", "GraphQL", "AWS"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA8fK3aC9-2N58zsdDplNsXtNyZBsmykiTlghk4rM6nq-GmGM17HTDToKIpeI_PZRCegvMuve6zkJJRLK4cJyirYs7JFq8wzfDGDNO42m6uF1dGzVgGVWc_s-ELx-gmBW3BZM9nIBlsiaf5IGim-VDCguYYx3emViJjlF-q2mw0AYufXpBq-qEwEh_REU0kdIaYzHm1dz6F2dOrtP0wf7wX6cNuDd1zVbYgVIuWh4aAVPZ7-D5RhHNdmNL0psgGI-AQplJKQAUvgqI1",
    variant: "wide",
    link: "#",
  },
  {
    id: "real-time-sync",
    title: "Real-time Sync Engine",
    description:
      "Developed a robust WebSocket-based synchronization engine for a collaborative design tool, handling thousands of concurrent connections with sub-50ms latency.",
    tags: ["API Design"],
    techStack: ["Node.js", "Redis", "Docker"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDnon_9gL2pNj6JsRaj2v7ua0tXj9LWUxFFqKLnJnoX0y_JeSAz7Sz6qTraG_HhgUb7heTX3kwBB8I1DHap5a9JQ8USrMHUySO1cpOHI0MFsy7HxiDZoKLh3SRPnlsaKbUZ9QhfUZ7j-aYj22hP3xLdFoSQp89hj77cimpevOYlB1Mt7iKIMEbNGwreEp_RUOzdHExG1OwvmGeLa0KGc9iAflx0rkbHcRVrRxL1EA_1RNEnRWt8PaLg6gv8fZwV1sqnUdrDeVmJq_P6",
    variant: "standard",
    github: "#",
  },
  {
    id: "ci-cd-pipeline",
    title: "Automated CI/CD Pipeline",
    description:
      "Architected a zero-downtime deployment pipeline reducing release cycles from weekly to multiple times a day. Implemented extensive automated testing and rollback protocols.",
    tags: ["Infrastructure"],
    techStack: ["GitHub Actions", "Terraform"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAxxGJ-OnBaJwv1hjY0DEd_xDwKFpON3_JVzXQIgYzePLnxZqhiKUsIeGmw-gECGZD2rZJ_E7h7_NmqUSSxvvRxzuqPRFdBrD4xl571_BpH08j96QqycrLTmPQsdo-z0OIoKW4kNaXVnlC6Y99Th02fNmOYExhoNOnQ9ZlM02TSfLDzvYqfl4nFSmQru34sFGf5CqjdOg_36_-6rZ2q7-6KkYDVhdsIZX4MVAKXmg48w0xaiH_Oa7CROoVuvYvqHV9eet7we080fDOX",
    variant: "standard",
    link: "#",
  },
  {
    id: "fintech-wallet",
    title: "FinTech Wallet Application",
    description:
      "Designed and developed a secure, intuitive mobile-first web application for managing cryptocurrency portfolios. Integrated complex third-party APIs for real-time pricing and secure transaction signing.",
    tags: ["Full Stack App"],
    techStack: ["Next.js", "Tailwind CSS", "PostgreSQL"],
    icon: "Wallet",
    variant: "wide",
    link: "#",
  },
]
