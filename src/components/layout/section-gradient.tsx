import { cn } from "@/lib/utils"

interface SectionGradientProps {
  side: "left" | "right"
  className?: string
}

const SectionGradient = ({ side, className }: SectionGradientProps) => {
  return (
    <div
      className={cn(
        "pointer-events-none absolute -z-20 h-[600px] w-[600px] rounded-full bg-primary/10 blur-[120px]",
        side === "left"
          ? "top-1/2 -left-80 -translate-y-1/2"
          : "top-1/2 -right-80 -translate-y-1/2",
        className
      )}
      aria-hidden="true"
    />
  )
}

export { SectionGradient }
