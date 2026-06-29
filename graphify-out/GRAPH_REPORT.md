# Graph Report - portfolio  (2026-06-30)

## Corpus Check
- 58 files · ~11,674 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 203 nodes · 313 edges · 15 communities (12 shown, 3 thin omitted)
- Extraction: 97% EXTRACTED · 3% INFERRED · 0% AMBIGUOUS · INFERRED: 9 edges (avg confidence: 0.86)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `fece57cf`
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
- [[_COMMUNITY_Linter Configuration|Linter Configuration]]
- [[_COMMUNITY_PostCSS Style Configuration|PostCSS Style Configuration]]
- [[_COMMUNITY_Architecture Design Docs|Architecture Design Docs]]

## God Nodes (most connected - your core abstractions)
1. `Jonathan L. Portfolio Website` - 11 edges
2. `conventions` - 7 edges
3. `Project` - 6 edges
4. `Design System Master File` - 6 edges
5. `Container()` - 5 edges
6. `SectionGradient()` - 5 edges
7. `AnimatedItem()` - 5 edges
8. `IconWrapper()` - 5 edges
9. `SkillCategory` - 5 edges
10. `Global Rules` - 5 edges

## Surprising Connections (you probably didn't know these)
- `conventions` --conceptually_related_to--> `Buttons`  [INFERRED]
  AGENTS.md → design-system/developer-portfolio/MASTER.md
- `conventions` --conceptually_related_to--> `Cards`  [INFERRED]
  AGENTS.md → design-system/developer-portfolio/MASTER.md
- `conventions` --conceptually_related_to--> `Color Palette`  [INFERRED]
  AGENTS.md → design-system/developer-portfolio/MASTER.md
- `conventions` --conceptually_related_to--> `Pre-Delivery Checklist`  [INFERRED]
  AGENTS.md → design-system/developer-portfolio/MASTER.md
- `conventions` --conceptually_related_to--> `Typography`  [INFERRED]
  AGENTS.md → design-system/developer-portfolio/MASTER.md

## Import Cycles
- None detected.

## Communities (15 total, 3 thin omitted)

### Community 0 - "Contact Section and Testimonials"
Cohesion: 0.18
Nodes (10): hoverStyles, ICON_MAP, SocialLinksCard(), SocialLinksCardProps, TestimonialBanner(), TestimonialBannerProps, CONTACT_DATA, ContactData (+2 more)

### Community 1 - "Layout and Navigation"
Cohesion: 0.09
Nodes (20): inter, jetbrainsMono, metadata, plusJakartaSans, viewport, MobileMenuContext, MobileMenuContextValue, MobileMenuProvider() (+12 more)

### Community 2 - "Experience and Education Bento"
Cohesion: 0.16
Nodes (15): EducationCard(), EducationCardProps, ExperienceCard(), ExperienceCardProps, itemVariants, ICON_MAP, SkillCardProps, SkillsBento() (+7 more)

### Community 3 - "Main Page Structure and Sections"
Cohesion: 0.12
Nodes (16): itemVariants, LocationMap(), LocationMapProps, ProjectCard(), itemVariants, PROJECTS_DATA, Container(), ContainerProps (+8 more)

### Community 4 - "Hero Landing Visuals"
Cohesion: 0.10
Nodes (19): ContactSection, ExperienceSection, ProjectsSection, HeroFloatingIcon(), HeroFloatingIconProps, iconMap, HeroFloatingIcons(), HeroSection() (+11 more)

### Community 5 - "Project Setup and Readme Docs"
Cohesion: 0.13
Nodes (19): PNPM Workspace Configuration, MSW (Mock Service Worker), Sentry CLI, Sharp, UNRS Resolver, 📂 Architecture & Structure, Feature-Sliced Design (FSD), 🛠️ Getting Started (+11 more)

### Community 6 - "Projects Showcase Components"
Cohesion: 0.39
Nodes (6): ICON_MAP, ProjectCardProps, ProjectDialog(), ProjectDialogProps, Project, ProjectImage

### Community 7 - "Design System and Coding Guidelines"
Cohesion: 0.11
Nodes (20): architecture, conventions, graphify, repo, Additional Forbidden Patterns, Anti-Patterns (Do NOT Use), Buttons, Cards (+12 more)

### Community 13 - "Architecture Design Docs"
Cohesion: 0.24
Nodes (7): ContactForm(), ContactInfoCard(), ContactInfoCardProps, ButtonWithLoading(), ButtonWithLoadingProps, IconWrapper(), IconWrapperProps

## Knowledge Gaps
- **50 isolated node(s):** `eslintConfig`, `config`, `plusJakartaSans`, `inter`, `jetbrainsMono` (+45 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **3 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `HERO_DATA` connect `Hero Landing Visuals` to `Layout and Navigation`?**
  _High betweenness centrality (0.081) - this node is a cross-community bridge._
- **Why does `Container()` connect `Main Page Structure and Sections` to `Experience and Education Bento`, `Hero Landing Visuals`?**
  _High betweenness centrality (0.066) - this node is a cross-community bridge._
- **Why does `SectionGradient()` connect `Main Page Structure and Sections` to `Experience and Education Bento`, `Hero Landing Visuals`?**
  _High betweenness centrality (0.066) - this node is a cross-community bridge._
- **Are the 6 inferred relationships involving `conventions` (e.g. with `Buttons` and `Cards`) actually correct?**
  _`conventions` has 6 INFERRED edges - model-reasoned connections that need verification._
- **What connects `eslintConfig`, `config`, `plusJakartaSans` to the rest of the system?**
  _51 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Layout and Navigation` be split into smaller, more focused modules?**
  _Cohesion score 0.08901515151515152 - nodes in this community are weakly interconnected._
- **Should `Main Page Structure and Sections` be split into smaller, more focused modules?**
  _Cohesion score 0.11965811965811966 - nodes in this community are weakly interconnected._