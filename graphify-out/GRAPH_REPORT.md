# Graph Report - .  (2026-06-30)

## Corpus Check
- 12 files · ~11,649 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 190 nodes · 273 edges · 17 communities (11 shown, 6 thin omitted)
- Extraction: 97% EXTRACTED · 3% INFERRED · 0% AMBIGUOUS · INFERRED: 9 edges (avg confidence: 0.86)
- Token cost: 500 input · 100 output

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
- [[_COMMUNITY_Linter Configuration|Linter Configuration]]
- [[_COMMUNITY_PostCSS Style Configuration|PostCSS Style Configuration]]
- [[_COMMUNITY_Architecture Design Docs|Architecture Design Docs]]
- [[_COMMUNITY_Graphify Documentation|Graphify Documentation]]
- [[_COMMUNITY_Repo Setup Guidelines|Repo Setup Guidelines]]

## God Nodes (most connected - your core abstractions)
1. `Jonathan L. Portfolio Website` - 11 edges
2. `Coding Conventions` - 6 edges
3. `Container()` - 5 edges
4. `SectionGradient()` - 5 edges
5. `AnimatedItem()` - 5 edges
6. `SkillCategory` - 5 edges
7. `Project` - 5 edges
8. `PNPM Workspace Configuration` - 5 edges
9. `IconWrapper()` - 5 edges
10. `MotionViewport()` - 4 edges

## Surprising Connections (you probably didn't know these)
- `PNPM Workspace Configuration` --references--> `pnpm`  [INFERRED]
  pnpm-workspace.yaml → README.md
- `Coding Conventions` --conceptually_related_to--> `Button Component Specs`  [INFERRED]
  AGENTS.md → design-system/developer-portfolio/MASTER.md
- `Coding Conventions` --conceptually_related_to--> `Card Component Specs`  [INFERRED]
  AGENTS.md → design-system/developer-portfolio/MASTER.md
- `Coding Conventions` --conceptually_related_to--> `Color Palette Design System`  [INFERRED]
  AGENTS.md → design-system/developer-portfolio/MASTER.md
- `Coding Conventions` --conceptually_related_to--> `Pre-Delivery Checklist`  [INFERRED]
  AGENTS.md → design-system/developer-portfolio/MASTER.md

## Import Cycles
- None detected.

## Communities (17 total, 6 thin omitted)

### Community 0 - "Contact Section and Testimonials"
Cohesion: 0.09
Nodes (22): ContactForm(), ContactInfoCard(), ContactInfoCardProps, itemVariants, LocationMap(), LocationMapProps, hoverStyles, ICON_MAP (+14 more)

### Community 1 - "Layout and Navigation"
Cohesion: 0.07
Nodes (20): inter, jetbrainsMono, metadata, plusJakartaSans, viewport, MobileMenuContext, MobileMenuContextValue, MobileMenuProvider() (+12 more)

### Community 2 - "Experience and Education Bento"
Cohesion: 0.14
Nodes (17): EducationCard(), EducationCardProps, ExperienceCard(), ExperienceCardProps, itemVariants, ICON_MAP, SkillCardProps, SkillsBento() (+9 more)

### Community 3 - "Main Page Structure and Sections"
Cohesion: 0.12
Nodes (14): ContactSection, ExperienceSection, ProjectsSection, HeroSection(), HeroThreadsBackground(), Threads, itemVariants, PROJECTS_DATA (+6 more)

### Community 4 - "Hero Landing Visuals"
Cohesion: 0.15
Nodes (13): HeroFloatingIcon(), HeroFloatingIconProps, iconMap, HeroFloatingIcons(), HeroStatusOverlay(), containerVariants, HeroTextContent(), itemVariants (+5 more)

### Community 5 - "Project Setup and Readme Docs"
Cohesion: 0.12
Nodes (18): PNPM Workspace Configuration, MSW (Mock Service Worker), Sentry CLI, Sharp, UNRS Resolver, 📂 Architecture & Structure, Feature-Sliced Design (FSD), 🛠️ Getting Started (+10 more)

### Community 6 - "Projects Showcase Components"
Cohesion: 0.27
Nodes (7): ICON_MAP, ProjectCard(), ProjectCardProps, ProjectDialog(), ProjectDialogProps, Project, ProjectImage

### Community 7 - "Design System and Coding Guidelines"
Cohesion: 0.29
Nodes (7): Coding Conventions, Button Component Specs, Card Component Specs, Color Palette Design System, Pre-Delivery Checklist, Style Guidelines, Typography Guidelines

## Knowledge Gaps
- **54 isolated node(s):** `eslintConfig`, `config`, `ExperienceSection`, `ProjectsSection`, `ContactSection` (+49 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **6 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `HERO_DATA` connect `Hero Landing Visuals` to `Layout and Navigation`?**
  _High betweenness centrality (0.093) - this node is a cross-community bridge._
- **Why does `Container()` connect `Main Page Structure and Sections` to `Contact Section and Testimonials`, `Experience and Education Bento`?**
  _High betweenness centrality (0.076) - this node is a cross-community bridge._
- **Why does `SectionGradient()` connect `Main Page Structure and Sections` to `Contact Section and Testimonials`, `Experience and Education Bento`?**
  _High betweenness centrality (0.076) - this node is a cross-community bridge._
- **Are the 6 inferred relationships involving `Coding Conventions` (e.g. with `Button Component Specs` and `Card Component Specs`) actually correct?**
  _`Coding Conventions` has 6 INFERRED edges - model-reasoned connections that need verification._
- **What connects `eslintConfig`, `config`, `ExperienceSection` to the rest of the system?**
  _55 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Contact Section and Testimonials` be split into smaller, more focused modules?**
  _Cohesion score 0.08571428571428572 - nodes in this community are weakly interconnected._
- **Should `Layout and Navigation` be split into smaller, more focused modules?**
  _Cohesion score 0.07386363636363637 - nodes in this community are weakly interconnected._