import {
  CodeXml,
  Link,
  MessageCircle,
  Camera,
  type LucideIcon,
} from "lucide-react"
import { IconWrapper } from "@/components/shared/icon-wrapper"
import { cn } from "@/lib/utils"

import { type SocialLink } from "@/types/contact"

const ICON_MAP: Record<string, LucideIcon> = {
  Github: CodeXml,
  Linkedin: Link,
  Twitter: MessageCircle,
  Instagram: Camera,
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
          const Icon = ICON_MAP[social.iconName]
          return (
            <a
              key={social.id}
              href={social.href}
              className="group flex items-center gap-3 transition-all"
            >
              <IconWrapper
                icon={Icon || CodeXml}
                variant="outline"
                size="md"
                containerClassName="rounded-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary"
              />
              <span className="font-sans text-sm font-semibold text-foreground group-hover:text-primary">
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
