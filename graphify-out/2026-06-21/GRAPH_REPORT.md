# Graph Report - portfolio  (2026-06-21)

## Corpus Check
- 68 files · ~43,172 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 324 nodes · 553 edges · 19 communities (15 shown, 4 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 5 edges (avg confidence: 0.91)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `e6dfe75e`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- [[_COMMUNITY_Shared UI and Navigation Components|Shared UI and Navigation Components]]
- [[_COMMUNITY_Project Display Components|Project Display Components]]
- [[_COMMUNITY_Main Page and Layout Structure|Main Page and Layout Structure]]
- [[_COMMUNITY_Package Configuration and Build Scripts|Package Configuration and Build Scripts]]
- [[_COMMUNITY_Experience and Skills Bento Layout|Experience and Skills Bento Layout]]
- [[_COMMUNITY_Global Layout, Providers, and Menu Context|Global Layout, Providers, and Menu Context]]
- [[_COMMUNITY_UI Registry and Styling Configuration|UI Registry and Styling Configuration]]
- [[_COMMUNITY_Hero Section Components and Data|Hero Section Components and Data]]
- [[_COMMUNITY_TypeScript Compiler Options|TypeScript Compiler Options]]
- [[_COMMUNITY_Contact Page Features and Map|Contact Page Features and Map]]
- [[_COMMUNITY_Application Production Dependencies|Application Production Dependencies]]
- [[_COMMUNITY_Project Documentation and Workspace Tools|Project Documentation and Workspace Tools]]
- [[_COMMUNITY_Sentry Monitoring and Instrumentation|Sentry Monitoring and Instrumentation]]
- [[_COMMUNITY_ESLint Configuration|ESLint Configuration]]
- [[_COMMUNITY_Next.js Application Configuration|Next.js Application Configuration]]
- [[_COMMUNITY_PostCSS Configuration|PostCSS Configuration]]

## God Nodes (most connected - your core abstractions)
1. `cn()` - 69 edges
2. `compilerOptions` - 17 edges
3. `Button()` - 10 edges
4. `scripts` - 9 edges
5. `Jonathan L. Portfolio Website` - 9 edges
6. `tailwind` - 6 edges
7. `aliases` - 6 edges
8. `Container()` - 6 edges
9. `SectionGradient()` - 6 edges
10. `IconWrapper()` - 6 edges

## Surprising Connections (you probably didn't know these)
- `graphify` --references--> `Jonathan L. Portfolio Website`  [INFERRED]
  AGENTS.md → README.md
- `Lighthouse Performance Report` --references--> `Jonathan L. Portfolio Website`  [INFERRED]
  lighthouse-report.html → README.md
- `PNPM Workspace Configuration` --references--> `pnpm`  [INFERRED]
  pnpm-workspace.yaml → README.md
- `RootLayout()` --calls--> `cn()`  [EXTRACTED]
  src/app/layout.tsx → src/lib/utils.ts
- `DialogOverlay()` --calls--> `cn()`  [EXTRACTED]
  src/components/ui/dialog.tsx → src/lib/utils.ts

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Portfolio Website Tech Stack** — readme_portfolio_website, readme_nextjs, readme_react, readme_tailwindcss, readme_shadcn_ui [EXTRACTED 1.00]
- **Allowed Build Scripts** — pnpm_workspace_config, pnpm_workspace_sentry_cli, pnpm_workspace_msw, pnpm_workspace_sharp, pnpm_workspace_unrs_resolver [EXTRACTED 1.00]

## Communities (19 total, 4 thin omitted)

### Community 0 - "Shared UI and Navigation Components"
Cohesion: 0.16
Nodes (14): ThemeToggle(), ButtonWithLoadingProps, GlimmerButton(), GlimmerButtonProps, Button(), buttonVariants, Sheet(), SheetContent() (+6 more)

### Community 1 - "Project Display Components"
Cohesion: 0.11
Nodes (28): ICON_MAP, ProjectCardProps, ProjectDialog(), ProjectDialogProps, Project, ProjectImage, Carousel(), CarouselApi (+20 more)

### Community 2 - "Main Page and Layout Structure"
Cohesion: 0.29
Nodes (6): 📂 Architecture & Structure, 🛠️ Getting Started, Installation, Jonathan L. — Portfolio Website, Prerequisites, 🚀 Tech Stack

### Community 3 - "Package Configuration and Build Scripts"
Cohesion: 0.07
Nodes (26): devDependencies, eslint, eslint-config-next, @eslint/eslintrc, postcss, prettier, prettier-plugin-tailwindcss, tailwindcss (+18 more)

### Community 4 - "Experience and Skills Bento Layout"
Cohesion: 0.10
Nodes (25): EducationCard(), EducationCardProps, ExperienceCard(), ExperienceCardProps, itemVariants, ProjectCard(), itemVariants, ICON_MAP (+17 more)

### Community 5 - "Global Layout, Providers, and Menu Context"
Cohesion: 0.10
Nodes (17): inter, jetbrainsMono, metadata, plusJakartaSans, RootLayout(), viewport, MobileMenuContext, MobileMenuContextValue (+9 more)

### Community 6 - "UI Registry and Styling Configuration"
Cohesion: 0.08
Nodes (23): aliases, components, hooks, lib, ui, utils, iconLibrary, menuAccent (+15 more)

### Community 7 - "Hero Section Components and Data"
Cohesion: 0.09
Nodes (20): ContactSection, ExperienceSection, ProjectsSection, HeroFloatingIcon(), HeroFloatingIconProps, iconMap, HeroFloatingIcons(), HeroSection() (+12 more)

### Community 8 - "TypeScript Compiler Options"
Cohesion: 0.10
Nodes (20): compilerOptions, allowJs, baseUrl, esModuleInterop, incremental, isolatedModules, jsx, lib (+12 more)

### Community 9 - "Contact Page Features and Map"
Cohesion: 0.09
Nodes (30): ContactForm(), ContactInfoCard(), ContactInfoCardProps, itemVariants, LocationMap(), LocationMapProps, ICON_MAP, SocialLinksCard() (+22 more)

### Community 10 - "Application Production Dependencies"
Cohesion: 0.11
Nodes (19): dependencies, class-variance-authority, clsx, embla-carousel-autoplay, embla-carousel-react, @icons-pack/react-simple-icons, lucide-react, motion (+11 more)

### Community 11 - "Project Documentation and Workspace Tools"
Cohesion: 0.14
Nodes (15): graphify, Lighthouse Performance Report, PNPM Workspace Configuration, MSW (Mock Service Worker), Sentry CLI, Sharp, UNRS Resolver, Feature-Sliced Design (FSD) (+7 more)

## Knowledge Gaps
- **130 isolated node(s):** `$schema`, `style`, `rsc`, `tsx`, `config` (+125 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **4 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `cn()` connect `Contact Page Features and Map` to `Shared UI and Navigation Components`, `Project Display Components`, `Experience and Skills Bento Layout`, `Global Layout, Providers, and Menu Context`, `Hero Section Components and Data`?**
  _High betweenness centrality (0.193) - this node is a cross-community bridge._
- **Why does `dependencies` connect `Application Production Dependencies` to `Package Configuration and Build Scripts`?**
  _High betweenness centrality (0.012) - this node is a cross-community bridge._
- **Why does `Container()` connect `Contact Page Features and Map` to `Experience and Skills Bento Layout`, `Hero Section Components and Data`?**
  _High betweenness centrality (0.012) - this node is a cross-community bridge._
- **What connects `$schema`, `style`, `rsc` to the rest of the system?**
  _131 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Project Display Components` be split into smaller, more focused modules?**
  _Cohesion score 0.1051693404634581 - nodes in this community are weakly interconnected._
- **Should `Package Configuration and Build Scripts` be split into smaller, more focused modules?**
  _Cohesion score 0.07407407407407407 - nodes in this community are weakly interconnected._
- **Should `Experience and Skills Bento Layout` be split into smaller, more focused modules?**
  _Cohesion score 0.0953058321479374 - nodes in this community are weakly interconnected._