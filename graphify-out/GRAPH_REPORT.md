# Graph Report - portfolio  (2026-06-22)

## Corpus Check
- 57 files · ~41,384 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 183 nodes · 284 edges · 15 communities (12 shown, 3 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 5 edges (avg confidence: 0.91)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `5747fae7`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- [[_COMMUNITY_Shared UI and Navigation Components|Shared UI and Navigation Components]]
- [[_COMMUNITY_Project Display Components|Project Display Components]]
- [[_COMMUNITY_Main Page and Layout Structure|Main Page and Layout Structure]]
- [[_COMMUNITY_Package Configuration and Build Scripts|Package Configuration and Build Scripts]]
- [[_COMMUNITY_Experience and Skills Bento Layout|Experience and Skills Bento Layout]]
- [[_COMMUNITY_Global Layout, Providers, and Menu Context|Global Layout, Providers, and Menu Context]]
- [[_COMMUNITY_Hero Section Components and Data|Hero Section Components and Data]]
- [[_COMMUNITY_Contact Page Features and Map|Contact Page Features and Map]]
- [[_COMMUNITY_Project Documentation and Workspace Tools|Project Documentation and Workspace Tools]]
- [[_COMMUNITY_Sentry Monitoring and Instrumentation|Sentry Monitoring and Instrumentation]]
- [[_COMMUNITY_ESLint Configuration|ESLint Configuration]]
- [[_COMMUNITY_PostCSS Configuration|PostCSS Configuration]]

## God Nodes (most connected - your core abstractions)
1. `Jonathan L. Portfolio Website` - 9 edges
2. `Project` - 6 edges
3. `Container()` - 5 edges
4. `SectionGradient()` - 5 edges
5. `AnimatedItem()` - 5 edges
6. `IconWrapper()` - 5 edges
7. `SkillCategory` - 5 edges
8. `PNPM Workspace Configuration` - 5 edges
9. `MotionViewport()` - 4 edges
10. `SectionHeader()` - 4 edges

## Surprising Connections (you probably didn't know these)
- `graphify` --references--> `Jonathan L. Portfolio Website`  [INFERRED]
  AGENTS.md → README.md
- `Lighthouse Performance Report` --references--> `Jonathan L. Portfolio Website`  [INFERRED]
  lighthouse-report.html → README.md
- `PNPM Workspace Configuration` --references--> `pnpm`  [INFERRED]
  pnpm-workspace.yaml → README.md
- `SkillCardProps` --references--> `SkillCategory`  [EXTRACTED]
  src/features/experience/components/skills-bento.tsx → src/types/experience.ts
- `SkillsBentoProps` --references--> `SkillCategory`  [EXTRACTED]
  src/features/experience/components/skills-bento.tsx → src/types/experience.ts

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Portfolio Website Tech Stack** — readme_portfolio_website, readme_nextjs, readme_react, readme_tailwindcss, readme_shadcn_ui [EXTRACTED 1.00]
- **Allowed Build Scripts** — pnpm_workspace_config, pnpm_workspace_sentry_cli, pnpm_workspace_msw, pnpm_workspace_sharp, pnpm_workspace_unrs_resolver [EXTRACTED 1.00]

## Communities (15 total, 3 thin omitted)

### Community 0 - "Shared UI and Navigation Components"
Cohesion: 0.24
Nodes (7): ContactForm(), ContactInfoCard(), ContactInfoCardProps, ButtonWithLoading(), ButtonWithLoadingProps, IconWrapper(), IconWrapperProps

### Community 1 - "Project Display Components"
Cohesion: 0.33
Nodes (7): ICON_MAP, ProjectCard(), ProjectCardProps, ProjectDialog(), ProjectDialogProps, Project, ProjectImage

### Community 2 - "Main Page and Layout Structure"
Cohesion: 0.29
Nodes (6): 📂 Architecture & Structure, 🛠️ Getting Started, Installation, Jonathan L. — Portfolio Website, Prerequisites, 🚀 Tech Stack

### Community 3 - "Package Configuration and Build Scripts"
Cohesion: 0.13
Nodes (15): itemVariants, LocationMap(), LocationMapProps, itemVariants, PROJECTS_DATA, Container(), ContainerProps, SectionGradient() (+7 more)

### Community 4 - "Experience and Skills Bento Layout"
Cohesion: 0.16
Nodes (15): EducationCard(), EducationCardProps, ExperienceCard(), ExperienceCardProps, itemVariants, ICON_MAP, SkillCardProps, SkillsBento() (+7 more)

### Community 5 - "Global Layout, Providers, and Menu Context"
Cohesion: 0.09
Nodes (19): inter, jetbrainsMono, metadata, plusJakartaSans, viewport, MobileMenuContext, MobileMenuContextValue, MobileMenuProvider() (+11 more)

### Community 7 - "Hero Section Components and Data"
Cohesion: 0.10
Nodes (19): ContactSection, ExperienceSection, ProjectsSection, HeroFloatingIcon(), HeroFloatingIconProps, iconMap, HeroFloatingIcons(), HeroSection() (+11 more)

### Community 9 - "Contact Page Features and Map"
Cohesion: 0.22
Nodes (9): ICON_MAP, SocialLinksCard(), SocialLinksCardProps, TestimonialBanner(), TestimonialBannerProps, CONTACT_DATA, ContactData, SocialLink (+1 more)

### Community 11 - "Project Documentation and Workspace Tools"
Cohesion: 0.12
Nodes (18): architecture, conventions, graphify, repo, Lighthouse Performance Report, PNPM Workspace Configuration, MSW (Mock Service Worker), Sentry CLI (+10 more)

## Knowledge Gaps
- **46 isolated node(s):** `eslintConfig`, `config`, `plusJakartaSans`, `inter`, `jetbrainsMono` (+41 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **3 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `HERO_DATA` connect `Hero Section Components and Data` to `Global Layout, Providers, and Menu Context`?**
  _High betweenness centrality (0.092) - this node is a cross-community bridge._
- **Why does `Container()` connect `Package Configuration and Build Scripts` to `Experience and Skills Bento Layout`, `Hero Section Components and Data`?**
  _High betweenness centrality (0.077) - this node is a cross-community bridge._
- **Why does `SectionGradient()` connect `Package Configuration and Build Scripts` to `Experience and Skills Bento Layout`, `Hero Section Components and Data`?**
  _High betweenness centrality (0.077) - this node is a cross-community bridge._
- **Are the 2 inferred relationships involving `Jonathan L. Portfolio Website` (e.g. with `graphify` and `Lighthouse Performance Report`) actually correct?**
  _`Jonathan L. Portfolio Website` has 2 INFERRED edges - model-reasoned connections that need verification._
- **What connects `eslintConfig`, `config`, `plusJakartaSans` to the rest of the system?**
  _47 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Package Configuration and Build Scripts` be split into smaller, more focused modules?**
  _Cohesion score 0.12615384615384614 - nodes in this community are weakly interconnected._
- **Should `Global Layout, Providers, and Menu Context` be split into smaller, more focused modules?**
  _Cohesion score 0.09462365591397849 - nodes in this community are weakly interconnected._