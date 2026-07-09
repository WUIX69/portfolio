import * as React from "react"
import { Code, type LucideIcon } from "lucide-react"
import { SiGithub, SiX, SiInstagram } from "react-icons/si"
import { IconWrapper } from "@/components/shared/icon-wrapper"
import { cn } from "@/lib/utils"

import { type SocialLink } from "@/types/contact"

const LinkedInIcon = ({
  size = 24,
  className,
  ...props
}: React.SVGProps<SVGSVGElement> & { size?: number }) => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="currentColor"
    className={className}
    {...props}
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

const ICON_MAP: Record<
  string,
  | React.ComponentType<{ className?: string; size?: number; color?: string }>
  | LucideIcon
> = {
  Github: SiGithub,
  Linkedin: LinkedInIcon,
  Twitter: SiX,
  Instagram: SiInstagram,
}

const hoverStyles: Record<
  string,
  { bg: string; border: string; text: string }
> = {
  github: {
    bg: "group-hover:bg-[#181717]/10 dark:group-hover:bg-white/10",
    border: "group-hover:border-[#181717]/40 dark:group-hover:border-white/40",
    text: "group-hover:text-[#181717] dark:group-hover:text-white",
  },
  linkedin: {
    bg: "group-hover:bg-[#0A66C2]/10",
    border: "group-hover:border-[#0A66C2]/40",
    text: "group-hover:text-[#0A66C2]",
  },
  twitter: {
    bg: "group-hover:bg-[#000000]/10 dark:group-hover:bg-white/10",
    border: "group-hover:border-[#000000]/40 dark:group-hover:border-white/40",
    text: "group-hover:text-[#000000] dark:group-hover:text-white",
  },
  instagram: {
    bg: "group-hover:bg-[#E4405F]/10",
    border: "group-hover:border-[#E4405F]/40",
    text: "group-hover:text-[#E4405F]",
  },
}

interface SocialLinksCardProps {
  socials: SocialLink[]
  className?: string
}

const SocialLinksCard = ({ socials, className }: SocialLinksCardProps) => {
  return (
    <div
      className={cn(
        "flex h-full flex-col justify-between rounded-2xl border border-border bg-muted/30 p-8 shadow-lg shadow-primary/5 md:p-10",
        className
      )}
    >
      <h3 className="mb-6 font-sans text-xs font-bold tracking-widest text-primary uppercase">
        Network
      </h3>
      <div className="grid grid-cols-2 gap-4">
        {socials.map((social) => {
          const Icon = ICON_MAP[social.iconName] || Code
          const style = hoverStyles[social.id] || {
            bg: "group-hover:bg-primary/10",
            border: "group-hover:border-primary/40",
            text: "group-hover:text-primary",
          }
          return (
            <a
              key={social.id}
              href={social.href}
              className="group flex cursor-pointer items-center gap-3 transition-all"
            >
              <IconWrapper
                icon={Icon}
                variant="outline"
                size="md"
                containerClassName={cn(
                  "rounded-full transition-all duration-300",
                  style.bg,
                  style.text,
                  style.border
                )}
              />
              <span
                className={cn(
                  "font-sans text-sm font-semibold text-foreground transition-colors duration-300",
                  style.text
                )}
              >
                {social.label}
              </span>
            </a>
          )
        })}
      </div>
      <div className="mt-8 border-t border-border pt-6">
        <p className="font-sans text-xs leading-relaxed text-muted-foreground">
          Active daily for code reviews and tech discussions.
        </p>
      </div>
    </div>
  )
}

export { SocialLinksCard }
