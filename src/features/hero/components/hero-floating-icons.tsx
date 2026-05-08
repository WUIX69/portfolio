"use client"

import { HERO_TECH_ICONS } from "@/data/portfolio"
import { HeroFloatingIcon } from "@/features/hero/components/hero-floating-icon"

const HeroFloatingIcons = () => (
  <>
    {HERO_TECH_ICONS.map((techIcon) => (
      <HeroFloatingIcon key={techIcon.slug} techIcon={techIcon} />
    ))}
  </>
)

export { HeroFloatingIcons }
