"use client"

import { type ComponentType } from "react"
import { m } from "motion/react"
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiDocker,
  SiJavascript,
  SiPython,
  SiTailwindcss,
  SiPostgresql,
  SiPhp,
  SiMysql,
  SiGithub,
  SiFastapi,
  SiGit,
  SiJquery,
} from "react-icons/si"
import { cn } from "@/lib/utils"
import { type HeroTechIcon } from "@/types/hero"

const iconMap: Record<
  string,
  ComponentType<{ size: number; color: string }>
> = {
  Nextdotjs: SiNextdotjs,
  React: SiReact,
  Typescript: SiTypescript,
  Docker: SiDocker,
  Javascript: SiJavascript,
  Python: SiPython,
  Tailwindcss: SiTailwindcss,
  Postgresql: SiPostgresql,
  Php: SiPhp,
  Mysql: SiMysql,
  Github: SiGithub,
  Fastapi: SiFastapi,
  Git: SiGit,
  Jquery: SiJquery,
}

interface HeroFloatingIconProps {
  techIcon: HeroTechIcon
}

const HeroFloatingIcon = ({ techIcon }: HeroFloatingIconProps) => {
  const IconComponent = iconMap[techIcon.slug]

  if (!IconComponent) return null

  return (
    <m.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{
        opacity: 1,
        scale: 1,
      }}
      viewport={{ once: true, margin: "100px" }}
      transition={{
        opacity: { duration: 0.2, delay: techIcon.floatDelay },
        scale: {
          type: "spring",
          stiffness: 400,
          damping: 20,
          delay: techIcon.floatDelay,
        },
      }}
      className={cn(
        "absolute z-20 m-0 flex size-12 items-center justify-center rounded-2xl p-0",
        "cursor-pointer",
        "transition-all duration-300 hover:scale-115",
        "animate-float",
        techIcon.position
      )}
      style={{
        ["--float-duration" as string]: `${techIcon.floatDuration}s`,
        ["--float-delay" as string]: `${techIcon.floatDelay}s`,
      }}
      aria-label={techIcon.label}
      title={techIcon.label}
      role="img"
    >
      <IconComponent size={27} color={`#${techIcon.brandHex}`} />
    </m.div>
  )
}

export { HeroFloatingIcon }
