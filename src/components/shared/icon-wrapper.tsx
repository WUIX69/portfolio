import * as React from "react"
import { type LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface IconWrapperProps {
  icon:
    | React.ComponentType<{ className?: string; size?: number; color?: string }>
    | LucideIcon
  variant?: "primary" | "secondary" | "outline" | "ghost" | "muted"
  size?: "sm" | "md" | "lg" | "xl"
  containerClassName?: string
  iconClassName?: string
  "aria-hidden"?: boolean
}

const IconWrapper = ({
  icon: Icon,
  variant = "primary",
  size = "md",
  containerClassName,
  iconClassName,
  "aria-hidden": ariaHidden = true,
}: IconWrapperProps) => {
  const variants = {
    primary: "bg-primary/10 text-primary",
    secondary: "bg-secondary text-secondary-foreground",
    outline: "border border-border bg-background text-foreground",
    ghost: "bg-transparent text-foreground",
    muted: "bg-muted text-muted-foreground",
  }

  const sizes = {
    sm: "size-8",
    md: "size-10",
    lg: "size-12",
    xl: "size-16",
  }

  const iconSizes = {
    sm: "size-4",
    md: "size-5",
    lg: "size-6",
    xl: "size-8",
  }

  return (
    <div
      className={cn(
        "flex items-center justify-center rounded-lg transition-colors",
        variants[variant],
        sizes[size],
        containerClassName
      )}
    >
      <Icon
        className={cn(iconSizes[size], iconClassName)}
        aria-hidden={ariaHidden}
      />
    </div>
  )
}

export { IconWrapper }
