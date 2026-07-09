# Graph Report - portfolio  (2026-07-09)

## Corpus Check
- 61 files · ~12,120 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 210 nodes · 284 edges · 27 communities (16 shown, 11 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 2 edges (avg confidence: 0.72)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `21e4fec7`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- [[_COMMUNITY_Contact Section and Testimonials|Contact Section and Testimonials]]
- [[_COMMUNITY_Layout and Navigation|Layout and Navigation]]
- [[_COMMUNITY_Experience and Education Bento|Experience and Education Bento]]
- [[_COMMUNITY_Main Page Structure and Sections|Main Page Structure and Sections]]
- [[_COMMUNITY_Hero Landing Visuals|Hero Landing Visuals]]
- [[_COMMUNITY_Project Setup and Readme Docs|Project Setup and Readme Docs]]
- [[_COMMUNITY_Projects Showcase Components|Projects Showcase Components]]
- [[_COMMUNITY_Design System and Coding Guidelines|Design System and Coding Guidelines]]
- [[_COMMUNITY_Sentry Error Monitoring|Sentry Error Monitoring]]
- [[_COMMUNITY_Global Error Boundary|Global Error Boundary]]
- [[_COMMUNITY_Threads Interactive Canvas|Threads Interactive Canvas]]
- [[_COMMUNITY_Linter Configuration|Linter Configuration]]
- [[_COMMUNITY_PostCSS Style Configuration|PostCSS Style Configuration]]
- [[_COMMUNITY_Feature-Sliced Design (FSD)|Feature-Sliced Design (FSD)]]
- [[_COMMUNITY_Next.js 16.1|Next.js 16.1]]
- [[_COMMUNITY_Jonathan L. Portfolio Website|Jonathan L. Portfolio Website]]
- [[_COMMUNITY_React 19|React 19]]
- [[_COMMUNITY_Shadcn UI|Shadcn UI]]
- [[_COMMUNITY_Tailwind CSS v4|Tailwind CSS v4]]
- [[_COMMUNITY_Turbopack|Turbopack]]
- [[_COMMUNITY_Community 23|Community 23]]
- [[_COMMUNITY_Community 24|Community 24]]
- [[_COMMUNITY_Community 25|Community 25]]
- [[_COMMUNITY_Community 26|Community 26]]

## God Nodes (most connected - your core abstractions)
1. `Project` - 6 edges
2. `Design System Master File` - 6 edges
3. `Container()` - 5 edges
4. `SectionGradient()` - 5 edges
5. `AnimatedItem()` - 5 edges
6. `IconWrapper()` - 5 edges
7. `Global Rules` - 5 edges
8. `Component Specs` - 5 edges
9. `PNPM Workspace Configuration` - 5 edges
10. `EducationEntry` - 4 edges

## Surprising Connections (you probably didn't know these)
- `PNPM Workspace Configuration` --references--> `pnpm`  [INFERRED]
  pnpm-workspace.yaml → README.md
- `ProjectCardProps` --references--> `Project`  [EXTRACTED]
  src/features/projects/components/project-card.tsx → src/types/projects.ts
- `ProjectDialogProps` --references--> `Project`  [EXTRACTED]
  src/features/projects/components/project-dialog.tsx → src/types/projects.ts
- `EducationCardProps` --references--> `EducationEntry`  [EXTRACTED]
  src/features/experience/components/education-card.tsx → src/types/experience.ts
- `TopNavBar()` --calls--> `useMobileMenu()`  [EXTRACTED]
  src/components/layout/top-nav-bar.tsx → src/context/mobile-menu.tsx

## Import Cycles
- None detected.

## Communities (27 total, 11 thin omitted)

### Community 0 - "Contact Section and Testimonials"
Cohesion: 0.09
Nodes (20): inter, jetbrainsMono, metadata, plusJakartaSans, viewport, Footer(), ThemeToggle(), TopNavBar() (+12 more)

### Community 1 - "Layout and Navigation"
Cohesion: 0.15
Nodes (11): ContactSection, ExperienceSection, GallerySection, ProjectsSection, HERO_DATA, HeroSection(), containerVariants, HeroTextContent() (+3 more)

### Community 2 - "Experience and Education Bento"
Cohesion: 0.31
Nodes (7): ICON_MAP, ProjectCard(), ProjectCardProps, ProjectDialog(), ProjectDialogProps, Project, ProjectImage

### Community 3 - "Main Page Structure and Sections"
Cohesion: 0.12
Nodes (18): Container(), ContainerProps, SectionGradient(), SectionGradientProps, AnimatedItem(), AnimatedItemProps, MotionViewport(), MotionViewportProps (+10 more)

### Community 4 - "Hero Landing Visuals"
Cohesion: 0.15
Nodes (11): ButtonWithLoading(), ButtonWithLoadingProps, IconWrapper(), IconWrapperProps, ContactForm(), ContactInfoCard(), ContactInfoCardProps, ICON_MAP (+3 more)

### Community 5 - "Project Setup and Readme Docs"
Cohesion: 0.29
Nodes (6): 📂 Architecture & Structure, 🛠️ Getting Started, Installation, Jonathan L. — Portfolio Website, Prerequisites, 🚀 Tech Stack

### Community 6 - "Projects Showcase Components"
Cohesion: 0.12
Nodes (16): Additional Forbidden Patterns, Anti-Patterns (Do NOT Use), Buttons, Cards, Color Palette, Component Specs, Design System Master File, Global Rules (+8 more)

### Community 7 - "Design System and Coding Guidelines"
Cohesion: 0.40
Nodes (4): architecture, conventions, graphify, repo

### Community 9 - "Global Error Boundary"
Cohesion: 0.22
Nodes (9): HERO_TECH_ICONS, HeroFloatingIcon(), HeroFloatingIconProps, iconMap, HeroFloatingIcons(), HeroStatusOverlay(), HeroVisualCard(), HeroData (+1 more)

### Community 10 - "Threads Interactive Canvas"
Cohesion: 0.33
Nodes (6): PNPM Workspace Configuration, MSW (Mock Service Worker), Sentry CLI, Sharp, UNRS Resolver, pnpm

### Community 24 - "Community 24"
Cohesion: 0.38
Nodes (3): itemVariants, GALLERY_DATA, GalleryItem

### Community 25 - "Community 25"
Cohesion: 0.27
Nodes (7): EducationCardProps, EDUCATION_DATA, EXPERIENCE_DATA, SKILLS_DATA, EducationEntry, ExperienceEntry, SkillCategory

### Community 26 - "Community 26"
Cohesion: 0.24
Nodes (7): CONTACT_DATA, hoverStyles, ICON_MAP, SocialLinksCard(), SocialLinksCardProps, ContactData, SocialLink

## Knowledge Gaps
- **73 isolated node(s):** `EXPERIENCE_DATA`, `EDUCATION_DATA`, `SKILLS_DATA`, `itemVariants`, `eslintConfig` (+68 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **11 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `HERO_DATA` connect `Layout and Navigation` to `Contact Section and Testimonials`, `Global Error Boundary`?**
  _High betweenness centrality (0.065) - this node is a cross-community bridge._
- **Why does `Container()` connect `Main Page Structure and Sections` to `Layout and Navigation`?**
  _High betweenness centrality (0.050) - this node is a cross-community bridge._
- **Why does `SectionGradient()` connect `Main Page Structure and Sections` to `Layout and Navigation`?**
  _High betweenness centrality (0.050) - this node is a cross-community bridge._
- **What connects `EXPERIENCE_DATA`, `EDUCATION_DATA`, `SKILLS_DATA` to the rest of the system?**
  _74 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Contact Section and Testimonials` be split into smaller, more focused modules?**
  _Cohesion score 0.08901515151515152 - nodes in this community are weakly interconnected._
- **Should `Main Page Structure and Sections` be split into smaller, more focused modules?**
  _Cohesion score 0.11827956989247312 - nodes in this community are weakly interconnected._
- **Should `Hero Landing Visuals` be split into smaller, more focused modules?**
  _Cohesion score 0.14705882352941177 - nodes in this community are weakly interconnected._