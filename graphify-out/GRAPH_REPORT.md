# Graph Report - portfolio  (2026-07-09)

## Corpus Check
- 61 files · ~12,120 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 210 nodes · 312 edges · 24 communities (14 shown, 10 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS · INFERRED: 1 edges (avg confidence: 0.95)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `07b775f5`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- [[_COMMUNITY_Contact Section and Testimonials|Contact Section and Testimonials]]
- [[_COMMUNITY_Layout and Navigation|Layout and Navigation]]
- [[_COMMUNITY_Experience and Education Bento|Experience and Education Bento]]
- [[_COMMUNITY_Main Page Structure and Sections|Main Page Structure and Sections]]
- [[_COMMUNITY_Hero Landing Visuals|Hero Landing Visuals]]
- [[_COMMUNITY_Project Setup and Readme Docs|Project Setup and Readme Docs]]
- [[_COMMUNITY_Design System and Coding Guidelines|Design System and Coding Guidelines]]
- [[_COMMUNITY_Sentry Error Monitoring|Sentry Error Monitoring]]
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

## God Nodes (most connected - your core abstractions)
1. `Container()` - 6 edges
2. `SectionGradient()` - 6 edges
3. `AnimatedItem()` - 6 edges
4. `Project` - 6 edges
5. `Design System Master File` - 6 edges
6. `IconWrapper()` - 5 edges
7. `MotionViewport()` - 5 edges
8. `SectionHeader()` - 5 edges
9. `SkillCategory` - 5 edges
10. `Global Rules` - 5 edges

## Surprising Connections (you probably didn't know these)
- `PNPM Workspace Configuration` --references--> `pnpm`  [INFERRED]
  pnpm-workspace.yaml → README.md
- `SkillCardProps` --references--> `SkillCategory`  [EXTRACTED]
  src/features/experience/components/skills-bento.tsx → src/types/experience.ts
- `SkillsBentoProps` --references--> `SkillCategory`  [EXTRACTED]
  src/features/experience/components/skills-bento.tsx → src/types/experience.ts
- `ProjectCardProps` --references--> `Project`  [EXTRACTED]
  src/features/projects/components/project-card.tsx → src/types/projects.ts
- `ProjectDialogProps` --references--> `Project`  [EXTRACTED]
  src/features/projects/components/project-dialog.tsx → src/types/projects.ts

## Import Cycles
- None detected.

## Communities (24 total, 10 thin omitted)

### Community 0 - "Contact Section and Testimonials"
Cohesion: 0.09
Nodes (20): inter, jetbrainsMono, metadata, plusJakartaSans, viewport, MobileMenuContext, MobileMenuContextValue, MobileMenuProvider() (+12 more)

### Community 1 - "Layout and Navigation"
Cohesion: 0.11
Nodes (17): ContactForm(), ContactInfoCard(), ContactInfoCardProps, itemVariants, LocationMap(), LocationMapProps, hoverStyles, ICON_MAP (+9 more)

### Community 2 - "Experience and Education Bento"
Cohesion: 0.15
Nodes (13): HeroFloatingIcon(), HeroFloatingIconProps, iconMap, HeroFloatingIcons(), HeroStatusOverlay(), containerVariants, HeroTextContent(), itemVariants (+5 more)

### Community 3 - "Main Page Structure and Sections"
Cohesion: 0.12
Nodes (16): Additional Forbidden Patterns, Anti-Patterns (Do NOT Use), Buttons, Cards, Color Palette, Component Specs, Design System Master File, Global Rules (+8 more)

### Community 4 - "Hero Landing Visuals"
Cohesion: 0.23
Nodes (9): ICON_MAP, ProjectCard(), ProjectCardProps, ProjectDialog(), ProjectDialogProps, itemVariants, PROJECTS_DATA, Project (+1 more)

### Community 5 - "Project Setup and Readme Docs"
Cohesion: 0.29
Nodes (6): 📂 Architecture & Structure, 🛠️ Getting Started, Installation, Jonathan L. — Portfolio Website, Prerequisites, 🚀 Tech Stack

### Community 7 - "Design System and Coding Guidelines"
Cohesion: 0.40
Nodes (4): architecture, conventions, graphify, repo

### Community 10 - "Threads Interactive Canvas"
Cohesion: 0.33
Nodes (6): PNPM Workspace Configuration, MSW (Mock Service Worker), Sentry CLI, Sharp, UNRS Resolver, pnpm

### Community 23 - "Community 23"
Cohesion: 0.15
Nodes (11): ContactSection, ExperienceSection, GallerySection, ProjectsSection, HeroSection(), HeroThreadsBackground(), Threads, Container() (+3 more)

### Community 24 - "Community 24"
Cohesion: 0.19
Nodes (9): GalleryCard(), GalleryCardProps, itemVariants, GALLERY_DATA, MotionViewport(), MotionViewportProps, SectionHeader(), SectionHeaderProps (+1 more)

### Community 25 - "Community 25"
Cohesion: 0.14
Nodes (17): EducationCard(), EducationCardProps, ExperienceCard(), ExperienceCardProps, itemVariants, ICON_MAP, SkillCardProps, SkillsBento() (+9 more)

## Knowledge Gaps
- **66 isolated node(s):** `eslintConfig`, `config`, `plusJakartaSans`, `inter`, `jetbrainsMono` (+61 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **10 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `HERO_DATA` connect `Experience and Education Bento` to `Contact Section and Testimonials`?**
  _High betweenness centrality (0.081) - this node is a cross-community bridge._
- **Why does `Container()` connect `Community 23` to `Community 24`, `Layout and Navigation`, `Hero Landing Visuals`, `Community 25`?**
  _High betweenness centrality (0.069) - this node is a cross-community bridge._
- **Why does `SectionGradient()` connect `Community 23` to `Community 24`, `Layout and Navigation`, `Hero Landing Visuals`, `Community 25`?**
  _High betweenness centrality (0.069) - this node is a cross-community bridge._
- **What connects `eslintConfig`, `config`, `plusJakartaSans` to the rest of the system?**
  _67 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Contact Section and Testimonials` be split into smaller, more focused modules?**
  _Cohesion score 0.08901515151515152 - nodes in this community are weakly interconnected._
- **Should `Layout and Navigation` be split into smaller, more focused modules?**
  _Cohesion score 0.1111111111111111 - nodes in this community are weakly interconnected._
- **Should `Main Page Structure and Sections` be split into smaller, more focused modules?**
  _Cohesion score 0.11764705882352941 - nodes in this community are weakly interconnected._