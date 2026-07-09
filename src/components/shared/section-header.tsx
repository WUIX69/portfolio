import { cn } from "@/lib/utils"

interface SectionHeaderProps {
  title: string
  subtitle?: string
  align?: "left" | "center" | "right"
  titleClassName?: string
  subtitleClassName?: string
  className?: string
}

const ALIGNMENT = {
  left: "text-left items-start",
  center: "text-center items-center",
  right: "text-right items-end",
}

const SectionHeader = ({
  title,
  subtitle,
  align = "left",
  className,
  titleClassName,
  subtitleClassName,
}: SectionHeaderProps) => {
  return (
    <div className={cn("mb-12 flex flex-col", ALIGNMENT[align], className)}>
      <h2
        className={cn(
          "mb-4 font-sans text-4xl font-extrabold tracking-tight text-foreground md:text-5xl lg:text-6xl",
          titleClassName
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "max-w-2xl leading-relaxed text-muted-foreground md:text-lg",
            subtitleClassName
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}

export { SectionHeader }
